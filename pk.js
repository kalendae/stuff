javascript: (function() {

  window.flag_history = [];
  var auto_chop = false;
  var auto_pick = false;
  var auto_build = false;
  var auto_hunt = false;
  var chopTimer = 9;
  var pickTimer = 9;
  var buildTimer = 0;
  var huntTimer = 0;
  var uTimer = 0;

  function do_action(action_name) {
    require(["state", "net"], function(state, net) {
      var c_id = state.getYouLocationElement().elementId;
      net.post({
        fullName: "DoAction1",
        actionId: c_id,
        command: action_name
      });
    });
  }

  function do_build(creation_name) {
    require(["net"], function(net) {
      net.post({
        fullName: "Create1",
        makeId: "build",
        creationTypeName: creation_name,
        quantity: 1
      });
    });
  }

  function element_has_action(e, action) {
    var has_action = false;
    if ($.grep(e.actions,
      function(n, i) {
        return (n.command == action);
      }).length > 0) {
      has_action = true;
    }
    return has_action;
  }

  function element_has_info(e, info) {
    var has_info = false;
    if ($.grep(e.displayLayers,
      function(n, i) {
        return (n.info == info);
      }).length > 0) {
      has_info = true;
    }
    return has_info;
  }

  function is_aggressive() {
    return ($("#interface-status-new #interface-picture img[src='http://content.parallelkingdom.com/status_aggressive.png']").length > 0);
  }

  function is_moving() {
    moving = false;
    require(["map_utils", "state"], function(m, state) {
      var y = state.getYouLocationElement();
      $.each(m._movingMarkers, function(k, v) {
        if (v.marker && v.marker.getElement && v.marker.getElement().elementId == y.elementId) {
          moving = true;
          return;
        }
      });
    });
    return moving;
  }

  function is_busy() {
    var busy = false;
    require(["state"], function(state) {
      busy = state.getYouLocationElement().timerTimeLeft > 0;
    });
    return busy;
  }

  function get_element_action(e, action) {
    var target_action = $.grep(e.actions, function(n, i) {
      return (n.command == action);
    })[0];
    return target_action;
  }

  function sort_elements_by_distance(m, you, es) {
    var my_pos = m.getMarkerForElement(you).getPosition();
    es.sort(function(a, b) {
      var a_pos = m.getMarkerForElement(a).getPosition();
      var b_pos = m.getMarkerForElement(b).getPosition();
      var a_dis = google.maps.geometry.spherical.computeDistanceBetween(my_pos, a_pos);
      var b_dis = google.maps.geometry.spherical.computeDistanceBetween(my_pos, b_pos);
      if (a_dis < b_dis) {
        return -1;
      } else {
        return 1;
      }
    });
    return es;
  }

  function id_for_element(e) {
    return parseInt(e.elementId.split("2500000000")[1].replace(/\D/g, ''), 10);
  }

  function element_exist_in_element_array(e, arr) {
    var exist = false;
    $.each(arr, function(i, v) {
      if (v != undefined && e.elementId == v.elementId) {
        exist = true;
        return true;
      }
    });
    return exist;
  }

  function pickup_closest_item(info) {
    var picked_up = false;
    require(["map_utils", "state"], function(m, state) {
      target_items = [];
      $.each(m.markerElementMap, function(k, v) {
        if (element_has_info(v.getElement(), info)) {
          target_items.push(v.getElement());
        }
      });
      if (target_items.length > 0) {
        target_items = sort_elements_by_distance(m, state.getYouLocationElement(), target_items);
        var target_action = get_element_action(target_items[0], 'PICKUP_ALL');
        if (!target_action) {
          target_action = get_element_action(target_items[0], 'PICKUP');
        }
        $(document).trigger("action.element.doAction", [target_items[0], target_action]);
        picked_up = true;
      }
    });
    return picked_up;
  }

  function monsters_in_vicinity(meters) {
    var exist = false;
    require(["map_utils", "state"], function(m, state) {
      var my_pos = m.getMarkerForElement(state.getYouLocationElement()).getPosition();
      $.each(m.markerElementMap, function(k, v) {
        if (element_has_action(v.getElement(), 'ATTACK') && !v._isCharacter) {
          var dist = google.maps.geometry.spherical.computeDistanceBetween(my_pos, v._position);
          if (dist < meters) {
            exist = true;
            return;
          }
        }
      });
    });
    return exist;
  }

  function attack_closest_monster() {
    var attacked = false;
    require(["map_utils", "state"], function(m, state) {
      target_mobs = [];
      $.each(m.markerElementMap, function(k, v) {
        if (element_has_action(v.getElement(), "ATTACK") && !v._isCharacter) {
          target_mobs.push(v.getElement());
        }
      });
      if (target_mobs.length > 0) {
        target_mobs = sort_elements_by_distance(m, state.getYouLocationElement(), target_mobs);
        var target_action = get_element_action(target_mobs[0], 'ATTACK');
        $(document).trigger("action.element.doAction", [target_mobs[0], target_action]);
        attacked = true;
      }
    });
    return attacked;
  }

  function check_for_monsters(name_array) {
    var exist = false;
    require(["map_utils"], function(m) {
      $.each(name_array, function(i, n) {
        $.each(m.markerElementMap, function(k, v) {
          if ($.grep(v.getElement().displayLayers,
            function(x, j) {
              return (x.info.indexOf(n) != -1)
            }).length > 0) {
            exist = true;
            return;
          }
          if (exist) {
            return;
          }
        });
      });
    });
    return exist;
  }

  function do_attack_immediate_monsters() {
    var attacked = false;
    require(["map_utils", "state"], function(m, state) {
      window.immediate_monsters = [];
      var my_pos = m.getMarkerForElement(state.getYouLocationElement()).getPosition();
      $.each(m.markerElementMap, function(k, v) {
        if (element_has_action(v.getElement(), 'ATTACK') && !v._isCharacter) {
          var dist = google.maps.geometry.spherical.computeDistanceBetween(my_pos, v._position);
          if (dist < 50) {
            window.immediate_monsters.push(v.getElement());
          }
        }
      });
      if (window.immediate_monsters.length > 0) {
        var target_action = $.grep(window.immediate_monsters[0].actions, function(n, i) {
          return (n.command == 'ATTACK');
        })[0];
        $(document).trigger("action.element.doAction", [window.immediate_monsters[0], target_action]);
        attacked = true;
      }

    });
    return attacked;
  }

  function do_random_jump() {
    var jumped = false;
    require(["map_utils", "state", "net"], function(m, state, net) {
      window.my_flags = [];
      window.current_flag = [];
      window.next_flags = [];
      var center = new google.maps.LatLng(m._centerLocation.lat, m._centerLocation.lng);
      $.each(m.markerElementMap, function(k, v) {
        if ($.grep(v.getElement().actions,
          function(n, i) {
            return (n.command == 'WARP_TO_BUILDING');
          }).length > 0) {
          if (v.getElement().name == "kalendae" || v.getElement().name == "Intricate") {
            var dist = google.maps.geometry.spherical.computeDistanceBetween(center, v._position);
            if (dist < 10) {
              window.current_flag.push(v.getElement());
            } else {
              window.my_flags.push(v.getElement());
            }
          }
        }
      });

      $.each(window.my_flags, function(i, v) {
        if (!element_exist_in_element_array(v, window.flag_history)) {
          window.next_flags.push(v);
        }
      });

      if (window.next_flags.length > 0) {
        var target = window.next_flags[Math.floor(Math.random() * window.next_flags.length)];
        if (window.current_flag.length > 0) {
          window.flag_history.push(window.current_flag[0]);
        }
        var target_action = $.grep(target.actions, function(n, i) {
          return (n.command == 'WARP_TO_BUILDING');
        })[0];
        $(document).trigger("action.element.doAction", [target, target_action]);
        jumped = true;
      }


      return jumped;

    });

  }

  function do_jump_to_next_flag() {
    var jumped = false;
    require(["map_utils", "state", "net"], function(m, state, net) {
      window.my_flags = [];
      window.current_flag = [];
      window.next_flags = [];
      var center = new google.maps.LatLng(m._centerLocation.lat, m._centerLocation.lng);
      $.each(m.markerElementMap, function(k, v) {
        if ($.grep(v.getElement().actions,
          function(n, i) {
            return (n.command == 'WARP_TO_BUILDING');
          }).length > 0) {
          if (v.getElement().name == "kalendae" || v.getElement().name == "Intricate") {
            var dist = google.maps.geometry.spherical.computeDistanceBetween(center, v._position);
            if (dist < 10) {
              window.current_flag.push(v.getElement());
            } else {
              window.my_flags.push(v.getElement());
            }
          }
        }
      });
      $.each(window.my_flags, function(i, v) {
        if (id_for_element(v) > id_for_element(window.current_flag[0])) {
          window.next_flags.push(v);
        }
      });
      if (window.next_flags.length > 0) {
        window.next_flags.sort(function(a, b) {
          if (id_for_element(a) < id_for_element(b)) {
            return -1;
          } else {
            return 1;
          }
        });
        var target_action = $.grep(window.next_flags[0].actions, function(n, i) {
          return (n.command == 'WARP_TO_BUILDING');
        })[0];
        $(document).trigger("action.element.doAction", [window.next_flags[0], target_action]);
        jumped = true;
        if (auto_build) {
          buildTimer = 11;
        }
      }
    });
    return jumped;
  }

  function do_auto_hunt() {
    if (is_busy() || is_moving()) {
      return;
    }
    if (pickup_closest_item('backpack')) {
      return;
    }
    if (check_for_monsters(['siren','yanglong'])) {
      huntTimer = -6;
      do_jump_to_next_flag();
      return;
    }
    if (!is_aggressive()) {
      var attacked = attack_closest_monster();
      huntTimer = -16;
      if (!attacked) {
        huntTimer = -6;
        do_jump_to_next_flag();
      }
      return
    }
    if (!monsters_in_vicinity(125)) {
      var attacked = attack_closest_monster();
      huntTimer = -16;
      return
    }
  }


  function do_auto_build() {
    require(["map_utils", "state", "net"], function(m, state, net) {
      var jumped = do_jump_to_next_flag();
      if (!jumped) {
        var center = new google.maps.LatLng(m._centerLocation.lat, m._centerLocation.lng);
        var dest = new google.maps.geometry.spherical.computeOffset(center, 550, 225);
        var my_pos = m.getMarkerForElement(state.getYouLocationElement()).getPosition();
        var dis = google.maps.geometry.spherical.computeDistanceBetween(my_pos, dest);
        if (dis > 15) {
          do_move_to(550, 225);
        } else {
          var attacked = do_attack_immediate_monsters();
          if (!attacked) {
            do_build("BUOY");
          }
        }
      }
    });
  }

  function do_auto_pick() {
    if (is_busy() || is_moving()) {
      return;
    }
    var picked = pick_or_tend_closest_tree();
    if (!picked) {
      pickTimer = -8;
      do_jump_to_next_flag();
    }
  }

  function do_auto_chop() {
    if (is_busy() || is_moving()) {
      return;
    }
    var chopped = act_on_closest_tree();
    if (!chopped) {
      chopTimer = -8;
      do_jump_to_next_flag();
    }
  }



  function pick_or_tend_closest_tree() {
    var picked = false;
    if ($('#interface-timer').css('display') != 'block') {
      require(["map_utils", "state", "net"], function(m, state, net) {
        window.pick_or_tend_trees = [];
        $.each(m.markerElementMap, function(k, v) {
          if ($.grep(v.getElement().actions,
            function(n, i) {
              return (n.command == 'PICK' || n.command == 'WATER' || n.command == 'COLLECT_SNOW');
            }).length > 0) {
            window.pick_or_tend_trees.push(v.getElement());
          }
        });
        if (window.pick_or_tend_trees.length > 0) {
          var closest_tree;
          var target_action;
          var my_pos = m.getMarkerForElement(state.getYouLocationElement()).getPosition();
          window.pick_or_tend_trees.sort(function(a, b) {
            var a_pos = m.getMarkerForElement(a).getPosition();
            var b_pos = m.getMarkerForElement(b).getPosition();
            var a_dis = google.maps.geometry.spherical.computeDistanceBetween(my_pos, a_pos);
            var b_dis = google.maps.geometry.spherical.computeDistanceBetween(my_pos, b_pos);
            if (a_dis < b_dis) {
              return -1;
            } else {
              return 1;
            }
          });
          closest_tree = window.pick_or_tend_trees[0];
          if ($.grep(closest_tree.actions,
            function(n, i) {
              return (n.command == 'PICK');
            }).length > 0) {
            target_action = $.grep(closest_tree.actions, function(n, i) {
              return (n.command == 'PICK');
            })[0];
          }
          else if ($.grep(closest_tree.actions,
            function(n, i) {
              return (n.command == 'WATER');
            }).length > 0) {
            target_action = $.grep(closest_tree.actions, function(n, i) {
              return (n.command == 'WATER');
            })[0];
          }
          else if ($.grep(closest_tree.actions,
            function(n, i) {
              return (n.command == 'COLLECT_SNOW');
            }).length > 0) {
            target_action = $.grep(closest_tree.actions, function(n, i) {
              return (n.command == 'COLLECT_SNOW');
            })[0];
          }
          else {
            picked = false;
            return false;
          }
          $(document).trigger("action.element.doAction", [closest_tree, target_action]);
          picked = true;
        }
      });
    }
    return picked;
  }

  function act_on_closest_tree() {
    var chopped = false;
    if ($('#interface-timer').css('display') != 'block') {
      require(["map_utils", "state", "net"], function(m, state, net) {
        var mourning_trees = [];
        $.each(m.markerElementMap, function(k, v) {
          if (v.getElement().displayString == "Mourning Tree" || v.getElement().displayString == "Sick Mourning Tree Sapling") {
            mourning_trees.push(v.getElement());
          }
        });
        window.trees = mourning_trees;
        if (mourning_trees.length > 0) {
          var closest_tree;
          var my_pos = m.getMarkerForElement(state.getYouLocationElement()).getPosition();
          mourning_trees.sort(function(a, b) {
            var a_pos = m.getMarkerForElement(a).getPosition();
            var b_pos = m.getMarkerForElement(b).getPosition();
            var a_dis = google.maps.geometry.spherical.computeDistanceBetween(my_pos, a_pos);
            var b_dis = google.maps.geometry.spherical.computeDistanceBetween(my_pos, b_pos);
            if (a_dis < b_dis) {
              return -1;
            } else {
              return 1;
            }
          });
          closest_tree = mourning_trees[0];
          var target_action;
          if ($.grep(closest_tree.actions,
            function(n, i) {
              return (n.command == 'PICK');
            }).length > 0) {
            target_action = $.grep(closest_tree.actions, function(n, i) {
              return (n.command == 'PICK');
            })[0];
          }
          else if ($.grep(closest_tree.actions,
            function(n, i) {
              return (n.command == 'COLLECT_SNOW');
            }).length > 0) {
            target_action = $.grep(closest_tree.actions, function(n, i) {
              return (n.command == 'COLLECT_SNOW');
            })[0];
          }
          else if ($.grep(closest_tree.actions,
            function(n, i) {
              return (n.command == 'CHOP_DOWN');
            }).length > 0) {
            target_action = $.grep(closest_tree.actions, function(n, i) {
              return (n.command == 'CHOP_DOWN');
            })[0];
          }
          else if ($.grep(closest_tree.actions,
            function(n, i) {
              return (n.command == 'WATER');
            }).length > 0) {
            target_action = $.grep(closest_tree.actions, function(n, i) {
              return (n.command == 'WATER');
            })[0];
          }
          else {
            chopped = false;
            return;
          }
          chopped = true;
          $(document).trigger("action.element.doAction", [closest_tree, target_action]);
        }
      });

    } else {
      chopped = true;
    }
    return chopped;
  }


  function update_status() {
    if ($('#sstatus').length < 1) {
      $("body").append("<div id=\"sstatus\" style=\"position:absolute;top:38px;right:15px;z-index:99999;background-color:white;padding:3px;opacity:.5;font-family:courier;font-size:9px;\">default</div>");
    }
    var str = "U: " + uTimer + " ";
    if (auto_chop) {
      str += "<span style=\"color:green;font-weight:bold;\">chop:" + chopTimer + "</span>";
    } else {
      str += "<span style=\"color:#999;\">chop:" + chopTimer + "</span>"
    }
    if (auto_pick) {
      str += "<span style=\"color:green;font-weight:bold;\">pick:" + pickTimer + "</span>"
    } else {
      str += "<span style=\"color:#999;\">pick:" + pickTimer + "</span>"
    }
    if (auto_build) {
      str += "<span style=\"color:green;font-weight:bold;\">build:" + buildTimer + "</span>"
    } else {
      str += "<span style=\"color:#999;\">build:" + buildTimer + "</span>"
    }
    if (auto_hunt) {
      str += "<span style=\"color:green;font-weight:bold;\">hunt:" + huntTimer + "</span>"
    } else {
      str += "<span style=\"color:#999;\">hunt:" + huntTimer + "</span>"
    }
    $('#sstatus').html(str);
  }


  function auto_do_tick() {
    setTimeout(auto_do_tick, 500);
    update_status();
    uTimer += 1;
    check_health();
    if (auto_chop) {
      chopTimer += 1;
      if (chopTimer > 0) {
        chopTimer = 0;
        do_auto_chop();
      }
    }
    if (auto_pick) {
      pickTimer += 1;
      if (pickTimer > 0) {
        pickTimer = 0;
        do_auto_pick();
      }
    }
    if (auto_build) {
      buildTimer += 1;
      if (buildTimer > 15) {
        buildTimer = 0;
        do_auto_build();
      }
    }
    if (auto_hunt) {
      huntTimer += 1;
      if (huntTimer > 1) {
        huntTimer = 0;
        do_auto_hunt();
      }
    }
  }

  var noHealTimer = 0;

  function check_health() {
    noHealTimer -= 1;
    if (noHealTimer < 1) {
      noHealTimer = 0;
      require(["state"], function(state) {
        if (state.getYouLocationElement().hp < 80) {
          do_action('HEAL');
          noHealTimer = 20 * 2;
        }
      });
    }
  }

  function do_move_to(meters, degrees) {
    require(["map_utils", "state", "net"], function(m, state, net) {
      var center = new google.maps.LatLng(m._centerLocation.lat, m._centerLocation.lng);
      var dest = new google.maps.geometry.spherical.computeOffset(center, meters, degrees);
      var you = state.getYouLocationElement();
      var you_marker = m.getMarkerForElement(you);
      you.movementSpeed > 0 && (m.startMoveMarker(you_marker, dest, function() {
      }),require(["game"], function(game) {
        game.movePlayerAnalog(you, dest, m._currentTargetName)
      }));
    });
  }


  function do_mouse_hover_action(action_name) {
    require(["map_utils", "utils", "net"], function(m, u, net) {
      var x = window.mouseXPos,
        y = window.mouseYPos;
      var box = [x - 15, y - 15, x + 15, y + 15];
      var markers = u.UI.findIntersectorsFromBoundsOffset(box, ".map-display-layer-overlay");
      var viable_targets = [];
      if (markers.length > 0) {
        $.each(markers, function(i, d) {
          var element = m.markerElementMap[$(d).data("elementId")];
          if (element) {
            if ($.grep(element.getElement().actions,
              function(n, i) {
                return (n.command == action_name);
              }).length > 0) {
              viable_targets.push(element.getElement());
            }
          }
        });
      }
      if (viable_targets.length > 0) {
        net.post({
          fullName: "DoAction1",
          actionId: viable_targets[0].elementId,
          command: action_name
        });
      }
    });
  }

  function getMousePosition() {
    $(document).one("mousemove", function(event) {
      window.mouseXPos = event.clientX;
      window.mouseYPos = event.clientY;
      setTimeout(getMousePosition, 100);
    });
  }

  getMousePosition();

  $(document).bind('keydown', function(e) {
    var keyPress = e.which;
    if (e.shiftKey == true) {
      keyPress += 1000;
    }
    if (e.ctrlKey == true) {
      keyPress += 10000;
    }
    if (keyPress == 112) {
      do_action('HEAL');
    }
    if (keyPress == 113) {
      do_action('TAUNT');
    }
    if (keyPress == 1120) {
      auto_chop = !auto_chop;
    }
    if (keyPress == 120) {
      auto_pick = !auto_pick;
    }
    if (keyPress == 11120) {
      uTimer = 0;
      auto_do_tick();
    }
    if (keyPress == 220) {
      do_action('PLANT_TREES');
    }
    if (keyPress == 1070) {
      do_build("FLAG");
    }
    if (keyPress == 1066) {
      do_build("BUOY");
    }
    if (keyPress == 1067) {
      do_mouse_hover_action("SHIELD_CHARGE");
    }
    if (keyPress == 100) {
      do_move_to(meters = 550, degrees = 270);
    }
    if (keyPress == 104) {
      do_move_to(meters = 550, degrees = 0);
    }
    if (keyPress == 102) {
      do_move_to(meters = 550, degrees = 90);
    }
    if (keyPress == 98) {
      do_move_to(meters = 550, degrees = 180);
    }
    if (keyPress == 101) {
      do_move_to(meters = 0, degrees = 0);
    }
    if (keyPress == 1065) {
      do_attack_immediate_monsters();
    }
    if (keyPress == 96) {
      do_jump_to_next_flag();
    }
    if (keyPress == 19) {
      auto_build = !auto_build;
      buildTimer = 999;
    }
    if (keyPress == 36) {
      auto_hunt = !auto_hunt;
      huntTimer = 999;
    }
  });
  auto_do_tick();
})();