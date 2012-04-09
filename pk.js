javascript: (function() {
  /* todos:
   2) time check, how long have been at this circle if longer than 6 minutes, reset and jump
   3) auto send gold when over certain limit
   features:
   combine chats
   switch equipped items
   */

  window.do_not_hunt_list = ["skeleton","monk","larva","vampire","vampire_blood_hungry"];
  window.flag_history = [];
  var auto_chop = false;
  var auto_pick = false;
  var auto_build = false;
  var auto_hunt = false;
  var auto_jump = false;
  var auto_garden = false;
  var auto_explore = false;
  var auto_leather = false;
  var auto_heal = true;
  var chopTimer = 9;
  var pickTimer = 9;
  var buildTimer = 0;
  var huntTimer = 0;
  var gardenTimer = 0;
  var exploreTimer = 0;
  var leatherTimer = 0;
  var total_distance_togo = 0;
  var uTimer = 0;
  var equipment_indices = {
    "MAKE_RANGED": 999,
    "MAKE_ATTACK": 999,
    "MAKE_BODY": 999,
    "MAKE_OFF_HAND": 999
  };
  var override_alone_stop = false;

  function do_self_action(action_name) {
    require(["state", "net"], function(state, net) {
      var c_id = state.getYouLocationElement().elementId;
      net.post({
        fullName: "DoAction1",
        actionId: c_id,
        command: action_name
      });
    });
  }

  function do_action_to(action_name, ele) {
    require(["net"], function(net) {
      net.post({
        fullName: "DoAction1",
        actionId: ele.elementId,
        command: action_name
      });
    });
  }

  function do_message_action(receiver, msg) {
    require(["net"], function(net) {
      net.post({
        fullName: "PostNewTopic1",
        body: msg,
        receiverName: receiver
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

  function do_estate_pet_action(action_name) {
    require(["state", "net"], function(state, net) {
      var dog_estates = [];
      $.each(state.data.estates.elements, function(i, n) {
        if (n.elementId.indexOf("Pet") != -1) {
          dog_estates.push(n);
          return;
        }
      });
      if (dog_estates.length > 0) {
        var dog_id = dog_estates[0].elementId;
        net.post({
          fullName: "DoAction1",
          actionId: dog_id,
          command: action_name
        });
      }
    });
  }

  function player_count() {
    var count = 0;
    require(["map_utils"], function(m) {
      $.each(m.markerElementMap, function(k, v) {
        if (v._isCharacter) {
          count += 1;
        }
      });
    });
    return count;
  }

  function stop_if_not_alone() {
    var stopped = false;
    if (player_count() > 1 && !override_alone_stop) {
      auto_chop = false;
      auto_pick = false;
      auto_build = false;
      auto_hunt = false;
      auto_leather = false;
      auto_jump = false;
      auto_garden = false;
      auto_explore = false;
      stopped = true;
    }
    return stopped;
  }

  function item_with_display_string_including(str) {
    require(["state"], function(state) {

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

  function element_has_any_info(e, infos) {
    var has_info = false;
    $.each(infos, function(i, info) {
      if (element_has_info(e, info)) {
        has_info = true;
        return;
      }
    });
    return has_info;
  }

  function is_siren_songed() {
    return ($("img[src='http://content.parallelkingdom.com/buff_siren_song.png']").length > 0);
  }

  function is_aggressive() {
    return ($("#interface-status-new #interface-picture img[src='http://content.parallelkingdom.com/status_aggressive.png']").length > 0);
  }

  function is_moving() {
    var moving = false;
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

  function is_taunt_available() {
    var avail = true;
    require(["state"], function(state) {
      var action = get_element_action(state.getYouLocationElement(), 'TAUNT');
      if (action) {
        if (action.displayString.indexOf('Cooldown') != -1) {
          avail = false;
        }
      } else {
        avail = false;
      }
    });
    return avail;
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
    return parseInt(e.elementId.split("00000000")[1].replace(/\D/g, ''), 10);
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

  function current_health_percent() {
    var p = 100;
    require(["state"], function(state) {
      p = Math.floor(state.getYouLocationElement().hp * 100.0 / state.getYouLocationElement().hpTotal);
    });
    return p;
  }

  function repair_gear_if_needed(limit) {
    var repaired = false;
    require(["map_utils", "state","net"], function(m, state, net) {
      $.each(state.data.items, function(i, n) {
        if (element_has_action(n, "REPAIR_FOR_GOLD") && (n.displayString.indexOf("Equipped") != -1) && parseInt(n.displayString.match(/\s(\d+)%/)[1]) < limit) {
          do_action_to("REPAIR_FOR_GOLD", n);
          repaired = true;
          return;
        }
      });
    });
    return repaired;
  }

  function do_item_action(action) {
    require(["map_utils", "state","net"], function(m, state, net) {
      $.each(state.data.items, function(i, n) {
        if (element_has_action(n, action)) {
          do_action_to(action, n);
          return;
        }
      });
    });
  }

  function unequip_all_rings() {
    require(["map_utils", "state","net"], function(m, state, net) {
      $.each(state.data.items, function(i, n) {
        if (element_has_action(n, "CHECK_RING_BONUSES") && element_has_action(n, "UNEQUIP")) {
          do_action_to("UNEQUIP", n);
        }
      });
    });
  }

  function equip_ring_pair(r1, r2) {
    require(["map_utils", "state","net"], function(m, state, net) {
      var rings = [];
      $.each(state.data.items, function(i, n) {
        if (element_has_action(n, "CHECK_RING_BONUSES")) {
          rings.push(n);
        }
      });
      do_action_to("MAKE_FINGER",rings[r1]);
      do_action_to("MAKE_FINGER",rings[r2]);
    });
  }

  function pickup_closest_item_except(infos) {
    var picked_up = false;
    require(["map_utils", "state"], function(m, state) {
      target_items = [];
      $.each(m.markerElementMap, function(k, v) {
        if (element_has_action(v.getElement(), "PICKUP") || element_has_action(v.getElement(), "PICKUP_ALL")) {
          if (!element_has_any_info(v.getElement(), infos)) {
            target_items.push(v.getElement());
          }
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
        if (element_has_action(v.getElement(), 'ATTACK') && (v.getElement().elementId.indexOf("Mon") != -1) && !element_has_any_info(v.getElement(), window.do_not_hunt_list)) {
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

  function golems_in_circle() {
    var exist = false;
    require(["map_utils"], function(m) {
      $.each(m.markerElementMap, function(k, v) {
        if (element_has_info(v.getElement(), "golem_axeman")) {
          exist = true;
          return
        }
      });
    });
    return exist;
  }

  function golems_not_close_or_hurt() {
    var exist = false;
    require(["map_utils", "state"], function(m, state) {
      var my_pos = m.getMarkerForElement(state.getYouLocationElement()).getPosition();
      $.each(m.markerElementMap, function(k, v) {
        if (element_has_info(v.getElement(), "golem_axeman")) {
          if (v.getElement().hp / v.getElement().hpMax < 0.8) {
            exist = true;
            return;
          }
          var dist = google.maps.geometry.spherical.computeDistanceBetween(my_pos, v._position);
          if (dist > 300) {
            exist = true;
            return;
          }
        }
      });
    });
    return exist;
  }

  function move_to_center_if_not_close() {
    var moved = false;
    require(["map_utils", "state", "net"], function(m, state, net) {
      var center = new google.maps.LatLng(m._centerLocation.lat, m._centerLocation.lng);
      var my_pos = m.getMarkerForElement(state.getYouLocationElement()).getPosition();
      var dis = google.maps.geometry.spherical.computeDistanceBetween(my_pos, center);
      if (dis > 150) {
        moved = true;
        do_move_to(0, 0);
      }
    });
    return moved;
  }


  function monster_count() {
    var count = 0;
    require(["map_utils"], function(m) {
      $.each(m.markerElementMap, function(k, v) {
        if (element_has_action(v.getElement(), "ATTACK") && (v.getElement().elementId.indexOf("Mon") != -1) && !element_has_any_info(v.getElement(), window.do_not_hunt_list)) {
          count += 1;
        }
      });
    });
    return count;
  }

  function charge_closest_monster() {
    var charged = false;
    require(["map_utils", "state"], function(m, state) {
      target_mobs = [];
      $.each(m.markerElementMap, function(k, v) {
        if (element_has_action(v.getElement(), "SHIELD_CHARGE") && (v.getElement().elementId.indexOf("Mon") != -1) && !element_has_any_info(v.getElement(), window.do_not_hunt_list)) {
          var charge_action = get_element_action(v.getElement(), 'SHIELD_CHARGE');
          if (charge_action.displayString.indexOf('Cooldown') == -1) {
            target_mobs.push(v.getElement());
          }
        }
      });
      if (target_mobs.length > 0) {
        target_mobs = sort_elements_by_distance(m, state.getYouLocationElement(), target_mobs);
        var target_action = get_element_action(target_mobs[0], 'SHIELD_CHARGE');
        $(document).trigger("action.element.doAction", [target_mobs[0], target_action]);
        charged = true;
      }
    });
    return charged;

  }

  function attack_closest_monster() {
    var attacked = false;
    require(["map_utils", "state"], function(m, state) {
      target_mobs = [];
      $.each(m.markerElementMap, function(k, v) {
        if (element_has_action(v.getElement(), "ATTACK") && (v.getElement().elementId.indexOf("Mon") != -1) && !element_has_any_info(v.getElement(), window.do_not_hunt_list)) {
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

  function mine_closest() {
    var mined = false;
    require(["map_utils", "state"], function(m, state) {
      target_caves = [];
      $.each(m.markerElementMap, function(k, v) {
        if (element_has_action(v.getElement(), "MINE")) {
          target_caves.push(v.getElement());
        }
      });
      if (target_caves.length > 0) {
        target_caves = sort_elements_by_distance(m, state.getYouLocationElement(), target_caves);
        var target_action = get_element_action(target_caves[0], "MINE");
        $(document).trigger("action.element.doAction", [target_caves[0], target_action]);
        mined = true;
      }
    });
    return mined;
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

  function do_attack() {
    var attacked = false;
    require(["map_utils", "state"], function(m, state) {
      var enemies = [];
      var monsters = [];
      $.each(m.markerElementMap, function(k, v) {
        if (element_has_action(v.getElement(), 'ATTACK') && get_element_action(v.getElement(), "ATTACK").prompt != true) {
          if (v.getElement().elementId.indexOf("Mon") != -1) {
            monsters.push(v.getElement());
          } else if (v.getElement().elementId.indexOf("Chr") != -1) {
            enemies.push(v.getElement());
          }
        }
      });

      if (enemies.length > 0) {
        enemies = sort_elements_by_distance(m, state.getYouLocationElement(), enemies);
        $(document).trigger("action.element.doAction", [enemies[0], get_element_action(enemies[0], "ATTACK")]);
        attacked = true;
      } else if (monsters.length > 0) {
        monsters = sort_elements_by_distance(m, state.getYouLocationElement(), monsters);
        $(document).trigger("action.element.doAction", [monsters[0], get_element_action(monsters[0], "ATTACK")]);
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

  function do_jump_in_place() {
    if (stop_if_not_alone()) {
      return;
    }

    require(["map_utils", "state", "net"], function(m, state, net) {
      window.current_flag = [];
      var center = new google.maps.LatLng(m._centerLocation.lat, m._centerLocation.lng);
      $.each(m.markerElementMap, function(k, v) {
        if ($.grep(v.getElement().actions,
          function(n, i) {
            return (n.command == 'WARP_TO_BUILDING');
          }).length > 0) {
          var dist = google.maps.geometry.spherical.computeDistanceBetween(center, v._position);
          if (dist < 10) {
            window.current_flag.push(v.getElement());
          }
        }
      });
      if (window.current_flag.length > 0) {
        var target_element = window.current_flag[0];
        var target_action = get_element_action(target_element, 'WARP_TO_BUILDING');
        $(document).trigger("action.element.doAction", [target_element, target_action]);
      }
    });
  }

  function do_double_jump() {
    return do_jump_to_next_flag(1);
  }

  function do_jump_to_next_flag(skips) {
    var jumped = false;
    skips = typeof(skips) != 'undefined' ? skips : 0;
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
          if (v.getElement().name == "kalendae" || v.getElement().name == "Intricate" || v.getElement().name == "SentientConstruct" || v.getElement().name == "SemolinaPilchard") {
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
        var target_element = window.next_flags[0];
        if (window.next_flags.length > skips) {
          target_element = window.next_flags[skips];
        }
        var target_action = get_element_action(target_element, 'WARP_TO_BUILDING');
        $(document).trigger("action.element.doAction", [target_element, target_action]);
        jumped = true;
      }
    });
    return jumped;
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

  var garden_pattern = [
    [0,180],
    [0,360],
    [0,525],
    [15,525],
    [30,525],
    [45,525],
    [30,360],
    [30,180],
    [60,180],
    [60,360],
    [60,525],
    [75,525],
    [90,525],
    [105,525],
    [90,360],
    [90,180],
    [120,180],
    [120,360],
    [120,525],
    [135,525],
    [150,525],
    [165,525],
    [150,360],
    [150,180],
    [180,180],
    [180,360],
    [180,525],
    [195,525],
    [210,525],
    [225,525],
    [210,360],
    [210,180],
    [240,180],
    [240,360],
    [240,525],
    [255,525],
    [270,525],
    [285,525],
    [270,360],
    [270,180],
    [300,180],
    [300,360],
    [300,525],
    [315,525],
    [330,525],
    [345,525],
    [330,360],
    [330,180]
  ];

  function do_auto_garden() {
    if (stop_if_not_alone()) {
      return;
    }
    if (is_busy() || is_moving()) {
      return;
    }
    if (pickup_closest_item('backpack') || pickup_closest_item('thistle') || pickup_closest_item('leather') || pickup_closest_item('larva_meat')) {
      return;
    }
    if (act_on_closest_tree()) {
      return;
    }
    if (window.garden_position >= garden_pattern.length) {
      window.garden_position = 0;
      do_jump_to_next_flag(0);
      gardenTimer = -5;
      return;
    }
    require(["map_utils", "state", "net"], function(m, state, net) {
      var dest_coords = garden_pattern[window.garden_position];
      var center = new google.maps.LatLng(m._centerLocation.lat, m._centerLocation.lng);
      var dest = new google.maps.geometry.spherical.computeOffset(center, dest_coords[1], dest_coords[0]);
      var my_pos = m.getMarkerForElement(state.getYouLocationElement()).getPosition();
      var dis = google.maps.geometry.spherical.computeDistanceBetween(my_pos, dest);
      if (dis > 10) {
        do_move_to(dest_coords[1], dest_coords[0]);
      } else {
        do_self_action('PLANT_TREES');
        window.garden_position += 1;
      }
    });
  }

  function do_juke() {
    do_move(50, Math.floor(Math.random() * 360));
  }

  function jump_next_with_golems() {
    var moved = move_to_center_if_not_close();
    if (!moved) {
      if (golems_not_close_or_hurt()) {
        do_juke();
      } else {
        do_jump_to_next_flag();
      }
    }
  }

  function do_auto_hunt() {
    if (stop_if_not_alone()) {
      return;
    }

    var attacked = false;
    if (is_busy() || is_moving()) {
      return;
    }
    if (pickup_closest_item('backpack')) {
      return;
    }
    if (pickup_closest_item_except(["axe","sword","spear","shield","gyront_shell","crude_oil","dagger","breast_plate"])) {
      return;
    }
    if (current_health_percent() < 80) {
      return;
    }
    if (uTimer % 500 == 0) {
      do_juke();
    }
    if (check_for_monsters(['siren','yanglong'])) {
      huntTimer = -5;
      if (golems_in_circle()) {
        jump_next_with_golems();
      } else {
        do_jump_to_next_flag();
      }
      return;
    }
    if (!is_aggressive()) {
      if (repair_gear_if_needed(50)) {
        huntTimer = -3;
        return;
      }
      if (is_taunt_available() && monster_count() > 10) {
        do_self_action('TAUNT');
        attacked = true;
        huntTimer = -16;
      } else {
        attacked = charge_closest_monster();
        if (!attacked) {
          attacked = attack_closest_monster();
        }
        huntTimer = -5;
      }
      if (!attacked) {
        huntTimer = -9;
        var mined = mine_closest();
        if (!mined) {
          if (golems_in_circle()) {
            jump_next_with_golems();
          } else {
            do_jump_to_next_flag(1);
          }
        }
      }
      return
    }
    if (!monsters_in_vicinity(120)) {
      attacked = charge_closest_monster();
      if (!attacked) {
        attacked = attack_closest_monster();
      }
      huntTimer = -5;
      return
    }
  }

  function do_auto_leather() {
    if (stop_if_not_alone()) {
      return;
    }

    var attacked = false;
    if (is_busy() || is_moving()) {
      return;
    }
    if (pickup_closest_item('backpack')) {
      return;
    }
    if (pickup_closest_item_except(["axe","sword","spear","shield","gyront_shell","crude_oil","dagger","breast_plate"])) {
      return;
    }
    if (current_health_percent() < 80) {
      return;
    }
    if (uTimer % 500 == 0) {
      do_move(50, Math.floor(Math.random() * 360));
    }
    if (!is_aggressive()) {
      if (repair_gear_if_needed(80)) {
        leatherTimer = -3;
        return;
      }
      if (is_taunt_available() && monster_count() > 10) {
        do_self_action('TAUNT');
        attacked = true;
        leatherTimer = -16;
      } else {
        attacked = charge_closest_monster();
        if (!attacked) {
          attacked = attack_closest_monster();
        }
        leatherTimer = -5;
      }
      if (!attacked) {
        leatherTimer = -9;
        var mined = mine_closest();
        if (!mined) {
          do_estate_pet_action("DOG_TRACK_LEATHER");
        }
      }
      return
    }
    if (!monsters_in_vicinity(100)) {
      attacked = charge_closest_monster();
      if (!attacked) {
        attacked = attack_closest_monster();
      }
      leatherTimer = -5;
      return
    }
  }

  function do_auto_explore() {
    if (is_busy() || is_moving()) {
      return;
    }
    if (pickup_closest_item('backpack')) {
      return;
    }
    if (pickup_closest_item_except(["axe","sword","spear","shield","gyront_shell","crude_oil","dagger","breast_plate"])) {
      return;
    }
    if (!is_aggressive()) {
      if (repair_gear_if_needed(50)) {
        exploreTimer = -3;
        return;
      }
    }
    require(["map_utils", "state", "net"], function(m, state, net) {
      if (m._waypoint && m._waypoint.location) {
        var waypoint = m._waypoint.location;
        var wp_loc = new google.maps.LatLng(waypoint.lat, waypoint.lng);
        var center = new google.maps.LatLng(m._centerLocation.lat, m._centerLocation.lng);
        var heading = google.maps.geometry.spherical.computeHeading(center, wp_loc);
        total_distance_togo = google.maps.geometry.spherical.computeDistanceBetween(center, wp_loc);
        if (total_distance_togo > 600) {
          var dest = new google.maps.geometry.spherical.computeOffset(center, 560, heading);
          var my_pos = m.getMarkerForElement(state.getYouLocationElement()).getPosition();
          var dis = google.maps.geometry.spherical.computeDistanceBetween(my_pos, dest);
          if (dis > 15) {
            do_move_to(560, heading);
          } else {
            var attacked = do_attack_immediate_monsters();
            if (!attacked && !is_aggressive()) {
              do_self_action('RECENTER_CIRCLE');
              exploreTimer = -5;
            }
          }
        }
      }
    });
  }


  function do_auto_build() {
    if (stop_if_not_alone()) {
      return;
    }
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
          if (!attacked && !is_aggressive()) {
            if (repair_gear_if_needed(50)) {
              buildTimer = -3;
              return;
            }
            do_build("BUOY");
            buildTimer = 5;
          } else {
            buildTimer = 11;
          }
        }
      } else {
        buildTimer = 11;
      }
    });
  }

  function do_auto_pick() {
    if (stop_if_not_alone()) {
      return;
    }

    if (is_busy() || is_moving()) {
      return;
    }
    if (pickup_closest_item('backpack')) {
      return;
    }
    if (pickup_closest_item_except(["axe","sword","spear","shield","gyront_shell","crude_oil","dagger","breast_plate"])) {
      return;
    }
    var picked = pick_or_tend_closest_tree();
    if (!picked) {
      pickTimer = -8;
      do_jump_to_next_flag();
    }
  }

  function do_auto_chop() {
    if (stop_if_not_alone()) {
      return;
    }

    if (is_busy() || is_moving()) {
      return;
    }
    if (pickup_closest_item('backpack')) {
      return;
    }
    if (pickup_closest_item_except(["axe","sword","spear","shield","gyront_shell","crude_oil","dagger","breast_plate"])) {
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
            $(document).trigger("action.element.doAction", [closest_tree, target_action]);
          }
          else if ($.grep(closest_tree.actions,
            function(n, i) {
              return (n.command == 'WATER');
            }).length > 0) {
            do_move_to_element(closest_tree);
          }
          else if ($.grep(closest_tree.actions,
            function(n, i) {
              return (n.command == 'COLLECT_SNOW');
            }).length > 0) {
            target_action = $.grep(closest_tree.actions, function(n, i) {
              return (n.command == 'COLLECT_SNOW');
            })[0];
            $(document).trigger("action.element.doAction", [closest_tree, target_action]);
          }
          else {
            picked = false;
            return false;
          }
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
          if (v.getElement().displayString == "Mourning Tree" || v.getElement().displayString == "Sick Mourning Tree Sapling" || v.getElement().displayString == "Dusk Tree") {
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
      $("body").append("<div id=\"sstatus\" style=\"position:absolute;top:38px;right:15px;z-index:99999;background-color:white;padding:3px;opacity:.5;font-family:courier;font-size:12px;\">default</div>");
    }
    var str = "U: " + uTimer + " ";
    if (override_alone_stop) {
      str += "<span style=\"color:#999;\">alone</span>";
    } else {
      str += "<span style=\"color:green;font-weight:bold;\">alone</span>";
    }
    if (auto_heal) {
      str += "<span style=\"color:green;font-weight:bold;\">heal</span>";
    } else {
      str += "<span style=\"color:#999;\">heal</span>"
    }
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
    if (auto_leather) {
      str += "<span style=\"color:green;font-weight:bold;\">leather:" + leatherTimer + "</span>"
    } else {
      str += "<span style=\"color:#999;\">leather:" + leatherTimer + "</span>"
    }
    if (auto_garden) {
      str += "<span style=\"color:green;font-weight:bold;\">garden:" + gardenTimer + "</span>"
    } else {
      str += "<span style=\"color:#999;\">garden:" + gardenTimer + "</span>"
    }
    if (auto_explore) {
      str += "<span style=\"color:green;font-weight:bold;\">explore:" + exploreTimer + ":" + total_distance_togo + "</span>"
    } else {
      str += "<span style=\"color:#999;\">explore:" + exploreTimer + "</span>"
    }
    $('#sstatus').html(str);
  }


  function auto_do_tick() {
    setTimeout(auto_do_tick, 500);
    update_status();
    uTimer += 1;
    if (auto_heal) {
      check_health();
    }
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
    if (auto_leather) {
      leatherTimer += 1;
      if (leatherTimer > 1) {
        leatherTimer = 0;
        do_auto_leather();
      }
    }
    if (auto_jump) {
      do_jump_in_place();
    }
    if (auto_garden) {
      gardenTimer += 1;
      if (gardenTimer > 1) {
        gardenTimer = 0;
        do_auto_garden();
      }
    }
    if (auto_explore) {
      exploreTimer += 1;
      if (exploreTimer > 0) {
        exploreTimer = 0;
        do_auto_explore();
      }
    }
  }

  var noHealTimer = 0;

  function check_health() {
    noHealTimer -= 1;
    if (noHealTimer < 1) {
      noHealTimer = 0;
      require(["state"], function(state) {
        if (current_health_percent() < 80) {
          do_self_action('HEAL');
          noHealTimer = 20 * 2;
        }
      });
    }
  }

  function do_rotate_equip(action) {
    var valid_items = [];
    var current_item = [];
    require(["state", "net"], function(state, net) {
      $.each(state.data.items, function(i, n) {
        if (element_has_action(n, action)) {
          valid_items.push(n);
        }
      });
      if (valid_items.length > 0) {
        if ((equipment_indices[action] + 1) >= valid_items.length) {
          current_item.push(valid_items[0]);
          equipment_indices[action] = 0;
        } else {
          current_item.push(valid_items[equipment_indices[action] + 1]);
          equipment_indices[action] += 1;
        }
        net.post({
          fullName: "DoAction1",
          actionId: current_item[0].elementId,
          command: action
        });
      }
    });
  }

  /* move based on your location */
  function do_move(meters, degrees) {
    require(["map_utils", "state", "net"], function(m, state, net) {
      var you = state.getYouLocationElement();
      var you_marker = m.getMarkerForElement(you);
      var dest = new google.maps.geometry.spherical.computeOffset(you_marker.getPosition(), meters, degrees);
      you.movementSpeed > 0 && (m.startMoveMarker(you_marker, dest, function() {
      }),require(["game"], function(game) {
        game.movePlayerAnalog(you, dest, m._currentTargetName)
      }));
    });
  }

  /* move based on center location */
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

  /* move based on center location */
  function do_move_to_element(element) {
    require(["map_utils", "state", "net"], function(m, state, net) {
      var dest = new google.maps.LatLng(element.location.lat, element.location.lng);
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

    if (e.which == 9) {
      $('input').blur();
      return;
    }
    if (e.target.tagName.toUpperCase() == 'INPUT') return;
    if (e.target.tagName.toUpperCase() == 'TEXTAREA') return;

    var keyPress = e.which;
    if (e.shiftKey == true) {
      keyPress += 1000;
    }
    if (e.ctrlKey == true) {
      keyPress += 10000;
    }
    if (keyPress == 112) {
      do_self_action('HEAL');
    }
    if (keyPress == 1112) {
      auto_heal = !auto_heal;
    }
    if (keyPress == 113) {
      do_self_action('TAUNT');
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
      do_self_action('PLANT_TREES');
    }
    if (keyPress == 1070) {
      do_build("FLAG");
    }
    if (keyPress == 1066) {
      do_build("BUOY");
    }
    if (keyPress == 67) {
      do_mouse_hover_action("SHIELD_CHARGE");
    }
    if (keyPress == 78) {
      do_mouse_hover_action("NET");
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
    if (keyPress == 65) {
      do_attack();
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
    if (keyPress == 1036) {
      auto_leather = !auto_leather;
      leatherTimer = 999;
    }
    if (keyPress == 33) {
      auto_jump = !auto_jump;
    }
    if (keyPress == 1220) {
      auto_garden = !auto_garden;
      window.garden_position = 0;
    }
    if (keyPress == 80) {
      do_item_action("PLANT");
    }
    if (keyPress == 1069) {
      auto_explore = !auto_explore;
      exploreTimer = 9;
    }
    if (keyPress == 1082) {
      do_self_action('RECENTER_CIRCLE');
    }
    if (keyPress == 1084) {
      do_estate_pet_action("DOG_TRACK_LEATHER");
    }
    if (keyPress == 49) {
      unequip_all_rings();
      equip_ring_pair(0,1);
    }
    if (keyPress == 50) {
      unequip_all_rings();
      equip_ring_pair(0,6);
    }
    if (keyPress == 51) {
      unequip_all_rings();
      equip_ring_pair(2,3);
    }
    if (keyPress == 52) {
      unequip_all_rings();
      equip_ring_pair(2,4);
    }
    /* 0 to 9 */
    if (keyPress >= 48 && keyPress <= 57) {

    }
    /* A S D F */
    if (keyPress == 65) {

    }
    if (keyPress == 83) {

    }
    if (keyPress == 68) {

    }
    if (keyPress == 70) {

    }
    /* Q W E R */
    if (keyPress == 81) {
      do_rotate_equip("MAKE_RANGED");
    }
    if (keyPress == 87) {
      do_rotate_equip("MAKE_ATTACK");
    }
    if (keyPress == 69) {
      do_rotate_equip("MAKE_BODY");
    }
    if (keyPress == 82) {
      do_rotate_equip("MAKE_OFF_HAND");
    }

    if (keyPress == 1046) {
      override_alone_stop = !override_alone_stop;
    }

  });
  auto_do_tick();
}

  )
  ();
