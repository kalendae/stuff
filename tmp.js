define("settings", [], function () {
    return {
        ACTIVE: {},
        VERSION_IMAGE: "http://content.age3.parallelkingdom.com/hat_goose.png",
        VERSION_NUM: "v0.4.40",
        VERSION_STRING: "Canada Goose Hat",
        DEBUG: !1,
        INSPECT: !1,
        USER_PREFS_KEY: "persInfoPreferences",
        PLATFORM: "WEB",
        CLIENT_VERSION: 1,
        CONTENT_SERVER_URL: "http://content.parallelkingdom.com",
        BETA_CONTENT_SERVER_URL: "/bridge/bimage",
        TEST_CONTENT_SERVER_URL: "/bridge/timage",
        GAME_BETA_HOSTNAME: "pkbeta.public.perblue.com",
        GAME_BETA_PORT: 10100,
        GAME_HOSTNAME: "pk.public.perblue.com",
        GAME_PORT: 10100,
        BRIDGE_HOSTNAME: "localhost",
        BRIDGE_PORT: 7777,
        BRIDGE_GETMSG_URL: "http://pk.com/service/msg",
        BRIDGE_NEW_CLIENT_PATH: "/service/newclient",
        BRIDGE_GETMSG_PATH: "/service/msg",
        BRIDGE_IMAGES_PATH: "/service/images",
        CLIENT_STAT_PATH: "/stat/track",
        CLIENT_STAT_PATH_FB: "/stat/fbchoicetime",
        CLIENT_STAT_PATH_CREATE: "/stat/createpagetime",
        CLIENT_DEMOS_PATH: "/stat/demos",
        CLIENT_SIG_PATH: "/stat/cs",
        CLIENT_STAT_ERROR_PATH: "/stat/error",
        CLIENT_STAT_CAMPAIGN_PATH: "/stat/campaign",
        CLIENT_SUPPORT_PATH: "/support/submit",
        CLIENT_AB_PATH: "/stat/abtest",
        CLIENT_SYNC_PATH: "/game/sync",
        CLIENT_USED_REF_CODE_PATH: "/game/usedrefcode",
        CLIENT_AB_UPDATE_ID_PATH: "/stat/updateabid",
        CLIENT_FB_LOGIN_PATH: "/game/fblogin",
        CLIENT_FB_CREATED_PATH: "/game/fbcharcreated",
        CLIENT_CREATED_PATH: "/game/charcreated",
        CLIENT_GET_TUT_STATE_PATH: "/game/gettutstate",
        CLIENT_SET_TUT_STATE_PATH: "/game/settutstate",
        CLIENT_SET_SETTINGS_PATH: "/settings/set",
        BRIDGE_GAME_SERVER_CONNECT_URL: "http://pk.com/service/gameconnect",
        BRIDGE_GAME_SERVER_CONNECT_PATH: "/service/gameconnect",
        BRIDGE_GET_IMAGES_URL: "http://pk.com/service/images",
        BRIDGE_PLAYER_LIST_CONNECT_PATH: "/service/playerlist/gconnect",
        BRIDGE_PLAYER_LIST_MSG: "/service/playerlist",
        BRIDGE_SESSION_UPDATE_PATH: "/service/inform",
        CONCURRENT_IMAGE_LOADS: 5,
        LOGOUT_REDIRECT: "/",
        MARKER_CLICK_TIMEOUT: 250,
        PLAYERS_LOAD_TIMEOUT: 2e4,
        MESSAGES_LOAD_TIMEOUT: 2e4,
        BUY_LOAD_TIMEOUT: 2e4,
        PICK_FUDGE: 10,
        MULTIPLE_LINE_MIN_LENGTH: 46,
        FB_REDIR_URL: "http://play.parallelkingdom.com/",
        FB_PERMS_REQUESTED: "email,user_birthday,user_location,user_interests,user_activities",
        MAX_CHAT_HISTORY: 100,
        CHAT_MESSAGE_DURATION: 8e3,
        TIPS_TIMEOUT: 1e4,
        SM_SWF_URL: "static/sm/",
        IMAGES_URL: "static/images/",
        MENU_CREATE_RESET_TIMEOUT: 2e4,
        KONG_PURCHASE_ENDPOINT: "http://payment.perblue.com/KongregateListener.ashx",
        GEOLOCATION: !0,
        CONFIGS: {
            SPLASH_TIME: "splash_screen_time",
            CONNECTION_TIMEOUT: "network_timeout",
            GENERIC_TIMEOUT: "generic_timeout",
            MAP_ZOOM_LEVEL: "map_zoom_level",
            TURF_ZOOM_LEVEL: "turf_zoom_level",
            WAYPOINT_COLOR: "waypoint_color",
            WAYPOINT_IMAGE: "waypoint_image",
            COMPASS_ZOOM_LEVEL: "compass_zoom_level",
            RESPAWN_TIME: "respawn_time",
            SEND_MESSAGE_COMMAND_STRING: "send_message_command_string",
            REPLY_COMMAND_STRING: "reply_command_string",
            SELL_FOR_FOOD_COMMAND_STRING: "sell_for_food_command_string",
            SELL_FOR_GOLD_COMMAND_STRING: "sell_for_gold_command_string",
            HP_BAR_WIDTH: "hp_bar_width",
            CHAT_BUFFER_AMOUNT: "chat_buffer_amount",
            PK3_HOST: "pk3_host",
            PK3_PORT: "pk3_port",
            PK3_URL_REGEX: "pk3_url_regex",
            WEB_VIEW_URL: "web_view_url",
            HELP_URL: "help_url",
            BUY_FOOD_URL: "buy_food_url2",
            REFERRAL_EMAIL_TITLE: "referral_email_title",
            REFERRAL_EMAIL_BODY: "referral_email_body",
            PLAYER_PAGE_SIZE: "player_page_size",
            RECENTER_RANGE: "recenter_range",
            TOPICS_PAGE_SIZE: "topics_page_size",
            COMMENTS_PAGE_SIZE: "comments_page_size",
            MESSAGE_LENGTH: "message_length",
            HELP_VALIDATE_EMAIL: "help_verifyemail",
            HELP_VALIDATE_EMAIL_SENT: "help_verifyemail_sent",
            HELP_AGE: "help_age",
            HELP_INBOX: "help_inbox",
            HELP_ITEMS: "help_items",
            HELP_SETTINGS: "help_settings",
            HELP_PRIVACY: "help_privacy",
            HELP_SEND_MESSAGE: "help_send_message",
            HELP_MAP: "help_map",
            HELP_SMS: "help_sms",
            HELP_EMAIL: "help_email",
            HELP_GLOBAL_CHAT: "help_global,chat",
            HELP_MAP_CHAT: "help_map_chat",
            HELP_PM_GOLD: "help_pm_gold",
            HELP_MAKE: "help_make",
            HELP_PHONE: "help_phone",
            HELP_BUILD: "help_build",
            HELP_PLAYERS: "help_players",
            HELP_CARRIERS: "help_carrier",
            HELP_PM_TO: "help_pm_to",
            HELP_GENDER: "help_gender",
            HELP_SKILLS: "help_skills",
            HELP_LEVEL_UP: "help_level_up",
            HELP_PREFIX: "help_"
        },
        getUrlForKey: function (a) {
            switch (a) {
            case "buyfood":
                return this.BUY_FOOD_URL;
            default:
                return null
            }
        }
    }
}), define("utils", ["settings"], function (a) {
    return {
        hasStoredAuth: function () {
            return $.cookie(a.USER_PREFS_KEY) !== undefined
        },
        getStoredAuth: function () {
            var b = $.cookie(a.USER_PREFS_KEY);
            if (b) {
                var b = $.parseJSON(b);
                b.pwh === undefined && ($.cookie(a.USER_PREFS_KEY, "", {
                    expires: 365
                }), b = {});
                return b
            }
            return null
        },
        saveUserData: function (b) {
            b.password = undefined;
            var c = $.cookie(a.USER_PREFS_KEY);
            if (c) {
                var d = $.parseJSON(c);
                b = $.extend(d, b)
            }
            $.cookie(a.USER_PREFS_KEY, JSON.stringify(b), {
                expires: 365
            })
        },
        clearSession: function () {
            $.cookie(a.USER_PREFS_KEY, undefined)
        },
        preloadImages: function (b) {
            var c = [];
            for (i = 0, length = b.length; i < length; ++i) c[i] = new Image, c[i].src = a.IMAGES_URL + b[i]
        },
        prefsAddKey: function (b, c) {
            var d = $.cookie(a.USER_PREFS_KEY);
            d && (this.userPrefs = $.parseJSON(d), this.userPrefs[b] = c, $.cookie(a.USER_PREFS_KEY, JSON.stringify(this.userPrefs), {
                expires: 365
            }))
        },
        prefsGet: function (b) {
            var c = $.cookie(a.USER_PREFS_KEY);
            if (c) {
                var d = $.parseJSON(c);
                return d[b]
            }
            return null
        },
        intColorToHex: function (a) {
            var b = a >> 16 & 255,
                c = a >> 8 & 255,
                d = a & 255,
                e = a >> 24 & 255;
            return ["#" + this.zeroFill16(b, 2) + this.zeroFill16(c, 2) + this.zeroFill16(d, 2), e / 255]
        },
        zeroFill16: function (a, b) {
            b -= a.toString(16).length;
            if (b > 0) return Array(b + (/\./.test(a) ? 2 : 1)).join("0") + a.toString(16);
            return a.toString(16)
        },
        padLeft: function (a, b) {
            if (isNaN(a)) return null;
            b = b || "0";
            return Array(a).join(b).substring(0, this.length - a) + this
        },
        addCommasMoney: function (a) {
            return a.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        },
        addCommasInt: function (a) {
            return a.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        },
        isValidPasswordForCharacters: function (a) {
            return /\d/.test(a) && /\D/.test(a)
        },
        isValidPasswordForLength: function (a) {
            return a.length >= 5
        },
        formatDate: function (a) {
            return jQuery.global.format(new Date(Date.parse(a)), "f")
        },
        guid: function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
                var b = Math.random() * 16 | 0,
                    c = a == "x" ? b : b & 3 | 8;
                return c.toString(16)
            })
        },
        genpwd: function () {
            var a = 8;
            charset = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", retVal = "";
            for (var b = 0, c = charset.length; b < a; ++b) retVal += charset.charAt(Math.floor(Math.random() * c));
            return retVal
        },
        parseQueryString: function (a) {
            if (!a) return {};
            var b = a.substr(1).split(/\&/),
                c = b.length,
                d, e = {};
            while (c--) d = b[c].split(/\=/), d[0] !== "" && (e[d[0]] = d[1] || !0);
            return e
        },
        urlParse: function (a) {
            var b = a,
                c = {},
                d = b.indexOf("?") >= 0;
            if (d) {
                var e = b.substring(b.indexOf("?"));
                b = b.substring(0, b.indexOf("?"));
                var f = e.replace("?", ""),
                    g = f.split("&");
                for (var h in g) {
                    var i = g[h].split("=");
                    c[i[0]] = i[1]
                }
            }
            var j = b.replace("pkclient://", "");
            return {
                url: b,
                hostname: j,
                params: c
            }
        },
        LOCATION: {
            MEAN_EARTH_RADIUS: 6371e3,
            DEG_TO_RAD: Math.PI / 180,
            METERS_2_PIXELS: .418,
            DEGREE_E_6_PIXEL: function () {
                return this.MEAN_EARTH_RADIUS * this.METERS_2_PIXELS / 180 * Math.PI
            },
            PIXEL_2_DEGREE_E: function () {
                return 1 / this.DEGREE_E_6_PIXEL()
            },
            TO_E: 1e6,
            E_TO_RAD: function () {
                return 1 / this.TO_E / 180 * Math.PI
            },
            RAD_TO_E: function () {
                return 1 / this.E_TO_RAD()
            }
        },
        SHAPES: {
            intersectsRect: function (a, b) {
                return a[0] <= b[2] && b[0] <= a[2] && a[1] <= b[3] && b[1] <= a[3]
            },
            intersects: function (a, b) {
                var c = Math.abs(a[2] - a[0]),
                    d = Math.abs(a[3] - a[1]),
                    e = Math.abs(b[2] - b[0]),
                    f = Math.abs(b[3] - b[1]);
                if (e <= 0 || f <= 0 || c <= 0 || d <= 0) return !1;
                var g = a[0],
                    h = a[1],
                    i = b[0],
                    j = b[1];
                e += i, f += j, c += g, d += h;
                return (e < i || e > g) && (f < j || f > h) && (c < g || c > i) && (d < h || d > j)
            }
        },
        UI: {
            makeButton: function (a) {
                return '<a href="#" class="button clearfix"><div class="b-l"></div><div class="b-m">' + a + "</div>" + '<div class="b-r"></div>' + "</a>"
            },
            findIntersectors: function (a, b) {
                var c = [],
                    d = $(a),
                    e = d.offset(),
                    f = [e.left, e.left + d.outerWidth()],
                    g = [e.top, e.top + d.outerHeight()],
                    h = $(b),
                    i = h.length;
                for (var j = 0; j < i; j++) {
                    var k = $(h.get(j)),
                        l = k.offset(),
                        m = [l.left, l.left + k.outerWidth()],
                        n = [l.top, l.top + k.outerHeight()];
                    f[0] < m[1] && f[1] > m[0] && g[0] < n[1] && g[1] > n[0] && c.push(k)
                }
                return c
            },
            findIntersectorsFromBounds: function (a, b) {
                var c = [],
                    d = [a[0], a[2]],
                    e = [a[1], a[3]],
                    f = $(b),
                    g = f.length;
                for (var h = 0; h < g; h++) {
                    var i = $(f.get(h)),
                        j = i.position(),
                        k = [j.left, j.left + i.outerWidth()],
                        l = [j.top, j.top + i.outerHeight()];
                    d[0] < k[1] && d[1] > k[0] && e[0] < l[1] && e[1] > l[0] && c.push(i)
                }
                return c
            },
            findIntersectorsFromBoundsOffset: function (a, b) {
                var c = [],
                    d = [a[0], a[2]],
                    e = [a[1], a[3]],
                    f = $(b),
                    g = f.length;
                for (var h = 0; h < g; h++) {
                    var i = $(f.get(h)),
                        j = i.offset(),
                        k = [j.left, j.left + i.outerWidth()],
                        l = [j.top, j.top + i.outerHeight()];
                    d[0] < k[1] && d[1] > k[0] && e[0] < l[1] && e[1] > l[0] && c.push(i)
                }
                return c
            },
            parseDisplayString: function (a, b) {
                if (!a) return a;
                if (a.indexOf("<span") >= 0) return a;
                a = $("<span>" + a + "</span>").text(), a = a.replace(/\$x/g, "</span>"), a = a.replace(/\$c(\w{6})/g, b ? "" : '<span style="color: #$1">'), a = a.replace(/\$i/g, '<span style="font-style: italic">'), a = a.replace(/\$b/g, '<span style="font-weight: bold">'), a = a.replace(/\$m(\w+)/g, '<span><img src="/static/images/parsed/$1.png" />'), a = a.replace(/\$s/g, "\\$");
                return a
            }
        },
        calculateTextWidth: function (a, b) {
            var c = $(document.createElement("div")).html(a).css($.extend({}, b, {
                display: "none",
                "white-space": "nowrap"
            }));
            $("body").append(c);
            var d = c.outerWidth();
            c.remove();
            return d
        },
        getFormattedTime: function (a) {
            var b = Math.ceil(a / 1e3),
                c = Math.floor(b / 60),
                d = Math.floor(c / 60),
                e = b - c * 60,
                f = c - d * 60;
            if (d > 0) {
                var g = "";
                e < 10 ? g = ":0" + e : g = ":" + e;
                return f < 10 ? d + ":0" + f + g : d + ":" + f + g
            }
            return c > 0 ? e < 10 ? c + ":0" + e : c + ":" + e : b
        }
    }
}), define("stats", ["settings", "state", "net"], function (a, b, c) {
    return {
        _abVals: {},
        tryAb: function (a, b, c) {
            if (this._abVals.hasOwnProperty(a)) return this._abVals[a];
            var d = Math.random() * 1 >= .5;
            this.ab({
                TestName: a,
                TestValue: d ? b : c
            }), this._abVals[a] = d;
            return d
        },
        ab: function (c) {
            var d = b.getYouLocationElement(),
                e = d ? d.name : null,
                f = d && d.elementId.toLowerCase() !== "you" ? d.elementId : null;
            $.extend(c, {
                CharacterId: f,
                CharacterName: e
            }), $.ajax({
                url: a.CLIENT_AB_PATH,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                type: "POST",
                data: JSON.stringify(c)
            }, function (a) {
                console.log("Successfully sent stats")
            })
        },
        track: function (c) {
            var d = b.getYouLocationElement(),
                e = d ? d.name : null,
                f = d && d.elementId.toLowerCase() !== "you" ? d.elementId : null;
            $.ajax({
                url: a.CLIENT_STAT_PATH,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                type: "POST",
                data: JSON.stringify({
                    Type: "stat",
                    ClientTimestamp: (new Date).getTime(),
                    Path: c.path,
                    Value: c.value,
                    Extra: c.extra,
                    CharacterId: f,
                    CharacterName: e
                })
            }, function (a) {
                console.log("Successfully sent stats")
            })
        },
        fbChoiceLink: function (b) {
            $.ajax({
                url: a.CLIENT_STAT_PATH_FB,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                type: "POST",
                data: JSON.stringify({
                    clickid: campaignClickId
                })
            }, function (a) {
                console.log("Successfully sent stats")
            })
        },
        createPageTime: function (b) {
            $.ajax({
                url: a.CLIENT_STAT_PATH_CREATE,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                type: "POST",
                data: JSON.stringify({
                    clickid: campaignClickId
                })
            }, function (a) {
                console.log("Successfully sent stats")
            })
        },
        demos: function (c) {
            var d = b.getYouLocationElement(),
                e = d ? d.name : null,
                f = d && d.elementId.toLowerCase() !== "you" ? d.elementId : null;
            c.CharacterName = e, c.CharacterId = f, $.ajax({
                url: a.CLIENT_DEMOS_PATH,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                type: "POST",
                data: JSON.stringify(c)
            }, function (a) {
                console.log("Successfully sent stats")
            })
        },
        error: function (c) {
            var d = b.getYouLocationElement(),
                e = d ? d.name : null,
                f = d && d.elementId.toLowerCase() !== "you" ? d.elementId : null;
            $.ajax({
                url: a.CLIENT_STAT_ERROR_PATH,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                type: "POST",
                data: JSON.stringify({
                    ClientTimestamp: (new Date).getTime(),
                    Type: c.type,
                    Trace: c.trace,
                    Path: c.path,
                    Extra: c.extra,
                    CharacterId: f,
                    CharacterName: e
                })
            }, function (a) {
                console.log("Successfully sent stats")
            })
        },
        sig: function () {
            var c = b.getYouLocationElement(),
                d = c ? c.name : null,
                e = c && c.elementId.toLowerCase() !== "you" ? c.elementId : null,
                f = this.pihash();
            $.ajax({
                url: a.CLIENT_SIG_PATH,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                type: "POST",
                data: JSON.stringify({
                    CharacterId: e,
                    CharacterName: d,
                    PluginHash: f
                })
            }, function (a) {
                console.log("Successfully sent stats")
            })
        },
        pihash: function () {
            var a = this.pidict(),
                b = [];
            for (var c in a) {
                var d = a[c];
                b.push(d.d.replace('"', '\\"') + ", " + d.f.replace('"', '\\"') + ", " + d.n.replace('"', '\\"'))
            }
            return b.length > 0 ? hex_md5(b.join("\n")) : ""
        },
        pidict: function () {
            var a = [];
            if (navigator.plugins) {
                var b = navigator.plugins;
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    a.push({
                        d: d.description,
                        f: d.filename,
                        n: d.name
                    })
                }
            }
            return a
        },
        pi: function () {
            var a = "";
            if (navigator.plugins) {
                var b = navigator.plugins,
                    c = [];
                for (var d = 0; d < b.length; d++) {
                    c[d] = b[d].name + "; ", c[d] += b[d].description + "; ", c[d] += b[d].filename + ";";
                    for (var e = 0; e < b[d].length; e++) c[d] += " (" + b[d][e].description + "; " + b[d][e].type + "; " + b[d][e].suffixes + ")";
                    c[d] += ". "
                }
                c.sort();
                for (d = 0; d < b.length; d++) a += "Plugin " + d + ": " + c[d]
            }
            if (a == "") {
                var f = [];
                f[0] = "Java", f[1] = "QuickTime", f[2] = "DevalVR", f[3] = "Shockwave", f[4] = "Flash", f[5] = "WindowsMediaplayer", f[6] = "Silverlight", f[7] = "VLC";
                var g;
                for (p in f) g = PluginDetect.getVersion(f[p]), g && (a += f[p] + " " + g + "; ");
                a += ieAcrobatVersion()
            }
            return a
        },
        lang: function (a) {
            $.get("/stat/lang", function (b) {
                a(b)
            })
        },
        setting: function (b) {
            $.extend(b, this.getIdData()), $.ajax({
                url: a.CLIENT_SET_SETTINGS_PATH,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                type: "POST",
                data: JSON.stringify(b)
            })
        },
        updateAbId: function () {
            $.ajax({
                url: a.CLIENT_AB_UPDATE_ID_PATH,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                type: "POST",
                data: JSON.stringify(this.getIdData())
            })
        },
        getIdData: function (a) {
            var c = b.getYouLocationElement(),
                d = c && c.elementId && (c.elementId.toLowerCase() == "you" ? null : c.elementId);
            !d && b && b.data && b.data.yourId && b.data.yourId.toLowerCase() != "you" && (d = b.data.yourId);
            return {
                CharacterName: c && c.name,
                CharacterId: d,
                FacebookId: pk && pk.state && pk.state.fbUserId,
                KongId: pk && pk.state && pk.state.kongId
            }
        },
        setting: function (b) {
            $.extend(b, this.getIdData()), $.ajax({
                url: a.CLIENT_SET_SETTINGS_PATH,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                type: "POST",
                data: JSON.stringify(b)
            })
        }
    }
}), define("authstates", [], function () {
    return {
        FAILED: -1,
        NOT_CONNECTED: 0,
        CONNECTED: 1,
        INITED: 2,
        MUST_LOGIN: 3,
        MUST_CREATE: 4,
        MUST_VERIFY: 5,
        CREATE: 6,
        ACCOUNT_SERVER_AUTH_REQUEST: 7,
        ACCOUNT_SERVER_AUTH_CHALLENGE_RESPONSE: 8,
        AUTH_ERROR_LOGIN: 9,
        AUTH_ERROR_CREATE: 10,
        GAME_SERVER_CONNECT_TO: 11,
        GAME_SERVER_CLIENT_INFO: 12,
        GAME_SERVER_AUTH_REQUEST: 13,
        GAME_SERVER_AUTH_CHALLENGE_RESPONSE: 14,
        GAME_SERVER_CONNECTED: 15,
        GAME_RUNNING: 16,
        name: function (a) {
            for (var b in this) if (this[b] == a) return b
        }
    }
}), define("net", ["tut", "stats", "settings", "state", "authstates"], function (a, b, c, d, e) {
    return {
        _lang: null,
        _currentClientId: null,
        _sessionKey: null,
        _loginData: {},
        _unprocessed: [],
        _stateCallbacks: {},
        _didCreateCharacter: !1,
        _currentAuthState: e.NOT_CONNECTED,
        setAuthState: function (a, b) {
            a != e.GAME_RUNNING && console.log("AUTH STATE CHANGE:", e.name(a), b);
            var c = this;
            c._currentAuthState = a;
            switch (a) {
            case e.CONNECTED:
                c._initCometdSubscriptions(), c.newClientPost();
                break;
            case e.INITED:
                c._sendClientInfo();
                break;
            case e.MUST_LOGIN:
                break;
            case e.CREATE:
                break;
            case e.ACCOUNT_SERVER_AUTH_REQUEST:
                c._requestAuthChallenge();
                break;
            case e.ACCOUNT_SERVER_AUTH_CHALLENGE_RESPONSE:
                c._sendAuthResponse(b);
                break;
            case e.AUTH_ERROR_LOGIN:
                break;
            case e.AUTH_ERROR_CREATE:
                break;
            case e.GAME_SERVER_CONNECT_TO:
                c.gameServerConnect(b);
                break;
            case e.GAME_SERVER_CLIENT_INFO:
                c._sendClientInfo();
                break;
            case e.GAME_SERVER_AUTH_REQUEST:
                c._requestAuthChallenge();
                break;
            case e.GAME_SERVER_AUTH_CHALLENGE_RESPONSE:
                c._sendAuthResponse(b);
                break;
            case e.GAME_SERVER_CONNECTED:
                break;
            case e.GAME_RUNNING:
                break;
            default:
                console.error("Not processed auth state:", e.name(a))
            }
            typeof this._stateCallbacks[a] == "function" && this._stateCallbacks[a](b)
        },
        pushUnprocessedMessage: function (a) {
            console.log("Storing unprocessed game message", a), this._unprocessed.push(a)
        },
        _initCometd: function () {
            var a = this;
            $.cometd.configure({
                url: "/service",
                logLevel: "info",
                maxNetworkDelay: 12e4
            }), $.cometd.addListener("/meta/handshake", function (b) {
                console.log("META HANDSHAKE RESPONSE"), console.log(b);
                if ($.cometd.isDisconnected()) console.error("META CONNECT DISCONNECTED!");
                else {
                    if (a._currentAuthState > e.CONNECTED) return;
                    b.successful === !0 ? a.setAuthState(e.CONNECTED) : (b.xhr.status != 200 && $.inArray(b.xhr.status, [504]) === -1 && a.setAuthState(e.FAILED), console.error("Disconnected!"))
                }
            }), $.cometd.addListener("/meta/disconnect", function (b) {
                console.error("META DISCONNECT"), console.log(b), a.setAuthState(e.NOT_CONNECTED)
            }), $.cometd.addListener("/meta/connect", function (b) {
                b.successful || (console.error("Unable to connect to bridge."), b.xhr.status != 200 && $.inArray(b.xhr.status, [504]) === -1 && a.setAuthState(e.FAILED))
            }), $.cometd.addListener("/meta/publish", function (a) {
                a.successful || (console.error("Publish error response"), console.log(a), $.cometd.handshake())
            }), $.cometd.addListener("/meta/unsuccessful", function (a) {
                console.log("Unsuccessful cometd"), console.log(a)
            }), $.cometd.handshake()
        },
        _initCometdSubscriptions: function () {
            var a = this;
            $.cometd.subscribe(c.BRIDGE_NEW_CLIENT_PATH, function (b) {
                a._sessionKey = b.data._cometdSessionKey;
                b.hasOwnProperty("data") && b.data.message === "no_connection" ? a.setAuthState(e.FAILED) : a.setAuthState(e.INITED)
            }), $.cometd.subscribe(c.BRIDGE_GAME_SERVER_CONNECT_PATH, function (b) {
                console.log("GAME SERVER CONNECT RESPONSE"), console.log(b), a.setAuthState(e.GAME_SERVER_CLIENT_INFO)
            }), $.cometd.subscribe(c.BRIDGE_IMAGES_PATH, function (b) {
                console.log("IMAGES RESPONSE"), console.log(b);
                var c = !1,
                    d = null;
                try {
                    d = JSON.parse(b.data)
                } catch (f) {
                    if (b.data && b.data.status === "error") {
                        a.setAuthState(e.FAILED);
                        return
                    }
                    console.error("Unable to parse images response.");
                    return
                }
                a._dynamicImagesCallback && a._dynamicImagesCallback(d)
            }), $.cometd.subscribe(c.BRIDGE_PLAYER_LIST_CONNECT_PATH, function (b) {
                console.log("PLAYER LIST RESPONSE"), console.log(b), a._playerListConnectCallback && a._playerListConnectCallback()
            }), $.cometd.subscribe(c.BRIDGE_PLAYER_LIST_MSG, function (b) {
                console.log("PLAYER LIST MESSAGE RESPONSE"), console.log(b);
                var c = null;
                typeof b.data == "string" ? c = JSON.parse(b.data) : c = b.data, a._gameMessageCallback(c)
            }), $.cometd.subscribe(c.BRIDGE_GETMSG_PATH, function (b) {
                var c = null;
                typeof b.data == "string" ? c = JSON.parse(b.data) : c = b.data;
                a._currentAuthState !== e.GAME_RUNNING ? a._processDanceMessage(b, c) : a._gameMessageCallback(c)
            })
        },
        _processDanceMessage: function (a, b) {
            var c = this;
            console.log("DANCE MESSAGE in state", e.name(this._currentAuthState)), console.log(b);
            if (b.status !== "success") if (b.message === "lost_connection" || b.message === "no_connection") {
                c.setAuthState(e.FAILED);
                return
            }
            switch (c._currentAuthState) {
            case e.NOT_CONNECTED:
                c.setAuthState(e.INITED, b);
                break;
            case e.INITED:
                c.setAuthState(e.MUST_LOGIN, b);
                break;
            case e.MUST_LOGIN:
                break;
            case e.CREATE:
                b.fullName === "ErrorResponse1" ? c.setAuthState(e.AUTH_ERROR_CREATE, b) : b.fullName === "ConnectTo1" && c.setAuthState(e.GAME_SERVER_CONNECT_TO, b);
                break;
            case e.ACCOUNT_SERVER_AUTH_REQUEST:
                b.fullName === "AuthChallenge1" ? c.setAuthState(e.ACCOUNT_SERVER_AUTH_CHALLENGE_RESPONSE, b) : b.fullName === "ErrorResponse1" && c.setAuthState(e.FAILED, b);
                break;
            case e.ACCOUNT_SERVER_AUTH_CHALLENGE_RESPONSE:
                b.fullName === "ConnectTo1" ? c.setAuthState(e.GAME_SERVER_CONNECT_TO, b) : b.fullName === "ErrorResponse1" ? c.setAuthState(e.AUTH_ERROR_LOGIN, b) : b.fullName === "RequestEmail1" && c.setAuthState(e.MUST_VERIFY, b);
                break;
            case e.GAME_SERVER_CLIENT_INFO:
                c.setAuthState(e.GAME_SERVER_AUTH_REQUEST, b);
                break;
            case e.GAME_SERVER_AUTH_REQUEST:
                b.fullName === "AuthChallenge1" ? c.setAuthState(e.GAME_SERVER_AUTH_CHALLENGE_RESPONSE, b) : b.fullName === "ErrorResponse1" ? c.setAuthState(e.AUTH_ERROR_CREATE, b) : b.fullName === "RequestEmail1" ? c.setAuthState(e.MUST_VERIFY, b) : c.pushUnprocessedMessage(b);
                break;
            case e.GAME_SERVER_AUTH_CHALLENGE_RESPONSE:
                b.fullName === "BootData1" ? c.setAuthState(e.GAME_SERVER_CONNECTED, b) : b.fullName === "ErrorResponse1" ? c.setAuthState(e.AUTH_ERROR_LOGIN, b) : b.fullName === "RequestEmail1" ? c.setAuthState(e.MUST_VERIFY, b) : c.pushUnprocessedMessage(b);
                break;
            case e.GAME_SERVER_CONNECTED:
                c.pushUnprocessedMessage(b);
                break;
            default:
                console.error("UNHANDLED DANCE MESSAGE IN STATE", e.name(c._currentAuthState), b)
            }
        },
        _requestAuthChallenge: function () {
            var a = this;
            a.post({
                fullName: "RequestAuthChallenge1"
            }, {
                isBeta: !1
            }, !1)
        },
        _sendAuthResponse: function (a) {
            var b = this,
                c = this._loginData.username,
                d = this._loginData.pwh;
            if (d === undefined) {
                var e = this._loginData.password;
                d = hex_md5(e).toUpperCase()
            }
            var f = a.dataToEncrypt,
                g = hex_md5(d + f).toUpperCase();
            b.post({
                fullName: "AuthResponse1",
                encryptedData: g,
                name: c
            }, function (a) {}, !1)
        },
        _sendClientInfo: function (a) {
            var d = this,
                e = (new Date).getTimezoneOffset() * 60 * 1e3;
            b.lang(function (a) {
                console.log("Lang detected", a);
                var b = a.langs.split(";"),
                    f = "en";
                if (b.length > 0) {
                    var g = b[0],
                        h = g.split(",");
                    for (var i in h) {
                        var j = h[i];
                        if (j.indexOf("=") == -1) {
                            f = j;
                            break
                        }
                    }
                }
                d.post({
                    fullName: "ClientInfo1",
                    messageNumber: 1,
                    language: f,
                    platform: c.PLATFORM,
                    version: c.CLIENT_VERSION,
                    systemDescription: BrowserDetect.browser,
                    systemVersion: BrowserDetect.version,
                    sDKVersion: "",
                    phoneName: "",
                    systemName: BrowserDetect.OS,
                    uniqueIdentifier: "",
                    carrierName: "",
                    networkType: "WEB",
                    aPMacAddress: "",
                    aPSSID: "web",
                    cellID: "0",
                    cellRSSI: "0",
                    cellLocation: "web",
                    isConnectedToCell: !1,
                    isConnectedToWiFi: !0,
                    pushNotificationsToken: "",
                    timeOffset: e,
                    clientConfigsHash: 0,
                    referalData: ""
                }, {
                    isBeta: !1
                }, !1)
            })
        },
        getAuthState: function () {
            return this._currentAuthState
        },
        getUnprocessedMessages: function () {
            return this._unprocessed
        },
        clearUnprocessedMessages: function () {
            this._unprocessed = []
        },
        getDidCreateCharacter: function () {
            return this._didCreateCharacter
        },
        setDidCreateCharacter: function (a) {
            this._didCreateCharacter = a
        },
        onState: function (a, b) {
            this._stateCallbacks[a] = b
        },
        onGameMessage: function (a) {
            this._gameMessageCallback = a
        },
        getLoginData: function () {
            return this._loginData
        },
        init: function () {
            this._initCometd()
        },
        disconnect: function () {
            console.log("Disconnecting"), $.cometd.disconnect()
        },
        authenticate: function (a, b) {
            var c = this;
            $.extend(c._loginData, {
                username: a,
                pwh: b.toUpperCase()
            }), c.setAuthState(e.ACCOUNT_SERVER_AUTH_REQUEST)
        },
        create: function (a) {
            this.setDidCreateCharacter(!0);
            var b = this;
            this._loginData.EnteredRefCode = a.EnteredRefCode, delete a.EnteredRefCode, this._loginData.username = a.name, this._loginData.password = a.password;
            var d = a.name,
                f = a.password,
                g = a.gender,
                h = a.email,
                i = a.age,
                j = a.accept,
                k = a.location,
                l = "",
                m = "",
                n = !1,
                o = a.code || "",
                p = a.zipCode,
                q = a.country,
                r = "",
                s = "",
                t = hex_md5(f).toUpperCase();
            this._loginData.pwh = t;
            var u = "ZIP_CODE";
            a.location && (u = "LAT_LNG");
            var v = {
                fullName: "CreateCharacter1",
                name: d,
                password: t,
                email: h,
                age: i,
                gender: g,
                phoneNumber: l,
                carrier: m,
                location: k,
                receiveSms: n,
                code: o,
                zipCode: p,
                city: s,
                state: r,
                country: q,
                locMethod: u
            };
            require(["game"], function (d) {
                d._detectedLocation && u != "LAT_LNG" && (v.location = {
                    lat: d._detectedLocation.latitude,
                    lng: d._detectedLocation.longitude
                }, v.locMethod = "LAT_LNG"), c.GEOLOCATION && (v.locMethod = "NONE", v.location = {
                    lat: 0,
                    lng: 0
                }), b.post(v, null, !1), b.setAuthState(e.CREATE, a)
            })
        },
        loadDynamicImages: function (a) {
            this._dynamicImagesCallback = a, $.cometd.publish(c.BRIDGE_IMAGES_PATH, {
                env: "real"
            })
        },
        newClientPost: function (a) {
            $.cometd.publish(c.BRIDGE_NEW_CLIENT_PATH, {
                isBeta: !1
            })
        },
        post: function (b, d, e) {
            console.log("*POST*"), console.log(b);
            var f = {
                payload: JSON.stringify(b)
            };
            this._sessionKey && (f._cometdSessionKey = this._sessionKey), typeof d == "object" && $.extend(f, d);
            if (a.isActive && e !== !1) {
                var g = {};
                $.extend(g, b, d), a.handleMessage(g)
            } else $.cometd.publish(c.BRIDGE_GETMSG_PATH, f)
        },
        gameServerConnect: function (a) {
            console.log("*POST* Connecting to game server", a);
            var b = this,
                d = a.host,
                e = a.port;
            $.cometd.publish(c.BRIDGE_GAME_SERVER_CONNECT_PATH, {
                host: d,
                port: e,
                _cometdSessionKey: b._sessionKey
            })
        },
        playerListPost: function (a) {
            var b = this;
            console.log("Player list post"), console.log(a), $.cometd.publish(c.BRIDGE_PLAYER_LIST_MSG, {
                payload: JSON.stringify(a),
                _cometdSessionKey: b._sessionKey
            })
        },
        playerListConnect: function (a, b, d) {
            var e = this;
            console.log("CONNECTING TO PLAYER LIST"), this._playerListConnectCallback = d, $.cometd.publish(c.BRIDGE_PLAYER_LIST_CONNECT_PATH, {
                host: a,
                port: b,
                _cometdSessionKey: e._sessionKey
            })
        },
        tryFacebookLogin: function (a, b, d) {
            $.ajax({
                url: c.CLIENT_FB_LOGIN_PATH,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                type: "POST",
                data: JSON.stringify({
                    accessToken: a,
                    facebookId: b
                }),
                success: d
            })
        },
        fbcreated: function (a, b) {
            $.ajax({
                url: c.CLIENT_FB_CREATED_PATH,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                type: "POST",
                data: JSON.stringify(a),
                success: b
            })
        },
        created: function (a, b) {
            require(["state"], function (d) {
                var e = d.getYouLocationElement(),
                    f = e && e.elementId.toLowerCase() !== "you" ? e.elementId : null;
                $.extend(a, {
                    CharacterId: f
                }), $.ajax({
                    url: c.CLIENT_CREATED_PATH,
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    type: "POST",
                    data: JSON.stringify(a),
                    success: b
                })
            })
        },
        sync: function (a, e) {
            var f = d.getYouLocationElement(),
                g = b.getIdData();
            $.extend(g, a, {
                Hash: this.getLoginData().pwh
            }), $.ajax({
                url: c.CLIENT_SYNC_PATH,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                type: "POST",
                data: JSON.stringify(g),
                success: function (a) {
                    e(a)
                }
            })
        },
        usedRefCode: function (a) {
            var e = d.getYouLocationElement(),
                f = b.getIdData();
            $.extend(f, a, {}), $.ajax({
                url: c.CLIENT_USED_REF_CODE_PATH,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                type: "POST",
                data: JSON.stringify(f),
                success: function (a) {}
            })
        }
    }
}), define("resources", ["net", "settings"], function (a, b) {
    return {
        _loadedImageList: {},
        _erroredImageList: {},
        _loadedOwnedImageList: {},
        _requireOwnedTimeoutList: {},
        init: function () {},
        getOwnedImageFromIdAndOwner: function (a, b) {
            if (this._loadedOwnedImageList[a] && this._loadedOwnedImageList[a][b]) return this._loadedOwnedImageList[a][b];
            return null
        },
        getImageFromId: function (a) {
            var b = this._loadedImageList[a];
            if (b) return b;
            return null
        },
        resolveDynamicImage: function (a) {
            if (a) return b.CONTENT_SERVER_URL + "/" + a.item.image;
            return null
        },
        requireAllOwnedImagesParallel: function (a, b, c, d) {
            var e = this,
                f = [];
            for (var g = 0; g < a.length; g++) f.push(a[g]);
            if (f.length <= 0) c();
            else for (var g = 0; g < f.length; g++) {
                var h = f[g];
                (function (a) {
                    setTimeout(function () {
                        e.requireOwnedImages(b[a], a, function () {
                            f.shift(), d(a), f.length <= 0 && c()
                        })
                    }, 5)
                })(h)
            }
        },
        requireAllOwnedImages: function (a, b, c, d) {
            var e = this,
                f = [];
            for (var g = 0; g < a.length; g++) f.push(a[g]);
            setTimeout(function h() {
                if (f.length > 0) {
                    var a = f.shift();
                    e.requireOwnedImages(b[a], a, function () {
                        setTimeout(h, 10)
                    })
                } else c()
            }, 10)
        },
        requireOwnedImages: function (a, c, d) {
            var e = this;
            clearTimeout(e._requireOwnedTimeoutList[c]);
            var f = [];
            e._loadedOwnedImageList.hasOwnProperty(c) || (e._loadedOwnedImageList[c] = {});
            for (var g = 0; g < a.length; g++) {
                var h = a[g],
                    i = this._loadedImageList[h];
                i && f.push(i)
            }
            var j = f.length;
            j.length == 0 ? (console.log("No new images to load."), d()) : e._requireOwnedTimeoutList[c] = setTimeout(function k() {
                if (f.length > 0) {
                    var a = f.shift(),
                        g = new Image;
                    g.onload = function () {
                        e._loadedImageList[a.item.id] = e._loadedOwnedImageList[c][a.item.id] = {
                            item: a.item,
                            image: g,
                            size: [g.width, g.height]
                        }, e._requireOwnedTimeoutList[c] = setTimeout(k, 1)
                    }, g.onerror = function () {
                        a.triedOnce || (a.triedOnce = !0, f.push(a)), e._requireOwnedTimeoutList[c] = setTimeout(k, 1)
                    }, a ? g.src = b.CONTENT_SERVER_URL + "/" + a.item.image : console.log("No such item in the list!")
                } else d && d()
            }, 1)
        },
        requireImages: function (a, c) {
            var d = this,
                e = [];
            for (var f = 0; f < a.length; f++) {
                var g = a[f],
                    h = this._loadedImageList[g];
                h && e.push(h)
            }
            var i = e.length;
            i.length == 0 ? (console.log("No new images to load."), c()) : setTimeout(function j() {
                if (e.length > 0) {
                    var a = e.shift(),
                        f = new Image;
                    f.onload = function () {
                        d._loadedImageList[a.item.id] = {
                            item: a.item,
                            image: f,
                            size: [f.width, f.height]
                        }, setTimeout(j, 1)
                    }, f.onerror = function () {
                        a.triedOnce || (a.triedOnce = !0, e.push(a)), setTimeout(j, 1)
                    }, a ? f.src = b.CONTENT_SERVER_URL + "/" + a.item.image : console.log("No such item in the list!")
                } else c && c()
            }, 1)
        },
        fakeLoadAllImages: function (b, c) {
            var d = this;
            d._loadedImageList = {}, a.loadDynamicImages(function (a) {
                var c = a.items;
                for (var e in c) {
                    var f = c[e];
                    f.types = f.type.split(","), d._loadedImageList[f.id] = {
                        item: f,
                        size: [0, 0]
                    }
                }
                b()
            })
        }
    }
}), define("ui/interface", ["state", "resources", "utils"], function (a, b, c) {
    MAX_PROGRESS_WIDTH = 36;
    return {
        data: {},
        _isInited: !1,
        _progressMaxWidth: 152,
        _capWidth: 10,
        _oldHpWidth: 0,
        _oldPagesWidth: 0,
        levelUp: _("level_up"),
        levelUpAreYouSure: "",
        override: "",
        show: function () {
            this.map = $("#map-wrapper"), $("#interface-gold").remove(), $("#interface-weight").remove(), $("#interface-status-new").remove(), $("#interface-chat").remove();
            var b = a.getYouLocationElement(),
                c = b ? b.displayString : "";
            this.chatBox = $('<div id="interface-chat"></div>'), this.statusBox = $('<div id="interface-status-new"><div class="relative"></div></div>'), this.pictureBox = $('<div class="absolute interface-value" id="interface-picture"></div>'), this.timerBox = $('<div class="absolute interface-value el-progress el-progress-timer" id="interface-timer"><div class="el-progress-wrapper"><div class="el-progress-bar el-progress-timer-bar"></div><div class="el-progress-value el-progress-timer-value"></div></div></div>'), this.nameBox = $('<div class="absolute interface-value" id="interface-name">' + c + "</div>"), this.hpBox = this._makeNewProgressBar("interface-progress-hp"), this.pagesBox = this._makeNewProgressBar("interface-progress-pages"), this.goldBox = this._makeGoldHeader(), this.weightBox = this._makeWeightHeader(), $(".relative", this.statusBox).append(this.nameBox), $(".relative", this.statusBox).append(this.pictureBox), $(".relative", this.statusBox).append(this.timerBox), $(".relative", this.statusBox).append(this.hpBox), $(".relative", this.statusBox).append(this.pagesBox), $("#h-left").append(this.goldBox), $("#h-left").append(this.weightBox), this.map.append(this.statusBox), this.map.append(this.chatBox), $("#float-w").append($('<div id="attn-arrow-container"></div>')), $(this.chatBox).click(function () {
                var a = $(this).data("rid");
                console.log("Showing chat room:", a), $(document).trigger("action.chat.room.show", [a]);
                return !1
            }), $(this.chatBox).unbind("hover"), $(this.chatBox).hover(function () {
                $(this).animate({
                    opacity: .9
                }, 200)
            }, function () {
                $(this).animate({
                    opacity: .5
                }, 500)
            }), this._updateFields(), this._isInited = !0
        },
        initWithSkillInfo: function (a) {},
        update: function () {
            !this._isInited || this._updateFields()
        },
        updateExpHud: function (a) {
            this.override = a.doneLevelingText, this.levelUp = a.levelUpText, this.levelUpAreYouSure = a.areYouSureText, this._updateFields()
        },
        showChatMessage: function (a, c) {
            if ( !! c) {
                $("#interface-chat").is(":hidden") && $("#interface-chat").css({
                    opacity: 0
                }).show().animate({
                    opacity: .5
                }, 500), $("#interface-chat").data("rid", c.roomId);
                var d = "";
                if (c.displayLayers.length > 0) {
                    var e = b.getImageFromId(c.displayLayers[0].info);
                    d = '<div class="interface-chat-display-layer"><img src="' + b.resolveDynamicImage(e) + '" /></div>'
                }
                var f = a.text;
                (a.senderName + ": " + a.text).length > 36 && (f = a.text.substring(0, 36 - a.senderName.length) + "..."), $("#interface-chat").html(d + '<div class="interface-chat-sender" style="color: ' + a.htmlColor + '"></div><div class="interface-chat-chat"></div>'), $(".interface-chat-sender", "#interface-chat").text(a.senderName), $(".interface-chat-chat", "#interface-chat").text(f)
            }
        },
        _updateFields: function () {
            this._updateProgress(this.hpBox, a.data.hp, a.data.hpMax), a.data.hp >= 60 ? (this.hpBox.addClass("healthy"), this.hpBox.removeClass("dead"), this.hpBox.removeClass("weak")) : a.data.hp >= 30 ? (this.hpBox.addClass("weak"), this.hpBox.removeClass("healthy"), this.hpBox.removeClass("dead")) : (this.hpBox.addClass("dead"), this.hpBox.removeClass("healthy"), this.hpBox.removeClass("weak")), this._updateProgress(this.pagesBox, a.data.exp, a.data.expMax), $(".value", this.goldBox).text(c.addCommasInt(a.data.gold) + " " + _("gold"));
            var d = 0;
            a.data.totalWeightCapacity != 0 && (d = a.data.currentWeight / a.data.totalWeightCapacity), d <= .7 ? (this.weightBox.addClass("healthy"), this.weightBox.removeClass("weak"), this.weightBox.removeClass("dead")) : d < .9 ? (this.weightBox.addClass("weak"), this.weightBox.removeClass("healthy"), this.weightBox.removeClass("dead")) : (this.weightBox.addClass("dead"), this.weightBox.removeClass("healthy"), this.weightBox.removeClass("weak")), a.data.totalWeightCapacity > 100 ? $(".value", this.weightBox).text(a.data.currentWeight.toFixed(1) + "kg/" + a.data.totalWeightCapacity.toFixed(1) + "kg") : $(".value", this.weightBox).text(a.data.currentWeight.toFixed(2) + "kg/" + a.data.totalWeightCapacity.toFixed(2) + "kg"), a.data.hp <= 0 ? $(".interface-progress-progress-value", this.hpBox).text(_("web_dead")) : $(".interface-progress-progress-value", this.hpBox).text("HP: " + a.data.hp + "/" + a.data.hpMax), this.override ? $(".interface-progress-progress-value", this.pagesBox).text(this.override) : a.data.exp >= a.data.expMax ? ($(".interface-progress-progress-value", this.pagesBox).text(this.levelUp), this.pagesBox.addClass("interface-progress-clickable"), this.pagesBox.data("isreadytolevel", !0)) : ($(".interface-progress-progress-value", this.pagesBox).text("Pages: " + a.data.exp + "/" + a.data.expMax), this.pagesBox.data("isreadytolevel", !1), this.pagesBox.removeClass("interface-progress-clickable"));
            var e = a.getYouLocationElement(),
                f = e ? e.displayString : "";
            if (e) {
                for (var g = 0; g < e.displayLayers.length; g++) {
                    var h = e.displayLayers[g],
                        i = b.getImageFromId(h.info),
                        j = !0;
                    for (var k = 0; k < i.item.types.length; k++) {
                        var l = i.item.types[k];
                        i.item.type === "flash" && (j = !1)
                    }
                    j && (h.url = b.resolveDynamicImage(b.getImageFromId(h.info)))
                }
                var h = $("#_template-display-layers").tmpl(e.displayLayers);
                this.pictureBox.html(h)
            }
        },
        _updateProgress: function (a, b, c) {
            var d = $(".interface-progress-bar-wrapper", a),
                e = $(".interface-progress-progress-bar", a),
                f = $(e).width(),
                g = b / c,
                h = Math.floor(g * this._progressMaxWidth);
            g > 1 && (h = this._progressMaxWidth);
            if (h > 0 && h <= this._capWidth) d.width(this._capWidth), e.width(0);
            else {
                if (h <= 0) {
                    d.hide(), d.width(0), e.width(0);
                    return
                }
                h < this._progressMaxWidth ? $(".interface-progress-progress-bar-right", a).addClass("shadowed") : $(".interface-progress-progress-bar-right", a).removeClass("shadowed"), d.show(), d.width(h), e.width(h - this._capWidth)
            }
        },
        _makeGoldBar: function (a) {
            var b = $('<div id="interface-progress-gold" class="interface-progress"><div class="interface-progress-progress"><div id="interface-gold-icon"></div><div class="interface-progress-progress-value" id="interface-value-gold">' + c.addCommasInt(a) + "</div>" + "</div></div>");
            return b
        },
        _makeGoldHeader: function () {
            var a = $('<div id="interface-gold" title="' + _("gold") + '" class="clearfix interface-header">' + '<div class="left picon icon-gold"></div><div class="left value"></div>' + "</div>");
            return a
        },
        _makeWeightHeader: function () {
            var a = $('<div id="interface-weight" title="' + _("items") + '" class="clearfix interface-header">' + '<div class="left picon icon-backpack"></div><div class="left value"></div>' + "</div>");
            return a
        },
        _makeNewProgressBar: function (a) {
            var b = $('<div id="' + a + '" class="absolute interface-progress"><div class="interface-progress-progress">' + '<div class="interface-progress-progress-value"></div>' + '<div class="interface-progress-bar-wrapper">' + '<div class="interface-progress-progress-bar-left"></div>' + '<div class="interface-progress-progress-bar"></div>' + '<div class="interface-progress-progress-bar-right"></div>' + "</div></div></div>");
            return b
        },
        showTimer: function () {
            var a = this.data.timerTimeLeft,
                b = this.data.timerTimeTotal,
                d = a / b,
                e = d * MAX_PROGRESS_WIDTH;
            $(".el-progress-bar", this.timerBox).width(Math.floor(e)), $(".el-progress-value", this.timerBox).text(c.getFormattedTime(this.data.timerTimeLeft)), this.timerBox.show()
        },
        hideTimer: function () {
            this.timerBox.hide()
        },
        timerTick: function () {
            this.data.timerTimeLeft >= 1e3 ? this.data.timerTimeLeft -= 1e3 : this.data.timerTimeLeft = 0;
            var a = this.data.timerTimeLeft / this.data.timerTimeTotal,
                b = a * MAX_PROGRESS_WIDTH;
            $(".el-progress-bar", this.timerBox).width(Math.floor(b)), $(".el-progress-value", this.timerBox).text(c.getFormattedTime(this.data.timerTimeLeft))
        }
    }
}), define("display_layer_overlay", ["settings", "resources", "utils", "state"], function (a, b, c, d) {
    function f(a, b) {
        this._mapManager = a;
        var c = {
            fillColor: "#f00",
            fillOpacity: .2,
            strokeColor: "#f00",
            strokeOpacity: .8,
            strokeWidth: 4,
            polyData: [],
            lineData: [],
            target: null
        };
        this._raph = null, this._bounds = null, this.options = $.extend(c, b), this._calculateCoordBounds()
    }
    function e(a) {
        this.data = {}, this.position = null, this.zIndex = 0, this._mapManager = a, this._div = null, this._contentDiv = null, this._hasBeenAdded = !1, this._displayLayers = [], this._imageLayerMap = {}, this._waitingTutorialBubble = null, this._maxBounds = [0, 0], this._bounds = [0, 0, 0, 0], this._isEmulation = !1, this._targetContainer = null, this._queuedDisplayLayers = null, this._showBody = !1
    }
    LAYER_FLASH_DURATION = 300, LAYER_FLASH_TICK = 40, e.prototype = new google.maps.OverlayView, e.prototype.setIsEmulation = function (a) {
        this._isEmulation = a
    }, e.prototype.setTargetContainer = function (a) {
        this._targetContainer = a
    }, e.prototype.getSortedDisplayLayers = function () {
        var a = [],
            b = {};
        for (var c = 0; c < this._displayLayers.length; c++) {
            var d = this._displayLayers[c];
            a.push(d), b[d.info] = c
        }
        a.sort(function (a, c) {
            if (a.zOrder < c.zOrder) return -1;
            if (a.zOrder == c.zOrder) return b[a.info] - b[c.info];
            if (a.zOrder > c.zOrder) return 1;
            return 0
        });
        return a
    }, e.prototype.addImageLayer = function (a, c) {
        var d = this;
        if (this._imageLayerMap.hasOwnProperty(a)) return this._imageLayerMap[a];
        var e = document.createElement("img"),
            f = b.getImageFromId(a);
        e.onload = function () {
            d._addImage(d._contentDiv, f, !1, !1), d._positionImages()
        }, e.src = b.resolveDynamicImage(f), e.style.zIndex = c, this.zIndex = c, this._imageLayerMap[a] = e;
        return f
    }, e.prototype.removeImageLayer = function (a) {
        delete this._imageLayerMap[a]
    }, e.prototype.addDisplayLayers = function (a) {
        this._addDisplayLayers(this._contentDiv, a)
    }, e.prototype._addDisplayLayers = function (a, c) {
        var d = this;
        for (var e = 0; e < c.length; e++) {
            var f = c[e];
            f.sort_index = e
        }
        var g = this.getElement() ? this.getElement().elementId : this._mapManager.getTargetName();
        for (var e in c) {
            var f = c[e];
            if (f.info) {
                var h = b.getOwnedImageFromIdAndOwner(g, f.info);
                if (!h || !h.image) continue;
                h.image.style.zIndex = f.zOrder, this.zIndex = f.zOrder, d._addImage(a, h, f.isClickable, this.getElement() ? !0 : !1)
            }
        }
        this._positionImages()
    }, e.prototype._addImage = function (a, b, c, d) {
        var e = this,
            f = b.image;
        for (var g = 0; g < b.item.types.length; g++) {
            var h = b.item.types[g];
            switch (h) {
            case "flash":
                $(f).css({
                    opacity: 0
                }), $(a).append(f), require(["map_utils"], function (a) {
                    a.startFlashingImage(e, b, f, d)
                });
                break;
            case "bod":
            case "none":
                a.appendChild(f);
                break;
            default:
                console.error("Not handling image type! " + h), a.appendChild(f)
            }
        }
        $(f).data("isclickable", c)
    }, e.prototype.updateDisplayLayers = function (a) {
        if ( !! this._div && !! this._contentDiv) {
            var c = this,
                d = [];
            for (var e in a) {
                var f = a[e];
                d.push(f.info)
            }
            this.getElement() ? (require(["map_utils"], function (a) {
                a.endAllFlashingImages(c)
            }), b.requireOwnedImages(d, this.getElement().elementId, function () {
                $(c._contentDiv).html(""), c._displayLayers = a, c._imageLayerMap = {}, c.data.element.displayLayers = a;
                var b = c.getSortedDisplayLayers();
                c._addDisplayLayers(c._contentDiv, b), c._positionImages(), c.draw()
            })) : b.requireOwnedImages(d, this._mapManager.getTargetName(), function () {
                $(c._contentDiv).html(""), c._displayLayers = a, c._imageLayerMap = {};
                var b = c.getSortedDisplayLayers();
                c._addDisplayLayers(c._contentDiv, b), c._positionImages(), c.draw()
            })
        }
    }, e.prototype._calculateImageBounds = function (a) {
        var b = a.firstChild.firstChild;
        if ( !! b) {
            this._maxBounds[0] = b.width, this._maxBounds[1] = b.height, b.width != 0 && b.height != 0;
            var c = a.firstChild.childNodes;
            for (var d = 0; d < c.length; d++) {
                var e = c[d],
                    f = $(e).data("isclickable");
                f && (e.width > this._maxBounds[0] && (this._maxBounds[0] = e.width), e.height > this._maxBounds[1] && (this._maxBounds[1] = e.height))
            }
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                e.style.left = this._maxBounds[0] / 2 - e.width / 2 + "px", e.style.top = this._maxBounds[1] / 2 - e.height / 2 + "px"
            }
        }
    }, e.prototype._positionContainerDivMap = function (a) {
        var b = this,
            c = b.getProjection();
        cp = c.fromLatLngToDivPixel(b.position);
        var d = cp.x - b._maxBounds[0] / 2,
            e = cp.y - b._maxBounds[1] / 2,
            f = d + b._maxBounds[0],
            g = e + b._maxBounds[1];
        a.style.left = d + "px", a.style.top = e + "px";
        var h = c.fromDivPixelToLatLng(new google.maps.Point(d, e)),
            i = c.fromDivPixelToLatLng(new google.maps.Point(f, g));
        b._bounds[0] = h.lng(), b._bounds[1] = h.lat(), b._bounds[2] = i.lng(), b._bounds[3] = i.lat()
    }, e.prototype._positionContainerDivEmulated = function (a) {
        cp = this._mapManager.fromLatLngToDivPixel(this.position), a.style.left = "50%", a.style.top = "50%";
        var b = cp.x - this._maxBounds[0] / 2,
            c = cp.y - this._maxBounds[1] / 2;
        a.style.marginLeft = b + "px", a.style.marginTop = c + "px"
    }, e.prototype._positionImages = function () {
        var a = new Date,
            b = this,
            d = this.getDiv();
        if (!(!d || !this.getMap() && !this._isEmulation || !this.getProjection() && !this._isEmulation)) {
            var e = d.firstChild.firstChild;
            if (e) {
                this._calculateImageBounds(d);
                var f = null;
                this._isEmulation ? this._positionContainerDivEmulated(d) : this._positionContainerDivMap(d), d.style.display = "block", $(d).width(b._maxBounds[0]), $(d).height(b._maxBounds[1]), $(".map-display-layer-overlay-click", d).width(b._maxBounds[0]), $(".map-display-layer-overlay-click", d).height(b._maxBounds[1]), b.updateTimer()
            } else {
                if (!this.data.element) return;
                var g = this.data.element.displayLayers[0];
                if (!g) return;
                var h = g.vertices;
                if (h.length <= 0) return;
                var i = null,
                    j = null,
                    k = null,
                    l = null;
                for (var m = 0; m < h.length; m++) {
                    var n = h[m];
                    if (!i || n.lng < i) i = n.lng;
                    if (!k || n.lng > k) k = n.lng;
                    if (!j || n.lat < j) j = n.lat;
                    if (!l || n.lat > l) l = n.lat
                }
                if (!this._isEmulation) {
                    var o = b.getProjection();
                    f = o.fromLatLngToDivPixel(b.position);
                    var p = o.fromLatLngToDivPixel(new google.maps.LatLng(j, i)),
                        q = o.fromLatLngToDivPixel(new google.maps.LatLng(l, k)),
                        r = Math.abs(q.x - p.x),
                        s = Math.abs(q.y - p.y);
                    b._maxBounds[0] = r, b._maxBounds[1] = s, d.style.left = f.x - b._maxBounds[0] / 2 + "px", d.style.top = f.y - b._maxBounds[1] / 2 + "px"
                } else {
                    var t = c.LOCATION.DEGREE_E_6_PIXEL() * i,
                        u = c.LOCATION.DEGREE_E_6_PIXEL() * k,
                        v = c.LOCATION.DEGREE_E_6_PIXEL() * j,
                        w = c.LOCATION.DEGREE_E_6_PIXEL() * l,
                        r = Math.abs(u - t),
                        s = Math.abs(w - v);
                    b._maxBounds[0] = r, b._maxBounds[1] = s, f = this._mapManager.fromLatLngToDivPixel(b.position), d.style.left = "50%", d.style.top = "50%", d.style.marginLeft = f.x - b._maxBounds[0] / 2 + "px", d.style.marginTop = f.y - b._maxBounds[1] / 2 + "px"
                }
                d.style.display = "block", $(d).width(b._maxBounds[0]), $(d).height(b._maxBounds[1])
            }
            var x = new Date,
                y = x.getTime() - a.getTime()
        }
    }, e.prototype.addHpBar = function () {
        if ( !! d.getYouLocationElement()) {
            var a = this._div,
                b = this.data.element.hp,
                c = this.data.element.hpTotal,
                e = b / c;
            e > 1 && (e = 1);
            var f = $("#_template-hp-bar").tmpl({
                you: d.getYouLocationElement().elementId == this.data.element.elementId,
                left: (this._maxBounds[0] - MAX_PROGRESS_WIDTH) / 2,
                width: MAX_PROGRESS_WIDTH * e,
                zIndex: this.zIndex
            }).appendTo(a)
        }
    }, e.prototype.updateHp = function () {
        var a = this._div,
            b = this.data.element.hp,
            c = this.data.element.hpTotal,
            d = b / c;
        d > 1 && (d = 1), $(".el-progress-hp-bar", a).width(MAX_PROGRESS_WIDTH * d)
    }, e.prototype.getPixelForLocation = function (a) {
        if (!this._isEmulation) {
            var b = this.getProjection();
            return b ? b.fromLatLngToDivPixel(a) : null
        }
        return this._mapManager.fromLatLngToDivPixel(a)
    }, e.prototype.getPosition = function () {
        return this.position
    }, e.prototype.setPosition = function (a) {
        this.position = a
    }, e.prototype.updatePosition = function (a) {
        this.position = a, this.data.element.location = a, this.update()
    }, e.prototype.setDisplayLayers = function (a) {
        this._displayLayers = a
    }, e.prototype.setElement = function (a) {
        this.data.element = a, this._displayLayers = a.displayLayers, this.setPosition(new google.maps.LatLng(this.data.element.location.lat, this.data.element.location.lng)), this.update()
    }, e.prototype._timerTick = function () {
        if ( !! this.data.element) {
            this.data.element.timerTimeLeft >= 1e3 ? this.data.element.timerTimeLeft -= 1e3 : this.data.element.timerTimeLeft = 0;
            var a = this.data.element.timerTimeLeft / this.data.element.timerTimeTotal,
                b = a * MAX_PROGRESS_WIDTH,
                d = this.getDiv(),
                e = $(".el-progress-timer", d);
            $(".el-progress-bar", e).width(Math.floor(b)), $(".el-progress-value", e).text(c.getFormattedTime(this.data.element.timerTimeLeft))
        }
    }, e.prototype._showTimer = function () {
        if ( !! this.data.element) {
            !this.data.element.elementId !== d.data.yourId;
            var a = this.getDiv(),
                b = this.data.element.timerTimeLeft,
                e = this.data.element.timerTimeTotal,
                f = b / e,
                g = $("#_template-timer-bar").tmpl({
                    text: c.getFormattedTime(b),
                    left: (this._maxBounds[0] - MAX_PROGRESS_WIDTH) / 2,
                    width: MAX_PROGRESS_WIDTH * f,
                    zIndex: this.zIndex
                }).appendTo(a)
        }
    }, e.prototype._hideTimer = function () {
        var a = this.getDiv();
        $(".el-progress-timer", a).remove()
    }, e.prototype.updateTimer = function (a, b) {
        if ( !! this.data.element) {
            a != null && b != null && (this.data.element.timerTimeLeft = a, this.data.element.timerTimeTotal = b);
            var c = this.data.element.elementId === d.data.yourId;
            this.data.element.timerTimeLeft > 0 && !this._timerInterval && (this._showTimer(), this._timerInterval = setInterval($.proxy(this._timerTick, this), 1e3), c && require(["ui/interface"], function (c) {
                c.data.timerTimeLeft = a, c.data.timerTimeTotal = b, c.showTimer(), c.timerInterval = setInterval($.proxy(c.timerTick, c), 1e3)
            })), this.data.element.timerTimeLeft <= 0 && (this._hideTimer(), clearInterval(this._timerInterval), this._timerInterval = null, c && require(["ui/interface"], function (a) {
                a.hideTimer(), clearInterval(a.timerInterval), a._timerInterval = null
            }))
        }
    }, e.prototype.getElement = function () {
        return this.data.element
    }, e.prototype.getDiv = function () {
        return this.data.element ? document.getElementById("marker-element-" + this.data.element.elementId) : this._div
    }, e.prototype.onAdd = function () {
        var a = this,
            b = a.getSortedDisplayLayers();
        a._displayLayers = b;
        var c = document.createElement("div");
        a.data.element && c.setAttribute("id", "marker-element-" + a.data.element.elementId), c.className = "map-display-layer-overlay";
        var d = document.createElement("div");
        d.className = "map-display-layer-overlay-content", c.appendChild(d);
        var e = document.createElement("div");
        e.className = "map-display-layer-overlay-click", c.appendChild(e), a._div = c, a._contentDiv = d, a._addDisplayLayers(a._contentDiv, b), a._calculateImageBounds(a._div), this.getElement() && ($(a._div).data("elementId", this.getElement().elementId), this.getElement().hpTotal > 0 && this.addHpBar()), this._isEmulation ? (this._targetContainer.appendChild(a._div), this.getElement() && $(a._div).mouseup(function (b) {
            a.clickHandler(b, !1);
            return !0
        })) : google.maps.event.addDomListener(a._div, "click", function (b) {
            var c = {};
            for (var d in b) c[d] = b[d];
            a.clickHandler(c, !0)
        }), this._queuedDisplayLayers && (this.updateDisplayLayers(this._queuedDisplayLayers), this._queuedDisplayLayers = null), a._maxBounds = [0, 0]
    }, e.prototype.addDisplayLayerUpdate = function (a) {
        !this._div || !this._contentDiv ? this._queuedDisplayLayers = a : this.updateDisplayLayers(a)
    }, e.prototype.bindEmulationClickHandler = function () {
        var a = this;
        $(a._div).mouseup(function (b) {
            a.clickHandler(b);
            return !0
        })
    }, e.prototype.clickHandler = function (a, b) {
        var c = this;
        if (!(b && a.button != 0 || !b && a.which != 1)) {
            if (!c._isEmulation && c.getMap() && c.getMap()._didDrag) {
                c.getMap()._didDrag = !1;
                return
            }
            if (c._isEmulation && c._mapManager._currentTarget && c._mapManager._currentTarget._didDrag) {
                c._mapManager._currentTarget._didDrag = !1;
                return
            }
            var d = c._mapManager.getElementsUnderMouse(a, c);
            c._mapManager.processElementsUnderMouse(d);
            return
        }
    }, e.prototype._showHoverIndicator = function () {
        var a = this.getDiv();
        a && $(".hover", a).show()
    }, e.prototype._hideHoverIndicator = function () {
        var a = this.getDiv();
        a && $(".hover", a).hide()
    }, e.prototype.draw = function () {
        var a = new Date,
            b = this;
        if (!(!this._div || !this.getMap() && !this._isEmulation)) {
            if (!this._hasBeenAdded && !this._isEmulation) {
                var c = b.getPanes();
                c && (c.overlayMouseTarget.appendChild(b._div), this._hasBeenAdded = !0)
            } else this._hasBeenAdded = !0;
            this._hasBeenAdded && (b._positionImages(), this._tutorialBubble && this._tutorialBubble.get(0).parentElement ? this._positionTutorialBubble() : this.addTutorialBubble(this._waitingTutorialBubble), this._chatBubble && this._chatBubble.get(0).parentElement && this._positionChatBubble(), this._attentionCallback && this._attentionCallback())
        }
    }, e.prototype.update = function () {
        this.draw()
    }, e.prototype.onRemove = function () {
        clearInterval(this._timerInterval), this.deleteTutorialBubble(), this.deleteChatBubble();
        var a = this.getDiv();
        a && a.parentNode.removeChild(a)
    }, e.prototype.addTutorialBubble = function (a) {
        if ( !! a) {
            this._waitingTutorialBubble = a;
            if (!this._isEmulation && !this.getPanes()) return;
            var b = $("#_template-tutorial-bubble").tmpl(a);
            typeof a.onClick == "function" && $(b).click(function () {
                a.onClick();
                return !1
            });
            var c = $(this.getDiv()),
                d = c.position();
            this._tutorialBubble = b;
            if (!d) return;
            if (!this._isEmulation) {
                if (this.getPanes()) {
                    var e = this.getPanes().floatPane;
                    e && e.appendChild(b.get(0))
                }
            } else $("#map-drag").append(b);
            this._positionTutorialBubble()
        }
    }, e.prototype._positionTutorialBubble = function () {
        var a = $(this.getDiv()),
            b = a.position(),
            c = this._tutorialBubble;
        if (!this._isEmulation) c.css("top", b.top - c.outerHeight() - 30), c.css("left", b.left - c.outerWidth() / 2 + a.outerWidth() / 2);
        else {
            var d = parseInt(a.css("marginLeft"), 10),
                e = parseInt(a.css("marginTop"), 10);
            c.css({
                marginLeft: d - c.outerWidth() / 2 + a.outerWidth() / 2,
                marginTop: e - c.outerHeight() - 30,
                left: "50%",
                top: "50%"
            })
        }
    }, e.prototype.deleteTutorialBubble = function () {
        this.stopBouncing(), this._tutorialBubble && (this._tutorialBubble.remove(), this._tutorialBubble = null, this._waitingTutorialBubble = null)
    }, e.prototype.addChatBubble = function (b) {
        var c = this;
        if ( !! b) {
            this._chatBubble && this.deleteChatBubble(), this._waitingChatBubble = b;
            if (!this._isEmulation && !this.getPanes()) return;
            b.text.length > 60 && (b.text = b.text.substring(0, 60) + "...");
            var d = $('<div class="text-sizer">' + b.text + "</div>");
            $("body").append(d);
            var e = $(d).width();
            $(d).remove();
            var f = $("#_template-chat-bubble").tmpl(b);
            $(f).click(function () {
                c.deleteChatBubble();
                var a = $(this).data("rid");
                console.log("Showing chat room:", a), $(document).trigger("action.chat.room.show", [a]);
                return !1
            });
            var g = Math.min(e + 120, 220);
            $(f).width(g);
            var h = (g - 53) / 2;
            $(".chat-bubble-tile-left", f).width(h), $(".chat-bubble-tile-right", f).width(h), $(".chat-bubble-content", f).width(g), $(".chat-bubble-content .dropdown-text > div", f).width(g - 64), this._chatTimeout = setTimeout(function () {
                c.removeChatBubble()
            }, a.CHAT_MESSAGE_DURATION);
            var i = $(this.getDiv()),
                j = i.position();
            this._chatBubble = $(f);
            if (!j) return;
            if (!this._isEmulation) {
                if (this.getPanes()) {
                    var k = this.getPanes().floatPane;
                    k && k.appendChild($(f).get(0))
                }
            } else $("#map-drag").append(f);
            this._positionChatBubble()
        }
    }, e.prototype._positionChatBubble = function () {
        var a = $(this.getDiv()),
            b = a.position(),
            c = this._chatBubble;
        if (!this._isEmulation) c.css("top", b.top - c.outerHeight() - 20), c.css("left", b.left - c.outerWidth() / 2 + a.outerWidth() / 2);
        else {
            var d = parseInt(a.css("marginLeft"), 10),
                e = parseInt(a.css("marginTop"), 10);
            c.css({
                marginLeft: d - c.outerWidth() / 2 + a.outerWidth() / 2,
                marginTop: e - c.outerHeight() - 20,
                left: "50%",
                top: "50%"
            })
        }
    }, e.prototype.deleteChatBubble = function () {
        this._chatBubble && (this._chatBubble.remove(), this._chatBubble = null, this._waitingChatBubble = null, clearTimeout(this._chatTimeout))
    }, e.prototype.removeChatBubble = function () {
        var a = this;
        this._chatBubble && this._chatBubble.animate({
            opacity: 0
        }, 200, function () {
            a._chatBubble.remove(), a._chatBubble = null
        })
    }, e.prototype.startBouncing = function () {
        var a = this;
        this._bounceTimeout = setTimeout(function b() {
            var c = a.getDiv();
            c ? (c = $(c), a._isEmulation ? c.animate({
                marginTop: "-=20px"
            }, 600, "linear").animate({
                marginTop: "+=20px"
            }, 600, "linear", function () {
                a._bounceTimeout = setTimeout(b, 10)
            }) : c.animate({
                top: "-=20px"
            }, 600, "linear").animate({
                top: "+=20px"
            }, 600, "linear", function () {
                a._bounceTimeout = setTimeout(b, 10)
            })) : a._bounceTimeout = setTimeout(b, 100)
        }, 10)
    }, e.prototype.stopBouncing = function () {
        clearTimeout(this._bounceTimeout)
    }, f.prototype = new google.maps.OverlayView, f.prototype._calculateCoordBounds = function () {
        var a = null,
            b = null,
            c = null,
            d = null,
            e = this.options.polyData;
        for (var f in e) {
            var g = e[f];
            if (!a || g.lng < a) a = g.lng;
            if (!b || g.lat < b) b = g.lat;
            if (!c || g.lng > c) c = g.lng;
            if (!d || g.lat > d) d = g.lat
        }
        this._bounds = [new google.maps.LatLng(b, a), new google.maps.LatLng(d, c)]
    }, f.prototype.onAdd = function () {
        this._canvas = document.createElement("div")
    }, f.prototype.draw = function () {
        var a = this;
        if ( !! this.getMap() && !! this.getProjection()) {
            if (!this._hasBeenAdded) {
                var b = a.getPanes();
                b && (b.overlayMouseTarget.appendChild(a._canvas), this._hasBeenAdded = !0)
            }
            var c = this.getProjection();
            if (!this._raph) {
                var d, e;
                d = c.fromLatLngToDivPixel(this._bounds[0]), e = c.fromLatLngToDivPixel(this._bounds[1]);
                var f = [d.x + (e.x - d.x) / 2, d.y + (e.y - d.y) / 2];
                this._raph = Raphael(this._canvas, f[0], f[1], Math.abs(e.x - d.x), Math.abs(e.y - d.y))
            }
            var g = [],
                h = this.options.polyData;
            for (var i in h) {
                var j = h[i],
                    k = this._mapManager.loc(j),
                    l = c.fromLatLngToDivPixel(k);
                i == 0 ? g.push("M" + l.x + " " + l.y) : this.options.lineData[i] ? g.push("L" + l.x + " " + l.y) : g.push("M" + l.x + " " + l.y)
            }
            g.push("z");
            var m = this._raph.path(g.join(""));
            m.attr({
                fill: a.options.fillColor,
                "fill-opacity": a.options.fillOpacity,
                stroke: a.options.strokeColor,
                "stroke-opacity": a.options.strokeOpacity,
                "stroke-width": a.options.strokeWidth
            }), m.show();
            var b = this.getPanes();
            $(this._canvas).width(this._raph.width), $(this._canvas).height(this._raph.height), b.overlayImage.appendChild(this._canvas)
        }
    }, f.prototype.onRemove = function () {};
    return {
        newOverlay: function (a) {
            return new e(a)
        },
        getOverlayType: function (a) {
            switch (a) {
            case "bubble":
                return BubbleLayerOverlay;
            case "poly":
                return f;
            default:
                return null
            }
        }
    }
}), define("auth/facebook", ["net", "authstates", "resources", "ui", "ui/window", "state", "settings", "utils"], function (a, b, c, d, e, f, g, h) {
    return {
        _autoGenCharacterAttempts: 0,
        init: function (a) {
            this._game = a, this._bindNetHandlers()
        },
        _bindNetHandlers: function () {
            var c = this;
            a.onState(b.FAILED, function (a) {
                setTimeout(function () {
                    d.showDropDown(_("error_cant_connect"))
                }, 2e3)
            }), a.onState(b.CONNECTED, function (b) {
                d.startLoading(a.getAuthState()), d.loadPageArt()
            }), a.onState(b.INITED, function (b) {
                d.loadingStep(a.getAuthState())
            }), a.onState(b.MUST_LOGIN, function (b) {
                c.hasAuth() ? (d.loadingStep(a.getAuthState()), a.authenticate(pk.state.fbCharacterName, pk.state.fbHash)) : (d.endLoading(), e.showNewFbCreateScreen())
            }), a.onState(b.MUST_VERIFY, function (b) {
                d.showStringPromptWindow({
                    stringPromptDisplay: _("web_verify_email")
                }, function (b) {
                    var c = {
                        fullName: "VerifyEmail1",
                        email: b
                    };
                    a.post(c)
                })
            }), a.onState(b.CREATE, function (a) {}), a.onState(b.AUTH_ERROR_LOGIN, function (a) {
                d.endLoading(), e.showFacebookLoginError(a)
            }), a.onState(b.AUTH_ERROR_CREATE, function (a) {
                d.endLoading(), e.showNewFbCreateError(a)
            }), a.onState(b.GAME_SERVER_CONNECT_TO, function (b) {
                d.hideEntranceWindows(), d.startLoading(), d.loadingStep(a.getAuthState())
            }), a.onState(b.GAME_SERVER_CLIENT_INFO, function (b) {
                d.loadingStep(a.getAuthState())
            }), a.onState(b.GAME_SERVER_CONNECTED, function (b) {
                d.loadingStep(a.getAuthState());
                if (a.getDidCreateCharacter()) {
                    var e = a.getLoginData(),
                        f = e.pwh || this.userPrefs.pwh,
                        g = e.username || this.userPrefs.username,
                        h = {
                            characterName: g,
                            hash: f,
                            EnteredRefCode: e.EnteredRefCode
                        };
                    h.FacebookID = pk.state.fbUserId, a.created(h, function (a) {})
                }
                c.loadGameData(function () {
                    $("#window-loading").dialog("close"), b.yourId === "TUTCLIENT" ? c._game.startClientTutorial(b) : c._game.startGame(b)
                })
            })
        },
        loadGameData: function (a) {
            c.fakeLoadAllImages(function () {
                $("#game-w").show(), a()
            }, function (a, b, c) {
                d.updateLoadingProgress(a, b, "Loaded image " + c.id)
            })
        },
        getAge: function (a) {
            var b = new Date,
                c = new Date(a),
                d = b.getFullYear() - c.getFullYear(),
                e = b.getMonth() - c.getMonth();
            (e < 0 || e === 0 && b.getDate() < c.getDate()) && d--;
            return d
        },
        getGeneratedUser: function (a) {
            var b = pk.state.fbFirstName,
                c = a > 0 ? b + (100 + a) : b,
                d = this.getAge(pk.state.fbBirthday),
                e = {
                    name: c,
                    password: h.genpwd(),
                    email: pk.state.fbEmail,
                    age: d,
                    gender: pk.state.fbGender.toUpperCase()
                };
            pk.state.fbLatitude && pk.state.fbLongitude && (e.location = {
                lat: pk.state.fbLatitude,
                lng: pk.state.fbLongitude
            });
            return e
        },
        isInFrame: function () {
            return pk.state.isFacebook === !0
        },
        hasAuth: function () {
            return pk.state.fbCharacterName && pk.state.fbHash
        }
    }
}), define("auth/kongregate", ["net", "authstates", "resources", "ui", "ui/window", "state", "settings", "utils"], function (a, b, c, d, e, f, g, h) {
    return {
        _autoGenCharacterAttempts: 0,
        _didBindListeners: !1,
        _detectedLocation: null,
        preInit: function () {
            if (!parent.kongregateAPI) console.error("Tried to init kongregate when not inside kongregate");
            else {
                var a = parent.kongregateAPI.getAPI();
                this.api = a;
                if (!a || !a.services) {
                    console.error("Tried to init kongregate when not inside kongregate");
                    return
                }
            }
        },
        init: function (a) {
            this._game = a, this._bindNetHandlers()
        },
        _bindNetHandlers: function () {
            var c = this;
            a.onState(b.FAILED, function (a) {
                setTimeout(function () {
                    require(["ui"], function (a) {
                        a.showDropDown(_("error_cant_connect"))
                    })
                }, 2e3)
            }), a.onState(b.CONNECTED, function (a) {
                require(["ui"], function (a) {
                    a.loadPageArt()
                })
            }), a.onState(b.INITED, function (a) {}), a.onState(b.MUST_LOGIN, function (b) {
                c._didBindListeners || (c.api.services.addEventListener("login", $.proxy(c.onKongUserLogin, c)), c.api.services.isGuest() ? (console.log("Kongregate guest, logging in"), e.showKongLandingScreen()) : c.onKongUserLogin(), c._didBindListeners = !0), require(["ui"], function (b) {
                    b.loadingStep(a.getAuthState())
                })
            }), a.onState(b.MUST_VERIFY, function (a) {}), a.onState(b.MUST_CREATE, function (b) {
                console.log("MUST CREATE", b), c._savedRefCode = b.EnteredRefCode, a.create(b)
            }), a.onState(b.CREATE, function (a) {}), a.onState(b.AUTH_ERROR_LOGIN, function (a) {
                require(["ui"], function (b) {
                    b.endLoading(), e.showKongLoginError(a)
                })
            }), a.onState(b.AUTH_ERROR_CREATE, function (a) {
                require(["ui"], function (b) {
                    b.endLoading(), e.showKongCreateError(a)
                })
            }), a.onState(b.GAME_SERVER_CONNECT_TO, function (b) {
                require(["ui"], function (b) {
                    b.hideEntranceWindows(), b.loadingStep(a.getAuthState())
                })
            }), a.onState(b.GAME_SERVER_CLIENT_INFO, function (b) {
                require(["ui"], function (b) {
                    b.hideLoginWindow(), b.startLoading(a.getAuthState()), b.loadingStep(a.getAuthState())
                })
            }), a.onState(b.GAME_SERVER_CONNECTED, function (b) {
                require(["ui"], function (b) {
                    b.startLoading(a.getAuthState())
                });
                if (a.getDidCreateCharacter()) {
                    var d = a.getLoginData(),
                        e = d.pwh || this.userPrefs.pwh,
                        f = d.username || this.userPrefs.username,
                        g = c.getUserInfo(),
                        h = {
                            CharacterName: f,
                            Hash: e
                        };
                    h.KongUserId = g[0], h.KongUserName = g[1], h.KongGameAuthToken = g[2], h.EnteredRefCode = d.EnteredRefCode, a.created(h, function (a) {})
                }
                c.loadGameData(function () {
                    $("#window-loading").dialog("close"), b.yourId === "TUTCLIENT" ? c._game.startClientTutorial(b) : c._game.startGame(b)
                })
            })
        },
        loadGameData: function (a) {
            c.fakeLoadAllImages(function () {
                $("#game-w").show(), a()
            }, function (a, b, c) {
                require(["ui"], function (d) {
                    d.updateLoadingProgress(a, b, "Loaded image " + c.id)
                })
            })
        },
        onKongUserLogin: function (a) {
            var b = this;
            e.hideKongLandingScreen();
            var c = this.api.services.getUserId(),
                d = this.api.services.getUsername(),
                f = this.api.services.getGameAuthToken();
            console.log("Kongregate user login", [c, d, f]), pk.state.kongUserName = d, pk.state.kongUserId = c, pk && pk.state && (pk.state.kongGameAuthToken = f), $.get("/game/konglogin", {
                KongUserId: c,
                KongGameAuthToken: f
            }, function (a) {
                a.EnteredRefCode && (b._savedRefCode = a.EnteredRefCode, refCode = a.EnteredRefCode), a.result !== "no_such_user" ? (pk.state.kongCharacterName = a.CharacterName, pk.state.kongHash = a.Hash, b._loginKongUser(pk.state.kongCharacterName, pk.state.kongHash)) : b._showCreateScreen()
            })
        },
        _showCreateScreen: function () {
            e.showKongCreateScreen()
        },
        _loginKongUser: function (b, c) {
            this.hasAuth() ? a.authenticate(pk.state.kongCharacterName, pk.state.kongHash) : console.error("NO AUTH ON KONG LOGIN!")
        },
        _createKongUser: function () {
            if (this.api.services.isGuest()) console.error("Tried to create a kong user when still a guest!");
            else {
                var b = this;
                if (b._detectedLocation) {
                    var c = b.getGeneratedUser(b._autoGenCharacterAttempts);
                    $.extend(c, b._detectedLocation), a.create(c)
                } else require(["ui"], function (c) {
                    c.showGeneratedLocatingYouWindow(function (c) {
                        b._detectedLocation = c;
                        var d = b.getGeneratedUser(b._autoGenCharacterAttempts);
                        $.extend(d, c), a.create(d)
                    })
                })
            }
        },
        getGeneratedUser: function (a) {
            var b = this.getUserInfo(),
                c = a > 0 ? b[1] + Math.floor(Math.random() * 1e3) : b[1];
            return {
                name: c,
                password: h.genpwd(),
                email: "KONG-USER" + h.guid().replace(/-/g, "") + "@parallelkingdom.com",
                age: "18",
                gender: "MALE"
            }
        },
        getUserInfo: function () {
            var a = this.api.services.getUserId(),
                b = this.api.services.getUsername(),
                c = this.api.services.getGameAuthToken();
            return [a, b, c]
        },
        showFoodPage: function (a) {
            var b = this;
            this.api.mtx.purchaseItems([a], function (a) {
                b.api.mtx.requestUserItemList(null, function (a) {
                    e.showPurchasePopup();
                    var c = b.getUserInfo();
                    console.log(a);
                    for (var d = 0; d < a.length; d++) {
                        var f = a[d];
                        console.log("User has item", f)
                    }
                    require(["state", "settings"], function (a, b) {
                        var d = a.getYouLocationElement(),
                            e = d ? d.name : null;
                        $.ajax({
                            url: b.KONG_PURCHASE_ENDPOINT,
                            type: "GET",
                            data: {
                                game_auth_token: c[2],
                                user_id: c[0],
                                characterID: a.data.yourId,
                                userName: e,
                                userEmail: a.data.email
                            },
                            dataType: "jsonp",
                            success: function (a) {
                                console.log(a)
                            }
                        })
                    })
                })
            })
        },
        checkForPurchases: function () {
            var a = this;
            this.api.mtx.requestUserItemList(null, function (b) {
                b.data.length > 0 && e.showPurchasePopup();
                var c = a.getUserInfo();
                if ( !! c) {
                    var d = f.getYouLocationElement(),
                        h = d ? d.name : null;
                    $.ajax({
                        url: g.KONG_PURCHASE_ENDPOINT,
                        type: "GET",
                        data: {
                            game_auth_token: c[2],
                            user_id: c[0],
                            characterID: f.data.yourId,
                            userName: h,
                            userEmail: f.data.email
                        },
                        dataType: "jsonp",
                        success: function (a) {
                            console.log(a)
                        }
                    })
                }
            })
        },
        showSignInBox: function () {
            !this.isInFrame() || this.api.services.showRegistrationBox()
        },
        isInFrame: function () {
            var a = !1;
            try {
                if (!parent.kongregateAPI || !this.api || !this.api.services) return !1;
                return !0
            } catch (b) {
                return !1
            }
        },
        hasAuth: function () {
            return pk.state.kongCharacterName && pk.state.kongHash
        }
    }
}), define("fb", ["settings", "utils"], function (a, b) {
    return {
        _isReady: !1,
        _shouldRun: !1,
        hasLocation: !1,
        hasAuth: !1,
        me: null,
        parseAge: function (a) {
            var b = a.split("/");
            if (b.length < 3) return null;
            var c = b[0],
                d = b[1],
                e = b[2];
            if (c == "" || d == "" || e == "") return null;
            var f = new Date(e, c, d),
                g = new Date,
                h = g - f,
                i = 31558464e3,
                j = h / i;
            if (Math.floor(j) < 13) return null;
            return Math.floor(j)
        },
        setShouldRun: function (a) {
            this._shouldRun = a
        },
        connectSubscribe: function (a) {
            var b = this;
            this._connectSubscribe = a
        },
        onConnect: function (a) {
            var b = this;
            typeof this._connectSubscribe == "function" && FB.getLoginStatus(function (a) {
                b._connectSubscribe(a)
            })
        },
        isReady: function () {
            return this._isReady
        },
        ready: function () {
            this._isReady = !0, this._shouldRun && this.go()
        },
        go: function () {
            if ( !! this._shouldRun) {
                this._shouldRun = !1, console.log("FB: getting login status.");
                var a = this;
                FB.getLoginStatus(function (b) {
                    console.log("FB: login status response"), console.log(b), b.session && (console.log("FB: active session, getting me data"), require(["stats"], function (a) {
                        a.demos({})
                    }), typeof callback == "function" && callback(loginResponse), a._getMe(b))
                })
            }
        },
        tryLogin: function (a) {
            var b = this;
            FB.getLoginStatus(function (b) {
                console.log("FB: trying login"), console.log(b), b.session && (console.log("FB: active session, getting me data"), require(["stats"], function (a) {
                    a.demos({})
                }), a(b))
            })
        },
        getLocation: function (a) {
            var b = this;
            FB.getLoginStatus(function (c) {
                console.log("FB: trying login"), console.log(c);
                if (c.status === "connected") {
                    var d = c.authResponse.userID,
                        e = c.authResponse.accessToken;
                    console.log("FB: active session, getting me data"), require(["stats"], function (a) {
                        a.demos({})
                    }), b._getMe(c, a)
                } else a(null)
            })
        },
        friendFriends: function () {
            FB.getLoginStatus(function (a) {
                if (a.session) var b = FB.Data.query("select uid, name, is_app_user from user where uid in (select uid2 from friend where uid1=me()) and is_app_user=1")
            })
        },
        _doAuthPrompt: function (b) {
            var c = this;
            FB.ui({
                method: "permissions.request",
                perms: a.FB_PERMS_REQUESTED,
                display: "popup"
            }, function (a) {
                console.log("Auth response"), console.log(a), a.perms && c._getMe(a, function () {})
            })
        },
        onAllow: function (a) {
            this._getMe(a)
        },
        _getMe: function (a, b) {
            var c = this;
            FB.api("/me", function (d) {
                console.log("FB: me response"), console.log(d), c._processMe(a, d, b)
            })
        },
        _processMe: function (a, b, c) {
            var d = this;
            console.log("Processing me facebook data"), this.me = b, this.me.age = this.parseAge(b.birthday), b.location ? FB.api("/" + b.location.id, function (e) {
                console.log("FB: location response"), console.log(e), d._processLocation(e), typeof c == "function" && c(a, b, e)
            }) : typeof c == "function" && c(a, b, null)
        },
        _processLocation: function (a, b) {
            var c = this;
            console.log("Processing location facebook data"), console.log(a), a.location && (c.hasLocation = !0, c.me.graph_location = a.location)
        }
    }
}), define("countries", [], function () {
    return ["United States", "Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire, Saint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos Islands", "Colombia", "Comoros", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territory", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of the Congo", "Reunion", "Romania", "Russia", "Rwanda", "Saint Barthélemy", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Korea", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "U.S. Virgin Islands", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican", "Venezuela", "Vietnam", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"]
}), define("ui/window", ["state", "utils", "net", "resources", "settings", "fb", "countries"], function (a, b, c, d, e, f, g) {
    NUMBER_LOADING_STEPS = 15, LOADING_MIDDLE_WIDTH = 602;
    return {
        createData: {},
        _tipInterval: null,
        _loadingTimeout: null,
        showLoadingWindowWithMessage: function (a, b) {
            this.showLoadingWindow(), $("#window-loading-tips").html(a)
        },
        showLoadingWindow: function (a, b, c) {
            var d = this;
            if ($("#window-loading").length == 0) {
                var e = $("#template-loading").tmpl({});
                $(e).translate(), this.loading = $("#loading").append(e)
            }
            a < NUMBER_LOADING_STEPS && $("#window-loading-progress-bar-right").hide(), a <= 1 && $("#window-loading-progress-bar-middle").width(0), b ? $("#loading-w").css("opacity", 0).show().animate({
                opacity: 1
            }, 350) : $("#loading-w").css("opacity", 1).show(), c && (this._loadingTimeout = setTimeout(function f() {
                var a = $("#window-loading-progress-bar-middle").width(),
                    b = Math.random() * 100;
                a + b >= LOADING_MIDDLE_WIDTH ? $("#window-loading-progress-bar-middle").width(LOADING_MIDDLE_WIDTH) : $("#window-loading-progress-bar-middle").width(a + b);
                var c = Math.random() * 2e3;
                this._loadingTimeout = setTimeout(f, c)
            }, 1))
        },
        hideLoadingWindow: function () {
            this.loading && ($("#loading-w").animate({
                opacity: 0
            }, 500, function () {
                $(this).hide()
            }), clearTimeout(this._loadingTimeout))
        },
        updateLoadingWindow: function (a) {
            console.log("LOADING", a + "/" + NUMBER_LOADING_STEPS);
            var b = a / NUMBER_LOADING_STEPS;
            b >= 1 ? ($("#window-loading-progress-bar-middle").width(LOADING_MIDDLE_WIDTH), $("#window-loading-progress-bar-right").show()) : ($("#window-loading-progress-bar-right").hide(), $("#window-loading-progress-bar-middle").animate({
                width: b * LOADING_MIDDLE_WIDTH
            }, 150, "linear")), console.log("Step: " + a + " , of " + NUMBER_LOADING_STEPS)
        },
        clearLoadingWindow: function () {
            $("#window-loading-progress-bar-middle").width(0), $("#window-loading-progress-bar-right").hide()
        },
        loadingTipsReady: function () {
            function b() {
                var b = a.getTips();
                if (b !== null) {
                    var c = b[Math.floor(Math.random() * b.length)];
                    $("#window-loading-tips").text(c)
                }
            }
            clearInterval(this._tipInterval), b(), this._tipInterval = setInterval(b, e.TIPS_TIMEOUT)
        },
        _canCreate: !1,
        setCanCreate: function (a) {
            this._canCreate = !0
        },
        showLoginError: function (a) {
            $(".loading", this.newLoginScreen).hide(), this.showNewLoginScreen(), a.errorType == "RETRY_EMAIL" && this.fbHasLocation ? $(".errors", this.newLoginScreen).text(_("web_error_facebook_email")) : a.errorType == "RETRY_YOU_DONT_EXIST" ? $(".errors", this.newLoginScreen).text(_("web_error_dont_exist")) : $(".errors", this.newLoginScreen).text(a.errorMessage), $(".errors", this.newLoginScreen).show()
        },
        showFacebookLoginError: function (a) {
            $(".loading", this.newFbLoginScreen).hide(), this.showNewFbLoginScreen(), a.errorType == "RETRY_EMAIL" && this.fbHasLocation ? $(".errors", this.newFbLoginScreen).text(_("web_error_facebook_email")) : a.errorType == "RETRY_YOU_DONT_EXIST" ? $(".errors", this.newFbLoginScreen).text(_("web_error_dont_exist")) : $(".errors", this.newFbLoginScreen).text(a.errorMessage), $(".errors", this.newFbLoginScreen).show()
        },
        showKongLoginError: function (a) {
            $(".loading", this.kongLoginScreen).hide(), this.showKongLoginScreen(), a.errorType == "RETRY_YOU_DONT_EXIST" ? $(".errors", this.kongLoginScreen).text(_("web_error_dont_exist")) : $(".errors", this.kongLoginScreen).text(a.errorMessage), $(".errors", this.kongLoginScreen).show()
        },
        showKongCreateError: function (a) {
            var b = this;
            $(".loading", this.kongCreateScreen).hide(), this.showKongCreateScreen(), $(this.locatingYouScreen).fadeOut(100, function () {
                $(b.kongCreateScreen).fadeIn(100)
            }), a.errorType == "RETRY_EMAIL" && this.fbHasLocation ? $(".errors", this.kongCreateScreen).text(_("web_error_facebook_email")) : a.errorType == "RETRY_YOU_DONT_EXIST" ? $(".errors", this.kongCreateScreen).text(_("web_error_dont_exist")) : $(".errors", this.kongCreateScreen).text(a.errorMessage), $(".errors", this.kongCreateScreen).show()
        },
        showBookmarkPopup: function () {
            this.bookmarkPopup = $("#template-bookmark").tmpl();
            var a = $('<div class="entrance-window user-closable"><div class="entrance-window-content"></div></div>');
            $(":first", a).append(this.bookmarkPopup), $(a).translate(), a.appendTo("body"), a.css({
                marginLeft: -$(a).width() / 2,
                marginTop: -$(a).height() / 2
            });
            var b = this;
            $(".close", a).click(function () {
                b.hideBookmarkPopup();
                return !1
            }), a.show(), this.bookmarkPopup = a
        },
        hideBookmarkPopup: function () {
            this.bookmarkPopup.hide()
        },
        showPurchasePopup: function () {
            this.purchasePopup = $("#template-purchase").tmpl();
            var a = $('<div class="entrance-window super-high user-closable"><div class="entrance-window-content"></div></div>');
            $(":first", a).append(this.purchasePopup), $(a).translate(), a.appendTo("body"), a.css({
                marginLeft: -$(a).width() / 2,
                marginTop: -$(a).height() / 2
            });
            var b = this;
            $(".close", a).click(function () {
                b.hidePurchasePopup();
                return !1
            }), a.show(), this.purchasePopup = a
        },
        hidePurchasePopup: function () {
            this.purchasePopup.hide()
        },
        showSupportWindow: function () {
            $("#support-w").show();
            var b = a.data && a.data.email ? a.data.email : null,
                c = $("#template-support").tmpl({
                    email: b
                });
            $(c).translate(), $("#support").html(c), $("#window-support-close").click(function () {
                $("#support-w").hide();
                return !1
            }), $("#window-support-back").click(function () {
                $(this).hide(), $("#window-support-request-screen").hide(), $("#window-support-screen").show();
                return !1
            }), $("#support-request").click(function () {
                $("#window-support-screen").hide(), $("#window-support-request-screen").show(), $("#window-support-back").show();
                return !1
            }), $("#support-submit").click(function () {
                var b = a.getYouLocationElement(),
                    c = b ? b.name : null,
                    d = b && b.elementId.toLowerCase() !== "you" ? b.elementId : null,
                    f = a.data && a.data.email ? a.data.email : $("#support-email").val();
                $("#window-support-loading").show(), $("#window-support-errors").hide(), $.ajax({
                    url: e.CLIENT_SUPPORT_PATH,
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    type: "POST",
                    data: JSON.stringify({
                        CharacterId: d,
                        CharacterName: c,
                        Email: f,
                        Name: $("#support-name").val(),
                        Subject: $("#support-subject").val(),
                        Text: $("#support-text").val()
                    }),
                    success: function (a) {
                        $("#window-support-loading").hide(), a.fullName.indexOf("Error") >= 0 ? $("#window-support-errors").show().text(a.errorMessage) : ($("#support-w").hide(), $("#window-support-screen").show(), $("#window-support-request-screen").hide(), $("#window-support-back").hide(), require(["ui"], function (a) {
                            a.showDropDown(_("web_support_success"))
                        }), console.log("Successfully sent stats"))
                    }
                });
                return !1
            })
        },
        hideSupportWindow: function () {
            $("#support-w").hide()
        },
        buttonClicked: function (a) {
            require(["sounds"], function (b) {
                b.play(b.fromClickType(a))
            })
        },
        showActionWindowForElement: function (a, b, c) {
            var d = this,
                f = function (c, d) {
                    var e;
                    b && (e = function (a) {
                        b(a, d)
                    }), console.log("clicked on " + c), console.log("Performing action: " + d.command), $(document).trigger("action.element.doAction", [a, d, e]);
                    return !1
                },
                g = a.displayString;
            e.ACTIVE.debug_inspect && (g = g + " - " + a.elementId), this.showActionWindow(_("select_action_on", g), a, "elementId", f, c)
        },
        showActionWindow: function (a, c, d, e, f) {
            var g = this;
            f || (f = function () {});
            for (var h = 0; h < c.actions.length; h++) {
                var i = c.actions[h];
                i.displayString = b.UI.parseDisplayString(i.displayString)
            }
            c.idField = c[d], a = b.UI.parseDisplayString(a, !0);
            var j = b.calculateTextWidth(a, {
                "font-family": "Helvetica, Arial, sans-serif",
                "font-size": "12px"
            }),
                k = $("#template-action").tmpl({
                    title: a,
                    multipleLines: j > 300,
                    actions: c.actions,
                    data: c
                });
            k.find(".window-prompt-title span").css({
                color: ""
            }), $(k).translate(), this.actionDialog = $(k).dialog({
                dialogClass: "window",
                draggable: !1,
                resizable: !1,
                modal: !0,
                width: 324,
                height: "auto"
            }), $(".prompt-cancel-button").unbind("click"), $(".prompt-cancel-button").click(function () {
                g.buttonClicked("cancel"), f(), g.hideActionWindow();
                return !1
            }), $(".window-prompt li a").unbind("click"), $(".window-prompt li a").click(function (a) {
                g.buttonClicked("action");
                var b = $(this).closest(".window-prompt").data("idfield"),
                    d = $(this).data("actioncommand"),
                    f = null;
                for (var h in c.actions) {
                    var i = c.actions[h];
                    if (i.command === d) {
                        f = i;
                        break
                    }
                }
                if (!f) logger.error("Unable to find action for that command!");
                else {
                    g.actionDialog.dialog("destroy").remove();
                    return e(b, f)
                }
            })
        },
        hideActionWindow: function () {
            this.actionDialog.dialog("destroy").remove()
        },
        showPromptWindow: function (a, b) {
            a.title ? a.multipleLines === undefined && (a.multipleLines = $("<span />").append(a.title).text().length > e.MULTIPLE_LINE_MIN_LENGTH) : (a.title = '<span data-i="are_you_sure_you_want_to" /> ' + a.displayString + "?", a.multipleLines = $(a.displayString).text().length + 27 > e.MULTIPLE_LINE_MIN_LENGTH);
            var c = $("#template-prompt").tmpl(a);
            $(c).translate();
            var d = this;
            this.promptDialog = $(c).dialog({
                dialogClass: "window",
                draggable: !1,
                resizable: !1,
                modal: !0,
                width: "auto"
            }), $(".window-prompt li a").unbind("click"), $(".window-prompt .button-yes").click(function () {
                d.buttonClicked("prompt"), d.promptDialog.dialog("destroy").remove(), b(!0);
                return !1
            }), $(".window-prompt .button-no").click(function () {
                d.buttonClicked("cancel"), a.intResponse = "", a.stringResponse = "", d.promptDialog.dialog("destroy").remove(), b(!1);
                return !1
            });
            return !1
        },
        showButtonPrompt: function (a, c) {
            var d = this;
            a = b.UI.parseDisplayString(a);
            var e = $("#template-prompt-buttons").tmpl({
                title: a,
                buttonsWithCallbacks: c
            });
            $(".prompt-button", e).unbind("click"), $(".prompt-button", e).each(function (a) {
                $(this).click(function () {
                    d.buttonClicked("prompt"), d.promptDialog.dialog("destroy").remove(), c[a].callback();
                    return !1
                })
            }), $(e).translate(), this.promptDialog = $(e).dialog({
                dialogClass: "window",
                draggable: !1,
                resizable: !1,
                modal: !0,
                width: "auto"
            }), $(".prompt-cancel-button", e).unbind("click"), $(".prompt-cancel-button", e).click(function () {
                d.buttonClicked("cancel"), d.hidePromptWindow();
                return !1
            })
        },
        hidePromptWindow: function () {
            this.promptDialog.dialog("destroy").remove()
        },
        showMultiPromptWindow: function (a, c, d, f, g) {
            d || (d = function () {}), a.multipleLines = $(a.displayString).text().length > e.MULTIPLE_LINE_MIN_LENGTH, a.displayString = b.UI.parseDisplayString(a.displayString), a.intPromptDisplay = b.UI.parseDisplayString(a.intPromptDisplay), a.stringPromptDisplay = b.UI.parseDisplayString(a.stringPromptDisplay), a.showString = f, a.showInt = g;
            var h = $("#template-prompt-multi").tmpl(a);
            $(h).translate();
            var i = this;
            this.multiPromptDialog = $(h).dialog({
                dialogClass: "window",
                draggable: !1,
                resizable: !1,
                modal: !0,
                width: "auto"
            }), $(".prompt-cancel-button", h).unbind("click"), $(".prompt-cancel-button", h).click(function () {
                i.buttonClicked("cancel"), i.hideMultiPromptWindow(), d();
                return !1
            }), $(".button-ok", h).unbind("click"), $(".button-ok", h).click(function () {
                i.buttonClicked("prompt");
                var a = "";
                f && (a = $(".input-value-string", i.multiPromptDialog).val());
                var b = "";
                g && (b = $(".input-value-int", i.multiPromptDialog).val()), console.log("User entered string: " + a), console.log("User entered number: " + b), i.multiPromptDialog.dialog("destroy").remove(), c(a, b);
                return !1
            })
        },
        hideMultiPromptWindow: function () {
            this.multiPromptDialog.dialog("destroy").remove()
        },
        showIntPromptWindow: function (a, c, d) {
            d || (d = function () {}), a.multipleLines = a.intPromptDisplay.length > e.MULTIPLE_LINE_MIN_LENGTH, a.intPromptDisplay = b.UI.parseDisplayString(a.intPromptDisplay);
            var f = $("#template-prompt-int").tmpl(a);
            $(f).translate();
            var g = this;
            this.intPromptDialog = $(f).dialog({
                dialogClass: "window",
                draggable: !1,
                resizable: !1,
                modal: !0,
                width: "auto"
            }), $(".prompt-cancel-button", f).unbind("click"), $(".prompt-cancel-button", f).click(function () {
                g.buttonClicked("cancel"), g.hideIntPromptWindow(), d();
                return !1
            }), $(".button-ok", f).unbind("click"), $(".button-ok", f).click(function () {
                g.buttonClicked("prompt");
                var a = $(".input-value", g.intPromptDialog).val();
                console.log("User entered " + a), g.intPromptDialog.dialog("destroy").remove(), c(a);
                return !1
            })
        },
        hideIntPromptWindow: function () {
            this.intPromptDialog.dialog("destroy").remove()
        },
        showStringPromptWindow: function (a, c, d, f) {
            d || (d = function () {}), a.stringPromptDisplay = b.UI.parseDisplayString(a.stringPromptDisplay), a.multipleLines = $("<div>" + a.stringPromptDisplay + "</div>").text().length > e.MULTIPLE_LINE_MIN_LENGTH;
            var g = $("#template-prompt-string").tmpl(a);
            f && $('input[type="text"]', g).val(f), $(g).translate();
            var h = this;
            this.stringPromptDialog = $(g).dialog({
                dialogClass: "window",
                draggable: !1,
                resizable: !1,
                modal: !0,
                width: "auto"
            }), $(".prompt-cancel-button", g).unbind("click"), $(".prompt-cancel-button", g).click(function () {
                h.buttonClicked("cancel"), h.hideStringPromptWindow(), d();
                return !1
            }), $(".button-ok", g).unbind("click"), $(".button-ok", g).click(function () {
                h.buttonClicked("prompt");
                var a = $(".input-value", h.stringPromptDialog).val();
                h.stringPromptDialog.dialog("destroy").remove(), c(a);
                return !1
            })
        },
        hideStringPromptWindow: function () {
            this.stringPromptDialog.dialog("destroy").remove()
        },
        showTextPromptWindow: function (a, c, d) {
            a = b.UI.parseDisplayString(a);
            var e = $("#template-prompt-text").tmpl({
                title: a
            });
            $(e).translate(), $(".text-countdown", e).text(c);
            var f = this;
            this.textPromptDialog = $(e).dialog({
                dialogClass: "window",
                draggable: !1,
                resizable: !1,
                modal: !0,
                width: "auto"
            }), $(".prompt-cancel-button", e).unbind("click"), $(".prompt-cancel-button", e).click(function () {
                f.buttonClicked("cancel"), f.hideTextPromptWindow();
                return !1
            });
            var g = 0,
                h = function () {
                    g = $(this).val().length, $(".text-countdown").text(c - g);
                    if (g > c) return !1;
                    return !0
                };
            $(".window-prompt-text textarea", e).keypress(h), $(".window-prompt-text textarea", e).bind("paste", h), $(".button-ok", e).unbind("click"), $(".button-ok", e).click(function () {
                f.buttonClicked("prompt"), f.hideTextPromptWindow(), d($(".window-prompt-text .input-value", f.textPromptDialog).val());
                return !1
            })
        },
        hideTextPromptWindow: function () {
            this.textPromptDialog.dialog("destroy").remove()
        },
        showLocationPromptWindow: function (a, c) {
            a = b.UI.parseDisplayString(a);
            var d = $("#template-prompt-location").tmpl({
                title: a
            });
            $(d).translate();
            for (var e in g) country = g[e], $('<option value="' + country + '">' + country + "</option>").appendTo($("select", d));
            var f = this,
                h = $(d).dialog({
                    dialogClass: "window",
                    draggable: !1,
                    resizable: !1,
                    modal: !0,
                    width: "auto"
                });
            $(".prompt-cancel-button", d).unbind("click"), $(".prompt-cancel-button", d).click(function () {
                f.buttonClicked("cancel"), h.dialog("destroy").remove();
                return !1
            }), $(".button-ok", d).unbind("click"), $(".button-ok", d).click(function () {
                f.buttonClicked("prompt");
                var a = $(".zip-code", h).val(),
                    b = $(".country", h).val();
                h.dialog("destroy").remove(), c(a, b);
                return !1
            })
        },
        showGenderPromptWindow: function (a, c) {
            a = b.UI.parseDisplayString(a);
            var d = $("#template-prompt-gender").tmpl({
                title: a
            });
            $(d).translate();
            var e = this,
                f = $(d).dialog({
                    dialogClass: "window",
                    draggable: !1,
                    resizable: !1,
                    modal: !0,
                    width: "auto"
                });
            $(".prompt-cancel-button", d).hide(), $(".gender-male", d).unbind("click"), $(".gender-male", d).click(function () {
                e.buttonClicked("prompt"), d.dialog("destroy").remove(), c("MALE");
                return !1
            }), $(".gender-female", d).unbind("click"), $(".gender-female", d).click(function () {
                e.buttonClicked("prompt"), d.dialog("destroy").remove(), c("FEMALE");
                return !1
            })
        },
        showSendToTextPromptWindow: function (a, c, d, e) {
            a = b.UI.parseDisplayString(a);
            var f = $("#template-prompt-to-text").tmpl({
                title: a,
                toText: c
            });
            $(f).translate(), $(".text-countdown", f).text(d);
            var g = this;
            this.sendToTextPromptDialog = $(f).dialog({
                dialogClass: "window",
                draggable: !1,
                resizable: !1,
                modal: !0,
                width: "auto"
            }), $(".prompt-cancel-button", f).unbind("click"), $(".prompt-cancel-button", f).click(function () {
                g.buttonClicked("cancel"), g.hideSendToTextPromptWindow();
                return !1
            });
            var h = 0,
                i = function () {
                    h = $(this).val().length, $(".text-countdown").text(d - h);
                    if (h > d) return !1;
                    return !0
                };
            $(".window-prompt-text textarea", f).keypress(i), $(".window-prompt-text textarea", f).bind("paste", i), c ? $(".window-prompt-text textarea", f).focus() : $('.window-prompt-text input[type="text"]', f).focus(), $(".button-ok", f).unbind("click"), $(".button-ok", f).click(function () {
                g.buttonClicked("prompt"), g.hideSendToTextPromptWindow();
                var a = $(".window-prompt-text textarea", g.sendToTextPromptDialog).val(),
                    b = $('.window-prompt-text .input-value[type="text"]', g.sendToTextPromptDialog).val();
                e(b, a);
                return !1
            })
        },
        showCreateErrorQuick: function (a) {
            $(".errors", this.promptDialog).text(a.errorMessage)
        },
        hideSendToTextPromptWindow: function () {
            this.sendToTextPromptDialog.dialog("destroy").remove()
        },
        showElementSelectWindow: function (a) {
            for (var c = 0; c < a.length; c++) {
                var e = a[c].data.element;
                e.displayString = b.UI.parseDisplayString(e.displayString);
                for (var f = 0; f < e.displayLayers.length; f++) {
                    var g = e.displayLayers[f],
                        h = d.getImageFromId(g.info);
                    if (h) {
                        var i = Math.min(26, h.size[0]),
                            j = Math.floor(h.size[1] / 1.3);
                        g.widthScaled = i, g.heightScaled = j
                    }
                    g.url = d.resolveDynamicImage(d.getImageFromId(g.info))
                }
            }
            var k = $("#template-select-element").tmpl({
                elements: a
            }),
                l = this;
            $(k).translate(), this.selectElementDialog = $(k).dialog({
                dialogClass: "window",
                draggable: !1,
                resizable: !1,
                modal: !0,
                width: "auto"
            });
            var m = Math.min(350, k.find(".overview").height()),
                n = Math.min(350, k.find(".overview")[0].scrollHeight);
            k.find(".scrolling").height(n), k.dialog("option", "position", "center"), k.find(".scrolling").tinyscrollbar(), k.find(".select-button span").css({
                color: ""
            }), $(".prompt-cancel-button", k).unbind("click"), $(".prompt-cancel-button", k).click(function () {
                l.buttonClicked("cancel"), l.hideElementSelectWindow();
                return !1
            }), $(".select-button", k).unbind("click"), $(".select-button", k).click(function () {
                l.buttonClicked("element");
                var a = $(this).data("elementid");
                console.log("clicked on " + a), $(document).trigger("action.element.select", [a]), l.hideElementSelectWindow();
                return !1
            })
        },
        hideElementSelectWindow: function () {
            this.selectElementDialog.dialog("destroy").remove()
        },
        processAddBuyScreenItem: function (a) {
            var c = this;
            if (c._currentScreenId == a.screenId) {
                c.screenItems.items.push(a.item), a.item.displayString = b.UI.parseDisplayString(a.item.displayString);
                var d = $("#template-buy-item").tmpl(a.item);
                $(d).translate(), $("#list-buy-items", c.buyScreenItemsDialog).append(d)
            }
        },
        processRemoveBuyScreenItem: function (a) {
            var b = this;
            b._currentScreenId == a.screenId && (b.screenItems.items = $.grep(b.screenItems.items, function () {
                if (this.itemId == a.itemId) return !1;
                return !0
            }), $('#list-buy-items [data-id="' + a.itemId + '"]', b.buyScreenItemsDialog).remove())
        },
        processBuyScreenInfo: function (a) {
            this.screenInfo = a
        },
        processBuyScreenItems: function (a) {
            this.screenItems = a, this.showBuyItemsWindow()
        },
        processUpdateTradePostCut: function (a) {
            this.tradePostCut = a.cut
        },
        subScreenClicked: function (a) {
            var b = this,
                c = $(a.currentTarget).data("id");
            b.buyScreenInfoDialog.dialog("close"), b.showBuyInfoWindow(c);
            return !1
        },
        buyItemClicked: function (a) {
            var b = this,
                c = $(a.currentTarget).data("id");
            b.buyScreenItemsDialog.dialog("destroy").remove(), $(b.screenItems.items).each(function () {
                if (this.itemId == c) {
                    var d = this,
                        e = function (c, e) {
                            console.log("clicked on " + c), console.log("Performing action: " + e.command), $(document).trigger("action.generic", [c, e, d.priceIsFood ? -d.price : d.price, function (c) {
                                e.command == "BUY" && (c ? b.showBuyInfoWindow(b.screenItems.screenId) : b.buyItemClicked(a))
                            }]);
                            return !1
                        },
                        f = function () {
                            b.showBuyInfoWindow(b.screenItems.screenId)
                        };
                    b.showActionWindow(_("select_action_on", this.displayString), this, "itemId", e, f);
                    return !1
                }
            });
            return !1
        },
        showBuyInfoWindow: function (a) {
            var f = this;
            f._currentScreenId = a, console.log("Screen Id: " + a);
            if (f.screenInfo) {
                var g = f.screenInfo;
                if (a) var g = f._findSubScreen(f.screenInfo.subScreens);
                if (g && g.subScreens.length > 0) {
                    f.buyScreenInfoDialog || ($(".buy-info").live("click", $.proxy(f.subScreenClicked, this)), $(".buy-info-back-button").live("click", function () {
                        f.buyScreenInfoDialog.dialog("destroy").remove();
                        if (f._currentScreenId) {
                            var a = f._currentScreenId.split(",");
                            a.pop();
                            var b = a.join(",");
                            f.showBuyInfoWindow(b)
                        }
                        return !1
                    }));
                    var h = [];
                    $(g.subScreens).each(function () {
                        this.displayString = b.UI.parseDisplayString(this.displayString), $(this.displayLayers).each(function () {
                            h.push(this.info), this.url = d.resolveDynamicImage(d.getImageFromId(this.info))
                        })
                    }), d.requireImages(h);
                    var i = $("#template-buy-info").tmpl(g);
                    $(i).translate(), f.buyScreenInfoDialog = $(i).dialog({
                        dialogClass: "window",
                        draggable: !1,
                        resizable: !1,
                        modal: !0,
                        width: "auto"
                    })
                } else this._isLoadingBuyItems = !0, f.buyScreenInfoDialog || (f.buyScreenInfoDialog = $(i).dialog({
                    dialogClass: "window",
                    draggable: !1,
                    resizable: !1,
                    modal: !0,
                    width: "auto"
                })), f.buyScreenInfoDialog.html(_("loading")), f._buyLoadingTimeout = setTimeout(function () {
                    f.buyScreenInfoDialog.html(_("web_unable_to_load")), f._buyLoadingTimeout = setTimeout(function () {
                        f.showBuyInfoWindow(f._currentScreenId)
                    }, 5e3)
                }, e.BUY_LOAD_TIMEOUT), f.buyScreenInfoDialog.dialog("open"), c.post({
                    fullName: "GetBuyScreenItems1",
                    screenId: a
                }, function (a) {})
            } else c.post({
                fullName: "GetBuyScreenItems1",
                screenId: null
            }, function (a) {})
        },
        _findSubScreen: function (a) {
            var b = this,
                c = null;
            $(a).each(function () {
                if (b._currentScreenId.indexOf(this.screenId) != -1) {
                    b._currentScreenId == this.screenId ? c = this : c = b._findSubScreen(this.subScreens);
                    return !1
                }
            });
            return c
        },
        showBuyItemsWindow: function () {
            var a = this;
            a.buyScreenInfoDialog.dialog("destroy").remove(), this._isLoadingBuyItems = !1, clearTimeout(this._buyLoadingTimeout), this.screenItems.items.length == 0 && this.screenItems.items.push({
                displayString: _("empty_list"),
                price: "",
                displayLayers: []
            });
            var c = [];
            $(this.screenItems.items).each(function () {
                this.displayString = b.UI.parseDisplayString(this.displayString), $(this.displayLayers).each(function () {
                    c.push(this.info), this.url = d.resolveDynamicImage(d.getImageFromId(this.info))
                })
            }), d.requireImages(c);
            var e = $("#template-buy-items").tmpl(this.screenItems);
            $(e).translate(), a.buyScreenItemsDialog || ($(".buy-item").live("click", $.proxy(a.buyItemClicked, this)), $(".buy-items-back-button").live("click", function () {
                a.buyScreenItemsDialog.dialog("destroy").remove();
                var b = a._currentScreenId.split(",");
                b.pop();
                var c = b.join(",");
                a.showBuyInfoWindow(c);
                return !1
            })), a.buyScreenItemsDialog = $(e).dialog({
                dialogClass: "window",
                draggable: !1,
                resizable: !1,
                modal: !0,
                width: "auto"
            })
        },
        showItemsWindow: function () {
            this.items = a.data.items;
            var b = this,
                c = [];
            for (var e = 0; e < this.items.length; e++) {
                var f = this.items[e];
                for (var g = 0; g < f.displayLayers.length; g++) {
                    var h = f.displayLayers[g];
                    c.push(h.info), this.url = d.resolveDynamicImage(d.getImageFromId(h.info))
                }
            }
            d.requireImages(c);
            var i = $("#template-items").tmpl(this);
            $(i).translate(), b.itemsDialog || $(".item").live("click", $.proxy(b.itemClicked, this)), $(".prompt-cancel-button", i).unbind("click"), $(".prompt-cancel-button", i).click(function () {
                b.buttonClicked("cancel"), b.itemsDialog.dialog("destroy").remove();
                return !1
            }), b.itemsDialog = $(i).dialog({
                dialogClass: "window",
                draggable: !1,
                resizable: !1,
                modal: !0,
                width: "auto"
            })
        },
        itemClicked: function (a) {
            var b = $(a.currentTarget).data("eid"),
                c = this;
            console.log(b), c.itemsDialog.dialog("destroy").remove(), $(c.items).each(function () {
                if (this.elementId == b) {
                    elementClicked = function (b, d) {
                        d.command != "HELP" && (b ? c.showItemsWindow() : c.itemClicked(a))
                    }, cancelClicked = function () {
                        c.showItemsWindow()
                    }, c.showActionWindowForElement(this, elementClicked, cancelClicked);
                    return !1
                }
            });
            return !1
        },
        showSellPrompts: function (a, b, d) {
            var e = this,
                f = 0,
                g = 0,
                h = function (a) {
                    if (parseInt(a) < 0) require(["ui"], function (a) {
                        a.showDropDown(_("web_negative_error"))
                    });
                    else {
                        f = parseInt(a);
                        var c, g = d ? _("food_cap") : _("gold_cap"),
                            h = Math.ceil(e.tradePostCut * 100);
                        f == 1 ? c = _("selling_how_much", g, h) : c = _("selling_how_much_plural", g, f, h), e.showIntPromptWindow({
                            intPromptDisplay: c
                        }, i, function () {
                            b(!1)
                        })
                    }
                },
                i = function (a) {
                    g = parseInt(a);
                    var c, h = Math.max(1, Math.ceil(e.tradePostCut * g)) + g,
                        i = d ? _("food_cap") : _("gold_cap");
                    f == 1 ? c = _("selling_are_you_sure", g, i, h, i) : c = _("selling_are_you_sure_plural", f, g, i, h, i), e.showPromptWindow({
                        title: c
                    }, j, function () {
                        b(!1)
                    })
                },
                j = function (e) {
                    e && c.post({
                        fullName: "SellItem1",
                        itemId: a.elementId,
                        quantity: f,
                        price: g,
                        isFoodSale: d
                    }, function (a) {}), b(e)
                };
            e.showIntPromptWindow({
                intPromptDisplay: _("web_how_many_to_sell")
            }, h, function () {
                b(!1)
            })
        },
        hideSellPrompts: function () {
            this.hidePromptWindow(), this.hideIntPromptWindow()
        },
        showQuickCreateWindow: function (a) {
            var b = $("#template-prompt-quick-create").tmpl({
                fbHasLocation: f.hasLocation
            });
            $(b).translate();
            var c = this;
            this.promptDialog = $(b).dialog({
                closeOnEscape: !1,
                dialogClass: "window",
                draggable: !1,
                resizable: !1,
                modal: !0,
                width: "auto"
            });
            if (!f.hasLocation) for (var d in g) country = g[d], $('<option value="' + country + '">' + country + "</option>").appendTo($("select", b));
            $(".window-prompt li a").unbind("click"), $(".window-prompt .button-yes").click(function () {
                c.buttonClicked("prompt");
                var d = $(".character-name", b).val(),
                    e = $(".zip-code", b).val(),
                    f = $(".country", b).val();
                e === undefined && (e = ""), f === undefined && (f = ""), a({
                    name: d,
                    zipCode: e,
                    country: f
                });
                return !1
            });
            return !1
        },
        hideQuickCreateWindow: function () {
            this.promptDialog && this.promptDialog.dialog("destroy").remove()
        },
        showCreateWindow: function (b) {
            this.makeTypes = a.data.makeTypes;
            var c = a.data.clientConfigs,
                e = a.data.yourResources,
                f = a.data.resources,
                g = this,
                h = [],
                i = null;
            $(this.makeTypes).each(function () {
                if (this.makeId == b) {
                    $(this.creationTypes).each(function () {
                        this.subDisplayString = c["help_" + this.helpKey], $(this.displayLayers).each(function () {
                            h.push(this.info), this.url = d.resolveDynamicImage(d.getImageFromId(this.info))
                        }), $(this.resourceCosts).each(function () {
                            var a = this.resource;
                            if (a !== "") {
                                var b = 0;
                                $(e).each(function () {
                                    if (this.resource == a) {
                                        b = this.amount;
                                        return !1
                                    }
                                }), this.user = b, this.resourceObj = f[a], $(this.resourceObj.displayLayers).each(function () {
                                    h.push(this.info), this.url = d.resolveDynamicImage(d.getImageFromId(this.info))
                                })
                            }
                        })
                    }), g._currentMakeType = this;
                    return !1
                }
            }), d.requireImages(h), g._currentMakeType || console.error("Type: " + b + " doesn't exist in makeTypes.");
            var j = $("#template-create").tmpl(g._currentMakeType);
            $(j).translate(), g.createDialog || $(".create-type").live("click", $.proxy(g.createTypeClicked, this)), $(".prompt-cancel-button", j).unbind("click"), $(".prompt-cancel-button", j).click(function () {
                g.buttonClicked("cancel"), g.createDialog.dialog("destroy").remove();
                return !1
            }), g.createDialog = $(j).dialog({
                dialogClass: "window",
                draggable: !1,
                resizable: !1,
                modal: !0,
                width: "auto"
            })
        },
        createTypeClicked: function (a) {
            var b = this,
                d = b._currentMakeType,
                e = $(a.currentTarget).data("ctn");
            b.createDialog.dialog("destroy").remove(), d.canMakeMultiple ? b.showIntPromptWindow({
                intPromptDisplay: '<span data-i="how_many"></span>'
            }, function (a) {
                c.post({
                    fullName: "Create1",
                    makeId: d.makeId,
                    creationTypeName: e,
                    quantity: a
                }, function (a) {})
            }) : c.post({
                fullName: "Create1",
                makeId: d.makeId,
                creationTypeName: e,
                quantity: 1
            }, function (a) {});
            return !1
        },
        _verifyWebCreateScreen: function () {
            var a = this,
                c = {},
                d = a.webCreateScreen,
                e = $(".email", d).val(),
                f = $(".password", d).val(),
                g = $(".character-name", d).val(),
                h = $(".gender-male", d).is(":checked"),
                i = $(".gender-female", d).is(":checked");
            if ($.trim(g) == "") {
                $(".errors", d).text(_("web_please_name")), $(".errors", d).show();
                return !1
            }
            if (!h && !i) {
                $(".errors", d).text(_("please_select_a_gender")), $(".errors", d).show();
                return !1
            }
            c.gender = h ? "MALE" : "FEMALE";
            if ($.trim(e) == "" || e.indexOf("@") == -1) {
                $(".errors", d).text(_("web_please_valid_email")), $(".errors", d).show();
                return !1
            }
            if (!b.isValidPasswordForCharacters(f)) {
                $(".errors", d).text(_("password_too_weak")), $(".errors", d).show();
                return !1
            }
            if (!b.isValidPasswordForLength(f)) {
                $(".errors", d).text(_("password_too_short")), $(".errors", d).show();
                return !1
            }
            c.name = $.trim(g), c.password = f, c.email = $.trim(e), c.age = 18, $(".errors", d).text(""), $(".errors", d).hide(), this.showLocatingYouScreen(c)
        },
        _bindWebCreateEvents: function () {
            var a = this;
            $(".back", this.webCreateScreen).click(function () {
                $(a.newLoginScreen).css({
                    left: "150%"
                }), $(a.newLoginScreen).show(), $(a.newLoginScreen).animate({
                    left: "50%"
                }, 350, "swing"), $(a.webCreateScreen).animate({
                    left: "-50%"
                }, 350, "swing", function () {
                    $(this).hide()
                });
                return !1
            }), $("input", this.webCreateScreen).keyup(function (b) {
                b.which == 13 && $(".start-playing", a.webCreateScreen).click()
            }), $(".gender-male", this.webCreateScreen).change(function () {
                $(this).is(":checked") && $(".gender-female", a.webCreateScreen).prop("checked", !1)
            }), $(".gender-female", this.webCreateScreen).change(function () {
                $(this).is(":checked") && $(".gender-male", a.webCreateScreen).prop("checked", !1)
            }), $(".start-playing", this.webCreateScreen).click(function () {
                $(".errors", a.webCreateScreen).text(""), $(".errors", a.webCreateScreen).hide(), a._verifyWebCreateScreen();
                return !1
            })
        },
        showWebCreateScreen: function () {
            require(["stats"], function (a) {
                a.createPageTime()
            }), this._onEntranceWindowChanged();
            var a = this;
            $(this.webCreateScreen).css({
                left: "50%"
            }), this.webCreateScreen.show()
        },
        showCreateError: function (a) {
            $(".loading", this.newLoginScreen).hide();
            var b = this.webCreateScreen;
            a.errorType == "RETRY_LOCATION" || a.errorMessage.indexOf("determined") >= 0 ? ($(".errors", this.locatingYouScreen).text(_("web_unable_to_find_current_location")), $(".errors", this.locatingYouScreen).show(), $(".loading", this.locatingYouScreen).hide(), $(".form-group-icon", this.locatingYouScreen).hide(), $(".manual-location", this.locatingYouScreen).show()) : (this.showWebCreateScreen(), $(this.locatingYouScreen).fadeOut(100, function () {
                $(b).fadeIn(100)
            }), a.errorType == "RETRY_NAME" ? $(".errors", b).text(_("web_error_existing_name")) : a.errorType == "RETRY_EMAIL" ? $(".errors", b).text(_("web_error_existing_email")) : $(".errors", b).text(a.errorMessage), $(".errors", b).show())
        },
        showNewFbCreateError: function (a) {
            var b = this;
            $(".loading", this.newFbLoginScreen).hide(), this.showNewFbCreateScreen(), $(this.locatingYouScreen).fadeOut(100, function () {
                $(b.fbNewCreateScreen).fadeIn(100)
            }), a.errorType == "RETRY_EMAIL" ? $(".errors", this.fbNewCreateScreen).text(_("web_error_facebook_email")) : a.errorType == "RETRY_YOU_DONT_EXIST" ? $(".errors", this.fbNewCreateScreen).text(_("web_error_dont_exist")) : $(".errors", this.fbNewCreateScreen).text(a.errorMessage), $(".errors", this.fbNewCreateScreen).show()
        },
        _initFbCreateScreenEvents: function () {
            var a = this;
            $("input", this.fbCreateScreen).keyup(function (b) {
                b.which == 13 && $(".start-playing", a.fbCreateScreen).click()
            }), $(".start-playing", this.fbCreateScreen).click(function () {
                var c = $(".character-name", a.fbCreateScreen).val(),
                    d = $(".password", a.fbCreateScreen).val();
                if ($.trim(c) == "") {
                    $(".errors", this.fbCreateScreen).text(_("web_please_name")), $(".errors", this.fbCreateScreen).show();
                    return !1
                }
                if (!b.isValidPasswordForCharacters(d)) {
                    $(".errors", this.fbCreateScreen).text(_("password_too_weak")), $(".errors", this.fbCreateScreen).show();
                    return !1
                }
                if (!b.isValidPasswordForLength(d)) {
                    $(".errors", this.fbCreateScreen).text(_("password_too_short")), $(".errors", this.fbCreateScreen).show();
                    return !1
                }
                formData = {
                    name: c,
                    password: d
                }, f.getLocation(function (b, c, d) {
                    formData.age = c.age, formData.email = c.email, formData.gender = c.gender.toUpperCase(), d && d.location ? (formData.location = {
                        lat: d.location.latitude,
                        lng: d.location.longitude
                    }, $(document).trigger("action.createCharacter", [formData])) : a.showLocatingYouScreen(formData)
                });
                return !1
            }), $(".back", this.fbCreateScreen).click(function () {
                $(a.fbCreateScreen).fadeOut(100, function () {
                    a.showWebCreateScreen(), $(this).css("opacity", 1)
                });
                return !1
            })
        },
        _initNewFbCreateScreenEvents: function () {
            var a = this;
            $("input", this.fbNewCreateScreen).keyup(function (b) {
                b.which == 13 && $(".start-playing", a.fbNewCreateScreen).click()
            }), $(".start-playing", this.fbNewCreateScreen).click(function () {
                var c = $(".character-name", a.fbNewCreateScreen).val(),
                    d = $(".password", a.fbNewCreateScreen).val(),
                    e = $(".refcode", a.fbNewCreateScreen).val();
                if ($.trim(c) == "") {
                    $(".errors", this.fbNewCreateScreen).text(_("web_please_name")), $(".errors", this.fbNewCreateScreen).show();
                    return !1
                }
                if (!b.isValidPasswordForCharacters(d)) {
                    $(".errors", this.fbNewCreateScreen).text(_("password_too_weak")), $(".errors", this.fbNewCreateScreen).show();
                    return !1
                }
                if (!b.isValidPasswordForLength(d)) {
                    $(".errors", this.fbNewCreateScreen).text(_("password_too_short")), $(".errors", this.fbNewCreateScreen).show();
                    return !1
                }
                formData = {
                    name: c,
                    password: d,
                    email: pk.state.fbEmail,
                    EnteredRefCode: e,
                    gender: pk.state.fbGender == "female" ? "FEMALE" : "MALE"
                }, require(["auth/facebook"], function (a) {
                    formData.age = a.getAge(pk.state.fbBirthday)
                }), pk.state.fbLatitude && pk.state.fbLongitude ? (formData.location = {
                    lat: pk.state.fbLatitude,
                    lng: pk.state.fbLongitude
                }, $(document).trigger("action.createCharacter", [formData])) : a.showLocatingYouScreen(formData);
                return !1
            }), $(".back", this.fbNewCreateScreen).click(function () {
                $(a.newFbLoginScreen).css({
                    left: "150%"
                }), $(a.newFbLoginScreen).show(), $(a.newFbLoginScreen).animate({
                    left: "50%"
                }, 350, "swing"), $(a.fbNewCreateScreen).animate({
                    left: "-50%"
                }, 350, "swing", function () {
                    $(this).hide()
                });
                return !1
            })
        },
        showFacebookCreateScreen: function () {
            var a = this;
            require(["stats"], function (a) {
                a.createPageTime()
            }), a.fbCreateScreen.show()
        },
        showNewFbCreateScreen: function () {
            var a = this;
            require(["stats"], function (a) {
                a.createPageTime()
            }), a.fbNewCreateScreen.show()
        },
        hideNewFacebookCreateScreen: function () {
            this.fbNewCreateScreen.hide()
        },
        _verifyKongCreateScreen: function () {
            var a = {},
                c = this.kongCreateScreen,
                d = $(".character-name", c).val();
            if ($.trim(d) == "") {
                $(".errors", c).text(_("web_please_name")), $(".errors", c).show();
                return !1
            }
            var e = $(".gender-male", c).is(":checked"),
                f = $(".gender-female", c).is(":checked");
            if (!e && !f) {
                $(".errors", c).text(_("please_select_a_gender")), $(".errors", c).show();
                return !1
            }
            a.name = $.trim(d), a.password = b.genpwd(), a.email = "KONG-USER" + b.guid().replace(/-/g, "") + "@parallelkingdom.com", a.age = "18", a.gender = e ? "MALE" : "FEMALE", this.showLocatingYouScreen(a);
            return !0
        },
        _initKongCreateScreenEvents: function () {
            var a = this;
            $(".start-playing", this.kongCreateScreen).click(function () {
                a._verifyKongCreateScreen();
                return !1
            }), $(".gender-male", this.kongCreateScreen).change(function () {
                $(this).is(":checked") && $(".gender-female", a.kongCreateScreen).prop("checked", !1)
            }), $(".gender-female", this.kongCreateScreen).change(function () {
                $(this).is(":checked") && $(".gender-male", a.kongCreateScreen).prop("checked", !1)
            })
        },
        showKongCreateScreen: function () {
            this.kongCreateScreen.show()
        },
        hideKongCreateScreen: function () {
            this.kongCreateScreen.hide()
        },
        _initKongLandingScreenEvents: function () {
            var a = this;
            $(".start-playing", this.kongLandingScreen).click(function () {
                require(["auth/kongregate"], function (a) {
                    a.showSignInBox()
                });
                return !1
            })
        },
        showKongLandingScreen: function () {
            this.kongLandingScreen.show()
        },
        hideKongLandingScreen: function () {
            this.kongLandingScreen.hide()
        },
        _bindKongCreateEvents: function () {
            var a = this,
                c = this.kongCreateScreen;
            $("input", c).keyup(function (a) {
                a.which == 13 && $(".start-playing", c).click()
            }), $(".start-playing", c).click(function () {
                var d = $(".character-name", c).val(),
                    e = $(".refcode", c).val();
                if ($.trim(d) == "") {
                    $(".errors", c).text(_("web_please_name")), $(".errors", c).show();
                    return !1
                }
                var f = $(".gender-male", c).is(":checked"),
                    g = $(".gender-female", c).is(":checked");
                if (!f && !g) {
                    $(".errors", c).text(_("please_select_a_gender")), $(".errors", c).show();
                    return !1
                }
                var h = {
                    name: d,
                    password: b.genpwd(),
                    email: "KONG-USER" + b.guid().replace(/-/g, "") + "@parallelkingdom.com",
                    EnteredRefCode: e,
                    age: "18",
                    gender: f ? "MALE" : "FEMALE"
                };
                a.showLocatingYouScreen(h);
                return !1
            }), $(".gender-male", c).change(function () {
                $(this).is(":checked") && $(".gender-female", c).prop("checked", !1)
            }), $(".gender-female", c).change(function () {
                $(this).is(":checked") && $(".gender-male", c).prop("checked", !1)
            }), $(".back", this.kongCreateScreen).click(function () {
                $(a.kongLoginScreen).css({
                    left: "150%"
                }), $(a.kongLoginScreen).show(), $(a.kongLoginScreen).animate({
                    left: "50%"
                }, 350, "swing"), $(a.kongCreateScreen).animate({
                    left: "-50%"
                }, 350, "swing");
                return !1
            })
        },
        showKongCreateScreen: function () {
            this.kongCreateScreen.show()
        },
        hideKongCreateScreen: function () {
            this.hideCreateScreen.show()
        },
        _bindKongLoginEvents: function () {
            var a = this,
                b = this.kongLoginScreen;
            $("input", b).keyup(function (a) {
                a.which == 13 && $(".start-playing", b).click()
            }), $(".back", b).click(function () {
                $(".errors", b).text(""), $(".errors", b).hide(), $(a.kongCreateScreen).css({
                    left: "-50%"
                }), $(a.kongCreateScreen).show(), $(a.kongCreateScreen).animate({
                    left: "50%"
                }, 350, "swing"), $(b).animate({
                    left: "150%"
                }, 350, "swing");
                return !1
            }), $(".start-playing", b).click(function () {
                $(".loading", b).show(), $(".errors", b).text(""), $(".errors", b).hide();
                var a = $(".character-name", b).val(),
                    c = $(".password", b).val();
                $(document).trigger("action.tryLogin", [a, c]);
                return !1
            })
        },
        showKongLoginScreen: function () {
            this.kongLoginScreen.show()
        },
        hideKongLoginScreen: function () {
            this.kongLoginScreen.hide()
        },
        _bindNewLoginEvents: function () {
            var a = this,
                b = this.newLoginScreen;
            $("input", this.newLoginScreen).keyup(function (b) {
                b.which == 13 && $(".start-playing", a.newLoginScreen).click()
            }), $(".back", this.newLoginScreen).click(function () {
                $(".errors", b).text(""), $(".errors", b).hide(), $(a.webCreateScreen).css({
                    left: "-50%"
                }), $(a.webCreateScreen).show(), $(a.webCreateScreen).animate({
                    left: "50%"
                }, 350, "swing"), $(a.newLoginScreen).animate({
                    left: "150%"
                }, 350, "swing");
                return !1
            }), $(".start-playing", b).click(function () {
                $(".loading", b).show(), $(".errors", b).text(""), $(".errors", b).hide();
                var a = $(".character-name", b).val(),
                    c = $(".password", b).val();
                $(document).trigger("action.tryLogin", [a, c]);
                return !1
            })
        },
        hideNewLoginScreen: function () {
            $(this.newLoginScreen).fadeOut(100)
        },
        showNewLoginScreen: function () {
            this._onEntranceWindowChanged();
            var a = this;
            this.newLoginScreen.show()
        },
        _bindNewFbLoginEvents: function () {
            var a = this,
                b = this.newFbLoginScreen;
            $("input", this.newFbLoginScreen).keyup(function (b) {
                b.which == 13 && $(".start-playing", a.newFbLoginScreen).click()
            }), $(".back", this.newFbLoginScreen).click(function () {
                $(".errors", b).text(""), $(".errors", b).hide(), $(a.fbNewCreateScreen).css({
                    left: "-50%"
                }), $(a.fbNewCreateScreen).show(), $(a.fbNewCreateScreen).animate({
                    left: "50%"
                }, 350, "swing"), $(a.newFbLoginScreen).animate({
                    left: "150%"
                }, 350, "swing");
                return !1
            }), $(".start-playing", b).click(function () {
                $(".loading", b).show(), $(".errors", b).text(""), $(".errors", b).hide();
                var a = $(".character-name", b).val(),
                    c = $(".password", b).val();
                $(document).trigger("action.tryLogin", [a, c]);
                return !1
            })
        },
        hideNewFbLoginScreen: function () {
            $(this.newFbLoginScreen).fadeOut(100, function () {})
        },
        showNewFbLoginScreen: function () {
            this._onEntranceWindowChanged();
            var a = this;
            this.newFbLoginScreen.show()
        },
        _bindLocatingYouEvents: function (a) {
            var b = this;
            $(".start-playing", this.locatingYouScreen).unbind("click"), $(".start-playing", this.locatingYouScreen).click(function () {
                var c = $(".zip-code", b.locatingYouScreen).val(),
                    d = $(".country", b.locatingYouScreen).val();
                $(".errors", b.locatingYouScreen).hide();
                if ($.trim(c) == "") {
                    $(".errors", b.locatingYouScreen).text(_("web_zip_please")), $(".errors", b.locatingYouScreen).show();
                    return !1
                }
                if ($.trim(d) == "") {
                    $(".errors", b.locatingYouScreen).text(_("web_country_please")), $(".errors", b.locatingYouScreen).show();
                    return !1
                }
                a.zipCode = $.trim(c), a.country = $.trim(d), console.log([c, d]), $(document).trigger("action.createCharacter", [a]);
                return !1
            })
        },
        showGeneratedLocatingYouScreen: function (a) {
            if (!e.GEOLOCATION) {
                var b = this;
                $(b.locatingYouScreen).fadeIn(100, function () {
                    require(["game"], function (c) {
                        c.queryCurrentLocation(function (c, d) {
                            if (c !== null) {
                                console.log("Got current location"), console.log(c.coords);
                                var e = c.coords;
                                e.latitude && e.longitude && e.latitude != 0 && e.longitude != 0 ? ($(".status", b.locatingYouScreen).show(), $(document).trigger("action.locationDetected", [c.coords]), a({
                                    location: {
                                        lat: e.latitude,
                                        lng: e.longitude
                                    }
                                })) : ($(".header-text", b.locatingYouScreen).html(_("web_unable_to_find_current_location")), $(".loading", b.locatingYouScreen).hide(), $(".form-group-icon", b.locatingYouScreen).hide(), $(".manual-location", b.locatingYouScreen).show())
                            } else $(".header-text", b.locatingYouScreen).removeClass("header-text").addClass("text"), navigator.geolocation ? $(".text", b.locatingYouScreen).html(_("web_unable_to_find_current_location")) : $(".text", b.locatingYouScreen).html(_("web_manual_location")), $(".loading", b.locatingYouScreen).hide(), $(".form-group-icon", b.locatingYouScreen).hide(), $(".manual-location", b.locatingYouScreen).show()
                        })
                    })
                }), $(".start-playing", this.locatingYouScreen).unbind("click"), $(".start-playing", this.locatingYouScreen).click(function () {
                    var c = $(".zip-code", b.locatingYouScreen).val(),
                        d = $(".country", b.locatingYouScreen).val();
                    if ($.trim(c) == "") {
                        $(".errors", b.locatingYouScreen).text(_("web_zip_please")), $(".errors", b.locatingYouScreen).show();
                        return !1
                    }
                    if ($.trim(d) == "") {
                        $(".errors", b.locatingYouScreen).text(_("web_country_please")), $(".errors", b.locatingYouScreen).show();
                        return !1
                    }
                    a({
                        zipCode: $.trim(c),
                        country: $.trim(d)
                    });
                    return !1
                })
            }
        },
        showLocatingYouScreen: function (a) {
            var b = this;
            e.GEOLOCATION ? $(document).trigger("action.createCharacter", [a]) : (this._bindLocatingYouEvents(a), $(b.webCreateScreen).fadeOut(100, function () {}), $(b.kongCreateScreen).fadeOut(100, function () {}), $(b.locatingYouScreen).fadeIn(100, function () {
                require(["game"], function (c) {
                    c.queryCurrentLocation(function (c, d) {
                        if (c !== null) {
                            console.log("Got current location"), console.log(c.coords);
                            var e = c.coords;
                            e.latitude && e.longitude && e.latitude != 0 && e.longitude != 0 ? ($(document).trigger("action.locationDetected", [c.coords]), $(document).trigger("action.createCharacter", [a])) : ($(".header-text", b.locatingYouScreen).html(_("web_unable_to_find_current_location")), $(".loading", b.locatingYouScreen).hide(), $(".form-group-icon", b.locatingYouScreen).hide(), $(".manual-location", b.locatingYouScreen).show())
                        } else $(".header-text", b.locatingYouScreen).removeClass("header-text").addClass("text"), navigator.geolocation ? $(".text", b.locatingYouScreen).html(_("web_unable_to_find_current_location")) : $(".text", b.locatingYouScreen).html(_("web_manual_location")), $(".loading", b.locatingYouScreen).hide(), $(".form-group-icon", b.locatingYouScreen).hide(), $(".manual-location", b.locatingYouScreen).show()
                    })
                })
            }))
        },
        _onEntranceWindowChanged: function () {},
        _newEntranceWindow: function (a) {
            var b = $('<div class="entrance-window"><div class="entrance-window-content"></div></div>');
            $(":first", b).append(a);
            return b
        },
        hideEntranceWindows: function () {
            $(".entrance-window:not(.user-closable)").fadeOut(100)
        },
        initEntranceWindows: function () {
            this.fbCreateScreen || (this.fbCreateScreen = $("#template-create-fb").tmpl(), $(this.fbCreateScreen).translate(), this.fbCreateScreen = this._newEntranceWindow(this.fbCreateScreen).appendTo("body"), $(this.fbCreateScreen).css({
                marginLeft: -$(this.fbCreateScreen).width() / 2,
                marginTop: -$(this.fbCreateScreen).height() / 2
            }), this._initFbCreateScreenEvents()), this.fbNewCreateScreen || (this.fbNewCreateScreen = $("#template-create-new-fb").tmpl(), $(this.fbNewCreateScreen).translate(), this.fbNewCreateScreen = this._newEntranceWindow(this.fbNewCreateScreen).appendTo("body"), $(this.fbNewCreateScreen).css({
                marginLeft: -$(this.fbNewCreateScreen).width() / 2,
                marginTop: -$(this.fbNewCreateScreen).height() / 2
            }), this._initNewFbCreateScreenEvents()), this.kongLandingScreen || (this.kongLandingScreen = $("#template-landing-kong").tmpl(), $(this.kongLandingScreen).translate(), $("input:checkbox", this.kongLandingScreen).checkBox(), $(".ui-checkbox", this.kongLandingScreen).addClass("ui-checkbox-login"), this.kongLandingScreen = this._newEntranceWindow(this.kongLandingScreen).appendTo("body"), $(this.kongLandingScreen).css({
                marginLeft: -$(this.kongLandingScreen).width() / 2,
                marginTop: -$(this.kongLandingScreen).height() / 2
            }), this._initKongLandingScreenEvents()), this.newLoginScreen || (this.newLoginScreen = $("#template-login-new").tmpl(), $(this.newLoginScreen).translate(), this.newLoginScreen = this._newEntranceWindow(this.newLoginScreen).appendTo("body"), $(this.newLoginScreen).css({
                marginLeft: -$(this.newLoginScreen).width() / 2,
                marginTop: -$(this.newLoginScreen).height() / 2
            }), this._bindNewLoginEvents()), this.newFbLoginScreen || (this.newFbLoginScreen = $("#template-login-new-fb").tmpl(), $(this.newFbLoginScreen).translate(), this.newFbLoginScreen = this._newEntranceWindow(this.newFbLoginScreen).appendTo("body"), $(this.newFbLoginScreen).css({
                marginLeft: -$(this.newFbLoginScreen).width() / 2,
                marginTop: -$(this.newFbLoginScreen).height() / 2
            }), this._bindNewFbLoginEvents()), this.kongCreateScreen || (this.kongCreateScreen = $("#template-create-kong").tmpl(), $(this.kongCreateScreen).translate(), $("input:checkbox", this.kongCreateScreen).checkBox(), $(".ui-checkbox", this.kongCreateScreen).addClass("ui-checkbox-login"), this.kongCreateScreen = this._newEntranceWindow(this.kongCreateScreen).appendTo("body"), $(this.kongCreateScreen).css({
                marginLeft: -$(this.kongCreateScreen).width() / 2,
                marginTop: -$(this.kongCreateScreen).height() / 2
            }), this._bindKongCreateEvents()), this.kongLoginScreen || (this.kongLoginScreen = $("#template-login-kong").tmpl(), $(this.kongLoginScreen).translate(), this.kongLoginScreen = this._newEntranceWindow(this.kongLoginScreen).appendTo("body"), $(this.kongLoginScreen).css({
                marginLeft: -$(this.kongLoginScreen).width() / 2,
                marginTop: -$(this.kongLoginScreen).height() / 2
            }), this._bindKongLoginEvents()), this.webCreateScreen || (this.webCreateScreen = $("#template-create-web").tmpl(), $(this.webCreateScreen).translate(), $("input:checkbox", this.webCreateScreen).checkBox(), $(".ui-checkbox", this.webCreateScreen).addClass("ui-checkbox-login"), this.webCreateScreen = this._newEntranceWindow(this.webCreateScreen).appendTo("body"), $(this.webCreateScreen).css({
                marginLeft: -$(this.webCreateScreen).width() / 2,
                marginTop: -$(this.webCreateScreen).height() / 2
            }), this._bindWebCreateEvents());
            if (!this.locatingYouScreen) {
                var a = null;
                $.browser.mozilla ? a = "/static/images/ui/location_firefox.png" : $.browser.webkit ? a = "/static/images/ui/location_chrome.png" : $.browser.msie && (a = "/static/images/ui/location_ie.png"), this.locatingYouScreen = $("#template-locating-you").tmpl({
                    locatingImage: a
                }), $(this.locatingYouScreen).translate(), this.locatingYouScreen = this._newEntranceWindow(this.locatingYouScreen).appendTo("body"), $(this.locatingYouScreen).css({
                    marginLeft: -$(this.locatingYouScreen).width() / 2,
                    marginTop: -$(this.locatingYouScreen).height() / 2
                });
                for (var b in g) country = g[b], $('<option value="' + country + '">' + country + "</option>").appendTo($("select", this.locatingYouScreen))
            }
        }
    }
}), define("ui/menu/menu_items", ["state", "utils", "settings", "resources", "ui/window"], function (a, b, c, d, e) {
    return {
        _isInited: !1,
        handlesOwnSounds: !0,
        init: function (a, b, c) {
            var d = this;
            this.parentDiv = a, this.scrollDiv = b, this._menu = c, this.itemsList = $('<ul id="list-items">').appendTo(this.parentDiv), this.scrollDiv.tinyscrollbar(), $(".menu-item").die("click"), $(".menu-item").live("click", $.proxy(this.itemClicked, this)), this._isInited = !0
        },
        isInited: function () {
            return this._isInited
        },
        load: function () {
            var c = a.data.items,
                e = this,
                f = [];
            $(c).each(function () {
                this.displayString = b.UI.parseDisplayString(this.displayString), $(this.displayLayers).each(function () {
                    f.push(this.info), this.url = d.resolveDynamicImage(d.getImageFromId(this.info))
                })
            }), d.requireImages(f), this.itemsList.empty(), this.itemsMenu = $("#template-menu-item").tmpl(c).appendTo(this.itemsList).click($.proxy(this.itemClicked, this))
        },
        onOpen: function () {
            require(["sounds"], function (a) {
                a.play("MENU_ITEMS_OPEN")
            })
        },
        onClose: function () {
            require(["sounds"], function (a) {
                a.play("MENU_ITEMS_CLOSE")
            })
        },
        onResize: function (a, b) {
            this.scrollDiv.tinyscrollbar_update("relative")
        },
        processElementRemoved: function (a) {
            $('.menu-item[data-eid="' + a.elementId + '"]', this.itemsList).remove(), this.scrollDiv.tinyscrollbar_update("relative")
        },
        processElementAdded: function (a, b) {
            var c = [];
            $(a.displayLayers).each(function () {
                c.push(this.info), this.url = d.resolveDynamicImage(d.getImageFromId(this.info))
            }), d.requireImages(c), b < this.itemsList.children().length ? $("#template-menu-item").tmpl(a).insertBefore(this.itemsList.children()[b]) : $("#template-menu-item").tmpl(a).appendTo(this.itemsList), this.scrollDiv.tinyscrollbar_update("relative")
        },
        processElementDisplayChange: function (b) {
            var c = this,
                e = a.data.items;
            $(e).each(function () {
                if (this.elementId == b.elementId) {
                    if (b.displayLayers) {
                        this.displayLayers = b.displayLayers;
                        var a = [];
                        $(this.displayLayers).each(function () {
                            a.push(this.info), this.url = d.resolveDynamicImage(d.getImageFromId(this.info))
                        }), d.requireImages(a)
                    }
                    $('.menu-item[data-eid="' + b.elementId + '"]', c.itemsList).replaceWith($("#template-menu-item").tmpl(this));
                    return !1
                }
            })
        },
        itemClicked: function (b) {
            var c = $(b.currentTarget).data("eid"),
                d = this,
                f = a.data.items;
            this._menu.clicked(this, b), $(f).each(function () {
                if (this.elementId == c) {
                    e.showActionWindowForElement(this);
                    return !1
                }
            });
            return !1
        }
    }
}), define("ui/menu/menu_estates", ["state", "settings", "resources", "ui/window"], function (a, b, c, d) {
    return {
        _isInited: !1,
        init: function (a, b, c) {
            this.parentDiv = a, this.scrollDiv = b, this._menu = c, this.estatesList = $('<ul id="list-estates">').appendTo(this.parentDiv), this.scrollDiv.tinyscrollbar(), $(".menu-estate").die("click"), $(".menu-estate").live("click", $.proxy(this.estateClicked, this)), this._isInited = !0
        },
        isInited: function () {
            return this._isInited
        },
        load: function () {
            var b = a.data.estates,
                d = [];
            $(b.elements).each(function () {
                $(this.displayLayers).each(function () {
                    d.push(this.info), this.url = c.resolveDynamicImage(c.getImageFromId(this.info))
                })
            }), c.requireImages(d), this.estatesList.empty(), this.estatesMenu = $("#template-menu-estate").tmpl(b.elements).appendTo(this.estatesList)
        },
        onResize: function (a, b) {
            this.scrollDiv.tinyscrollbar_update("relative"), $(".tab-content", this.scrollDiv).width(this.scrollDiv.width() - 18)
        },
        processElementRemoved: function (a) {
            $('.menu-estate[data-eid="' + a.elementId + '"]', this.estatesList).remove(), this.scrollDiv.tinyscrollbar_update("relative")
        },
        processElementAdded: function (a, b) {
            var d = [];
            $(a.displayLayers).each(function () {
                d.push(this.info), this.url = c.resolveDynamicImage(c.getImageFromId(this.info))
            }), c.requireImages(d), b < this.estatesList.children().length ? $("#template-menu-estate").tmpl(a).insertBefore(this.estatesList.children()[b]) : $("#template-menu-estate").tmpl(a).appendTo(this.estatesList), this.scrollDiv.tinyscrollbar_update("relative")
        },
        processElementDisplayChange: function (b) {
            var d = a.data.estates,
                e = this;
            $(d).each(function () {
                if (this.elementId == b.elementId) {
                    var a = [];
                    $(this.displayLayers).each(function () {
                        a.push(this.info), this.url = c.resolveDynamicImage(c.getImageFromId(this.info))
                    }), c.requireImages(a), $('.menu-estate[data-eid="' + b.elementId + '"]', e.estatesList).replaceWith($("#template-menu-estate").tmpl(this));
                    return !1
                }
            })
        },
        estateClicked: function (b) {
            var c = a.data.estates,
                e = $(b.currentTarget).data("eid");
            this._menu.clicked(this, b);
            if (e === "relocate") {
                $(document).trigger("game.relocate", []);
                return !1
            }
            $(c.elements).each(function () {
                if (this.elementId == e) {
                    d.showActionWindowForElement(this);
                    return !1
                }
            });
            return !1
        }
    }
}), define("ui/menu/menu_skills", ["settings", "resources", "net", "ui/window"], function (a, b, c, d) {
    return {
        _isInited: !1,
        init: function (a, b, c) {
            this.parentDiv = a, this.scrollDiv = b, this.scrollDiv.tinyscrollbar(), this._isInited = !0, this._menu = c
        },
        isInited: function () {
            return this._isInited
        },
        load: function (a) {},
        onResize: function (a, b) {
            this.scrollDiv.tinyscrollbar_update("relative")
        },
        updateScroll: function () {
            this.scrollDiv.tinyscrollbar_update()
        },
        processPlayerSkillInfo: function (a) {
            this.playerSkillInfo = a, this._currentSkillId ? this.showSkillInfos(this._currentSkillId) : this.showSkills()
        },
        showSkills: function () {
            var a = this,
                c = [];
            $(a.playerSkillInfo.skillInfos).each(function () {
                $(this.displayLayers).each(function () {
                    c.push(this.info), this.url = b.resolveDynamicImage(b.getImageFromId(this.info))
                })
            }), b.requireImages(c), $(a.parentDiv).empty(), a.skillsMenu = $("#template-menu-skills").tmpl(a.playerSkillInfo).appendTo(a.parentDiv), a._menu.setTitle(a.parentDiv, _("skill_points_remaining") + ": " + a.playerSkillInfo.skillPoints), a.skillsList = $("#list-skills", a.parentDiv), a.skillsList.empty(), $("#template-menu-skill").tmpl(a.playerSkillInfo.skillInfos).appendTo(a.skillsList), $(a.skillsList).children().click($.proxy(a.skillClicked, a)), a.scrollDiv.tinyscrollbar_update()
        },
        onOpen: function () {
            this._menu.setTitle(this.parentDiv, _("skill_points_remaining") + ": " + this.playerSkillInfo.skillPoints)
        },
        showSkillInfos: function (a) {
            var b = this;
            b._currentSkillId = a;
            var c;
            $(b.playerSkillInfo.skillInfos).each(function () {
                c = this;
                if (c.skillId == a) return !1
            }), $(b.parentDiv).empty(), b.skillsMenu = $("#template-menu-skills").tmpl(b.playerSkillInfo).appendTo(b.parentDiv), b._menu.setTitle(b.parentDiv, _("skill_points_remaining") + ": " + b.playerSkillInfo.skillPoints), b.skillsList = $("#list-skills", b.parentDiv), b.skillsList.empty(), $("#template-menu-skill-level").tmpl(c.levelInfos).appendTo(b.skillsList), $("input:checkbox", b.skillsList).checkBox(), $(".ui-checkbox", b.skillsList).addClass("ui-checkbox-skill"), this._menu.showBackButton(this.parentDiv), this._menu.bindBackButton(this.parentDiv, function () {
                b._menu.hideBackButton(b.parentDiv), b.showSkills();
                return !1
            }), $(b.skillsList).children().change($.proxy(b.skillLevelChanged, b)), b.scrollDiv.tinyscrollbar_update()
        },
        skillClicked: function (a) {
            var b = this,
                c = $(a.currentTarget).data("sid");
            $(this.playerSkillInfo.skillInfos).each(function () {
                if (this.skillId == c) {
                    b.showSkillInfos(this.skillId), $(document).trigger("menu.change", [{
                        uRL: "pkclient://skills?skillid=" + c
                    }]);
                    return !1
                }
            });
            return !1
        },
        skillLevelChanged: function (a) {
            var b = this,
                e = this._currentSkillId,
                f = $(a.currentTarget).data("l"),
                g;
            $(b.playerSkillInfo.skillInfos).each(function () {
                g = this;
                if (g.skillId == e) return !1
            }), $(g.levelInfos).each(function () {
                if (this.level == f) {
                    var e = this;
                    e.currentlyHas && e.skillPointCost == 1 ? e.title = _("are_you_sure_your_want_to_reclaim", g.displayString, e.displayString, e.untrainCost) : e.currentlyHas && e.skillPointCost > 1 ? e.title = _("are_you_sure_your_want_to_reclaim_plural", g.displayString, e.displayString, e.untrainCost, e.skillPointCost) : !e.currentlyHas && e.skillPointCost == 1 ? e.title = _("are_you_sure_your_want_to_buy", g.displayString, e.displayString) : !e.currentlyHas && e.skillPointCost > 1 && (e.title = _("are_you_sure_your_want_to_buy_plural", g.displayString, e.displayString, e.skillPointCost)), d.showPromptWindow(e, function (d) {
                        var f = $(":checkbox", a.currentTarget);
                        if (!e.currentlyHas && e.skillPointCost > b.playerSkillInfo.skillPoints) {
                            f.prop("checked", !f.prop("checked")), c.post({
                                fullName: e.currentlyHas ? "UntrainSkill1" : "TrainSkill1",
                                skillId: g.skillId,
                                level: e.level
                            }, function (a) {});
                            return !1
                        }
                        d ? (f.replaceWith($('<img src="/images/pk/loading.gif" />')), c.post({
                            fullName: e.currentlyHas ? "UntrainSkill1" : "TrainSkill1",
                            skillId: g.skillId,
                            level: e.level
                        }, function (a) {})) : f.prop("checked", !f.prop("checked"))
                    })
                }
            });
            return !0
        }
    }
}), define("ui/menu/menu_create", ["state", "settings", "resources", "net", "ui/window"], function (a, b, c, d, e) {
    return {
        _isInited: !1,
        init: function (a, b, c) {
            this.parentDiv = a, this.scrollDiv = b, this.scrollDiv.tinyscrollbar(), this._isInited = !0, this._menu = c
        },
        isInited: function () {
            return this._isInited
        },
        load: function () {
            this.showMakeTypes()
        },
        onResize: function (a, b) {
            this.scrollDiv.tinyscrollbar_update("relative"), $(".tab-content", this.scrollDiv).width(this.scrollDiv.width() - 18)
        },
        updateScroll: function () {
            this.scrollDiv.tinyscrollbar_update()
        },
        onClose: function () {
            var a = this;
            clearTimeout(this._closeTimeout), a.showMakeTypes()
        },
        onOpen: function () {
            clearTimeout(this._closeTimeout)
        },
        processMakeTypes: function (a) {
            this._currentMakeType ? this._currentMakeType.makeId == a.makeId && this.showCreationTypes(a) : a.displayInCreateMenu && this.showMakeTypes()
        },
        processResourceUpdate: function () {
            this._currentMakeType && this.showCreationTypes(this._currentMakeType)
        },
        showMakeTypes: function () {
            var b = this,
                d = a.data.makeTypes,
                e = a.data.clientConfigs,
                f = [];
            $(d).each(function () {
                this.displayInCreateMenu && (this.subDisplayString = e["help_" + this.helpKey], $(this.displayLayers).each(function () {
                    f.push(this.info), this.url = c.resolveDynamicImage(c.getImageFromId(this.info))
                }))
            }), c.requireImages(f), $(b.parentDiv).empty(), b.createList = $('<ul id="list-create">').appendTo(b.parentDiv), b.createMenu = $("#template-menu-create").tmpl(d).appendTo(b.createList), b.createList.children().click($.proxy(b.makeTypeClicked, b)), b.scrollDiv.tinyscrollbar_update()
        },
        showCreationTypes: function (b) {
            var d = this,
                e = a.data.clientConfigs,
                f = a.data.yourResources,
                g = a.data.resources;
            this._currentMakeType = b;
            var h = [];
            $(b.creationTypes).each(function () {
                this.subDisplayString = e["help_" + this.helpKey], $(this.displayLayers).each(function () {
                    h.push(this.info), this.url = c.resolveDynamicImage(c.getImageFromId(this.info))
                }), $(this.resourceCosts).each(function () {
                    var a = this.resource,
                        b = 0;
                    $(f).each(function () {
                        if (this.resource == a) {
                            b = this.amount;
                            return !1
                        }
                    }), this.user = b, this.resourceObj = g[a], $(this.resourceObj.displayLayers).each(function () {
                        h.push(this.info), this.url = c.resolveDynamicImage(c.getImageFromId(this.info))
                    })
                })
            }), c.requireImages(h), $(d.parentDiv).empty(), d.createList = $('<ul id="list-create">').appendTo(d.parentDiv), d.createTypesList = $("#template-menu-create-type").tmpl(d._currentMakeType.creationTypes).appendTo(d.createList), d.createTypesList.click($.proxy(d.creationTypeClicked, d)), this._menu.showBackButton(this.parentDiv), this._menu.bindBackButton(this.parentDiv, function () {
                d._menu.hideBackButton(d.parentDiv), d.showMakeTypes();
                return !1
            }), d.scrollDiv.tinyscrollbar_update("relative")
        },
        makeTypeClicked: function (b) {
            var c = this,
                d = a.data.makeTypes,
                e = $(b.currentTarget).data("mid");
            this._menu.clicked(this, b), $(d).each(function () {
                if (this.makeId == e) {
                    c.showCreationTypes(this), $(document).trigger("menu.change", [{
                        uRL: "pkclient://create?type=" + e
                    }]);
                    return !1
                }
            });
            return !1
        },
        creationTypeClicked: function (a) {
            var b = this,
                c = b._currentMakeType,
                d = b._currentCreationType = $(a.currentTarget).data("ctn");
            this._menu.clicked(this, a), $(c.creationTypes).each(function () {
                if (this.creationTypeName == d) {
                    if (this.hasOwnProperty("confirmationPrompt") && this.confirmationPrompt) {
                        var a = [];
                        a.push({
                            text: _("yes"),
                            callback: function () {
                                b.creationTypeConfirmed();
                                return !1
                            }
                        }), a.push({
                            text: _("no"),
                            callback: function () {
                                return !1
                            }
                        });
                        if (this.hasOwnProperty("guideLink") && this.guideLink) {
                            var c = this.guideLink;
                            a.push({
                                text: _("help_about"),
                                callback: function () {
                                    $(document).trigger("action.generic", [d,
                                    {
                                        command: "HELP",
                                        displayString: '<span style="font-weight: bold">Info</span>',
                                        intPromptDisplay: "",
                                        prompt: !1,
                                        quickSlottable: !1,
                                        range: -1,
                                        stringPromptDisplay: "",
                                        uRL: c
                                    }]);
                                    return !1
                                }
                            })
                        }
                        e.showButtonPrompt(_("web_are_you_sure_you_want_to", this.confirmationPrompt), a)
                    } else b.creationTypeConfirmed();
                    return !1
                }
            });
            return !1
        },
        creationTypeConfirmed: function () {
            var a = this,
                b = a._currentMakeType,
                c = a._currentCreationType;
            b.canMakeMultiple ? e.showIntPromptWindow({
                intPromptDisplay: '<span data-i="how_many"></span>'
            }, function (a) {
                d.post({
                    fullName: "Create1",
                    makeId: b.makeId,
                    creationTypeName: c,
                    quantity: a
                }, function (a) {})
            }) : (c === "FLAG" && $(document).trigger("tutorial.check"), d.post({
                fullName: "Create1",
                makeId: b.makeId,
                creationTypeName: c,
                quantity: 1
            }, function (a) {}))
        }
    }
}), define("ui/menu/menu_get_food", ["state", "settings", "resources", "auth/kongregate"], function (a, b, c, d) {
    return {
        init: function (a, b) {
            this.parentDiv = a, this.scrollDiv = b, this.scrollDiv.tinyscrollbar(), this.getFoodList = $('<ul id="list-get-food">').appendTo(this.parentDiv)
        },
        onResize: function (a, b) {
            this.scrollDiv.tinyscrollbar_update("relative"), $(".tab-content", this.scrollDiv).width(this.scrollDiv.width() - 18)
        },
        updateScroll: function () {
            this.scrollDiv.tinyscrollbar_update()
        },
        load: function () {
            var b = a.data.getFoodPages,
                e = this,
                f = [],
                g = [];
            $(b).each(function (a, b) {
                d.isInFrame() && (this.helpKey === "screen_subscribes_to_platinum" || this.helpKey == "screen_facebook_friend" || this.helpKey == "screen_share") && g.push(a), $(this.displayLayers).each(function () {
                    f.push(this.info), this.url = c.resolveDynamicImage(c.getImageFromId(this.info))
                })
            });
            var h = 0;
            while (g.length > 0) {
                var i = g.shift() - h++;
                b.splice(i, 1)
            }
            c.requireImages(f), this.getFoodList.empty(), this.getFoodMenu = $("#template-menu-get-food").tmpl(b).appendTo(this.getFoodList), this.scrollDiv.tinyscrollbar_update();
            var e = this;
            this.getFoodList.children().click(function (c) {
                var e = $(this).data("helpkey"),
                    f = null;
                for (var g in b) {
                    var h = b[g];
                    if (h.helpKey === e) {
                        f = h;
                        break
                    }
                }
                if (f == null) console.error("Null food data on click");
                else {
                    if (e == "screen_buy_food" && pk.state.isKongregate) {
                        if (d.isInFrame()) {
                            var i = window.open("/game/kongfoodselection", "_blank", "height=500,width=450,scrollbars=yes");
                            $(i).load(function () {
                                var a = i.$;
                                a("button").click(function () {
                                    var b = a('input[type="radio"]:checked'),
                                        c = b.val().toLowerCase();
                                    d.showFoodPage(c), i.close()
                                })
                            })
                        }
                        return !1
                    }
                    var j = -1,
                        k = f.uRL;
                    k.indexOf("?") >= 0 ? k += "&viewCharID=" + a.data.yourId + "&sessionID=" + a.data.sessionId : k += "?viewCharID=" + a.data.yourId + "&sessionID=" + a.data.sessionId;
                    if (k.indexOf("http://") >= 0) var i = window.open(k, "_blank", "height=800,width=800,scrollbars=yes");
                    else $(document).trigger("action.url.load", [f.uRL, f.displayString]);
                    return !1
                }
            })
        }
    }
}), define("ui/menu/menu_settings", ["state", "settings", "resources", "net", "ui/window", "utils"], function (a, b, c, d, e, f) {
    return {
        init: function (a, b) {
            this.parentDiv = a, this.scrollDiv = b, this._settingsWrapper = $('<div id="settings-tab-wrapper"></div>').appendTo(a), this.scrollDiv.tinyscrollbar(), $("#settings-enable-sat").live("click", function () {
                var a = $(this).is(":checked");
                $(document).trigger("menu.settings.quickUpdated", [a]);
                return !0
            }), $("#settings-tab-submit-button").live("click", function () {
                $("#settings-error").html("");
                var a = $("#settings-email").val(),
                    b = $("#settings-old-password").val(),
                    c = hex_md5(b).toUpperCase(),
                    e = d.getLoginData();
                if (e && c !== e.pwh) $("#settings-error").html(_("web_old_password_doesnt_match"));
                else {
                    var g = $("#settings-new-password").val(),
                        h = $("#settings-new-password-confirm").val(),
                        i = null;
                    if ($.trim(g) !== "") {
                        if (g !== h) {
                            $("#settings-error").html(_("passwords_do_not_match"));
                            return
                        }
                        if (!f.isValidPasswordForLength(g)) {
                            $("#settings-error").html(_("password_too_short"));
                            return
                        }
                        if (!f.isValidPasswordForCharacters(g)) {
                            $("#settings-error").html(_("password_too_weak"));
                            return
                        }
                        i = hex_md5(g).toUpperCase()
                    } else i = c;
                    if ($.trim(a) == "" || a.indexOf("@") == -1) {
                        $("#settings-error").html(_("web_please_valid_email"));
                        return
                    }
                    var j = $("#settings-receive-sms").is(":checked"),
                        k = $("#settings-receive-email").is(":checked");
                    $(document).trigger("menu.settings.updated", [a, j, k, i]);
                    return !1
                }
            })
        },
        load: function () {
            var b = a.data,
                c = !1;
            require(["game"], function (a) {
                var b = a.userPrefs.map_enable_sat;
                b === !0 && (c = !0)
            }), this._settingsTab || (this._settingsTab = $("#template-menu-settings").tmpl({
                email: b.email,
                smsChecked: b.receiveSms ? "checked" : "",
                emailChecked: b.receiveEmail ? "checked" : "",
                sat: c
            }), $(this._settingsTab).translate(), this._settingsWrapper.html(this._settingsTab), $("input:checkbox", this._settingsWrapper).checkBox(), $(".ui-checkbox", this._settingsWrapper).addClass("ui-checkbox-skill"), this.scrollDiv.tinyscrollbar_update())
        },
        onResize: function (a, b) {
            this.scrollDiv.tinyscrollbar_update("relative"), $(".tab-content", this.scrollDiv).width(this.scrollDiv.width() - 18)
        }
    }
}), define("ui/menu/menu_messages", ["settings", "state", "resources", "net", "ui/window", "utils"], function (a, b, c, d, e, f) {
    return {
        _isInited: !1,
        init: function (a, b, c, d) {
            this.parentDiv = a, this.newMessagesDiv = b, this.scrollDiv = c, this.scrollDiv.tinyscrollbar(), this._webViewActionsMap = {}, this._menu = d, this._lastRequestedTopicIndex = 0, this._isLoading = !1, this._isInited = !0
        },
        isInited: function () {
            return this._isInited
        },
        load: function (a) {},
        onResize: function (a, b) {
            this.scrollDiv.tinyscrollbar_update("relative"), $(".tab-content", this.scrollDiv).width(this.scrollDiv.width() - 18)
        },
        onTabChange: function () {
            d.post({
                fullName: "GetFolderUnreadCounts1"
            })
        },
        processBackClick: function (a) {},
        processTopicFolders: function (a) {
            this._topicFolders = a, (!this._currentFolder || !this._currentMessage) && this.showTopicFolders()
        },
        processFolderUnreadCounts: function (a) {
            console.log("Unread counts"), console.log(a);
            var b = 0;
            for (var c = 0; c < this._topicFolders.length; c++) {
                var d = this._topicFolders[c],
                    e = a[d.iD];
                console.log("Updated read counts for folder from " + d.unreadCount + " to " + e), d.unreadCount = e, b += e;
                if (!this._currentFolder && !this._currentMessage && !this._isLoading) {
                    this.showTopicFolders();
                    return
                }
            }
            this.newMessagesDiv.removeClass(), b > 0 ? (b > 9 ? this.newMessagesDiv.addClass("messages-new-long") : this.newMessagesDiv.addClass("messages-new-short"), $(".messages-new-text", this.newMessagesDiv).text(b)) : $(".messages-new-text", this.newMessagesDiv).text("")
        },
        processNewComment: function (a) {
            if (this._currentMessage && a.topicID === this._currentMessage.topicID) a.comment.posterName == b.getYouLocationElement().name && (a.comment.unread = !1), this._currentMessage.messageComments.splice(0, 0, a.comment), this.showMessage(this._currentMessage);
            else if (this._currentFolder) for (var c = 0; c < this._currentFolder.messageTopics.length; c++) {
                var e = this._currentFolder.messageTopics[c];
                if (e.topicID == a.topicID) {
                    e.totalComments++, e.unreadCount++;
                    if (e.unreadCount == 1) for (var c = 0; c < this._topicFolders.length; c++) {
                        var f = this._topicFolders[c];
                        if (f.iD == this._currentFolder.topicFolderID) {
                            f.unreadCount++;
                            break
                        }
                    }
                    this.showFolder(this._currentFolder);
                    break
                }
            } else d.post({
                fullName: "GetFolderUnreadCounts1"
            })
        },
        processNewTopic: function (a) {
            if ( !! this._topicFolders) {
                a.topic.posterName != b.getYouLocationElement().name && a.topic.unreadCount++;
                for (var c = 0; c < this._topicFolders.length; c++) {
                    var d = this._topicFolders[c];
                    if (d.iD === a.folderID) {
                        a.topic.posterName != b.getYouLocationElement().name && d.unreadCount++, console.log("Adding new topic to folder"), console.log(d), this._currentFolder && this._currentFolder.topicFolderID == d.iD ? (console.log("Updating current folder."), this._currentFolder.messageTopics.splice(0, 0, a.topic), this._currentMessage || this.showFolder(this._currentFolder)) : this.showTopicFolders();
                        break
                    }
                }
            }
        },
        processDeleteAllTopics: function (a) {
            for (var b = 0; b < this._topicFolders.length; b++) {
                var c = this._topicFolders[b];
                if (c.iD === a.folderID) {
                    c.unreadCount = 0;
                    if (a.folderID === this._currentFolder.topicFolderID) {
                        this.showTopicFolders();
                        break
                    }
                }
            }
        },
        processDeleteTopic: function (a) {
            if ( !! this._currentFolder) for (var b = 0; b < this._currentFolder.messageTopics.length; b++) {
                var c = this._currentFolder.messageTopics[b];
                if (c.topicID === a.topicID) {
                    console.log("Deleted topic");
                    if (c.unreadCount > 0) for (var b = 0; b < this._topicFolders.length; b++) {
                        var e = this._topicFolders[b];
                        if (e.iD === this._currentFolder.topicFolderID) {
                            e.unreadCount--;
                            break
                        }
                    }
                    this._currentFolder.messageTopics.splice(b, 1), this._currentMessage = null, d.post({
                        fullName: "GetTopics1",
                        topicFolderID: this._currentFolder.topicFolderID,
                        startIndex: this._position + 1,
                        count: 1
                    }, function () {}), this.showFolder(this._currentFolder);
                    break
                }
            }
        },
        showTopicFolders: function () {
            var a = this;
            this._isLoading = !1, clearTimeout(this._messagesLoadingTimeout), this._currentFolder = null;
            var d = this._topicFolders;
            this._menu.setTitle(this.parentDiv, _("topicfolder_title"));
            var e = 0;
            $(d).each(function () {
                e += this.unreadCount, $(this.displayLayers).each(function () {
                    this.url = c.resolveDynamicImage(c.getImageFromId(this.info))
                })
            }), this.newMessagesDiv.removeClass(), e > 0 ? (e > 9 ? this.newMessagesDiv.addClass("messages-new-long") : this.newMessagesDiv.addClass("messages-new-short"), $(".messages-new-text", this.newMessagesDiv).text(e)) : $(".messages-new-text", this.newMessagesDiv).text("");
            var f = $("#template-menu-folders").tmpl({
                topicFolders: this._topicFolders
            });
            $(f).translate(), this.parentDiv.html(f), $(".menu-messages-folder").die("click"), $(".menu-messages-folder").live("click", function () {
                $(".menu-messages-folder").die("click"), a.folderClicked(this);
                return !1
            }), this._webViewActionsMap.hasOwnProperty(b.data.yourId) && this.processFoldersWebViewActions(this._webViewActionsMap[b.data.yourId]), this.scrollDiv.tinyscrollbar_update()
        },
        showFolder: function (e) {
            var g = this,
                h = Measure.end("load_messages_folder");
            h && require(["stats"], function (a) {
                a.track({
                    path: "/menu/messages/folder_load",
                    value: h.duration,
                    extra: e.topicFolderID
                })
            }), this._isLoading = !1, clearTimeout(this._messagesLoadingTimeout), this._currentMessage = null, this._currentFolder = e, this._position = this._currentFolder.messageTopics.length - 1;
            var i = 0;
            for (var j = 0; j < this._topicFolders.length; j++) {
                var k = this._topicFolders[j];
                i += k.unreadCount, k.iD == this._currentFolder.topicFolderID && this._menu.setTitle(this.parentDiv, k.displayString)
            }
            this.newMessagesDiv.removeClass(), i > 0 ? (i > 9 ? this.newMessagesDiv.addClass("messages-new-long") : this.newMessagesDiv.addClass("messages-new-short"), $(".messages-new-text", this.newMessagesDiv).text(i)) : $(".messages-new-text", this.newMessagesDiv).text(""), $(this._currentFolder.messageTopics).each(function () {
                this.dateParsed = f.formatDate(this.date), $(this.displayLayers).each(function () {
                    this.url = c.resolveDynamicImage(c.getImageFromId(this.info))
                })
            });
            var l = $("#template-menu-topics").tmpl(this._currentFolder);
            $(l).translate(), this.parentDiv.html(l), $(".menu-messages-topic").live("click", function () {
                $(".menu-messages-topic").die("click"), g.parentDiv.unbind("scroll"), g._currentFolder.scroll = -parseInt($(".overview", g.scrollDiv).css("top"), 10), console.log("Clicked on topic");
                var c = $(this).data("tid");
                this._isLoading = !0, g.parentDiv.html('<div class="menu-content">' + _("loading") + "</div>"), clearTimeout(g._messagesLoadingTimeout), g._messagesLoadingTimeout = setTimeout(function () {
                    g.parentDiv.html('<div class="menu-content">' + _("web_unable_to_load") + "</div>"), g._messagesLoadingTimeout = setTimeout(function () {
                        g.showFolder(g._currentFolder)
                    }, 5e3)
                }, a.MESSAGES_LOAD_TIMEOUT), d.post({
                    fullName: "GetComments1",
                    topicID: c,
                    startIndex: 0,
                    count: b.data.clientConfigs.comments_page_size
                }, function () {});
                return !1
            }), this.scrollDiv.scroll(function () {
                $(".track", g.scrollDiv).height() - ($(".thumb", g.scrollDiv).height() + parseInt($(".thumb", g.scrollDiv).css("top"))) < 5 && g._currentFolder && g._position == g._currentFolder.messageTopics.length - 1 && g._position > g._lastRequestedTopicIndex && (g._lastRequestedTopicIndex = g._position, d.post({
                    fullName: "GetTopics1",
                    topicFolderID: g._currentFolder.topicFolderID,
                    startIndex: g._position + 1,
                    count: b.data.clientConfigs.topics_page_size
                }, function () {}))
            }), this._webViewActionsMap.hasOwnProperty(this._currentFolder.topicFolderID) && this.processTopicsWebViewActions(this._webViewActionsMap[this._currentFolder.topicFolderID]), g._currentFolder.scroll ? this.scrollDiv.tinyscrollbar_update(g._currentFolder.scroll) : this.scrollDiv.tinyscrollbar_update("relative"), this._menu.showBackButton(this.parentDiv), this._menu.bindBackButton(this.parentDiv, function () {
                $(".menu-messages-topic").die("click"), g.parentDiv.unbind("scroll"), g.showTopicFolders(), g._menu.hideBackButton(g.parentDiv);
                return !1
            })
        },
        addToFolder: function (a) {
            this._currentFolder && ($(a.messageTopics).each(function () {
                this.dateParsed = f.formatDate(this.date), $(this.displayLayers).each(function () {
                    this.url = c.resolveDynamicImage(c.getImageFromId(this.info))
                })
            }), $("#template-menu-topic").tmpl(a.messageTopics).appendTo("#menu-messages-topics"), this._position += a.messageTopics.length, this._currentFolder.messageTopics = this._currentFolder.messageTopics.concat(a.messageTopics), this.scrollDiv.tinyscrollbar_update("relative"))
        },
        showFolderWithId: function (c) {
            var e = this;
            this.parentDiv.html('<div class="menu-content">' + _("loading") + "</div>"), this.scrollDiv.tinyscrollbar_update(), this._isLoading = !0, clearTimeout(e._messagesLoadingTimeout), e._messagesLoadingTimeout = setTimeout(function () {
                e.parentDiv.html(_("web_unable_to_load")), e._messagesLoadingTimeout = setTimeout(function () {
                    e.showTopicFolders()
                }, 5e3)
            }, a.MESSAGES_LOAD_TIMEOUT), d.post({
                fullName: "GetTopics1",
                topicFolderID: c,
                startIndex: 0,
                count: b.data.clientConfigs.topics_page_size
            }, function () {})
        },
        showMessageWithId: function (c) {
            var e = this;
            this._isLoading = !0, e.parentDiv.html('<div class="menu-content">' + _("loading") + "</div>"), this.scrollDiv.tinyscrollbar_update(), clearTimeout(e._messagesLoadingTimeout), e._messagesLoadingTimeout = setTimeout(function () {
                e.parentDiv.html(_("web_unable_to_load")), e._messagesLoadingTimeout = setTimeout(function () {
                    e.showTopicFolders()
                }, 5e3)
            }, a.MESSAGES_LOAD_TIMEOUT), d.post({
                fullName: "GetComments1",
                topicID: c,
                startIndex: 0,
                count: b.data.clientConfigs.comments_page_size
            }, function () {})
        },
        showMessage: function (a) {
            var b = this;
            this._isLoading = !1, clearTimeout(this._messagesLoadingTimeout), this._currentMessage = a, this._menu.setTitle(this.parentDiv, _("title_comments")), $(this._currentMessage.messageComments).each(function () {
                this.dateParsed = f.formatDate(this.date), $(this.displayLayers).each(function () {
                    this.url = c.resolveDynamicImage(c.getImageFromId(this.info))
                })
            });
            for (var g = 0; g < this._currentMessage.messageComments.length; g++) this._currentMessage.messageComments[g].displayStrings = this._currentMessage.messageComments[g].displayString.split("\n");
            var h = $("#template-menu-messages").tmpl(this._currentMessage);
            $(h).translate(), this.parentDiv.html(h);
            if (this._webViewActionsMap.hasOwnProperty(this._currentMessage.topicID)) {
                var i = this._webViewActionsMap[this._currentMessage.topicID];
                this.processCommentsWebViewActions(i, i.urlData)
            }
            this.scrollDiv.tinyscrollbar_update(), $(".menu-messages-comments").die("click"), $(".menu-messages-comments").live("click", function () {
                console.log("Clicked on comment");
                var a = $(this).data("cid"),
                    c = null;
                $(b._currentMessage.messageComments).each(function () {
                    if (this.commentID === a) {
                        c = this;
                        return !1
                    }
                });
                if (!c) {
                    console.error("Unable to find comment on click");
                    return !1
                }
                e.showActionWindow(_("select_action_on", _("title_write_pm")), c, "commentID", function (a, b) {
                    console.log("Performing action on message"), console.log(a), console.log(b);
                    if (b.uRL !== "") {
                        if (b.command === "VIEW_PROFILE") {
                            var c = _("web_tab_player_profile_empty");
                            $(document).trigger("action.url.load", [b.uRL, c]), d.post({
                                fullName: "WebViewActionsRequest1",
                                uRL: b.uRL
                            }, function (a) {})
                        } else $(document).trigger("action.url.load", [b.uRL, b.displayString]);
                        return !1
                    }
                    console.log("Sending action..."), $(document).trigger("action.generic", [a, b]);
                    return !1
                });
                return !1
            }), this._menu.showBackButton(this.parentDiv), this._menu.bindBackButton(this.parentDiv, function () {
                $(".menu-messages-comment").die("click");
                if (b._currentFolder) {
                    b._isLoading = !0;
                    for (var a = 0; a < b._currentFolder.messageTopics.length; a++) {
                        var c = b._currentFolder.messageTopics[a];
                        if (c.topicID === b._currentMessage.topicID) {
                            c.unreadCount = 0;
                            break
                        }
                    }
                    b.showFolder(b._currentFolder)
                } else b.showTopicFolders();
                return !1
            })
        },
        folderClicked: function (c) {
            var e = this;
            Measure.start("load_messages_folder");
            var f = $(c).data("fid");
            console.log("Clicked on folderId: " + f), d.post({
                fullName: "GetTopics1",
                topicFolderID: f,
                startIndex: 0,
                count: b.data.clientConfigs.topics_page_size
            }, function () {}), this._position = 0, this._lastRequestedTopicIndex = 0, this._isLoading = !0, this.parentDiv.html('<div class="menu-content">' + _("loading") + "</div>"), this.scrollDiv.tinyscrollbar_update(), this._menu.showBackButton(this.parentDiv), this._menu.bindBackButton(this.parentDiv, function () {
                e.showTopicFolders(), e._isLoading = !1;
                return !1
            }), clearTimeout(e._messagesLoadingTimeout), e._messagesLoadingTimeout = setTimeout(function () {
                this._isLoading = !1, e.parentDiv.html(_("web_unable_to_load")), e._messagesLoadingTimeout = setTimeout(function () {
                    e.showTopicFolders(), e._isLoading = !1
                }, 5e3)
            }, a.MESSAGES_LOAD_TIMEOUT)
        },
        processFoldersWebViewActions: function (a) {
            var c = this,
                d = a.elementId;
            this._webViewActionsMap[d] = a;
            if ( !! this._topicFolders) {
                var e = $("#menu-folders-actions");
                e.empty();
                for (var g = 0; g < a.actions.length; g++) {
                    var h = a.actions[g];
                    h.displayString = f.UI.parseDisplayString(h.displayString);
                    var i = f.UI.makeButton(h.displayString);
                    i = $(i).appendTo(e), $(i).data("actioncommand", h.command)
                }
                $("#menu-folders-actions .button").click(function () {
                    var c = $(this).data("actioncommand"),
                        d = null;
                    for (var e = 0; e < a.actions.length; e++) {
                        var f = a.actions[e];
                        if (f.command === c) {
                            d = f;
                            break
                        }
                    }
                    if (!d) {
                        console.error("Unable to find action");
                        return !1
                    }
                    if (d.uRL !== "") {
                        $(document).trigger("action.url.load", [d.uRL, null]);
                        return !1
                    }
                    console.log("Sending action..."), $(document).trigger("action.generic", [b.data.yourId, d]);
                    return !1
                })
            }
        },
        processTopicsWebViewActions: function (a) {
            var b = this,
                c = a.elementId,
                d = null;
            for (var e = 0; e < this._topicFolders.length; e++) {
                var g = this._topicFolders[e];
                if (g.iD === c) {
                    d = g;
                    break
                }
            }
            if (!d) console.error("Couldn't find that folder.");
            else {
                this._webViewActionsMap[d.iD] = a;
                if (!this._currentFolder) return;
                if (this._currentFolder && !this._currentMessage && this._currentFolder.topicFolderID === d.iD) {
                    var h = $("#menu-topics-actions");
                    h.empty();
                    for (var e = 0; e < a.actions.length; e++) {
                        var i = a.actions[e];
                        i.displayString = f.UI.parseDisplayString(i.displayString);
                        var j = f.UI.makeButton(i.displayString);
                        j = $(j).appendTo(h), $(j).data("actioncommand", i.command)
                    }
                    $("#menu-topics-actions .button").click(function () {
                        var c = $(this).data("actioncommand"),
                            d = null;
                        for (var e = 0; e < a.actions.length; e++) {
                            var f = a.actions[e];
                            if (f.command === c) {
                                d = f;
                                break
                            }
                        }
                        if (!d) {
                            console.error("Unable to find action");
                            return !1
                        }
                        if (d.uRL !== "") {
                            $(document).trigger("action.url.load", [d.uRL, null]);
                            return !1
                        }
                        console.log("Sending action..."), $(document).trigger("action.generic", [b._currentFolder.topicFolderID, d]);
                        return !1
                    })
                }
            }
        },
        processCommentsWebViewActions: function (a, b) {
            var c = this,
                d = a.elementId,
                e = null;
            a.urlData = b, this._webViewActionsMap[b.params.topicid] = a;
            if (this._currentMessage && this._currentMessage.topicID === b.params.topicid) {
                var g = $("#menu-messages-comments-actions");
                g.empty();
                for (var h = 0; h < a.actions.length; h++) {
                    var i = a.actions[h];
                    i.displayString = f.UI.parseDisplayString(i.displayString);
                    var j = $(f.UI.makeButton(i.displayString));
                    j = $(j).appendTo(g), $(j).data("actioncommand", i.command)
                }
                $("#menu-messages-comments-actions .button").click(function () {
                    var b = $(this).data("actioncommand"),
                        d = null;
                    for (var e = 0; e < a.actions.length; e++) {
                        var f = a.actions[e];
                        if (f.command === b) {
                            d = f;
                            break
                        }
                    }
                    if (!d) {
                        console.error("Unable to find action");
                        return !1
                    }
                    if (d.uRL !== "") {
                        $(document).trigger("action.url.load", [d.uRL, null]);
                        return !1
                    }
                    console.log("Sending action..."), $(document).trigger("action.generic", [c._currentMessage.topicID, d]);
                    return !1
                })
            }
        },
        processMarkFolderRead: function (a) {
            for (var b = 0; b < this._topicFolders.length; b++) {
                var c = this._topicFolders[b];
                if (c.iD === a.folderID) {
                    console.log("Setting all topics read for this folder"), c.unreadCount = 0;
                    if (c.messageTopics) for (var d = 0; d < c.messageTopics.length; d++) {
                        var e = c.messageTopics[d];
                        e.unreadCount = 0
                    }
                }
            }
            if (this._currentFolder) {
                if (this._currentFolder.messageTopics) for (var d = 0; d < this._currentFolder.messageTopics.length; d++) {
                    var e = this._currentFolder.messageTopics[d];
                    e.unreadCount = 0
                }
                this.showFolder(this._currentFolder)
            } else this.showTopicFolders()
        },
        processMarkTopicRead: function (a) {
            for (var b = 0; b < this._topicFolders.length; b++) {
                var c = this._topicFolders[b];
                if (c.messageTopics) for (var d = 0; d < c.messageTopics.length; d++) {
                    var e = c.messageTopics[d];
                    c.iD === a.topicID && (console.log("Setting all comments read for this topic"), e.unreadCount = 0)
                }
            }
        }
    }
}), define("ui/menu/menu_players", ["settings", "state", "resources", "net", "ui/window", "utils"], function (a, b, c, d, e, f) {
    return {
        init: function (a, b, c) {
            var d = this;
            this.parentDiv = a, this.scrollDiv = b, this.scrollDiv.tinyscrollbar(), this._menu = c, this._lastRequestedPlayerIndex = 0, this._isLoading = !1, this._isSearching = !1, $("#menu-playerlists-search").live("keyup", function () {
                var a = this;
                clearTimeout(d._searchTimeout), d._searchTimeout = setTimeout(function () {
                    d.doSearch($(a).val())
                }, 400)
            })
        },
        load: function (a) {},
        onResize: function (a, b) {
            this.scrollDiv.tinyscrollbar_update("relative"), $(".tab-content", this.scrollDiv).width(this.scrollDiv.width() - 18)
        },
        onTabChange: function () {
            this._hasTriedConnecting || (console.log("Starting game - CONNECTING TO PLAYERS LIST IN GAME..."), console.log(b.data.clientConfigs.pk3_host + ":" + b.data.clientConfigs.pk3_port), this.parentDiv.html('<div class="menu-content">' + _("loading") + "</div>"), Measure.start("player_list_load"), d.playerListConnect(b.data.clientConfigs.pk3_host, b.data.clientConfigs.pk3_port, function (a) {
                console.log("CONNECTED TO PLAYERS LIST SERVER"), d.playerListPost({
                    fullName: "RequestPlayerLists1",
                    charId: b.data.yourId
                })
            }), this._hasTriedConnecting = !0)
        },
        processPlayerLists: function (a) {
            var b = Measure.end("player_list_load");
            b && require(["stats"], function (a) {
                a.track({
                    path: "/menu/players/loadlist",
                    value: b.duration,
                    extra: null
                })
            }), this._playerLists = a, this._currentList || this.showPlayerLists()
        },
        showPlayerLists: function () {
            var a = this,
                b = this._playerLists;
            $(b).each(function () {
                $(this.displayLayers).each(function () {
                    this.url = c.resolveDynamicImage(c.getImageFromId(this.info))
                })
            }), this.parentDiv.empty(), this._menu.setTitle(this.parentDiv, _("title_player_lists"));
            var d = $("#template-menu-playerlists").tmpl({
                lists: b,
                placeholder: _("search_bar_hint")
            });
            $(d).translate(), this.parentDiv.html(d), this.scrollDiv.tinyscrollbar_update(), $("#menu-playerlists-lists > li").click(function () {
                a.listClicked(this);
                return !1
            })
        },
        doSearch: function (c) {
            var e = this;
            Measure.start("player_list_search"), console.log("Searching for " + c), d.playerListPost({
                fullName: "GetSearchListPage1",
                query: c,
                startIndex: 0,
                charId: b.data.yourId,
                count: b.data.clientConfigs[a.CONFIGS.PLAYER_PAGE_SIZE]
            }), this._position = 0, this._lastRequestedPlayerIndex = 0, this._isSearching = !0, $(".menu-playerlists-result-box", this.parentDiv).html('<div class="menu-content">' + _("loading") + "</div>"), this.scrollDiv.tinyscrollbar_update(), this._menu.showBackButton(this.parentDiv), this._menu.bindBackButton(this.parentDiv, function () {
                e.showPlayerLists(), e._currentList = null, e._isSearching = !1, e.parentDiv.unbind("scroll"), e._menu.hideBackButton(), clearTimeout(e._playersSearchingTimeout);
                return !1
            }), this._currentList = {
                query: c
            }, e._playersSearchingTimeout = setTimeout(function () {
                e._isSearching = !1, $(".menu-playerlists-result-box", e.parentDiv).html('<div class="menu-content">' + _("web_unable_to_load") + "</div>"), e._playersSearchingTimeout = setTimeout(function () {
                    e.showPlayerLists(), e._currentList = null, e._isSearching = !1, e._menu.hideBackButton()
                }, 5e3)
            }, a.PLAYERS_LOAD_TIMEOUT)
        },
        listClicked: function (c) {
            var e = this;
            Measure.start("player_list_show_list");
            var f = $(c).data("lid");
            console.log("Clicked on listId: " + f), d.playerListPost({
                fullName: "GetListPage1",
                charId: b.data.yourId,
                listId: f,
                startIndex: 0,
                count: b.data.clientConfigs.player_page_size
            }, function (a) {}), this._position = 0, this._lastRequestedPlayerIndex = 0, this._isLoading = !0, this.parentDiv.html('<div class="menu-content">' + _("loading") + "</div>"), this.scrollDiv.tinyscrollbar_update(), this._menu.showBackButton(this.parentDiv), this._menu.bindBackButton(this.parentDiv, function () {
                e.showPlayerLists(), e._currentList = null, e._isLoading = !1, e.parentDiv.unbind("scroll"), e._menu.hideBackButton(e.parentDiv), clearTimeout(e._playersLoadingTimeout);
                return !1
            });
            for (var g in this._playerLists) {
                var h = this._playerLists[g];
                if (h.listId === f) {
                    this._currentList = h;
                    break
                }
            }
            e._playersLoadingTimeout = setTimeout(function () {
                e._isLoading = !1, e.parentDiv.html('<div class="menu-content">' + _("web_unable_to_load") + "</div>"), e._playersLoadingTimeout = setTimeout(function () {
                    e.showPlayerLists(), e._currentList = null, e._isLoading = !1, e._menu.hideBackButton()
                }, 5e3)
            }, a.PLAYERS_LOAD_TIMEOUT)
        },
        showPlayers: function (e) {
            var g = this;
            this._currentList.players = e.players, this._position = this._currentList.players.length - 1, $(this._currentList.players).each(function () {
                $(this.displayLayers).each(function () {
                    this.url = c.resolveDynamicImage(c.getImageFromId(this.info))
                }), this.hexColor = f.intColorToHex(this.rankingColor)[0]
            });
            if (this._isLoading) {
                var h = Measure.end("player_list_show_list");
                h && require(["stats"], function (a) {
                    a.track({
                        path: "/menu/players/loadspecificlist",
                        value: h.duration,
                        extra: g._currentList.listId
                    })
                }), g._isLoading = !1, clearTimeout(g._playersLoadingTimeout), this._menu.setTitle(this.parentDiv, this._currentList.displayString);
                var i = $("#template-menu-players").tmpl(this._currentList);
                $(i).translate(), this.parentDiv.html(i), this.scrollDiv.tinyscrollbar_update(), $("#menu-playerlists-results > li").die("click"), $("#menu-playerlists-results > li").live("click", function () {
                    console.log("Clicked on player"), g.resultClicked(this);
                    return !1
                }), this.scrollDiv.scroll(function () {
                    $(".track", g.scrollDiv).height() - ($(".thumb", g.scrollDiv).height() + parseInt($(".thumb", g.scrollDiv).css("top"))) < 5 && g._currentList && g._position == g._currentList.players.length - 1 && g._position > g._lastRequestedPlayerIndex && (g._lastRequestedPlayerIndex = g._position, d.playerListPost({
                        fullName: "GetListPage1",
                        charId: b.data.yourId,
                        listId: g._currentList.listId,
                        startIndex: g._position + 1,
                        count: b.data.clientConfigs.player_page_size
                    }, function (a) {}))
                })
            } else if (this._isSearching) {
                var h = Measure.end("player_list_search");
                h && require(["stats"], function (a) {
                    a.track({
                        path: "/menu/players/search",
                        value: h.duration,
                        extra: g._currentList.query
                    })
                }), g._isSearching = !1, clearTimeout(g._playersSearchingTimeout), this._menu.setTitle(this.parentDiv, _("title_player_list_search_result"));
                var i = $("#template-menu-players-search").tmpl(this._currentList);
                $(i).translate(), $(".menu-playerlists-result-box", this.parentDiv).html(i), this.scrollDiv.tinyscrollbar_update(), $("#menu-playerlists-results > li").die("click"), $("#menu-playerlists-results > li").live("click", function () {
                    console.log("Clicked on player"), g.resultClicked(this);
                    return !1
                }), this.scrollDiv.scroll(function () {
                    $(".track", g.scrollDiv).height() - ($(".thumb", g.scrollDiv).height() + parseInt($(".thumb", g.scrollDiv).css("top"))) < 5 && g._currentList && g._position == g._currentList.players.length - 1 && g._position > g._lastRequestedPlayerIndex && (g._lastRequestedPlayerIndex = g._position, d.playerListPost({
                        fullName: "GetSearchListPage1",
                        query: g._currentList.query,
                        startIndex: g._position + 1,
                        charId: b.data.yourId,
                        count: b.data.clientConfigs[a.CONFIGS.PLAYER_PAGE_SIZE]
                    }))
                })
            }
        },
        addToPlayers: function (a) {
            this._currentList && (this._currentList.players = this._currentList.players.concat(a.players), $(this._currentList.players).each(function () {
                $(this.displayLayers).each(function () {
                    this.url = c.resolveDynamicImage(c.getImageFromId(this.info))
                }), this.hexColor = f.intColorToHex(this.rankingColor)[0]
            }), $("#template-menu-player").tmpl(a.players).appendTo("#menu-playerlists-results"), this.scrollDiv.tinyscrollbar_update("relative"), this._position += a.players.length)
        },
        resultClicked: function (a) {
            var b = $(a).data("cid");
            for (var c in this._currentList.players) {
                var d = this._currentList.players[c];
                if (d.charId === b) {
                    console.log("Clicked on player", b), $(document).trigger("action.player.view", [d]);
                    break
                }
            }
        }
    }
}), define("ui/menu/menu_tut_info", ["utils", "state"], function (a, b) {
    return {
        _isInited: !1,
        _infoPageIndex: 0,
        _infoPageMax: 0,
        _infoPages: [],
        _firstInfo: !1,
        handlesOwnSound: !0,
        init: function (a, b, c) {
            var d = this;
            this._menu = c, this.parentDiv = a, this.scrollDiv = b, this.scrollDiv.tinyscrollbar(), this._menu.showBackButton(this.parentDiv), this._menu.bindBackButton(this.parentDiv, function () {
                return !1
            }), $(".tab-tut-info-next", this.scrollDiv).click(function (a) {
                d.nextInfoPage()
            }), $(".tab-tut-info-prev", this.scrollDiv).click(function (a) {
                d.prevInfoPage()
            }), $(".tab-tut-info-start", this.scrollDiv).click(function (a) {
                d.startInfoPage()
            }), this._isInited = !0
        },
        isInited: function () {
            return this._isInited
        },
        load: function () {
            var a = this
        },
        onResize: function (a, b) {
            this.scrollDiv.tinyscrollbar_update("relative"), $(".tab-content", this.scrollDiv).width(this.scrollDiv.width() - 18)
        },
        nextInfoPage: function () {
            this._infoPageIndex >= this._infoPageMax || this.gotoInfoPage(this._infoPageIndex + 1)
        },
        prevInfoPage: function () {
            this._infoPageIndex <= 0 || this.gotoInfoPage(this._infoPageIndex - 1)
        },
        startInfoPage: function () {
            var a = b.getYouLocationElement(),
                c = {
                    lat: function () {
                        return a.location.lat
                    },
                    lng: function () {
                        a.location.lng
                    }
                };
            $(document).trigger("action.elementAnalogMoved", [a, c, a.location.target, 0]), this.processHelpTipsEnabled({
                max: 1
            })
        },
        gotoInfoPage: function (b) {
            this._infoPageIndex = b;
            var c = a.UI.parseDisplayString(this._infoPages[b].displayString);
            this._menu.setTitle("#tabs-tut-info", c);
            var d = a.UI.parseDisplayString(this._infoPages[b].text);
            $(".overview", this.scrollDiv).html(d);
            var e = function (a, b, c) {
                    var d = parseFloat($(b).css("font-size")),
                        f = parseFloat($(b).css("height"));
                    if (isNaN(f) || f == 0) c || $(b).load(function () {
                        e(a, b, !0)
                    });
                    else {
                        var g = -(f - d) / 2;
                        g = g < -d ? -d : g, $(b).css({
                            "margin-bottom": g + "px"
                        })
                    }
                };
            $(".overview img", this.scrollDiv).each(e), $(".tab-tut-info-next", this.scrollDiv).toggleClass("tab-tut-info-button-inactive", b == this._infoPageMax), $(".tab-tut-info-prev", this.scrollDiv).toggleClass("tab-tut-info-button-inactive", b == 0), this._firstInfo ? $(".tab-tut-info-center").hide() : ($(".tab-tut-info-center").show(), $(".tab-tut-info-center").html(this._infoPageIndex + 1 + " / " + this._infoPages.length))
        },
        processHelpTips: function (a) {
            this._infoPages = a.tips
        },
        _processHelpTipsEnabled: function (a) {
            if (this._infoPageMax == 0) $(".tab-tut-info-start").removeClass("tab-tut-info-button-inactive"), $(".tab-tut-info-prev").hide(), $(".tab-tut-info-next").hide(), this._menu._windowMap["#tabs-tut-info"].dialog("option", "position", ["center", "center"]), this._firstInfo = !0, this.gotoInfoPage(this._infoPageMax);
            else if (this._firstInfo) {
                var b = this;
                $(".tut-info-popup-window").fadeOut("fast", function () {
                    b.gotoInfoPage(b._infoPageMax), $(".tab-tut-info-start").addClass("tab-tut-info-button-inactive"), $(".tab-tut-info-prev").show(), $(".tab-tut-info-next").show(), b._menu._windowMap["#tabs-tut-info"].dialog("option", "position", ["right", "top"]), $(".tut-info-popup-window").fadeIn("fast", function () {
                        b._firstInfo = !1
                    })
                })
            } else this.gotoInfoPage(this._infoPageMax)
        },
        processHelpTipsEnabled: function (a) {
            var b = this;
            this._helpTipsChecker = setTimeout(function c() {
                b._menu._isActive ? (clearTimeout(b._helpTipsChecker), b._helpTipsChecker = null, $("#tab-tut-info").addClass("tab-tut-info-enabled"), b._infoPageMax = a.max, b._menu.showMenu("tutinfo"), b._processHelpTipsEnabled(a)) : b._helpTipsChecker = setTimeout(c, 100)
            }, 100)
        }
    }
}), define("ui/menu", ["state", "net", "utils", "ui/menu/menu_items", "ui/menu/menu_estates", "ui/menu/menu_skills", "ui/menu/menu_create", "ui/menu/menu_get_food", "ui/menu/menu_chat", "ui/menu/menu_settings", "ui/menu/menu_messages", "ui/menu/menu_players", "ui/menu/menu_tut_info"], function (a, b, c, d, e, f, g, h, i, j, k, l, m) {
    return {
        initialized: !1,
        MENU_DEFAULTS: {
            "#tabs-items": {
                gameName: "items",
                width: 325,
                height: 400,
                x: 5,
                y: 145,
                title: _("menu_items")
            },
            "#tabs-estates": {
                gameName: "estates",
                width: 325,
                height: 270,
                x: 288,
                y: 50,
                title: _("menu_estates")
            },
            "#tabs-skills": {
                gameName: "skills",
                width: 325,
                height: 250,
                x: "right",
                y: 230,
                title: _("menu_skills")
            },
            "#tabs-create": {
                gameName: "create",
                width: 325,
                height: 350,
                x: 288,
                y: 300,
                title: _("menu_make")
            },
            "#tabs-get-food": {
                width: 325,
                height: 280,
                x: 900,
                y: 100,
                title: _("menu_get_food")
            },
            "#tabs-chat": {
                width: 325,
                height: 400,
                x: "right",
                y: 100,
                title: _("menu_chat")
            },
            "#tabs-settings": {
                width: 325,
                height: 400,
                x: "right",
                y: 50,
                title: _("menu_settings")
            },
            "#tabs-messages": {
                width: 325,
                height: 300,
                x: 288,
                y: 50,
                title: _("menu_messages")
            },
            "#tabs-players": {
                width: 325,
                height: 500,
                x: 288,
                y: 50,
                title: _("menu_players")
            },
            "#tabs-tut-info": {
                gameName: "tut_info",
                title: "",
                width: 293,
                height: 238,
                x: "right",
                y: 32,
                title: _("menu_tut_info"),
                dialogClass: "popup-window tut-info-popup-window",
                maxWidth: 293,
                maxHeight: 239
            }
        },
        SLIDE_RIGHT_SPEED: 150,
        FADE_UP_SPEED: 100,
        MENU_INITIAL_WIDTH: 64,
        STATUS_INITIAL_LEFT_OFFSET: 30,
        _windowMap: {},
        _urlWindowMap: {},
        _lastOpenTab: null,
        _sizes: {},
        _selectedTabClicked: function (a) {
            var b = this;
            $(b._tabScreen).hasClass("menu-hidden") ? b._showTabContent({
                panel: $(a)
            }) : b._lastOpenTab === a && b._hideTabContent({
                panel: $(a)
            });
            return !0
        },
        _showTabContent: function (a) {
            if ($("#interface-status").length != 0) {
                var b = this;
                $("> div", b._tabScreen).css({
                    opacity: 0
                }), $(b._tabScreen).hasClass("menu-hidden") ? (console.log("Showing hidden class"), $("#interface-status").animate({
                    left: 390 - b.MENU_INITIAL_WIDTH + b.STATUS_INITIAL_LEFT_OFFSET + "px"
                }, b.SLIDE_RIGHT_SPEED), $(b._tabScreen).animate({
                    width: "390px"
                }, b.SLIDE_RIGHT_SPEED, function () {
                    $(b._tabScreen).removeClass("menu-hidden"), $(".tab-close-button", a.panel).unbind("click"), $(".tab-close-button", a.panel).click(function () {
                        b._hideTabContent(a);
                        return !1
                    }), $(a.panel, b._tabScreen).animate({
                        opacity: 1
                    }, b.FADE_UP_SPEED, function () {})
                })) : ($(a.panel, b._tabScreen).animate({
                    opacity: 1
                }, 100), $(".tab-close-button", a.panel).unbind("click"), $(".tab-close-button", a.panel).click(function () {
                    b._hideTabContent(a);
                    return !1
                }))
            }
        },
        _hideTabContent: function (a) {
            var b = this;
            console.log("Hiding tab"), $(a.panel, b._tabScreen).animate({
                opacity: 0
            }, 100), $("#interface-status").animate({
                left: b.STATUS_INITIAL_LEFT_OFFSET + "px"
            }, 100), $(b._tabScreen).animate({
                width: "64px"
            }, 100, function () {
                $(b._tabScreen).addClass("menu-hidden")
            })
        },
        init: function () {
            var a = this;
            d.init($("#tabs-items .overview"), $("#tabs-items .scrolling"), this), e.init($("#tabs-estates .overview"), $("#tabs-estates .scrolling"), this), f.init($("#tabs-skills .overview"), $("#tabs-skills .scrolling"), this), g.init($("#tabs-create .overview"), $("#tabs-create .scrolling"), this), h.init($("#tabs-get-food .overview"), $("#tabs-get-food .scrolling"), this), i.init($("#tabs-chat .overview"), $("#tabs-chat .chat-bottom"), $("#tabs-chat .scrolling"), this), j.init($("#tabs-settings .overview"), $("#tabs-settings .scrolling"), this), k.init($("#tabs-messages .overview"), $("#messages-new"), $("#tabs-messages .scrolling"), this), l.init($("#tabs-players .overview"), $("#tabs-players .scrolling"), this), m.init($("#tabs-tut-info .overview"), $("#tabs-tut-info .scrolling"), this), this.initialized = !0, this._initEvents()
        },
        _initEvents: function () {
            var c = this;
            $("#tab-items").click(function () {
                c.toggleWindow(this, "#tabs-items", c.MENU_DEFAULTS["#tabs-items"], d) && $(document).trigger("menu.change", {
                    uRL: "pkclient://items"
                });
                return !1
            }), $("#tab-estates").click(function () {
                c.toggleWindow(this, "#tabs-estates", c.MENU_DEFAULTS["#tabs-estates"], e) && $(document).trigger("menu.change", {
                    uRL: "pkclient://estates"
                });
                return !1
            }), $("#tab-skills").click(function () {
                c.toggleWindow(this, "#tabs-skills", c.MENU_DEFAULTS["#tabs-skills"], f) && (f.updateScroll(), $(document).trigger("menu.change", {
                    uRL: "pkclient://skills"
                }));
                return !1
            }), $("#tab-create").click(function () {
                c.toggleWindow(this, "#tabs-create", c.MENU_DEFAULTS["#tabs-create"], g) && (g.updateScroll(), $(document).trigger("menu.change", {
                    uRL: "pkclient://create"
                }));
                return !1
            }), $("#tab-get-food").click(function () {
                c.toggleWindow(this, "#tabs-get-food", c.MENU_DEFAULTS["#tabs-get-food"], h) && (h.updateScroll(), $(document).trigger("menu.change", {
                    uRL: "pkclient://getfood"
                }));
                return !1
            }), $("#tab-chat").click(function () {
                c.toggleChat(this, "#tabs-chat", c.MENU_DEFAULTS["#tabs-chat"], i) && $(document).trigger("menu.change", {
                    uRL: "pkclient://chat"
                });
                return !1
            }), $("#tab-settings").click(function () {
                c.toggleWindow(this, "#tabs-settings", c.MENU_DEFAULTS["#tabs-settings"], j) && $(document).trigger("menu.change", {
                    uRL: "pkclient://settings"
                });
                return !1
            }), $("#tab-messages").click(function () {
                c.toggleWindow(this, "#tabs-messages", c.MENU_DEFAULTS["#tabs-messages"], k) && ($(document).trigger("menu.change", {
                    uRL: "pkclient://messages"
                }), k.onTabChange());
                return !1
            }), $("#tab-players").click(function () {
                c.toggleWindow(this, "#tabs-players", c.MENU_DEFAULTS["#tabs-players"], l) && ($(document).trigger("menu.change", {
                    uRL: "pkclient://players"
                }), l.onTabChange());
                return !1
            }), $("#tab-tut-info").click(function () {
                c.toggleWindow(this, "#tabs-tut-info", c.MENU_DEFAULTS["#tabs-tut-info"], m) && $(document).trigger("menu.change", {
                    uRL: "pkclient://tutinfo"
                });
                return !1
            }), $("#tab-profile").click(function () {
                require(["ui"], function (c) {
                    var d = a.data.clientConfigs.web_view_url + "/profile.aspx?charid=" + a.data.yourId;
                    c.addIframeTab(d, _("web_tab_profile"), !0), b.post({
                        fullName: "WebViewActionsRequest1",
                        uRL: d
                    }, function (a) {})
                });
                return !1
            })
        },
        isOpen: function (a) {
            switch (a) {
            case "skills":
                return $("#tabs-skills").dialog("isOpen") === !0;
            case "items":
                return $("#tabs-items").dialog("isOpen") === !0;
            case "chat":
                return $("#tabs-chat").dialog("isOpen") === !0;
            case "create":
                return $("#tabs-create").dialog("isOpen") === !0
            }
        },
        getDialogForMenuName: function (a) {
            return $("#tabs-" + a)
        },
        showWindow: function (a, b, c, d) {
            $(b).dialog("isOpen") !== !0 && this.toggleWindow(a, b, c, d)
        },
        hideWindow: function (a, b, c, d) {
            if ($(b).dialog("isOpen") === !0) this.toggleWindow(a, b, c, d);
            else return
        },
        showChat: function (a, b, c, d, e) {
            this.toggleChat(a, b, c, d, e)
        },
        showPopup: function (a, b, c, d) {
            $(b).dialog("isOpen") !== !0 && this.togglePopup(a, b, c, d)
        },
        setTitle: function (a, b) {
            var c = $(a).closest(".ui-dialog");
            $(".header-title", c).html(b)
        },
        getDialog: function (a) {
            return $(a).closest(".ui-dialog")
        },
        toggleWindow: function (a, b, c, d) {
            var e = this;
            if (!this._isActive) return !1;
            var f = !1;
            this._windowMap.hasOwnProperty(b) || (this._windowMap[b] = $(b).dialog({
                autoOpen: !0,
                width: c.width,
                height: c.height,
                position: [c.x, c.y],
                title: c.title,
                dialogClass: c.dialogClass ? c.dialogClass : "popup-window",
                minWidth: Math.min(c.width, 325),
                maxWidth: c.maxWidth ? c.maxWidth : "",
                minHeight: 300,
                maxHeight: c.maxHeight ? c.maxHeight : "",
                create: function (a, b) {
                    var d = $(this).parent().find(".ui-widget-header");
                    d.html("");
                    var e = $("#template-window-header").tmpl({
                        title: c.title
                    });
                    $(".tab-header-back", e).hide(), d.html(e);
                    var f = this;
                    $(".tab-header-close", e).click(function () {
                        $(f).dialog("close");
                        return !1
                    })
                },
                open: function (a, b) {
                    $(".tab-content", d.scrollDiv).height(d.scrollDiv.parent().height() - 18), typeof d.onResize == "function" && (b.size = {
                        width: $(this).width(),
                        height: $(this).height()
                    }, d.onResize(a, b)), typeof d.onOpen == "function" && d.onOpen(), d.handlesOwnSounds || require(["sounds"], function (a) {
                        a.play("MENU_OPEN")
                    })
                },
                close: function () {
                    $(a).removeClass("tab-window-showing"), typeof d.onClose == "function" && d.onClose(), d.handlesOwnSounds || require(["sounds"], function (a) {
                        a.play("MENU_CLOSE")
                    }), $(document).trigger("menu.closed", [c.gameName])
                },
                dragStart: function (a, b) {
                    $(".tab-content .iframe-fix").show()
                },
                dragStop: function (a, c) {
                    $(".tab-content .iframe-fix").hide(), console.log("Window dragged."), console.log(c), e.windowPositionChanged(b, c.position)
                },
                resize: function (a, b) {
                    typeof d.onResize == "function" && ($(".tab-content", d.scrollDiv).height(d.scrollDiv.parent().height() - 18), d.onResize(a, b))
                },
                resizeStart: function (a, b) {
                    $(".tab-content .iframe-fix").show()
                },
                resizeStop: function (a, c) {
                    $(".tab-content .iframe-fix").hide(), console.log(c), e.windowSizeChanged(b, c.size)
                }
            }), this._windowMap[b].dialog("widget").draggable("option", "iframeFix", !0), f = !0);
            var g = this._windowMap[b];
            if (g.dialog("isOpen") && !f) {
                g.dialog("close"), $(a).removeClass("tab-window-showing");
                return !1
            }
            f || g.dialog("open"), $(a).addClass("tab-window-showing");
            return !0
        },
        toggleChat: function (a, b, c, d, e) {
            var f = this;
            if (!this._isActive) return !1;
            if (!this._windowMap.hasOwnProperty(b)) {
                this._windowMap[b] = $(b).dialog({
                    autoOpen: !0,
                    width: c.width,
                    height: c.height,
                    position: [c.x, c.y],
                    title: c.title,
                    dialogClass: "popup-window",
                    minWidth: 250,
                    minHeight: 300,
                    create: function (a, b) {
                        var d = $(this).parent().find(".ui-widget-header");
                        d.html("");
                        var e = $("#template-chat-header").tmpl({
                            title: c.title
                        });
                        $(".chat-header-back", e).hide(), d.html(e);
                        var f = this;
                        $(".chat-header-close", e).click(function () {
                            $(f).dialog("close");
                            return !1
                        })
                    },
                    open: function (a, b) {
                        typeof d.onResize == "function" && (b.size = {
                            width: $(this).width(),
                            height: $(this).height()
                        }, d.onResize(a, b)), typeof d.onOpen == "function" && d.onOpen()
                    },
                    close: function () {
                        $(a).removeClass("tab-window-showing"), typeof d.onClose == "function" && d.onClose()
                    },
                    dragStart: function (a, b) {
                        $(".chat-content .iframe-fix").show()
                    },
                    dragStop: function (a, c) {
                        $(".chat-content .iframe-fix").hide(), console.log("Window dragged."), console.log(c), f.windowPositionChanged(b, c.position)
                    },
                    resize: function (a, b) {
                        typeof d.onResize == "function" && d.onResize(a, b)
                    },
                    resizeStart: function (a, b) {
                        $(".chat-content .iframe-fix").show()
                    },
                    resizeStop: function (a, c) {
                        $(".chat-content .iframe-fix").hide(), console.log(c), f.windowSizeChanged(b, c.size)
                    }
                }), this._windowMap[b].dialog("widget").draggable("option", "iframeFix", !0), $(a).addClass("tab-window-showing");
                return !0
            }
            var g = this._windowMap[b];
            if (g.dialog("isOpen")) {
                g.dialog("close"), $(a).removeClass("tab-window-showing");
                return !1
            }
            g.dialog("open"), $(a).addClass("tab-window-showing");
            return !0
        },
        togglePopup: function (a, b, c, d) {
            var e = this;
            if (!this._isActive) return !1;
            if (!this._windowMap.hasOwnProperty(b)) {
                this._windowMap[b] = $(b).dialog({
                    autoOpen: !0,
                    width: c.width,
                    height: c.height,
                    position: [c.x, c.y],
                    title: c.title,
                    dialogClass: "popup-window tut-info-popup-window",
                    minWidth: 250,
                    minHeight: 239,
                    maxHeight: 239,
                    resizable: !1,
                    create: function (a, b) {
                        var d = $(this).parent().find(".ui-widget-header");
                        d.html("");
                        var e = $("#template-popup-header").tmpl({
                            title: c.title
                        });
                        $(".tab-header-back", e).hide(), d.html(e);
                        var f = this;
                        $(".tab-header-close", e).click(function () {
                            $(f).dialog("close");
                            return !1
                        })
                    },
                    open: function (a, b) {
                        typeof d.onResize == "function" && (b.size = {
                            width: $(this).width(),
                            height: $(this).height()
                        }, d.onResize(a, b)), typeof d.onOpen == "function" && d.onOpen()
                    },
                    close: function () {
                        $(a).removeClass("tab-window-showing"), typeof d.onClose == "function" && d.onClose()
                    },
                    dragStart: function (a, b) {},
                    dragStop: function (a, b) {},
                    resize: function (a, b) {
                        typeof d.onResize == "function" && d.onResize(a, b)
                    }
                }), this._windowMap[b].dialog("widget").draggable("option", "iframeFix", !0), $(a).addClass("tab-window-showing");
                return !0
            }
            var f = this._windowMap[b];
            if (f.dialog("isOpen")) {
                f.dialog("close"), $(a).removeClass("tab-window-showing");
                return !1
            }
            f.dialog("open"), $(a).addClass("tab-window-showing");
            return !0
        },
        getTargetInMenu: function (a, b) {
            switch (a) {
            case "skills":
                if (b.hasOwnProperty("skillid")) {
                    var c = b.skillid;
                    if (c === "ALCHEMY") return $('#tabs-skills #list-skills li[data-sid="ALCHEMY"]')
                };
            case "create":
                if (b.hasOwnProperty("type")) {
                    var d = b.type;
                    if (d === "build") return $('#tabs-create #list-create li[data-mid="build"]')
                }
            }
            return null
        },
        windowPositionChanged: function (a, b) {
            this._sizes[a] || (this._sizes[a] = {}), this._sizes[a].x = b.left, this._sizes[a].y = b.top
        },
        windowSizeChanged: function (a, b) {
            this._sizes[a] || (this._sizes[a] = {}), this._sizes[a].width = b.width, this._sizes[a].height = b.height
        },
        restoreSizes: function (a) {
            if ( !! a) for (var b in a) {
                var c = a[b];
                $.extend(this.MENU_DEFAULTS[b], c)
            }
        },
        bindBackButton: function (a, b) {
            var c = $(a).closest(".ui-dialog");
            $(".header-back", c).unbind("click"), $(".header-back", c).click(b)
        },
        showBackButton: function (a) {
            var b = $(a).closest(".ui-dialog");
            $(".header-back", b).show(), $(".header-back", b).css("display", "block")
        },
        hideBackButton: function (a) {
            var b = $(a).closest(".ui-dialog");
            $(".header-back", b).hide()
        },
        clicked: function (a, b) {
            require(["sounds"], function (a) {
                a.play("MENU_CLICK")
            })
        },
        doResize: function (a, b) {
            var c = $(a).closest(".ui-dialog");
            typeof b.onResize == "function" && b.onResize(null, {
                size: {
                    width: $(c).width(),
                    height: $(c).height()
                }
            })
        },
        showIframeMenu: function (c, d, e) {
            var f = this,
                g = $("#template-menu-iframe").tmpl(),
                h = $('<iframe src="' + d + '"></iframe>').prependTo($(".tab-expand-content", g));
            if (d.indexOf("pk4") >= 0 || d.indexOf("pk5") >= 0) {
                var i = [d.substr(0, d.indexOf("&") >= 0 ? d.indexOf("&") : d.length).toLowerCase()],
                    j = d;
                setTimeout(function k() {
                    $("body", h.contents()).children().size() == 0 || j != h.contents().get(0).location.href ? setTimeout(k, 100) : $("a", h.contents().get(0)).click(function () {
                        var e = $(this).attr("href");
                        if (!e) return !0;
                        if (e.toLowerCase().indexOf("territorymaps.aspx") > -1) {
                            e = a.data.clientConfigs.web_view_url + e, e.indexOf("?") > -1 ? e += "&viewCharID=" + a.data.yourId + "&sessionID=" + a.data.sessionId : e += "?viewCharID=" + a.data.yourId + "&sessionID=" + a.data.sessionId, window.open(e, "_blank", "height=800,width=1100,scrollbars=yes");
                            return !1
                        }
                        f.showBackButton(h), f.bindBackButton(h, function () {
                            for (var g = i.length - 1; g >= 0; g--) {
                                if (i[g].indexOf(h.contents().get(0).location.href) > -1) {
                                    i.pop(), j = i[--g];
                                    break
                                }
                                i.pop()
                            }
                            i.length == 1 && f.hideBackButton(h), e = j.substring(j.toLowerCase().indexOf("mobile/") + 7);
                            if (e.toLowerCase().indexOf("profile.aspx") == 0 || e.toLowerCase().indexOf("city.aspx") == 0 || e.toLowerCase().indexOf("kingdom.aspx") == 0) {
                                d.toLowerCase().indexOf("http://" + document.domain + "/pk5/mobile/") > -1 ? j = "http://" + document.domain + "/pk5/Mobile/" + e : d.toLowerCase().indexOf("http://" + document.domain + "/pk4/mobile/") > -1 ? j = "http://" + document.domain + "/pk4/Mobile/" + e : j = e;
                                var l = a.data.clientConfigs.web_view_url + "/" + e;
                                f._urlWindowMap[l.toLowerCase()] = f._urlWindowMap[c.toLowerCase()], delete f._urlWindowMap[c.toLowerCase()], c = l, b.post({
                                    fullName: "WebViewActionsRequest1",
                                    uRL: l
                                }, function (a) {}), setTimeout(k, 100)
                            }
                            j.indexOf("?") > -1 ? j += "&viewCharID=" + a.data.yourId + "&sessionID=" + a.data.sessionId : j += "?viewCharID=" + a.data.yourId + "&sessionID=" + a.data.sessionId, h.contents().get(0).location = j;
                            return !1
                        });
                        if (e.toLowerCase().indexOf("profile.aspx") == 0 || e.toLowerCase().indexOf("city.aspx") == 0 || e.toLowerCase().indexOf("kingdom.aspx") == 0) {
                            d.toLowerCase().indexOf("http://" + document.domain + "/pk5/mobile/") > -1 ? j = "http://" + document.domain + "/pk5/Mobile/" + e : d.toLowerCase().indexOf("http://" + document.domain + "/pk4/mobile/") > -1 ? j = "http://" + document.domain + "/pk4/Mobile/" + e : j = e, e.indexOf("?") > -1 ? j += "&viewCharID=" + a.data.yourId + "&sessionID=" + a.data.sessionId : j += "?viewCharID=" + a.data.yourId + "&sessionID=" + a.data.sessionId, i.push(j);
                            var g = a.data.clientConfigs.web_view_url + "/" + e;
                            f._urlWindowMap[g.toLowerCase()] = f._urlWindowMap[c.toLowerCase()], delete f._urlWindowMap[c.toLowerCase()], c = g, b.post({
                                fullName: "WebViewActionsRequest1",
                                uRL: g
                            }, function (a) {}), setTimeout(k, 100), h.contents().get(0).location = j
                        } else e.indexOf("?") > -1 ? e += "&viewCharID=" + a.data.yourId + "&sessionID=" + a.data.sessionId : e += "?viewCharID=" + a.data.yourId + "&sessionID=" + a.data.sessionId, d.toLowerCase().indexOf("http://" + document.domain + "/pk5/mobile/") > -1 ? j = "http://" + document.domain + "/pk5/Mobile/" + e : d.toLowerCase().indexOf("http://" + document.domain + "/pk4/mobile/") > -1 && (j = "http://" + document.domain + "/pk4/Mobile/" + e), $(this).attr("target") ? window.open(a.data.clientConfigs.web_view_url.substring(0, a.data.clientConfigs.web_view_url.toLowerCase().indexOf("mobile")) + e, "_newtab") : (f.hideBackButton(h), $(".wv-action-bar", f._urlWindowMap[c.toLowerCase()]).remove(), h.height(h.height() + 40), i.push(j), h.contents().get(0).location = j);
                        return !1
                    })
                }, 100)
            }
            this._urlWindowMap[c.toLowerCase()] = $(g).dialog({
                autoOpen: !0,
                width: 350,
                height: 470,
                position: [330, 145],
                dialogClass: "popup-window",
                resize: function (a, b) {
                    var c = 59;
                    $(".wv-action-bar", this).length > 0 && (c += 40), $("iframe", this).height(b.size.height - c), $("iframe", this).width(b.size.width - 22)
                },
                resizeStart: function (a, b) {
                    $(".tab-expand-content .iframe-fix").show()
                },
                resizeStop: function (a, b) {
                    $(".tab-expand-content .iframe-fix").hide()
                },
                dragStart: function (a, b) {
                    $(".tab-expand-content .iframe-fix").show()
                },
                dragStop: function (a, b) {
                    $(".tab-expand-content .iframe-fix").hide()
                },
                close: function () {
                    delete f._urlWindowMap[c.toLowerCase()]
                },
                create: function (a, b) {
                    var c = $(this).parent().find(".ui-widget-header");
                    c.html("");
                    var d = $("#template-iframe-header").tmpl({
                        title: e
                    });
                    $(".tab-header-back", d).hide(), c.html(d);
                    var f = this;
                    $(".tab-header-close", d).click(function () {
                        $(f).dialog("destroy").remove();
                        return !1
                    }), $(".tab-expand-content", this).css({
                        overflow: "hidden"
                    });
                    var g = 59;
                    $(".wv-action-bar", this).length > 0 && (g += 40), $("iframe", this).height($(this).dialog("option", "height") - g), $("iframe", this).width($(this).dialog("option", "width") - 22)
                }
            })
        },
        showMenu: function (a, b) {
            var c = this;
            switch (a) {
            case "skills":
                c.showWindow($("#tab-skills"), "#tabs-skills", c.MENU_DEFAULTS["#tabs-skills"], f) && $(document).trigger("menu.change", {
                    uRL: "pkclient://skills"
                });
                break;
            case "items":
                c.showWindow($("#tab-items"), "#tabs-items", c.MENU_DEFAULTS["#tabs-items"], d) && $(document).trigger("menu.change", {
                    uRL: "pkclient://items"
                });
                break;
            case "chat":
                c.showChat($("#tab-chat"), "#tabs-chat", c.MENU_DEFAULTS["#tabs-chat"], i, b) && $(document).trigger("menu.change", {
                    uRL: "pkclient://chat"
                });
                break;
            case "comments":
            case "topics":
                c.showWindow($("#tab-messages"), "#tabs-messages", c.MENU_DEFAULTS["#tabs-messages"], k) && $(document).trigger("menu.change", {
                    uRL: "pkclient://topics"
                }), b && b.hasOwnProperty("folderid") && k.showFolderWithId(b.folderid), b && b.hasOwnProperty("topicid") && k.showMessageWithId(b.topicid);
                break;
            case "tutinfo":
                !c.showPopup($("#tab-tut-info"), "#tabs-tut-info", c.MENU_DEFAULTS["#tabs-tut-info"], m);
                break;
            default:
                console.error("Asked to show a menu we aren't handling! " + a)
            }
        },
        load: function () {
            this.initialized && (d.load(), e.load(), g.load(), h.load(), j.load(), this._isActive = !0)
        },
        closeAllWindows: function () {
            $(".ui-dialog-content").dialog("close")
        },
        updateItemsMenu: function (a) {
            if ( !! d.isInited()) {
                var b = a.fullName.substring(0, a.fullName.length - 1);
                switch (b) {
                case "MapElementRemoved":
                    d.processElementRemoved(a);
                    break;
                case "MapElementAdded":
                    d.processElementAdded(a.element, a.position);
                    break;
                case "MapElementDisplayLayersChange":
                case "MapElementDisplayStringChange":
                    d.processElementDisplayChange(a)
                }
            }
        },
        updateEstatesMenu: function (a) {
            if ( !! e.isInited()) {
                var b = a.fullName.substring(0, a.fullName.length - 1);
                switch (b) {
                case "MapElementRemoved":
                    e.processElementRemoved(a);
                    break;
                case "MapElementAdded":
                    e.processElementAdded(a.element, a.position);
                    break;
                case "MapElementDisplayLayersChange":
                case "MapElementDisplayStringChange":
                    e.processElementDisplayChange(a)
                }
            }
        },
        updateSkillsMenu: function (a) {
            if ( !! f.isInited()) {
                var b = a.fullName.substring(0, a.fullName.length - 1);
                switch (b) {
                case "PlayerSkillInfo":
                    f.processPlayerSkillInfo(a)
                }
            }
        },
        updateCreateMenu: function (a) {
            if ( !! g.isInited()) {
                var b = a.fullName.substring(0, a.fullName.length - 1);
                switch (b) {
                case "MakeTypes":
                    g.processMakeTypes(a);
                    break;
                case "ResourceUpdate":
                    g.processResourceUpdate(a.yourResources)
                }
            }
        },
        updateMessagesMenu: function (a) {
            if ( !! k.isInited()) {
                var b = a.fullName.substring(0, a.fullName.length - 1);
                switch (b) {
                case "GetTopicsResponse":
                    a.startIndex == 0 ? k.showFolder(a) : k.addToFolder(a);
                    break;
                case "GetCommentsResponse":
                    k.showMessage(a);
                    break;
                case "TopicFolders":
                    k.processTopicFolders(a.topicFolders);
                    break;
                case "FolderUnreadCountsResponse":
                    k.processFolderUnreadCounts(a.unreadCounts);
                    break;
                case "NewTopic":
                    k.processNewTopic(a);
                case "NewComment":
                    k.processNewComment(a);
                    break;
                case "WebViewActions":
                    k.processWebViewActions(a);
                    break;
                case "DeleteTopic":
                    k.processDeleteTopic(a);
                    break;
                case "DeleteAllTopics":
                    k.processDeleteAllTopics(a);
                    break;
                case "MarkFolderRead":
                    k.processMarkFolderRead(a);
                    break;
                case "MarkTopicRead":
                    k.processMarkTopicRead(a)
                }
            }
        },
        updateChatMenu: function (a) {
            if ( !! i.isInited()) {
                var b = a.fullName.substring(0, a.fullName.length - 1);
                switch (b) {
                case "ChatRooms":
                    i.processChatRooms();
                    break;
                case "ChatActions":
                    i.processChatActions();
                    break;
                case "Chat":
                    i.processChat(a)
                }
            }
        },
        updatePlayerMenu: function (a) {
            var b = a.fullName.substring(0, a.fullName.length - 1);
            switch (b) {
            case "PlayerLists":
                l.processPlayerLists(a.lists);
                break;
            case "PlayerResults":
                a.startIndex == 0 ? l.showPlayers(a) : l.addToPlayers(a)
            }
        },
        updateTutInfoMenu: function (a) {
            var b = a.fullName.substring(0, a.fullName.length - 1);
            switch (b) {
            case "HelpTips":
                m.processHelpTips(a);
                break;
            case "HelpTipsEnabled":
                m.processHelpTipsEnabled(a)
            }
        },
        processWebViewActions: function (a) {
            if ( !! k.isInited()) {
                var b = c.urlParse(a.uRL);
                console.log("Applying web view actions for menu " + b.hostname), console.log(b.params);
                switch (b.hostname) {
                case "folders":
                    k.processFoldersWebViewActions(a, b);
                    break;
                case "topics":
                    k.processTopicsWebViewActions(a, b);
                    break;
                case "comments":
                    k.processCommentsWebViewActions(a, b)
                }
            }
        },
        getOpenWindow: function (a) {
            return this._urlWindowMap[a.uRL.substr(0, a.uRL.indexOf("&") >= 0 ? a.uRL.indexOf("&") : a.uRL.length).toLowerCase()]
        }
    }
}), define("ab", [], function () {
    return {
        tests: {},
        loadTests: function () {
            tests = pk.state.activeTests
        },
        getTestValue: function (a) {
            return tests[a]
        }
    }
}), define("map_utils", ["settings", "utils", "display_layer_overlay", "state", "resources", "ui/menu", "ab"], function (a, b, c, d, e, f, g) {
    CLICK_CONTAINS_RADIUS = 10, MOVE_TICK = 15, DEFAULT_BUBBLE_OPTIONS = {
        className: "bubble-default",
        upClassName: "bubble-up-default",
        downClassName: "bubble-down-default",
        type: "",
        amount: 0,
        fontSize: 14
    }, BUBBLE_TICK = 15, BUBBLE_PIXELS_PER_MS = .05, BUBBLE_FADE_START = 1500, BUBBLE_DURATION = 2e3, FLASH_TICK = 20, FLASH_DURATION = 1200, TWO_PI = Math.PI * 2;
    return {
        _currentTarget: null,
        _isEmulation: !1,
        markerElementMap: {},
        polyElements: [],
        displayLayerList: [],
        _movingMarkers: {},
        _numMovingMarkers: 0,
        _animatingBubbles: {},
        _numAnimationBubbles: 0,
        _flashingImages: {},
        _numFlashingImages: 0,
        _queuedDisplayLayerMap: {},
        attentionElmIds: [],
        attentionType: "",
        lastBounds: null,
        _currentlyMovingInfo: !1,
        setCurrentTarget: function (a, b) {
            this.markerElementMap = {}, this.displayLayerList.length = 0, this._currentTarget = a, this._currentTargetName = b, this._isEmulation = a.getName() !== "map"
        },
        setSightBounds: function (a, b, c, d) {
            this._sightBoundType = a, this._sightRadius = b, this._sightLatMax = c, this._sightLngMax = d
        },
        setCenterLocation: function (a) {
            this._centerLocation = a
        },
        getCenterLocation: function () {
            return this._centerLocation
        },
        setDisplayLocation: function (a) {
            this._displayLocation = a
        },
        getDisplayLocation: function () {
            return this._displayLocation
        },
        getTarget: function () {
            return this._currentTarget
        },
        getTargetName: function () {
            return this._currentTargetName
        },
        setLocation: function (a) {
            !this._currentTarget || this._currentTarget.setLocation(a)
        },
        isEmulation: function () {
            return this._isEmulation
        },
        onBoundsChanged: function (a) {
            this.lastBounds = a, this.displayAllAttention()
        },
        removeAllAttention: function (a) {
            $(".attn-arrow-container").remove(), $(".attn-excl").remove(), $(".attn-moveto").remove()
        },
        displayAllAttention: function () {
            for (var a = 0; a < this.attentionElmIds.length; ++a) {
                var b = this.attentionElmIds[a],
                    c = this.markerElementMap[b];
                this.displayAttention(b, c, this.lastBounds)
            }
        },
        tryDisplayAttention: function (a) {
            for (var b = 0; b < this.attentionElmIds.length; ++b) {
                var c = this.attentionElmIds[b];
                if (a != null && a != c) continue;
                return this.displayAttention(c, this.markerElementMap[c], this.lastBounds)
            }
            return !0
        },
        displayAttention: function (a, c, d) {
            if (!this.lastBounds || !c) return !1;
            var e = this,
                g;
            if (d.contains(c.position)) {
                $("#attention-arrow-" + a).stop(!0).remove(), g = $("#attention-marker-" + a);
                if (g.length == 0) {
                    markerDiv = $("#marker-element-" + a), g = $(document.createElement("div")).attr("id", "attention-marker-" + a);
                    if (this.attentionType == "interact") {
                        g.addClass("attn-excl-container").append($(document.createElement("div")).addClass("attn-excl"));
                        var h = g.children(),
                            i = function () {
                                h.animate({
                                    top: "-=20"
                                }, 500, "linear").animate({
                                    top: "+=20"
                                }, 500, "swing", i)
                            };
                        markerDiv.append(g), i()
                    } else g.addClass("attn-moveto"), markerDiv.append(g);
                    var j = parseFloat(markerDiv.css("width")),
                        k = parseFloat(g.css("width"));
                    g.css({
                        left: (j - k) / 2 + "px"
                    })
                }
            } else {
                var l = google.maps.geometry.spherical.computeHeading(d.getCenter(), c.position),
                    m = c.position.lat(),
                    n = c.position.lng(),
                    o = d.toSpan().lat(),
                    p = d.toSpan().lng(),
                    q = d.getNorthEast(),
                    r = d.getSouthWest(),
                    s = q.lng(),
                    t = r.lng(),
                    u = q.lat(),
                    v = r.lat(),
                    w = parseFloat($("#map-wrapper").css("width")),
                    x = parseFloat($("#map-wrapper").css("height"));
                $("#attention-marker-" + a).stop(!0).remove(), g = $("#attention-arrow-" + a), g.length == 0 && (g = $(document.createElement("div")).attr("id", "attention-arrow-" + a).append($(document.createElement("div")).addClass("attn-arrow")).addClass("attn-arrow-container").click(function (a) {
                    e._currentTarget.getName() == "map" && e._currentTarget.getMap().panTo(new google.maps.LatLng(c.position.lat() - .4 * o * Math.cos(l * Math.PI / 180 - .02), c.position.lng() - .4 * p * Math.sin(l * Math.PI / 180)))
                }), this.attentionType == "moveto" && g.addClass("attn-arrow-moveto"), $("#attn-arrow-container").append(g));
                var y = g.children(),
                    z = {},
                    A = [],
                    B = "";
                if (v < m && m < u) {
                    var C = (u - m) / o;
                    l > 0 ? (y.hasClass("attn-arrow-right") || (B = "attn-arrow-right", A[0] = {
                        left: "-=20"
                    }, A[1] = {
                        left: "+=20"
                    }, z.right = "0px"), z.top = C * (x - 32 - 60 - 10) + "px") : (y.hasClass("attn-arrow-left") || (B = "attn-arrow-left", A[0] = {
                        left: "+=20"
                    }, A[1] = {
                        left: "-=20"
                    }, z.left = "0px"), z.top = C * (x - 32 - 60 - 10) + "px")
                } else if (t < n && n < t + p || s - p < n && n < s) {
                    var C = t < n && n < t + p ? (n - t) / p : (n - s + p) / p;
                    m < v ? (y.hasClass("attn-arrow-bottom") || (B = "attn-arrow-bottom", A[0] = {
                        top: "-=20"
                    }, A[1] = {
                        top: "+=20"
                    }, z.bottom = "0px"), z.left = C * (w - 60 - 10) + "px") : (y.hasClass("attn-arrow-top") || (B = "attn-arrow-top", A[0] = {
                        top: "+=20"
                    }, A[1] = {
                        top: "-=20"
                    }, z.top = "0px"), z.left = C * (w - 60 - 10) + "px")
                } else l > 0 && l < 90 ? y.hasClass("attn-arrow-top-right") || (B = "attn-arrow-top-right", A[0] = {
                    top: "+=20",
                    left: "-=20"
                }, A[1] = {
                    top: "-=20",
                    left: "+=20"
                }, z.top = "0px", z.right = "0px") : l > 90 && l < 180 ? y.hasClass("attn-arrow-bottom-right") || (B = "attn-arrow-bottom-right", A[0] = {
                    top: "-=20",
                    left: "-=20"
                }, A[1] = {
                    top: "+=20",
                    left: "+=20"
                }, z.bottom = "0px", z.right = "0px") : l > -180 && l < -90 ? y.hasClass("attn-arrow-bottom-left") || (B = "attn-arrow-bottom-left", A[0] = {
                    top: "-=20",
                    left: "+=20"
                }, A[1] = {
                    top: "+=20",
                    left: "-=20"
                }, z.bottom = "0px", z.left = "0px") : y.hasClass("attn-arrow-top-left") || (B = "attn-arrow-top-left", A[0] = {
                    top: "+=20",
                    left: "+=20"
                }, A[1] = {
                    top: "-=20",
                    left: "-=20"
                }, z.top = "0px", z.left = "0px");
                if (B) {
                    y.stop(!0), y.css({
                        top: "",
                        right: "",
                        bottom: "",
                        left: ""
                    }), g.css({
                        top: "",
                        right: "",
                        bottom: "",
                        left: ""
                    }), y.removeClass().addClass("attn-arrow " + B), g.css(z);
                    var D = function () {
                            y.animate(A[0], {
                                duration: 500,
                                easing: "linear",
                                queue: "bounce"
                            }).animate(A[1], {
                                duration: 500,
                                easing: "swing",
                                queue: "bounce",
                                complete: D
                            })
                        };
                    D()
                } else g.css(z)
            }
            b.UI.findIntersectors(g, "#tabs").length > 0 ? g.hasClass("attn-arrow-menu-offset") || (g.animate({
                "padding-bottom": "+=55"
            }, {
                duration: 400
            }), g.addClass("attn-arrow-menu-offset")) : g.hasClass("attn-arrow-menu-offset") && (g.animate({
                "padding-bottom": "-=55"
            }, {
                duration: 400
            }), g.removeClass("attn-arrow-menu-offset"));
            if (b.UI.findIntersectors(g, ".tut-info-popup-window").length > 0 && !e._currentlyMovingInfo) {
                e._currentlyMovingInfo = !0;
                var E = parseFloat($("#map").css("width")) - parseFloat($(".tut-info-popup-window").css("width")) - 20;
                $(".tut-info-popup-window").fadeOut("fast", function () {
                    var a = f._windowMap["#tabs-tut-info"].dialog("option", "position")[0],
                        b = parseFloat(a);
                    !isNaN(b) && b >= E && (a = "right"), f._windowMap["#tabs-tut-info"].dialog("option", "position", a == "right" ? ["left", 110] : ["right", "top"]), $(".tut-info-popup-window").fadeIn("fast", function () {
                        e._currentlyMovingInfo = !1
                    })
                })
            }
            return !0
        },
        onTilesLoaded: function () {},
        onProjectionChanged: function () {},
        onZoomChanged: function () {
            this.updateAllElements()
        },
        startMoveMarker: function (a, b, c) { !! a && !! a.getElement() && (this._movingMarkers[a.getElement().elementId] && this._numMovingMarkers--, this._movingMarkers[a.getElement().elementId] = {
                marker: a,
                destinationLocation: b,
                time: (new Date).getTime(),
                callback: c
            }, this._numMovingMarkers++, this._moveTimeout || this.moveAllMarkers())
        },
        endMoveMarker: function (a) {
            delete this._movingMarkers[a.marker.getElement().elementId], this._numMovingMarkers--, this._numMovingMarkers < 0 && (this._numMovingMarkers = 0)
        },
        moveAllMarkers: function () {
            var a = this;
            clearTimeout(a._moveTimeout), a._moveTimeout = setTimeout(function b() {
                a.stepMoveAllMarkers(), a._numMovingMarkers > 0 ? setTimeout(b, MOVE_TICK) : a._moveTimeout = null
            }, MOVE_TICK)
        },
        stepMoveAllMarkers: function () {
            var a = [];
            for (var b in this._movingMarkers) {
                var c = this._movingMarkers[b];
                this.stepMoveMarker(c) && (typeof c.callback == "function" && c.callback(), a.push(c))
            }
            for (var b = 0; b < a.length; b++) {
                var d = a[b];
                this.endMoveMarker(d)
            }
        },
        stepMoveMarker: function (a) {
            var b = a.marker,
                c = (new Date).getTime() - a.time;
            a.time += c;
            var d = b.getPosition(),
                e = b.getPixelForLocation(d),
                f = b.getPixelForLocation(a.destinationLocation);
            if ( !! e && !! f) {
                var g = f.x - e.x,
                    h = f.y - e.y,
                    i = a.destinationLocation.lat() - d.lat(),
                    j = a.destinationLocation.lng() - d.lng();
                if (c != 0) {
                    if (Math.abs(g) < 1 && Math.abs(h) < 1) {
                        b && b.updatePosition(a.destinationLocation);
                        return !0
                    }
                    var k = google.maps.geometry.spherical.computeDistanceBetween(d, a.destinationLocation),
                        l = b.getElement().movementSpeed * SPEED_CONSTANT,
                        m = c * l;
                    if (m == 0) return !0;
                    if (k < m) {
                        b && b.updatePosition(a.destinationLocation);
                        return !0
                    }
                    b && b.updatePosition(new google.maps.LatLng(d.lat() + i / k * m, d.lng() + j / k * m));
                    return !1
                }
                return !1
            }
        },
        startAnimateBubble: function (a, b) {
            if ( !! a && !! a.getElement()) {
                var c = a.getElement(),
                    e = [];
                this._animatingBubbles[c.elementId] && (e = this._animatingBubbles[c.elementId].bubbleQueue), b = $.extend({}, DEFAULT_BUBBLE_OPTIONS, b);
                var f = d.getYouLocationElement();
                f && f.elementId === c.elementId && (b.fontSize = 18);
                var g = $(a.getDiv()),
                    h = g.position(),
                    i = g.offset();
                if (!h) return;
                b.top = h.top - g.outerHeight() - 3, b.left = h.left + g.outerWidth() / 2 - 75 - 8;
                if (this._isEmulation) {
                    var j = parseInt(g.css("marginLeft"), 10),
                        k = parseInt(g.css("marginTop"), 10);
                    b.marginLeft = j, b.marginTop = k
                } else b.marginLeft = b.marginTop = 0;
                var l = $("#_template-bubble").tmpl(b);
                if (this._isEmulation) $("#map-drag").append(l);
                else if (a.getPanes()) {
                    var m = a.getPanes().floatPane;
                    m && m.appendChild(l.get(0))
                }
                l.mouseup(function (b) {
                    a.clickHandler(b);
                    return !0
                });
                if (e.length > 0) {
                    if (e.length > 2) {
                        var n = e.shift();
                        n.bubble.remove(), this._numAnimationBubbles--, this._numAnimationBubbles < 0 && (this._numAnimationBubbles = 0)
                    }
                    var o = e[e.length - 1].bubble,
                        h = o.offset();
                    if (h.top + o.outerHeight() > i.top - l.outerHeight()) for (var p = 0; p < e.length; p++) {
                        var q = e[p];
                        q.totalPx += l.outerHeight()
                    }
                }
                var r = (new Date).getTime();
                e.push({
                    bubble: l,
                    delta: r,
                    time: r,
                    totalPx: 0
                }), e.length == 1 && (this._animatingBubbles[c.elementId] = {
                    marker: a,
                    bubbleQueue: e
                }), this._numAnimationBubbles++, this._animateTimeout || this.animateAllBubbles()
            }
        },
        endAnimateBubble: function (a) {
            if (a.bubbleQueue.length == 0) delete this._animatingBubbles[a.marker.getElement().elementId];
            else if (a.bubbleQueue.length == 1) a.bubbleQueue[0].bubble.remove(), delete this._animatingBubbles[a.marker.getElement().elementId];
            else {
                var b = this._animatingBubbles[a.marker.getElement().elementId].bubbleQueue.shift();
                b.bubble.remove()
            }
            this._numAnimationBubbles--, this._numAnimationBubbles < 0 && (this._numAnimationBubbles = 0)
        },
        animateAllBubbles: function () {
            var a = this;
            clearTimeout(a._animateTimeout), a._animateTimeout = setTimeout(function b() {
                a.stepAnimateAllBubbles(), a._numAnimationBubbles > 0 ? setTimeout(b, BUBBLE_TICK) : a._animateTimeout = null
            }, BUBBLE_TICK)
        },
        stepAnimateAllBubbles: function () {
            var a = [];
            for (var b in this._animatingBubbles) {
                var c = this._animatingBubbles[b];
                for (var d in c.bubbleQueue) {
                    var e = c.bubbleQueue[d];
                    this.stepAnimateBubble(e, c.marker) && a.push(c)
                }
            }
            for (var b = 0; b < a.length; b++) {
                var e = a[b];
                this.endAnimateBubble(e)
            }
        },
        stepAnimateBubble: function (a, b) {
            var c = a.bubble,
                d = (new Date).getTime(),
                e = d - a.delta,
                f = d - a.time;
            a.delta += e, a.totalPx += e * BUBBLE_PIXELS_PER_MS;
            if (e != 0) {
                var g = $(b.getDiv()),
                    h = g.position();
                if (!h) return !0;
                var i = h.left,
                    j = h.top - g.outerHeight() - 3;
                if (this._isEmulation) {
                    var k = parseInt(g.css("marginLeft"), 10),
                        l = parseInt(g.css("marginTop"), 10);
                    c.css("marginLeft", k), c.css("marginTop", l - a.totalPx)
                } else c.css("top", j - a.totalPx), c.css("left", h.left + g.outerWidth() / 2 - 75 - 8);
                if (f >= BUBBLE_FADE_START) {
                    var m = parseFloat(c.css("opacity")) - .1;
                    m < 0 && (m = 0), c.css("opacity", m);
                    if (f >= BUBBLE_DURATION) return !0;
                    return !1
                }
            }
            return !1
        },
        startFlashingImage: function (a, b, c, d) {
            if ( !! a && !! a.getElement()) {
                var e = a.getElement(),
                    f = {};
                this._flashingImages[e.elementId] && (f = this._flashingImages[e.elementId].flashList, f[b.item.id] && this._flashingImages--), f[b.item.id] = {
                    image: $(c),
                    imageId: b.item.id,
                    repeat: d,
                    time: (new Date).getTime(),
                    left: FLASH_DURATION
                }, this._flashingImages[e.elementId] = {
                    marker: a,
                    flashList: f
                }, this._numFlashingImages++, this._flashTimeout || this.flashAllImages()
            }
        },
        endFlashingImage: function (a, b) {
            var c = a.marker.getElement().elementId;
            b.image.remove(), delete this._flashingImages[c].flashList[b.imageId], a && a.marker.removeImageLayer(b.imageId);
            var d = 0;
            for (var e in this._flashingImages[c].flashList) this._flashingImages[c].flashList[e] && d++;
            d == 0 && delete this._flashingImages[c], this._numFlashingImages--, this._numFlashingImages < 0 && (this._numFlashingImages = 0)
        },
        endAllFlashingImages: function (a) {
            if ( !! a && !! a.getElement()) {
                var b = a.getElement().elementId;
                if (this._flashingImages[b]) {
                    for (var c in this._flashingImages[b].flashList) {
                        var d = this._flashingImages[b].flashList[c];
                        d.image.remove();
                        var a = this.getMarkerForElement(b);
                        a && a.removeImageLayer(d.imageId), this._numFlashingImages--
                    }
                    delete this._flashingImages[b], this._numFlashingImages < 0 && (this._numFlashingImages = 0)
                }
            }
        },
        flashAllImages: function () {
            var a = this;
            clearTimeout(a._flashTimeout), a._flashTimeout = setTimeout(function b() {
                a.stepFlashAllImages(), a._numFlashingImages > 0 ? setTimeout(b, FLASH_TICK) : a._flashTimeout = null
            }, FLASH_TICK)
        },
        stepFlashAllImages: function () {
            var a = [];
            for (var b in this._flashingImages) {
                var c = this._flashingImages[b];
                for (var d in c.flashList) {
                    var e = c.flashList[d];
                    this.stepFlashImage(e) && a.push({
                        marker: c,
                        image: e
                    })
                }
            }
            for (var b = 0; b < a.length; b++) {
                var e = a[b];
                this.endFlashingImage(e.marker, e.image)
            }
        },
        stepFlashImage: function (a) {
            var b = a.image,
                c = (new Date).getTime() - a.time;
            a.time += c;
            if (c != 0) {
                if (a.left <= 0) {
                    b.css({
                        opacity: 0
                    });
                    if (a.repeat) a.left = FLASH_DURATION;
                    else return !0
                }
                var d = a.left / FLASH_DURATION,
                    e = (1 - Math.cos(d * TWO_PI * 3)) / 2;
                b.css({
                    opacity: e
                }), a.left -= c;
                return !1
            }
            return !1
        },
        moveNearTo: function (a, b, c) {
            var d = google.maps.geometry.spherical.computeDistanceBetween(a, b),
                e = c / d;
            return google.maps.geometry.spherical.interpolate(b, a, e)
        },
        _processClickStack: function (a) {
            var b = a;
            for (var c in b) var d = b[c];
            $(document).trigger("action.map.element.click", [b])
        },
        markerDoubleClicked: function (a, b) {
            var c = this;
            if (b && b.getElement()) {
                console.log("Moving marker to element");
                var e = d.getYouLocationElement(),
                    f = this.getMarkerForElement(e),
                    g = google.maps.geometry.spherical.computeDistanceBetween(b.position, f.position),
                    h = c.getElementsUnderMouse(a, b.getDiv()),
                    i = [],
                    j = !1;
                for (var k = 0; k < h.length; k++) {
                    var l = h[k].data("elementId"),
                        m = c.markerElementMap[l];
                    if (m) {
                        var n = b.getElement();
                        i.push(n.elementId);
                        for (var o = 0; o < n.displayLayers.length; o++) {
                            var p = n.displayLayers[o];
                            j = j || p.blocksMovement
                        }
                    }
                }
                j && c.onMarkerStackClick(i)
            }
        },
        onMarkerStackClick: function (a) {
            var b = [];
            for (var c = 0; c < a.length; c++) {
                var d = a[c],
                    e = this.markerElementMap[d];
                e && b.push(e)
            }
            this._processClickStack(b)
        },
        onMarkerClick: function (a, c) {
            console.log("Processing on marker click for marker: "), console.log(c);
            var d = this.markerElementMap,
                e = c.position,
                f = b.LOCATION.PIXEL_2_DEGREE_E(),
                g = [];
            for (var h in d) {
                var i = d[h],
                    j = google.maps.geometry.spherical.computeDistanceBetween(c.position, i.position);
                j < CLICK_CONTAINS_RADIUS && g.push(i)
            }
            this._processClickStack(g)
        },
        _currentPlayerMoveInterval: null,
        processVisibleCircleDoubleClick: function (a) {
            var b = this;
            clearInterval(this._currentPlayerMoveInterval);
            var c = d.getYouLocationElement(),
                e = 100;
            if (c) {
                var f = this.getMarkerForElement(c);
                if (!f) return;
                var g = f.getPosition(),
                    h = a.latLng;
                if (c.movementSpeed > 0) {
                    var i = this.markerElementMap,
                        j = this._currentTarget.convertPoint(h),
                        k = this.getMarkersAt(j),
                        l = !1;
                    for (var m = 0; m < k.length; m++) {
                        var n = this.markerElementMap[k[m].attr("id").split("-")[2]];
                        if (n) {
                            var o = n.getElement(),
                                p = o.displayLayers[0];
                            p && (l = l || p.blocksMovement)
                        }
                    }
                    if (l) return;
                    this.startMoveMarker(f, h, function () {}), $(document).trigger("action.elementAnalogMoved", [c, h, b._currentTargetName, 0])
                }
            }
        },
        processMapClick: function (a) {},
        getElementsUnderMouse: function (c, d) {
            if (!this._isEmulation) {
                var e = $(d),
                    f = c.clientX,
                    g = c.clientY;
                console.log(f, g);
                var h = [f - a.PICK_FUDGE, g - a.PICK_FUDGE, f + a.PICK_FUDGE, g + a.PICK_FUDGE],
                    i = b.UI.findIntersectorsFromBoundsOffset(h, ".map-display-layer-overlay");
                return i
            }
            var f = c.clientX,
                g = c.clientY;
            console.log(f, g);
            var h = [f - a.PICK_FUDGE, g - a.PICK_FUDGE, f + a.PICK_FUDGE, g + a.PICK_FUDGE],
                i = b.UI.findIntersectorsFromBoundsOffset(h, ".map-display-layer-overlay");
            return i
        },
        getMarkersAt: function (c) {
            if (!this._isEmulation) {
                var d = [c.x - a.PICK_FUDGE, c.y - a.PICK_FUDGE, c.x + a.PICK_FUDGE, c.y + a.PICK_FUDGE],
                    e = b.UI.findIntersectorsFromBoundsOffset(d, ".map-display-layer-overlay");
                return e
            }
        },
        processElementsUnderMouse: function (a) {
            var b = [];
            for (var c in a) {
                var d = a[c];
                b.push($(d).data("elementId"))
            }
            this.onMarkerStackClick(b)
        },
        addElements: function (a) {
            var b = this;
            console.log("Adding " + a.length + " elements to map");
            var c = [],
                f = {};
            for (var g = 0; g < a.length; g++) {
                var h = a[g];
                c.push(h.elementId), f[h.elementId] = [];
                for (var i = 0; i < h.displayLayers.length; i++) {
                    var j = h.displayLayers[i];
                    f[h.elementId].push(j.info)
                }
            }
            $(document).trigger("map.elements.loaded", [a.length]);
            var k = null,
                l = null,
                m = null;
            e.requireAllOwnedImagesParallel(c, f, function () {
                console.log("Loaded all images for " + c.length + " owners"), !k || k[0].location.lat == -16.514565 && k[0].location.lng == -151.72826 ? l ? $(document).trigger("map.tutorial.youAdded", l) : m && $(document).trigger("map.tutorial.monkAdded", m) : $(document).trigger("map.tutorial.arrowAdded", k);
                for (var a = 0; a < c.length; a++) {
                    var d = c[a];
                    if (!b._queuedDisplayLayerMap.hasOwnProperty(d)) continue;
                    var e = b._queuedDisplayLayerMap[d],
                        f = b.markerElementMap[d];
                    f && (f.addDisplayLayerUpdate(e), delete b._queuedDisplayLayerMap[d])
                }
            }, function (a) {
                console.log("Finished loading", a);
                var c = d.getElementWithId(a);
                if (!c) console.error("Invalid element loaded", a);
                else {
                    b.addElement(c, f[c.elementId]);
                    var e = b.markerElementMap[c.elementId];
                    c.elementId === "arrow" ? k = [c, e] : c.elementId.toLowerCase() === "you" ? l = [c, e] : c.elementId.toLowerCase() === "monk" && (m = [c, e]), b.addPolysForElement(c)
                }
            })
        },
        queueDisplayLayerUpdate: function (a, b) {
            this._queuedDisplayLayerMap[a.elementId] = b
        },
        updateAllElements: function () {
            for (var a in this.markerElementMap) {
                var b = this.markerElementMap[a];
                b.update()
            }
        },
        addElement: function (a, b) {
            var c = this;
            if (this.markerElementMap.hasOwnProperty(a.elementId)) {
                var d = this.markerElementMap[a.elementId];
                if (d) {
                    d.setElement(a), d.update();
                    return
                }
            }
            var e = this._addMarker(a, b);
            this.markerElementMap[a.elementId] = e, e._attentionCallback = function () {
                c.tryDisplayAttention(a.elementId) && (e._attentionCallback = !1)
            }
        },
        removeAllElements: function () {
            console.log("Removing all elements from the map..."), clearTimeout(this._moveTimeout), this._moveTimeout = null, this._movingMarkers = {}, this._numMovingMarkers = 0, this._animateTimeout = null;
            for (var a in this._animatingBubbles) {
                var b = this._animatingBubbles[a];
                for (var c in b.bubbleQueue) {
                    var d = b.bubbleQueue[c];
                    d.bubble.remove()
                }
            }
            this._animatingBubbles = {}, this._numAnimationBubbles = 0, this._flashTimeout = null;
            for (var a in this._flashingImages) {
                var b = this._flashingImages[a];
                for (var c in b.flashList) {
                    var e = b.flashList[c];
                    e.image.remove()
                }
            }
            this._flashingImages = {}, this._numFlashingImages = 0;
            for (var a in this.markerElementMap) {
                var b = this.markerElementMap[a];
                this._isEmulation ? b.onRemove() : b.setMap(null), delete this.markerElementMap[b.getElement().elementId]
            }
            for (var a in this.polyElements) {
                var f = this.polyElements[a];
                this._isEmulation ? console.error("Trying to remove poly in dungeon map") : f.setMap(null)
            }
            this.polyElements = []
        },
        removeElement: function (a) {
            var b = this.getMarkerForElement(a);
            if (!b) {
                if (a) {
                    delete this.markerElementMap[a.elementId];
                    return
                }
            } else this._isEmulation ? b.onRemove() : (b.setMap(null), b.deleteTutorialBubble(), b.deleteChatBubble(), this.removePolysForElement(a)), delete this.markerElementMap[a.elementId]
        },
        removePolysForElement: function (a) {
            for (var b = 0; b < this.polyElements.length; b++) {
                var c = this.polyElements[b];
                c && c.element && c.element.elementId === a.elementId && (c.setMap(null), this.polyElements.splice(b, 1), b = -1)
            }
        },
        addPolysForElement: function (a) {
            var c = a.displayLayers;
            for (var d in c) {
                var e = c[d],
                    f = b.intColorToHex(e.color);
                if (e.vertices.length > 0) {
                    var g = 0;
                    for (var h = 0; h < e.boundaries.length; h++) {
                        var i = e.boundaries[h];
                        if (i) {
                            g = 3;
                            break
                        }
                    }
                    this.drawPoly(a, e.vertices, e.boundaries, f[0], .2, f[0], g, .8)
                }
            }
        },
        replaceElement: function (a) {
            console.log("Updating marker with new matching element"), this.removeElement(a), this.addElements([a])
        },
        getMarkerForElement: function (a) {
            if (!a) return null;
            return this.markerElementMap[a.elementId]
        },
        getMarkerForElementId: function (a) {
            return this.markerElementMap[a]
        },
        _addMarker: function (a, b) {
            var d = new google.maps.LatLng(a.location.lat, a.location.lng),
                e = a.displayLayers,
                f = c.newOverlay(this);
            f.setElement(a), this._isEmulation ? (f.setIsEmulation(!0), f.setTargetContainer(document.getElementById("map-drag")), f.onAdd(), f.draw()) : f.setMap(this._currentTarget.getMap());
            return f
        },
        addBackgroundImage: function (a, b) {
            var d = c.newOverlay(this);
            d.setIsEmulation(!0), d.setTargetContainer(document.getElementById("map-drag")), d.setPosition(new google.maps.LatLng(0, 0)), d.onAdd();
            var e = d.addImageLayer(a, b);
            d.draw(), d.bindEmulationClickHandler(), this.displayLayerList.push(d), $("#map-drag").css({
                width: e.size[0] + "px",
                height: e.size[1] + "px",
                left: ($(window).width() - e.size[0]) / 2 + "px",
                top: ($(window).height() - e.size[1]) / 2 + "px"
            });
            return d
        },
        addPolyLayer: function (a) {
            var b = this.getOverlayType("poly"),
                c = new b(this, a);
            this._isEmulation ? console.error("Not adding poly to emulation map") : c.setMap(this._currentTarget.getMap()), c.onAdd(), c.draw();
            return c
        },
        fromContainerPixelToLatLng: function (a) {
            return this._currentTarget.fromContainerPixelToLatLng(a)
        },
        fromDivPixelToLatLng: function (a) {
            return this._currentTarget.fromDivPixelToLatLng(a)
        },
        fromLatLngToContainerPixel: function (a) {
            return this._currentTarget.fromLatLngToContainerPixel(a)
        },
        fromLatLngToDivPixel: function (a) {
            return this._currentTarget.fromLatLngToDivPixel(a)
        },
        recenterMap: function (a) {
            this._isEmulation || google.maps.geometry.spherical.computeDistanceBetween(a.latLng, this.loc(this._centerLocation)) > parseInt(d.data.clientConfigs.recenter_range, 10) && this._currentTarget.setCenter(this._centerLocation)
        },
        centerOnMarker: function (a) {
            return
        },
        processDoubleClick: function (a) {
            var b = this,
                c = d.getYouLocationElement(),
                e = 100;
            if (c) {
                var f = this.getMarkerForElement(c),
                    g = f.getPosition();
                c.movementSpeed > 0 && (this.startMoveMarker(f, a, function () {}), require(["game"], function (d) {
                    d.movePlayerAnalog(c, a, b._currentTargetName)
                }))
            }
        },
        getName: function () {
            if (!this._currentTarget) return null;
            return this._currentTarget.getName()
        },
        setLocationFromLatLng: function (a, b) {
            !this._currentTarget || this._currentTarget.setLocationFromLatLng(a, b)
        },
        loc: function (a) {
            if (typeof a.lat == "function") return a;
            return new google.maps.LatLng(a.lat, a.lng)
        },
        ourLoc: function (a) {
            if (typeof a.lat == "function") return {
                lat: a.lat(),
                lng: a.lng()
            };
            return a
        },
        drawPoly: function (a, b, c, d, e, f, g, h) {
            if ( !! this._currentTarget) {
                var i = this._currentTarget.drawPoly(b, c, d, e, f, g, h);
                i.element = a, this.polyElements.push(i)
            }
        },
        drawCircle: function (a, b, c, d, e, f, g) {
            if ( !! this._currentTarget) return this._currentTarget.drawCircle(a, b, c, d, e, f, g)
        },
        drawVisibleCircle: function () {
            var a = this;
            if (this._sightBoundType == "CIRCLE_VISIBLE") {
                var b = this.drawCircle(this._centerLocation, this._sightRadius, "#111", .1, "#111", 4, .6);
                google.maps.event.addListener(b, "rightclick", function (b) {
                    a.processVisibleCircleDoubleClick(b);
                    return !1
                }), google.maps.event.addListener(this._currentTarget.map, "dblclick", function (b) {
                    a.recenterMap(b)
                }), google.maps.event.addListener(b, "dblclick", function (b) {
                    a.processVisibleCircleDoubleClick(b)
                })
            } else this._sightBoundType == "CIRCLE_INVISIBLE" && google.maps.event.addListener(this._currentTarget.map, "dblclick", function (b) {
                a._currentTargetName == "compass" && a.processVisibleCircleDoubleClick(b), a.recenterMap(b)
            })
        },
        drawWaypoint: function () {
            if (this._waypoint && this._centerLocation && this._currentTarget) {
                var c = this.loc(this._centerLocation),
                    e = this.loc(this._waypoint.location),
                    f = google.maps.geometry.spherical.computeDistanceBetween(c, e);
                if (f > this._sightRadius) {
                    var g = google.maps.geometry.spherical.computeHeading(c, e),
                        h = [google.maps.geometry.spherical.computeOffset(c, this._sightRadius + 10, g), google.maps.geometry.spherical.computeOffset(c, this._sightRadius, g - 3), google.maps.geometry.spherical.computeOffset(c, this._sightRadius, g + 3)],
                        i = b.intColorToHex(d.data.clientConfigs[a.CONFIGS.WAYPOINT_COLOR]),
                        j = this._currentTarget.drawPoly(h, {}, i[0], i[1], i[1], 1, i[1]);
                    this.polyElements.push(j)
                }
            }
        },
        getOverlayType: function (a) {
            return c.getOverlayType(a)
        },
        removeAllTutorialBubbles: function () {
            for (var a in this.markerElementMap) {
                var b = this.markerElementMap[a];
                b.deleteTutorialBubble()
            }
        },
        setMapSatelliteMode: function () {
            this._isEmulation || this._currentTarget.map.setMapTypeId(google.maps.MapTypeId.HYBRID)
        },
        setMapRoadmapMode: function () {
            this._isEmulation || (g.getTestValue("color_newimproved3") == "on" ? this._currentTarget.map.setMapTypeId("newimproved3") : this._currentTarget.map.setMapTypeId(google.maps.MapTypeId.ROADMAP))
        },
        processWaypointAdd: function (a) {
            this._waypoint = a, this.drawWaypoint()
        },
        processElementAttention: function (a) {
            this.removeAllAttention(a.elements), this.attentionType = a.type, this.attentionElmIds = a.elements, this.displayAllAttention()
        }
    }
}), define("state", [], function () {
    return {
        data: {
            clientConfigs: {}
        },
        _locationDataElements: {},
        _youElement: null,
        _tips: [],
        initFromBootData: function (a) {
            this._locationDataElements = {}, $.extend(this.data, a);
            for (var b = 0; b < a.locationData.elements.length; b++) {
                var c = a.locationData.elements[b];
                this._locationDataElements[c.elementId] = c
            }
        },
        setLocationData: function (a) {
            this._locationDataElements = {}, this.data.locationData = a;
            for (var b = 0; b < a.elements.length; b++) {
                var c = a.elements[b];
                this._locationDataElements[c.elementId] = c
            }
        },
        setBounds: function (a) {
            $.extend(this.data.locationData, a)
        },
        setClientConfigs: function (a) {
            $.extend(this.data.clientConfigs, a)
        },
        clearLocationData: function () {
            this._locationDataElements = {}
        },
        setYouLocationElement: function (a) {
            this._locationDataElements.you = a, this._locationDataElements[this.data.yourId] = a, this.data.yourId = a.elementId, this.data.hp = a.hp, this.data.hpMax = a.hpTotal
        },
        addHelpTip: function (a) {
            this._tips.push(a)
        },
        getTips: function () {
            return this._tips
        },
        getYouLocationElement: function () {
            return this._locationDataElements.you || this._locationDataElements.You || this._locationDataElements[this.data.yourId]
        },
        getElementWithId: function (a) {
            var b = this._locationDataElements[a];
            if (b) return b;
            for (var c in this.data.items) {
                var b = this.data.items[c];
                if (b.elementId === a) return b
            }
            for (var c in this.data.estates.elements) {
                var b = this.data.estates.elements[c];
                if (b.elementId === a) return b
            }
        },
        addLocationElement: function (a, b) {
            var c = this._locationDataElements[a.elementId];
            if (c) {
                console.log("Replaced location element."), this._locationDataElements[a.elementId] = a;
                for (var d = 0; d < this.data.locationData.elements.length; d++) {
                    var e = this.data.locationData.elements[d];
                    e.elementId === a.elementId && (this.data.locationData.elements[d] = a)
                }
                var f = this.getYouLocationElement();
                if (a.elementId === this.data.yourId || f && a.elementId === f.elementId) console.error("Replaced you element in state."), this.setYouLocationElement(a), this.data.hp = b.element.hp, this.data.hpMax = b.element.hpTotal;
                $(document).trigger("state.element.replaced", [a])
            } else {
                var f = this.getYouLocationElement();
                if (a.elementId === this.data.yourId || f && a.elementId === f.elementId) console.log("Replaced you element in state."), this.setYouLocationElement(a), this.data.hp = b.element.hp, this.data.hpMax = b.element.hpTotal;
                this.data.locationData.elements.push(a), this._locationDataElements[a.elementId] = a
            }
        },
        removeItemFromMap: function (a) {
            if (!a) console.error("Tried to remove null element from state location map data");
            else for (var b in this.data.locationData.elements) {
                var c = this.data.locationData.elements[b];
                if (c.elementId === a.elementId) {
                    this.data.locationData.elements.splice(b, 1), delete this._locationDataElements[a.elementId];
                    return
                }
            }
        },
        getPlayerItemElement: function (a) {
            for (var b in this.data.items) {
                var c = this.data.items[b];
                if (c.elementId === a) return c
            }
            return null
        },
        addPlayerItemElement: function (a, b) {
            var c = this.data.items.splice(b.position, this.data.items.length - b.position, a);
            this.data.items = this.data.items.concat(c)
        },
        updatePlayerItemElement: function (a, b) {
            for (var c in this.data.items) {
                var d = this.data.items[c];
                if (d.elementId === a.elementId) {
                    this.data.items[c] = a;
                    return
                }
            }
            this.addPlayerItemElement(a, b)
        },
        updatePlayerItemElementActions: function (a, b) {
            for (var c in this.data.items) {
                var d = this.data.items[c];
                if (d.elementId === a) {
                    this.data.items[c].actions = b;
                    return
                }
            }
        },
        removePlayerItemElement: function (a, b) {
            var c = -1;
            for (var d in this.data.items) {
                var e = this.data.items[d];
                if (e.elementId === a) {
                    c = d;
                    break
                }
            }
            c < 0 || this.data.items.splice(c, 1)
        },
        getPlayerEstateElement: function (a) {
            for (var b in this.data.estates.elements) {
                var c = this.data.estates.elements[b];
                if (c.elementId === a) return c
            }
            return null
        },
        addPlayerEstateElement: function (a, b) {
            var c = this.data.estates.elements.splice(b.position, this.data.estates.elements.length - b.position, a);
            this.data.estates.elements = this.data.estates.elements.concat(c)
        },
        updatePlayerEstateElement: function (a, b) {
            for (var c in this.data.estates.elements) {
                var d = this.data.estates.elements[c];
                if (d.elementId === a.elementId) {
                    this.data.estates.elements[c] = a;
                    return
                }
            }
            this.addPlayerEstateElement(a, b)
        },
        updatePlayerEstateElementActions: function (a, b) {
            for (var c in this.data.estates.elements) {
                var d = this.data.estates.elements[c];
                if (d.elementId === a) {
                    this.data.estates.elements[c].actions = b;
                    return
                }
            }
        },
        removePlayerEstateElement: function (a, b) {
            var c = -1;
            for (var d in this.data.estates.elements) {
                var e = this.data.estates.elements[d];
                if (e.elementId === a) {
                    c = d;
                    break
                }
            }
            c < 0 || this.data.estates.elements.splice(c, 1)
        },
        getPlayerAreaType: function () {
            if (this.data.yourId) {
                var a;
                require(["map_utils"], function (b) {
                    a = b.isEmulation()
                });
                if (a) return "dungeon";
                var b = this.getElementWithId(this.data.yourId);
                if (b && b.displayLayers) {
                    for (var c = 0; c < b.displayLayers.length; c++) if (b.displayLayers[c].info == "raft" || b.displayLayers[c].info == "gillens_brew_raft") return "water";
                    return "land"
                }
            }
            return ""
        }
    }
}), define("tut", ["state", "settings"], function (a, b) {
    return {
        TUTORIALS: [{
            tutorialKey: "TUTORIAL1",
            script: "tuts/tut1"
        }],
        EMBED_TUTORIALS: [{
            tutorialKey: "TUTORIALFB1",
            script: "tuts/tut_fb1"
        }],
        NUM_TUTORIALS: 1,
        YOUR_ID: "You",
        Z_ORDERS: {
            PLAYER: 11,
            DOORS: 1,
            ITEM: 8,
            BUILDING: 7,
            MONSTER: 9,
            MONSTER_FLYING: 10
        },
        you: {},
        gender: "male",
        setGender: function (a) {
            this.gender = a, this.send({
                fullName: "MapElementDisplayLayersChange1",
                elementId: this.YOUR_ID,
                target: "map",
                displayLayers: [this.getDisplayLayer({
                    info: this.getGenderDisplayLayer(),
                    zOrder: this.Z_ORDERS.PLAYER
                }), this.getDisplayLayer({
                    info: "status_passive",
                    zOrder: this.Z_ORDERS.PLAYER
                })]
            })
        },
        isActive: !1,
        stateData: [],
        getDisplayLayer: function (a) {
            return $.extend({
                blocksMovement: !1,
                boundaries: [],
                color: 0,
                info: "",
                isClickable: !1,
                vertices: [],
                zOrder: 0
            }, a)
        },
        getEstate: function (a) {
            var b = {
                displayString: "",
                displayLayers: [],
                elementId: "",
                hp: 0,
                hpTotal: -1,
                location: {
                    lat: 0,
                    lng: 0,
                    target: "estate|" + this.YOUR_ID
                },
                movementSpeed: 0,
                name: "",
                timerTimeLeft: 0,
                timerTimeTotal: 0
            };
            $.extend(b, a);
            return b
        },
        getGenderDisplayLayer: function () {
            return this.gender.toLowerCase()
        },
        addAction: function (a, b) {
            var c = {
                displayString: "",
                command: "",
                range: -1,
                intPromptDisplay: "",
                stringPromptDisplay: "",
                uRL: ""
            };
            $.extend(c, b), a.push(c);
            return c
        },
        getAction: function (a) {
            return $.extend({
                command: "",
                displayString: "",
                range: -1,
                prompt: !1,
                intPromptDisplay: "",
                stringPromptDisplay: "",
                uRL: ""
            }, a)
        },
        addItem: function (a) {
            var b = {
                location: {
                    lat: 0,
                    lng: 0,
                    target: "player|" + this.YOUR_ID
                }
            };
            $.extend(a, b), this.stateData[this._initState].items.push(a);
            return a
        },
        removeItem: function (a) {
            var b = this.stateData[this._initState].items;
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                if (d.elementId === a.elementId) {
                    this.stateData[this._initState].items.splice(c, 1);
                    return
                }
            }
        },
        addElement: function (a) {
            this.stateData[this._initState].elements.push(a);
            return a
        },
        sendAddElement: function (a) {
            var b = {
                fullName: "MapElementAdded1",
                animation: "pop",
                element: {}
            };
            $.extend(b.element, a), this.send(b)
        },
        removeElement: function (a) {
            var b = this.stateData[this._initState].elements;
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                if (d.elementId === a.elementId) {
                    this.stateData[this._initState].elements.splice(c, 1), console.log("Removed an element from state elements");
                    return
                }
            }
            console.error("Tried to remove an element", a, "from state data but didn't find it")
        },
        sendRemoveElement: function (a) {
            this.send({
                fullName: "MapElementRemoved1",
                elementId: a.elementId,
                target: a.location.target,
                animation: "pop"
            })
        },
        addWeight: function (a) {
            this.stateData[this._initState].weight += a
        },
        addGold: function (a) {
            this.stateData[this._initState].gold += a
        },
        addHP: function (a) {
            this.stateData[this._initState].hp += a
        },
        setExpectedAction: function (a, b) {
            this.stateData[this._initState].expectedAction === null && (this.stateData[this._initState].expectedAction = {}, b ? (this.stateData[this._initState].expectedAction.command = a, this.stateData[this._initState].expectedAction.nextState = b) : (this.stateData[this._initState].expectedAction.command = a, this.stateData[this._initState].expectedAction.nextState = this._initState + 1))
        },
        setLocation: function (a, b) {
            this.stateData[this._initState].centerLocation = a, this.stateData[this._initState].displayLocation = b
        },
        handleMessage: function (a) {
            this._script.handleMessage(a)
        },
        interceptBootData: function (a) {
            var b = this._playerState,
                c = null;
            for (var d in this._script.states) {
                var e = this._script.states[d];
                if (e === b) {
                    c = d;
                    break
                }
            }
            c !== null && this.recordState(c, null);
            var f = null;
            for (var d = 0; d < a.locationData.elements.length; d++) {
                var g = a.locationData.elements[d];
                if (g.elementId.toLowerCase() === this.YOUR_ID.toLowerCase()) {
                    f = g;
                    break
                }
            }
            if (!f) console.error("Unable to find you element on tutorial init!");
            else {
                this.you = f;
                var h = {
                    fullName: "BootData1",
                    yourId: this.YOUR_ID,
                    gold: this.getGold(b),
                    hp: this.getHp(b),
                    hpMax: 100,
                    food: this._script.getFoodCount(),
                    referralCode: a.referralCode,
                    currentWeight: this.getWeight(b),
                    totalWeightCapacity: 5,
                    exp: this.getExp(b),
                    expMax: 1e3,
                    items: this.getItems(b),
                    makeTypes: this._script.getMakeTypes(),
                    resources: this._script.getResources(),
                    yourResources: this._script.getYourResources(b),
                    estates: {
                        elements: [this.getEstate({
                            displayString: "Visit Starting Location",
                            elementId: "relocate",
                            displayLayers: [this.getDisplayLayer({
                                info: "estate_relocate"
                            })]
                        })]
                    }
                };
                $.extend(a, h), this.updateLocationData(a.locationData, b), this.addSelfToLocationData(a.locationData, b), this.send(a), this._script.updateTutorialMessage(b);
                return !0
            }
        },
        setState: function (a) {
            a <= this._initState && console.error("Stepping to invalid state. New state:", a, "old:", this._initState);
            var b = Math.max(1, this._initState + 1);
            for (; b <= a; b++) {
                var c = this.stateData[b],
                    d = this.stateData[b - 1];
                c.weight = d.weight, c.exp = d.exp, c.gold = d.gold, c.hp = d.hp, c.elements = this.copyList(d.elements), c.items = this.copyList(d.items), c.centerLocation = d.centerLocation, c.displayLocation = d.displayLocation
            }
            this._initState = a
        },
        copyList: function (a) {
            var b = [];
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                b.push(d)
            }
            return b
        },
        getPlayerState: function () {
            return this._playerState
        },
        updateTutStep: function (a) {
            console.log("Tutorial state transition:", this._initState, "to", a);
            var b = this._playerState;
            this._playerState = a;
            var c = null;
            for (var d in this._script.states) {
                var e = this._script.states[d];
                if (e === b) {
                    c = d;
                    break
                }
            }
            var f = null;
            for (var d in this._script.states) {
                var e = this._script.states[d];
                if (e === a) {
                    f = d;
                    break
                }
            }
            f !== null && this.recordState(f, c);
            var g = !1;
            if (!this.areLocationsEqual(this.getCenterLocation(b), this.getCenterLocation(a))) {
                var h = {
                    fullName: "LocationData1"
                };
                this.updateLocationData(h, a), this.addSelfToLocationData(h, a), this.send(h), g = !0
            }
            var i = this.scale;
            if (i(this.getWeight(b), 5) != i(this.getWeight(a), 5)) {
                var j = {
                    fullName: "WeightUpdate1",
                    totalWeightCapacity: this._script.TOTAL_WEIGHT,
                    currentWeight: this.getWeight(a)
                };
                this.send(j)
            }
            if (this.getGold(b) != this.getGold(a)) {
                var k = this.getGold(a) - this.getGold(b);
                this.send({
                    fullName: "MapElementGoldChange1",
                    goldChange: k,
                    goldFinal: this.getGold(a),
                    target: this.getDisplayLocation(a).target
                })
            }
            if (this.getExp(b) != this.getExp(a)) {
                var l = this.getExp(a) - this.getExp(b);
                this.send({
                    fullName: "MapElementExpChange1",
                    expChange: l,
                    expFinal: this.getExp(a),
                    target: this.getDisplayLocation(a).target
                })
            }
            if (this.getHp(b) != this.getHp(a)) {
                var m = this.getHp(a) - this.getHp(b);
                this.send({
                    fullName: "MapElementHPChange1",
                    hpChange: m,
                    hpFinal: this.getHp(a),
                    target: this.getDisplayLocation(a).target
                })
            }
            if (!g) {
                var n = this.getElements(b),
                    o = this.getElements(a),
                    p = this.getElementsMapped(n),
                    q = this.getElementsMapped(o);
                for (var d = 0; d < n.length; d++) {
                    var r = n[d];
                    this.hasElement(q, r) || this.sendRemoveElement(r)
                }
                for (var d = 0; d < o.length; d++) {
                    var r = o[d];
                    this.hasElement(p, r) || this.sendAddElement(r)
                }
                var s = this.getItems(b),
                    t = this.getItems(a),
                    u = this.getElementsMapped(s),
                    v = this.getElementsMapped(t);
                for (var d = 0; d < s.length; d++) {
                    var r = s[d];
                    this.hasElement(v, r) || this.sendRemoveElement(r)
                }
                for (var d = 0; d < t.length; d++) {
                    var r = t[d];
                    this.hasElement(u, r) || this.sendAddElement(r)
                }
            }
            this._script.onTutStateChanged(b, a)
        },
        updateLocationData: function (a, b) {
            var c = this.getCenterLocation(b);
            a.centerLocation = c, a.displayLocation = this.getDisplayLocation(b), c.target == "map" ? (a.sightBoundType = "CIRCLE_VISIBLE", a.sightRadius = 600) : (a.sightBoundType = "RECTANGLE_INVISIBLE", a.sightLatMax = 311.0048, a.sightLngMax = 442.58374), a.elements = [];
            var d = this.getElements(b);
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                a.elements.push(f)
            }
        },
        hasElement: function (a, b) {
            var c = b[a.elementId];
            if (!c) return !1;
            if (a.actions.length != c.actions.length) return !1;
            if (a.displayString !== c.displayString) return !1;
            if (!this.areLocationsEqual(a.location, c.location)) return !1;
            if (a.displayLayers.length != c.displayLayers.length) return !1;
            return !0
        },
        addSelfToLocationData: function (a, b) {
            a.elements.push(this.getSelf(b))
        },
        getSelf: function (a) {
            return {
                hp: this.getHp(a),
                hpTotal: 100,
                elementId: this.YOUR_ID,
                location: this.getCenterLocation(a),
                displayString: this.you.displayString,
                displayLayers: this._script.getYouDisplayLayers(a),
                movementSpeed: 115,
                name: this.you.displayString
            }
        },
        getWeight: function (a) {
            return this.stateData[a].weight
        },
        getExp: function (a) {
            return this.stateData[a].exp
        },
        getGold: function (a) {
            return this.stateData[a].gold
        },
        getHp: function (a) {
            return this.stateData[a].hp
        },
        getElements: function (a) {
            return this.stateData[a].elements
        },
        getElementsMapped: function (a) {
            var b = {};
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                b[d.elementId] = d
            }
            return b
        },
        getItems: function (a) {
            return this.stateData[a].items
        },
        getExpectedAction: function (a) {
            return this.stateData[a].expectedAction
        },
        getCenterLocation: function (a) {
            return this.stateData[a].centerLocation
        },
        getDisplayLocation: function (a) {
            return this.stateData[a].centerLocation
        },
        areLocationsEqual: function (a, b) {
            return parseInt(Math.pow(10, 12) * a.lat) == parseInt(Math.pow(10, 12) * b.lat) && parseInt(Math.pow(10, 12) * a.lng) == parseInt(Math.pow(10, 12) * b.lng)
        },
        scale: function (a, b) {
            return Math.pow(10, b) * a
        },
        init: function (a) {
            this._messageProcessor = a
        },
        send: function (a) {
            typeof this._messageProcessor != "function" ? console.error("Can't process tutorial message, processor is not a function") : this._messageProcessor(a)
        },
        process: function (a) {},
        loadScript: function (a, b, c) {
            var d = this;
            this.isActive = !0, this._initState = null, this._playerState = null, this._tutorial = a, console.log("Loading tutorial", a), require([a.script], function (a) {
                var e = !0;
                for (var f in a.states) {
                    console.log("Initializing state data for state", f);
                    var g = a.states[f];
                    d.stateData[g] = {
                        gold: 100,
                        exp: 0,
                        hp: 100,
                        weight: 0,
                        elements: [],
                        items: [],
                        expectedAction: null,
                        centerLocation: null,
                        displayLocation: null
                    }
                }
                d._script = a, d._script.populateStates();
                if (c) {
                    var h = d._script.states[c];
                    h === undefined ? (console.error("Unable to find init state of tutorial:", c), d._playerState = 0) : d._playerState = h
                }
                b()
            }), this._initState = -1, c || (this._playerState = 0)
        },
        start: function () {
            this._script || console.error("Can't start nonexistent tutorial")
        },
        recordState: function (c, d) {
            var e = a.getYouLocationElement(),
                f = e ? e.name : null,
                g = e && e.elementId.toLowerCase() !== "you" ? e.elementId : null;
            $.postJSON(b.CLIENT_SET_TUT_STATE_PATH, {
                tutorialKey: this._tutorial.tutorialKey,
                lastStateKey: d,
                stateKey: c,
                characterId: g,
                characterName: f
            }, function (a) {})
        },
        startNewTutorial: function (b, c, d, e) {
            var f = this.TUTORIALS;
            c && (f = this.EMBED_TUTORIALS);
            var g = Math.floor(Math.random() * this.NUM_TUTORIALS),
                h = f[g],
                i = this;
            this.loadScript(h, function () {
                a.initFromBootData(b), i.start(), i.interceptBootData(b)
            }, e)
        },
        startFromExistingTutorial: function (b, c, d) {
            var e = null;
            for (var f = 0; f < this.TUTORIALS.length; f++) {
                var g = this.TUTORIALS[f];
                if (g.tutorialKey === c) {
                    e = g;
                    break
                }
            }
            if (!e) console.error("Unable to start non-existent tutorial:", c), this.startNewTutorial(b);
            else {
                var h = this;
                this.loadScript(e, function () {
                    a.initFromBootData(b), h.start(), h.interceptBootData(b)
                }, d)
            }
        },
        finish: function () {
            console.log("Finished tutorial!"), this.isActive = !1, $(document).trigger("tutorialFinished")
        },
        finishAndCreateCharacterQuick: function (a) {
            this.isActive = !1, $(document).trigger("action.createCharacterTutorialQuick", [a])
        },
        startWithoutCharacter: function (b, c) {
            var d = {
                fullName: "BootData1",
                yourId: "You",
                gold: 0,
                hp: 100,
                hpMax: 100,
                food: 0,
                referralCode: "",
                currentWeight: 0,
                totalWeightCapacity: 5,
                getFoodPages: [],
                locationData: {
                    centerLocation: {
                        lat: 0,
                        lng: 0,
                        target: "map"
                    },
                    displayLocation: {
                        lat: 0,
                        lng: 0,
                        target: "map"
                    },
                    elements: [{
                        displayLayers: [],
                        elementId: "You",
                        displayString: "",
                        hp: 100,
                        hpTotal: 100,
                        location: {
                            lat: 0,
                            lng: 0,
                            target: "map"
                        }
                    }]
                },
                exp: 0,
                expMax: 1e3,
                items: [],
                makeTypes: [],
                resources: [],
                yourResources: [],
                estates: {},
                phoneNumber: "",
                receiveEmail: !1,
                receiveSms: !1,
                sessionId: ""
            };
            a.initFromBootData(d), this.startNewTutorial(d, !0, b, c)
        }
    }
}), define("target/map", ["settings", "resources", "ui/window", "display_layer_overlay", "map_utils", "ab"], function (a, b, c, d, e, f) {
    SPEED_CONSTANT = .001, MAX_PROGRESS_WIDTH = 36;
    return {
        init: function (a, b) {
            var c = this;
            this.game = a, console.log("MAP: initializing...");
            var d = new google.maps.LatLng(-34.397, 150.644),
                g = [{
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{
                        hue: "#ff0022"
                    }, {
                        saturation: 60
                    }, {
                        lightness: -20
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "all",
                    stylers: [{
                        hue: "#2200ff"
                    }, {
                        lightness: -40
                    }, {
                        visibility: "simplified"
                    }, {
                        saturation: 30
                    }]
                }, {
                    featureType: "road.local",
                    elementType: "all",
                    stylers: [{
                        hue: "#f6ff00"
                    }, {
                        saturation: 50
                    }, {
                        gamma: .7
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        saturation: 80
                    }, {
                        lightness: 40
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "labels",
                    stylers: [{
                        visibility: "on"
                    }, {
                        saturation: 98
                    }]
                }, {
                    featureType: "administrative.locality",
                    elementType: "labels",
                    stylers: [{
                        hue: "#0022ff"
                    }, {
                        saturation: 50
                    }, {
                        lightness: -10
                    }, {
                        gamma: .9
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road.local",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit.line",
                    elementType: "geometry",
                    stylers: [{
                        hue: "#ff0000"
                    }, {
                        visibility: "on"
                    }, {
                        lightness: -70
                    }]
                }, {
                    featureType: "landscape.natural",
                    elementType: "geometry",
                    stylers: [{
                        hue: "#0022ff"
                    }, {
                        saturation: 50
                    }, {
                        lightness: -10
                    }, {
                        gamma: .9
                    }]
                }, {
                    featureType: "parks",
                    elementType: "geometry",
                    stylers: [{
                        hue: "#68443b"
                    }, {
                        saturation: 50
                    }, {
                        lightness: -10
                    }, {
                        gamma: .9
                    }]
                }],
                h = {
                    backgroundColor: "#111",
                    zoom: b.zoomLevel,
                    center: d,
                    mapTypeId: "newimproved3"
                };
            b.canZoom ? $.extend(h, {
                maxZoom: b.maxZoom,
                disableDefaultUI: !0,
                disableDoubleClickZoom: !0,
                panControl: !0,
                panControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                zoomControl: !0,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER
                }
            }) : $.extend(h, {
                maxZoom: b.zoomLevel,
                minZoom: b.zoomLevel,
                disableDefaultUI: !0,
                disableDoubleClickZoom: !0,
                keyboardShortcuts: !1,
                scrollwheel: !1,
                zoomControl: !1
            });
            var i = {
                name: "US Road Atlas"
            },
                j = [{
                    elementType: "labels",
                    stylers: [{
                        hue: "#ffe500"
                    }, {
                        saturation: 35
                    }, {
                        lightness: -25
                    }]
                }, {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.natural",
                    elementType: "geometry",
                    stylers: [{
                        hue: "#80ff00"
                    }, {
                        saturation: 5
                    }, {
                        lightness: -33
                    }]
                }, {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        hue: "#00bbff"
                    }, {
                        saturation: 18
                    }, {
                        lightness: -48
                    }]
                }, {
                    featureType: "road.local",
                    elementType: "geometry",
                    stylers: [{
                        hue: "#ffe500"
                    }, {
                        saturation: 28
                    }, {
                        lightness: -25
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [{
                        hue: "#ffbb00"
                    }, {
                        saturation: -37
                    }, {
                        lightness: -16
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{
                        hue: "#ffbb00"
                    }, {
                        saturation: -34
                    }, {
                        lightness: -19
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "labels",
                    stylers: [{
                        hue: "#ffbb00"
                    }, {
                        saturation: -37
                    }, {
                        lightness: 0
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "labels",
                    stylers: [{
                        hue: "#ffbb00"
                    }, {
                        saturation: -34
                    }, {
                        lightness: 0
                    }]
                }, {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{
                        hue: "#ffd500"
                    }, {
                        saturation: 27
                    }, {
                        lightness: -60
                    }]
                }, {
                    featureType: "landscape.man_made",
                    elementType: "geometry",
                    stylers: [{
                        hue: "#80ff00"
                    }, {
                        saturation: 5
                    }, {
                        lightness: -33
                    }]
                }, {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "on"
                    }, {
                        hue: "#1bc13f"
                    }, {
                        saturation: -40
                    }, {
                        lightness: -40
                    }]
                }],
                k = new google.maps.StyledMapType(j, {
                    name: "newimproved3"
                });
            this.map = new google.maps.Map(document.getElementById("map"), h), f.getTestValue("color_newimproved3") == "on" ? (this.map.mapTypes.set("newimproved3", k), this.map.setMapTypeId("newimproved3")) : this.map.setMapTypeId(google.maps.MapTypeId.ROADMAP), google.maps.event.addListener(this.map, "bounds_changed", function (a) {
                e.onBoundsChanged(c.map.getBounds())
            }), google.maps.event.addListener(this.map, "tilesloaded", function (a) {
                e.onTilesLoaded()
            }), google.maps.event.addListener(this.map, "projection_changed", function (a) {
                e.onProjectionChanged()
            }), google.maps.event.addListener(this.map, "zoom_changed", function (a) {
                e.onZoomChanged()
            }), google.maps.event.addListener(this.map, "dragstart", function (a) {
                console.log("map did drag"), c.map._didDrag = !0
            }), google.maps.event.addListener(this.map, "dragend", function (a) {
                setTimeout(function () {
                    c.map._didDrag = !1
                }, 50)
            })
        },
        panTo: function (a) {
            this.map.panTo(a)
        },
        getMap: function () {
            return this.map
        },
        setLocation: function (a) {
            this.map.setCenter(new google.maps.LatLng(a.coords.latitude, a.coords.longitude))
        },
        setCenter: function (a) {
            this.map.setCenter(new google.maps.LatLng(a.lat, a.lng))
        },
        setLocationFromLatLng: function (a, b) {
            this.map.setCenter(new google.maps.LatLng(a, b))
        },
        drawPolySegs: function (a, b, c, d, e, f, g) {
            var h = this,
                i = [];
            if (a.length > 1) {
                var j = new google.maps.LatLng(a[0].lat, a[0].lng);
                for (var k = 1; k < a.length; k++) {
                    var l = a[k],
                        m = new google.maps.LatLng(l.lat, l.lng),
                        n = [j, m],
                        f = 0;
                    b[k] && (strokeWidth = 3);
                    var o = new google.maps.Polyline({
                        paths: i,
                        strokeColor: e,
                        strokeOpacity: g,
                        strokeWeight: f,
                        fillColor: c,
                        fillOpacity: d,
                        map: h.map,
                        zIndex: 1
                    });
                    j = m
                }
            }
        },
        drawPoly: function (a, b, c, d, f, g, h) {
            var i = this,
                j = [];
            for (var k in a) {
                var l = a[k],
                    m = e.loc(l);
                j.push(m)
            }
            if (!(j.length < 1)) {
                var n = new google.maps.Polygon({
                    paths: j,
                    strokeColor: f,
                    strokeOpacity: h,
                    strokeWeight: g,
                    fillColor: c,
                    fillOpacity: d,
                    map: i.map,
                    zIndex: 1
                });
                return n
            }
        },
        drawCircle: function (a, b, c, d, e, f, g) {
            var h = new google.maps.LatLng(a.lat, a.lng),
                i = new google.maps.Circle({
                    map: this.map,
                    center: h,
                    radius: b,
                    strokeColor: e,
                    strokeWeight: f,
                    strokeOpacity: g,
                    fillColor: c,
                    fillOpacity: d,
                    zIndex: 2
                });
            return i
        },
        getOverlayType: function (a) {},
        getName: function () {
            if (!this._name) return "map";
            return this._name
        },
        setName: function (a) {
            this._name = a
        },
        convertPoint: function (a) {
            var b = this.map,
                c = b.getProjection().fromLatLngToPoint(b.getBounds().getNorthEast()),
                d = b.getProjection().fromLatLngToPoint(b.getBounds().getSouthWest()),
                e = Math.pow(2, b.getZoom()),
                f = b.getProjection().fromLatLngToPoint(a);
            return new google.maps.Point((f.x - d.x) * e, (f.y - c.y) * e)
        }
    }
}), define("target/dungeon", ["settings", "resources", "utils", "display_layer_overlay", "map_utils"], function (a, b, c, d, e) {
    return {
        displayLayerList: [],
        _backgroundDisplayLayer: null,
        init: function (a) {},
        initWithTokens: function (a) {
            var b = this;
            this._tokens = a, this.setBackgroundDisplayLayer(a[0]), $("#map-drag").draggable({
                start: function () {
                    b._didDrag = !0
                },
                end: function () {
                    setTimeout(function () {
                        b._didDrag = !1
                    }, 50)
                }
            });
            var c = function (a) {
                    if (!b._backgroundDisplayLayer) console.error("No Background layer!");
                    else {
                        var c = $(b._backgroundDisplayLayer.getDiv()),
                            d = a.pageX - c.offset().left,
                            f = a.pageY - c.offset().top,
                            g = $("#map").width() / 2,
                            h = $("#map").height() / 2,
                            i = c.width() / 2 - d,
                            j = c.height() / 2 - f,
                            k = e.fromDivPixelToLatLng(new google.maps.Point(-i, -j));
                        console.log("Is position", [-i, -j], " in bounds ", b._bounds);
                        if (-i > b._bounds[2]) {
                            console.error("Movement out of x2 range. Handle it?");
                            return
                        }
                        if (-j > b._bounds[3]) {
                            console.error("Movement out of y2 range. Handle it?");
                            return
                        }
                        if (-i < b._bounds[0]) {
                            console.error("Movement out of x1 range. Handle it?");
                            return
                        }
                        if (-j < b._bounds[1]) {
                            console.error("Movement out of y1 range. Handle it?");
                            return
                        }
                        e.processDoubleClick(k)
                    }
                };
            $("#map-target").bind("contextmenu", function (a) {
                return !1
            }), $("#map-target").mousedown(function (a) {
                if (a.which === 3) {
                    c(a);
                    return !1
                }
            }), $("#map-target").dblclick(function (a) {
                c(a);
                return !1
            })
        },
        setBackgroundDisplayLayer: function (a) {
            var b = this;
            this._displayLayer = a, b._backgroundDisplayLayer = e.addBackgroundImage(a, 0)
        },
        setSightBounds: function (a, b, d, e) {
            switch (a) {
            case "RECTANGLE_INVISIBLE":
                var f = [-d * c.LOCATION.METERS_2_PIXELS, -b * c.LOCATION.METERS_2_PIXELS, d * c.LOCATION.METERS_2_PIXELS, b * c.LOCATION.METERS_2_PIXELS];
                this._bounds = f;
                break;
            case "CIRCLE_INVISIBLE":
            case "CIRCLE_VISIBLE":
                var f = [-e * c.LOCATION.METERS_2_PIXELS, -e * c.LOCATION.METERS_2_PIXELS, e * c.LOCATION.METERS_2_PIXELS, e * c.LOCATION.METERS_2_PIXELS];
                this._bounds = f
            }
        },
        getProjection: function () {
            return this
        },
        getCenterPoint: function () {
            var a = this._bounds;
            this._centerPoint = [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
        },
        getCenter: function () {
            return google.maps.LatLng(this._centerPoint[1] * c.LOCATION.PIXEL_2_DEGREE_E, this._centerPoint[0] * c.LOCATION.PIXEL_2_DEGREE_E)
        },
        setCenter: function (a) {
            this._centerPoint = [a.lng, a.lat], this._capCenterPoint()
        },
        _capCenterPoint: function () {
            var a = this._bounds[2] - this._bounds[0],
                b = this._bounds[3] - this._bounds[1],
                c = $("#map").width(),
                d = $("#map").height(),
                e = Math.max(0, (a - c) / 2),
                f = Math.max(0, (b - d) / 2);
            this._centerPoint[0] > e && (this._centerPoint[0] = e), this._centerPoint[0] < -e && (this._centerPoint[0] = -e), this._centerPoint[1] > f && (this._centerPoint[1] = f), this._centerPoint[1] < -f && (this._centerPoint[1] = -f)
        },
        fromContainerPixelToLatLng: function (a) {},
        fromDivPixelToLatLng: function (a) {
            var b = $("#map").width(),
                d = $("#map").height(),
                e = [-(c.LOCATION.PIXEL_2_DEGREE_E() * a.y), c.LOCATION.PIXEL_2_DEGREE_E() * a.x];
            return new google.maps.LatLng(e[0], e[1])
        },
        fromLatLngToContainerPixel: function (a) {},
        fromLatLngToDivPixel: function (a) {
            var b = $("#map").width(),
                d = $("#map").height(),
                e = [a.lng() * c.LOCATION.DEGREE_E_6_PIXEL(), -a.lat() * c.LOCATION.DEGREE_E_6_PIXEL()];
            e = new google.maps.Point(e[0], e[1]);
            return e
        },
        getWorldWidth: function () {},
        setLocation: function (a) {
            this._center = [a.lng, a.lat]
        },
        setLocationFromLatLng: function (a, b) {
            this._center = [b, a]
        },
        getName: function () {
            return "dungeon"
        },
        drawPoly: function (a, b, c, d, e, f, g) {},
        drawCircle: function (a, b, c, d, e, f, g) {}
    }
}), define("target", ["settings", "resources", "ui/window", "target/map", "target/dungeon"], function (a, b, c, d, e) {
    return {
        isMapTarget: function (a) {
            return a in ["map", "compass", "turf"]
        },
        getTarget: function (a) {
            switch (a) {
            case "map":
            case "compass":
            case "turf":
                return d;
            default:
                return e
            }
        }
    }
}), define("ui/preload", [], function () {
    return ["ui/arrow_big_down.png", "ui/arrow_big_left.png", "ui/arrow_big_right.png", "ui/bottom_rule.png", "ui/bubble_bottom.png", "ui/bubble_bottom_arrow.png", "ui/bubble_middle.png", "ui/bubble_top.png", "ui/chat_left_cap_piece.png", "ui/chat_main_tile_piece.png", "ui/chat_middle_piece_arrow.png", "ui/chat_right_cap_piece.png", "ui/checkbox_tile.png", "ui/container_hud.png", "ui/generic_button_left_cap.png", "ui/generic_button_middle_tile.png", "ui/generic_button_right_cap.png", "ui/gold_bar.png", "ui/green_arrow.png", "ui/green_arrow_right.png", "ui/hover_left_cap.png", "ui/hover_middle_tile.png", "ui/hover_right_cap.png", "ui/inner_shadow_left.png", "ui/inner_shadow_right.png", "ui/loading_small.gif", "ui/messages_bubble_normal.png", "ui/messages_bubble_wide.png", "ui/minimized_tips_icon.png", "ui/play_fullscreen_button.png", "ui/progress_container_bar.png", "ui/progress_health_left_cap.png", "ui/progress_health_middle_tile.png", "ui/progress_health_right_cap.png", "ui/progress_inventory_left_cap.png", "ui/progress_inventory_middle_tile.png", "ui/progress_inventory_right_cap.png", "ui/progress_pages_left_cap.png", "ui/progress_pages_middle_tile.png", "ui/progress_pages_right_cap.png", "ui/refer_friend_button.png", "ui/sounds_button.png", "ui/tip_box.png", "ui/tip_box_center.png", "ui/tip_box_center_tile.png", "ui/tip_box_center_tile_small.png", "ui/tip_box_footer.png", "ui/tip_box_header.png", "ui/tip_box_next.png", "ui/tip_box_prev.png", "ui/tip_box_start.png", "ui/tip_help_button.png", "ui/top_bar.png", "ui/chat/back_sprite.png", "ui/chat/bottom_bar_chat_rooms_left.png", "ui/chat/bottom_bar_chat_rooms_middle.png", "ui/chat/bottom_bar_chat_rooms_right.png", "ui/chat/bottom_bar_left.png", "ui/chat/bottom_bar_middle.png", "ui/chat/bottom_bar_right.png", "ui/chat/bottom_drag_tab.png", "ui/chat/chat_area_left.png", "ui/chat/chat_area_right.png", "ui/chat/chat_area_tile.png", "ui/chat/chat_bar_minimized.png", "ui/chat/checkbox_small_tile.png", "ui/chat/exit_sprite.png", "ui/chat/scroll_bar.png", "ui/chat/scroll_container.png", "ui/chat/scroll_container_bottom.png", "ui/chat/textbox_cap_left.png", "ui/chat/textbox_cap_right.png", "ui/chat/textbox_middle_tile.png", "ui/chat/top_bar_left.png", "ui/chat/top_bar_middle.png", "ui/chat/top_bar_right.png", "ui/dropdown/notification_bar_bottom_cap.png", "ui/dropdown/notification_bar_close_button.png", "ui/dropdown/notification_bar_middle_tile.png", "ui/dropdown/notification_bar_top_cap.png", "ui/newstatus/blue_cap_left.png", "ui/newstatus/blue_cap_right.png", "ui/newstatus/blue_middle_tile.png", "ui/newstatus/character_status_container.png", "ui/newstatus/green_cap_left.png", "ui/newstatus/green_cap_right.png", "ui/newstatus/green_middle_tile.png", "ui/newstatus/red_cap_left.png", "ui/newstatus/red_cap_right.png", "ui/newstatus/red_middle_tile.png", "ui/newstatus/status_shadow.png", "ui/newstatus/top_gold_icon.png", "ui/newstatus/top_inventory_icon.png", "ui/newstatus/yellow_cap_left.png", "ui/newstatus/yellow_cap_right.png", "ui/newstatus/yellow_middle_tile.png", "ui/prompt/bottom_bar.png", "ui/prompt/cancel_button_sprite.png", "ui/prompt/header_bar.png", "ui/prompt/header_bar_tall.png", "ui/prompt/middle_tile.png", "ui/prompt/standard_button_sprite.png", "ui/window/back_button_sprite.png", "ui/window/chat_bottom_bar_left.png", "ui/window/chat_bottom_bar_middle.png", "ui/window/chat_bottom_bar_right.png", "ui/window/chat_textbox_left.png", "ui/window/chat_textbox_middle.png", "ui/window/chat_textbox_right.png", "ui/window/header_cap_left.png", "ui/window/header_cap_right.png", "ui/window/header_center_highlight.png", "ui/window/header_middle_tile.png", "ui/window/main_body_texture.png", "ui/window/main_border_bottom.png", "ui/window/main_border_left.png", "ui/window/main_border_right.png", "ui/window/main_corner_left.png", "ui/window/main_corner_right.png", "ui/window/scroll_bar.png", "ui/window/scroll_container.png", "ui/window/scroll_container_bottom.png", "ui/window/x_button_sprite.png", "ui/window/small/divider_gradient_tile.png", "ui/window/small/main_window_bottom_cap.png", "ui/window/small/main_window_middle_tile.png", "ui/window/small/main_window_top_cap.png"]
}), define("ui", ["settings", "resources", "utils", "state", "target", "ui/interface", "ui/menu", "ui/window", "map_utils", "ui/preload"], function (a, b, c, d, e, f, g, h, i, j) {
    return {
        _tabIndexCounter: 0,
        _lastWindowPageFilter: null,
        _arrowList: [],
        init: function (b) {
            var d = this;
            this.game = b, $("#link-logout").hide(), $("#h-w").show(), $("#version_image").attr("src", a.VERSION_IMAGE), $("#version_num").text(a.VERSION_NUM + " - "), $("#version_string").text('"' + a.VERSION_STRING + '"'), this._contentTabs = $("#c-tabs").tabs(), this.initEvents(), $.translateAll(), a.INSPECT && this._showInspectUi(), g.init(), c.preloadImages(j)
        },
        initEntranceWindows: function () {
            h.initEntranceWindows()
        },
        _showInspectUi: function () {
            var b = this,
                d = $('<div><input type="checkbox" /> Show item ids</div>');
            $("input", d).change(function () {
                var b = $(this).is(":checked");
                c.prefsAddKey("debug_inspect", b), b ? a.ACTIVE.debug_inspect = !0 : a.ACTIVE.debug_inspect = !1
            }), $("#h-links").prepend(d), c.prefsGet("debug_inspect") ? ($("input", d).prop("checked", !0), a.ACTIVE.debug_inspect = !0) : a.ACTIVE.debug_inspect = !1
        },
        onMapReady: function (a) {
            this._onMapReady = a, i.getTarget() && a()
        },
        clearOnMapReady: function () {
            this._onMapReady = null
        },
        getCurrentTarget: function () {
            return this._currentTarget
        },
        getInterface: function () {
            return f
        },
        getMenu: function () {
            return g
        },
        initEvents: function () {
            var b = this;
            $(document).bind("action.map.element.click", function (a, c) {
                var d = [];
                for (var e in c) {
                    var f = c[e];
                    f.getElement().displayString !== "" && f.getElement().actions.length > 0 && d.push(f)
                }
                d.length > 1 ? b.showElementSelectWindow(d) : d.length == 1 && b.showActionWindow(d[0].getElement())
            }), $(document).bind("action.element.select", function (a, c) {
                var e = d.getElementWithId(c);
                !e || e.displayString !== "" && b.showActionWindow(e)
            }), $(document).bind("action.generic", function (a, c, d, e, f) {
                f || (f = function (a) {}), b.game.doActionGeneric(c, d, e, f)
            }), $(document).bind("action.element.doAction", function (a, c, e, f) {
                f || (f = function (a) {});
                var g = i.getMarkerForElement(c);
                if (g && e.range > -1) {
                    var h = d.getYouLocationElement(),
                        j = i.getMarkerForElement(h);
                    if (!j) return;
                    if (google.maps.geometry.spherical.computeDistanceBetween(g.position, j.position) < e.range) {
                        b.game.doAction(c, e, "", f);
                        return
                    }
                    if (!i.isEmulation()) {
                        var k = i.getTarget().convertPoint(g.getPosition()),
                            l = i.getMarkersAt(k),
                            m = !1;
                        for (var n in l) {
                            var o = l[n],
                                p = i.getMarkerForElementId(o.attr("id").split("-")[2]);
                            if (p) {
                                var q = p.getElement(),
                                    r = q.displayLayers[0];
                                r && (m = m || r.blocksMovement)
                            }
                        }
                        if (m) return
                    }
                    var s = google.maps.geometry.spherical.computeDistanceBetween(g.position, j.position);
                    if (s > e.range) {
                        if (h.movementSpeed > 0) {
                            var t = i.moveNearTo(i.loc(h.location), g.position, Math.max(0, e.range - 15));
                            b.game.movePlayerAnalog(h, t, i.getTargetName(), e.range), i.startMoveMarker(j, i.loc(t), function () {
                                b.game.doAction(c, e, "", f)
                            })
                        }
                    } else b.game.doAction(c, e, "", f)
                } else b.game.doAction(c, e, "", f)
            }), $(document).bind("map.tutorial.arrowAdded", function (a, c, d) {
                b.processTutorialArrow(c, d), d.startBouncing()
            }), $(document).bind("map.tutorial.youAdded", function (a, c, d) {
                b.processTutorialArrow(c, d)
            }), $(document).bind("map.tutorial.monkAdded", function (a, c, d) {
                b.processTutorialMonk(c, d)
            }), $("#c-tabs-list li > a").live("mouseup", function (a) {
                if (a.which == 2) {
                    if ($(this).attr("href") === "#map-wrapper") return !1;
                    b.removeTab($(this).attr("href"))
                }
                return !1
            }), $("#link-help").click(function () {
                b.addIframeTab(d.data.clientConfigs.help_url, _("web_tab_guide"), !0);
                return !1
            }), $("#link-support").click(function () {
                h.showSupportWindow();
                return !1
            }), $("#link-logout").click(function () {
                c.clearSession(), location.href = a.LOGOUT_REDIRECT;
                return !1
            }), $("#interface-progress-pages").die("click"), $("#interface-progress-pages").live("click", function () {
                $(document).trigger("action.url.load", ["pkclient://skills"]);
                var a = $(this).data("isreadytolevel");
                if (a) {
                    var c = f.levelUpAreYouSure ? f.levelUpAreYouSure : _("level_up_text", d.data.playerSkillInfo.nextLevelFoodCost);
                    b.showPromptWindow({
                        title: c
                    }, function (a) {
                        if (a) {
                            var c = d.data.yourId,
                                e = d.data.playerSkillInfo.level;
                            b.game.doActionCommand("LEVEL_UP", c, null, e)
                        }
                    })
                }
                return !1
            }), $("#interface-weight").die("click"), $("#interface-weight").live("click", function () {
                $(document).trigger("action.url.load", ["pkclient://items?iface=1"]);
                return !1
            }), $(document).bind("menu.closed", function (a, d) {
                if ( !! b._lastWindowPageFilter) {
                    var e = c.urlParse(b._lastWindowPageFilter);
                    d === e.hostname && $(document).trigger("menu.change", {
                        uRL: "pkclient://map"
                    }), b._lastWindowPageFilter = null
                }
            })
        },
        showRefLink: function (a) {
            $("#h-ref-link").remove(), $("#h-right").prepend('<div id="h-ref-link" style=""><ul><li><a href="#" class="toggler"></a> <ul><li><div>Share this link:</div> <a onclick="return false;" href="http://play.parallelkingdom.com/game/ref?r=' + a + '" style="">http://play.parallelkingdom.com/game/ref?r=' + a + "</a></div>"), $("#h-ref-link a.toggler").click(function () {
                $("#h-ref-link ul li ul").toggle(), $("#h-ref-link ul li ul").is(":visible") ? $("#h-ref-link a.toggler").addClass("selected") : $("#h-ref-link a.toggler").removeClass("selected");
                return !1
            })
        },
        updateExpHud: function (a) {
            f.updateExpHud(a)
        },
        bindKeyboardEvents: function () {
            var a = this
        },
        unbindKeyboardEvents: function () {},
        movePlayerUp: function () {
            var a = d.getYouLocationElement()
        },
        movePlayerDown: function () {
            var a = d.getYouLocationElement()
        },
        movePlayerLeft: function () {
            var a = d.getYouLocationElement()
        },
        movePlayerRight: function () {
            var a = d.getYouLocationElement()
        },
        _toggleSound: function (a) {
            require(["sounds"], function (b) {
                var c = a != null ? a : !$("#h-sounds a").hasClass("muted");
                c ? ($("#h-sounds a").addClass("muted"), $("#h-sounds .hover").text(_("web_sounds_off")), b.mute()) : ($("#h-sounds a").removeClass("muted"), $("#h-sounds .hover").text(_("web_sounds_on")), b.unmute()), a == null && b.saveSettings()
            })
        },
        showSoundControls: function (a) {
            var b = this,
                c = !1,
                d = !1;
            this._toggleSound(a), $("#h-sounds").show(), $("#h-sounds a").click(function () {
                b._toggleSound();
                return !1
            }).mouseenter(function () {
                d && ($("#h-sounds .hover").stop(!0), d = !1), c || (c = !0, $("#h-sounds .hover").animate({
                    opacity: 1
                }, {
                    duration: "fast",
                    complete: function () {
                        c = !1
                    }
                }))
            }).mouseleave(function () {
                c && ($("#h-sounds .hover").stop(!0), c = !1), d || (d = !0, $("#h-sounds .hover").animate({
                    opacity: 0
                }, {
                    duration: "fast",
                    complete: function () {
                        d = !1
                    }
                }))
            })
        },
        moveElement: function (a, b, c) {
            var d = i.getMarkerForElement(a);
            switch (b.animation) {
            case "walk":
                i.startMoveMarker(d, i.loc(b.toLocation), c);
                break;
            default:
                d && d.updatePosition(i.loc(b.toLocation), c)
            }
        },
        setLastWindowPageFilter: function (a) {
            this._lastWindowPageFilter = a
        },
        getLastWindowPageFilter: function () {
            return this._lastWindowPageFilter
        },
        processAuthError: function (a) {
            h.newLoginScreen ? h.showLoginError(a) : (this.game._showLoginScreen(), this.showError(a))
        },
        populateEmbedCreateScreen: function (a) {
            h.populateEmbedCreateScreen
        },
        showBookmarkPopup: function () {
            h.showBookmarkPopup()
        },
        showCreateError: function (a) {
            h.showCreateError(a)
        },
        showCreateErrorQuick: function (a) {
            h.showCreateErrorQuick(a)
        },
        showError: function (a) {
            a.errorMessage && this.showDropDown(a.errorMessage, {
                hideDelay: 5e3
            })
        },
        showNotification: function (a, b) {
            b || (b = "#h"), $(b).dropDown("closeAll").dropDown({
                text: a.displayString,
                image: a.displayLayers,
                showOnBotton: a.showOnBottom,
                canBeClosed: a.canBeClosed,
                hideDelay: a.duration,
                onClose: function () {},
                onClick: function () {
                    $(this).dropDown("closeAll"), self.doActionCommand(a.onClickAction.command)
                }
            })
        },
        showDropDown: function (a, b, c) {
            var d = $(".dropdown .dropdown-text");
            for (var e = 0; e < d.length; e++) {
                var f = d.get(e);
                if ($(f).text() === a) return
            }
            c || (c = "#h"), $(c).dropDown($.extend({}, {
                text: a
            }, b))
        },
        removeElement: function (a, b) {
            i.removeElement(a)
        },
        addElementToMap: function (a, b) {
            i.addElements([a])
        },
        replaceElement: function (a) {
            i.replaceElement(a)
        },
        updateCurrentLocation: function (a) {
            !i || i.setLocation(a)
        },
        loadPageArt: function () {
            $.backstretch("static/images/bg.jpg")
        },
        startLoadingWithMessage: function (a, b) {
            h.showLoadingWindowWithMessage(a, b)
        },
        startLoading: function (a, b, c) {
            h.showLoadingWindow(a, b, c)
        },
        endLoading: function () {
            h.hideLoadingWindow()
        },
        loadingStep: function (a) {
            h.updateLoadingWindow(a)
        },
        loadingTipsReady: function () {
            h.loadingTipsReady()
        },
        showSplash: function (a) {
            a ? ($("#bg-image-wrapper").css("opacity", 0), $("#bg-image-wrapper").show(), $("#bg-image-wrapper").animate({
                opacity: 1
            }, 200)) : ($("#bg-image-wrapper").css("opacity", 1), $("#bg-image-wrapper").show())
        },
        hideSplash: function () {
            $("#bg-image-wrapper").hide(), $("#bg-image-wrapper").data("isDead", !0), $(window).unbind("resize.backstretch")
        },
        updateLoadingProgress: function (a, b, c) {
            h.updateLoadingWindow(a, b, c)
        },
        setCanCreate: function (a) {
            h.setCanCreate(a)
        },
        showCreateLoginWindow: function (a, b) {
            h.showCreateLoginWindow(a, b)
        },
        showWebCreateWindow: function () {
            h.showWebCreateScreen()
        },
        showFbCreateWindow: function () {
            h.showFacebookCreateScreen()
        },
        showGeneratedLocatingYouWindow: function (a) {
            h.showGeneratedLocatingYouScreen(a)
        },
        showKongCreateWindow: function () {
            h.showKongCreateScreen()
        },
        showNewLoginWindow: function () {
            h.showNewLoginScreen()
        },
        hideLoginWindow: function () {
            h.hideNewLoginScreen()
        },
        showKongLandingScreen: function () {
            h.showKongLandingScreen()
        },
        hideKongLandingScreen: function () {
            h.hideKongLandingScreen()
        },
        hideEntranceWindows: function () {
            h.hideEntranceWindows()
        },
        showElementSelectWindow: function (a) {
            h.showElementSelectWindow(a)
        },
        showActionWindow: function (a) {
            h.showActionWindowForElement(a)
        },
        hideActionWindow: function () {
            h.hideActionWindow()
        },
        showPromptWindow: function (a, b) {
            h.showPromptWindow(a, b)
        },
        hidePromptWindow: function () {
            h.hidePromptWindow()
        },
        showMultiPromptWindow: function (a, b, c, d, e) {
            h.showMultiPromptWindow(a, b, c, d, e)
        },
        hideMultiPromptWindow: function () {
            h.hideMultiPromptWindow()
        },
        showIntPromptWindow: function (a, b, c) {
            h.showIntPromptWindow(a, b, c)
        },
        hideIntPromptWindow: function () {
            h.hideIntPromptWindow()
        },
        showStringPromptWindow: function (a, b, c, d) {
            h.showStringPromptWindow(a, b, c, d)
        },
        hideStringPromptWindow: function () {
            h.hideStringPromptWindow()
        },
        showSellPrompts: function (a, b, c) {
            h.showSellPrompts(a, b, c)
        },
        hideSellPrompts: function () {
            h.hideSellPrompts()
        },
        processBuyScreenInfo: function (a) {
            h.processBuyScreenInfo(a)
        },
        processBuyScreenItems: function (a) {
            h.processBuyScreenItems(a)
        },
        processAddBuyScreenItem: function (a) {
            h.processAddBuyScreenItem(a)
        },
        processRemoveBuyScreenItem: function (a) {
            h.processRemoveBuyScreenItem(a)
        },
        processUpdateTradePostCut: function (a) {
            h.processUpdateTradePostCut(a)
        },
        showBuyInfoWindow: function () {
            h.showBuyInfoWindow()
        },
        showItemsWindow: function () {
            h.showItemsWindow()
        },
        showCreateWindow: function (a) {
            h.showCreateWindow(a)
        },
        loadInterface: function () {
            var a = this;
            $(document).bind("map.elements.loaded", function (b, c) {
                a._onMapReady && a._onMapReady(c)
            }), g.restoreSizes(this.game.userPrefs.window_stats), f.show(), this.processLocationData(d.data.locationData), g.load(), $(".ui-widget-overlay").live("click", function () {
                $(".ui-dialog-content:not(:has(.window-prompt-buttons,.window-modal)):has(.window-prompt-content)").dialog("destroy").remove();
                return !1
            })
        },
        processLocationData: function (a) {
            var b = this;
            i.removeAllTutorialBubbles(), $(".arrow-down").remove(), $(".tutorial-bubble").remove(), i.removeAllElements();
            var c = e.getTarget(a.displayLocation.target);
            i.setCurrentTarget(c, a.displayLocation.target), a.displayLocation.target === "compass" ? c.init(this.game, {
                zoomLevel: parseInt(d.data.clientConfigs.compass_zoom_level),
                canZoom: !0
            }) : a.displayLocation.target === "map" ? c.init(this.game, {
                zoomLevel: parseInt(d.data.clientConfigs.map_zoom_level),
                canZoom: !1
            }) : a.displayLocation.target === "turf" ? c.init(this.game, {
                zoomLevel: parseInt(d.data.clientConfigs.turf_zoom_level),
                canZoom: !1
            }) : c.init(this.game, {
                zoomLevel: 16,
                canZoom: !1
            }), c.getName() === "dungeon" ? this.initDungeonMap(c, a) : this.initRegularMap(c, a)
        },
        processBoundsUpdate: function (a) {
            var b = i.getTarget();
            b.getName() === "dungeon" && b.setSightBounds(a.sightBoundType, a.sightLatMax, a.sightLngMax, a.sightMaxRadius), i.setSightBounds(a.sightBoundType, a.sightRadius, a.sightLatMax, a.sightLngMax)
        },
        initRegularMap: function (a, b) {
            var c = this.game.userPrefs;
            c.map_enable_sat ? i.setMapSatelliteMode() : i.setMapRoadmapMode(), a.setCenter(b.displayLocation), $(window).unbind("resize"), i.setLocationFromLatLng(b.displayLocation.lat, b.displayLocation.lng), i.removeAllElements(), i.setCenterLocation(b.centerLocation), i.setDisplayLocation(b.displayLocation), i.setSightBounds(b.sightBoundType, b.sightRadius, b.sightLatMax, b.sightLngMax), i.addElements(b.elements), i.drawVisibleCircle(), i.drawWaypoint()
        },
        initDungeonMap: function (a, c) {
            var d = this,
                e = c.displayLocation.target.split("|");
            $("#map").empty().append('<div id="map-target-wrapper"><div id="map-target"><div id="map-drag"></div></div></div>'), b.requireOwnedImages([e[0]], c.displayLocation.target, function () {
                a.setSightBounds(c.sightBoundType, c.sightLatMax, c.sightLngMax, c.sightMaxRadius), a.setCenter(c.displayLocation), a.initWithTokens(e), $(window).resize(function () {
                    $("#map-drag").css({
                        left: ($(this).width() - $("#map-drag").width()) / 2 + "px",
                        top: ($(this).height() - $("#map-drag").height()) / 2 + "px"
                    })
                }), i.setLocationFromLatLng(c.displayLocation.lat, c.displayLocation.lng), i.setCenterLocation(c.centerLocation), i.setDisplayLocation(c.displayLocation), i.setSightBounds(c.sightBoundType, c.sightRadius, c.sightLatMax, c.sightLngMax), i.addElements(c.elements), i.drawVisibleCircle(), i.drawWaypoint()
            })
        },
        processDungeonMap: function (a) {},
        updateMarkerForElement: function (a) {
            var b = i.getMarkerForElement(a);
            b && b.update()
        },
        updateDisplayLayersForElement: function (a, b) {
            var c = i.getMarkerForElement(a);
            c ? (c.updateDisplayLayers(b), i.removePolysForElement(a), i.addPolysForElement(a), c.update()) : i.queueDisplayLayerUpdate(a, b)
        },
        showTimerForElement: function (a, b) {
            var c = i.getMarkerForElement(a);
            c && (c.updateTimer(b.timeLeft, b.timeTotal), c.update())
        },
        showHpBubble: function (a, b) {
            var c = i.getMarkerForElement(a);
            !c || i.startAnimateBubble(c, {
                amount: b.hpChange,
                upClassName: "bubble-hp-up",
                downClassName: "bubble-hp-down",
                type: "hp"
            })
        },
        showGoldBubble: function (a, b) {
            var c = i.getMarkerForElement(a);
            !c || i.startAnimateBubble(c, {
                amount: b.goldChange,
                upClassName: "bubble-gold",
                downClassName: "bubble-gold",
                type: "gold"
            })
        },
        showExpBubble: function (a, b) {
            var c = i.getMarkerForElement(a);
            !c || i.startAnimateBubble(c, {
                amount: b.expChange,
                upClassName: "bubble-exp",
                downClassName: "bubble-exp"
            })
        },
        updateHp: function (a, b) {
            var c = i.getMarkerForElement(a);
            c && (a.hp = b.hpFinal, a.hpTotal = b.hpMax, c.updateHp()), this.showHpBubble(a, b)
        },
        updateGold: function (a, b) {
            this.showGoldBubble(a, b)
        },
        updateExp: function (a, b) {
            this.showExpBubble(a, b)
        },
        addLayerToElement: function (a, b, c) {
            var d = i.getMarkerForElement(a);
            !d || (d.addImageLayer(b, c), d.draw())
        },
        showInfo: function (a, b) {
            if (b.uRL.length > 0) {
                var c = b.displayString + " - " + a.displayString;
                this.addIframeTab(b.uRL, c, !0)
            } else this.addTab("#info-" + a.elementId, b.displayString, !0)
        },
        addTab: function (a, b, c) {
            var d = this;
            if ($('#c-tabs-list a[href="' + a + '"]').length > 0) this._contentTabs.tabs("select", a);
            else {
                this._contentTabs.tabs("add", a, b);
                var e = $('<a href="#" class="tab-button ui-icon ui-icon-close"></a>');
                e.click(function () {
                    d.removeTab(a);
                    return !1
                }), e.appendTo('a[href="' + a + '"]', "#c-tabs-list"), this._toggleTabsDisplay(), c && this._contentTabs.tabs("select", a)
            }
        },
        addIframeTab: function (a, b, c) {
            var e = this,
                f = a;
            a.toLowerCase().indexOf("http://pk5.parallelkingdom.com/mobile/") > -1 ? a = "http://" + document.domain + "/pk5/Mobile/" + a.substr("http://pk5.parallelkingdom.com/mobile/".length) : a.toLowerCase().indexOf("http://pk4.parallelkingdom.com/mobile/") > -1 && (a = "http://" + document.domain + "/pk4/Mobile/" + a.substr("http://pk4.parallelkingdom.com/mobile/".length)), a.toLowerCase().indexOf("sessionid") < 0 && (a.indexOf("?") >= 0 ? a += "&viewCharID=" + d.data.yourId + "&sessionID=" + d.data.sessionId : a += "?viewCharID=" + d.data.yourId + "&sessionID=" + d.data.sessionId), g.showIframeMenu(f, a, b);
            return a
        },
        removeTab: function (a) {
            this._contentTabs.tabs("remove", a), this._toggleTabsDisplay()
        },
        _toggleTabsDisplay: function () {
            this._contentTabs.tabs("length") > 1 ? $("> ul", this._contentTabs).show() : $("> ul", this._contentTabs).hide()
        },
        hideQuickCreateWindow: function () {
            h.hideQuickCreateWindow()
        },
        showActionBarForTab: function (a, b, d) {
            var e = this;
            if (!($(".wv-action-bar", a).size() > 0)) {
                var f = $('<div class="wv-action-bar clearfix"></div>');
                for (var g in b) {
                    var h = b[g];
                    h.displayString = c.UI.parseDisplayString(h.displayString), $(f).append('<a href="#" data-actioncommand="' + h.command + '" class="button">' + h.displayString + "</a>")
                }
                $(".info-page-wrapper", a).prepend(f), $("a.button", f).click(function () {
                    var a = $(this).data("actioncommand"),
                        c = null;
                    for (var f in b) {
                        var g = b[f];
                        g.command === a && (c = g)
                    }
                    if ( !! c) {
                        if (c.uRL !== "") {
                            $(document).trigger("action.url.load", [c.uRL, null]);
                            return !1
                        }
                        e.game.doAction({
                            elementId: d
                        }, c);
                        return !1
                    }
                })
            }
        },
        showActionBarForWindow: function (a, b, d) {
            var e = this,
                f = $('<div class="wv-action-bar clearfix"></div>');
            for (var g in b) {
                var h = b[g];
                h.displayString = c.UI.parseDisplayString(h.displayString), $(f).append('<a href="#" data-actioncommand="' + h.command + '" class="button">' + h.displayString + "</a>")
            }
            if ($(".wv-action-bar", a).size() == 0) {
                var i = $("iframe", a);
                i.height(i.height() - 40), $(".tab-expand-content", a).prepend(f)
            } else $(".wv-action-bar", a).remove(), $(".tab-expand-content", a).prepend(f);
            $("a.button", f).click(function () {
                var a = $(this).data("actioncommand"),
                    c = null;
                for (var f in b) {
                    var g = b[f];
                    g.command === a && (c = g)
                }
                if ( !! c) {
                    if (c.uRL !== "") {
                        $(document).trigger("action.url.load", [c.uRL, null]);
                        return !1
                    }
                    e.game.doAction({
                        elementId: d
                    }, c);
                    return !1
                }
            })
        },
        switchToMenu: function (a) {
            var b = this;
            switch (a) {
            case "skills":
                break;
            case "items":
                break;
            case "estates":
                break;
            case "create":
                break;
            case "map":
                break;
            case "buyitems":
                b.showBuyInfoWindow();
                break;
            default:
            }
        },
        playerDied: function () {},
        showAreYouSureWindow: function (a, b) {
            var c = [];
            c.push({
                text: _("yes"),
                callback: function () {
                    b();
                    return !1
                }
            }), c.push({
                text: _("no"),
                callback: function () {
                    return !1
                }
            }), h.showButtonPrompt(a, c)
        },
        showBetaSwitchWindow: function (a) {
            h.showButtonPrompt("Which server?", a)
        },
        showNewCommentWindow: function (a) {
            h.showTextPromptWindow(_("new_comment_title"), parseInt(d.data.clientConfigs.message_length), a)
        },
        showNewTopicWindow: function (a, b) {
            h.showSendToTextPromptWindow(_("new_topic_title"), a, parseInt(d.data.clientConfigs.message_length), b)
        },
        processTutorialArrow: function (a, b) {
            var c = this.game.getTutorialNotifications(),
                d = [];
            if (c.length > 0) {
                var e = c[0];
                this.processNotification(e), this.game._tutorialNotifications.shift()
            }
            console.log(this.game._tutorialNotifications.length + " TUTORIAL MESSAGES QUEUED"), console.log(this.game._tutorialNotifications)
        },
        processTutorialMonk: function (a, b) {
            var c = this.game.getTutorialNotifications(),
                d = [];
            if (c.length > 0) {
                var e = c[0];
                this.processNotification(e)
            }
            console.log(this.game._tutorialNotifications.length + " TUTORIAL MESSAGES QUEUED"), console.log(this.game._tutorialNotifications)
        },
        processNotification: function (a) {
            if (!a) return !1;
            var d = this,
                e = null;
            if (a.pageFilter !== "") {
                var f = c.urlParse(a.pageFilter);
                e = f.hostname, e === "map" && (e = null)
            } else {
                var g = this.getLastWindowPageFilter();
                g && (e = c.urlParse(this.getLastWindowPageFilter()).hostname)
            }
            if (e === null) {
                var o = i.getMarkerForElementId("arrow");
                o || (o = i.getMarkerForElementId("you") || i.getMarkerForElementId("You"));
                if (o || this._tutorialPlayerDidDie === !0) {
                    if (this._tutorialPlayerDidDie) {
                        o = i.getMarkerForElementId("dragon");
                        if (!o) return !1;
                        this._tutorialPlayerDidDie = !1
                    }
                    var n = o.getElement();
                    n && i.centerOnMarker(n.elementId);
                    if (a.displayLayers.length > 0) for (var l in a.displayLayers) {
                        var m = a.displayLayers[l];
                        m.url = b.resolveDynamicImage(b.getImageFromId(m.info))
                    }
                    console.log("Removing all tutorial bubbles"), $(".tutorial-window-notification").remove(), i.removeAllTutorialBubbles(), $(".tutorial-bubble").remove(), a.fields ? o.addFormTutorialBubble({
                        displayLayers: a.displayLayers,
                        text: a.displayString,
                        fields: a.fields,
                        onFormSubmitted: a.onFormSubmitted
                    }) : o.addTutorialBubble({
                        displayLayers: a.displayLayers,
                        text: a.displayString,
                        onClick: function () {
                            require(["tut"], function (b) {
                                if (a.duration == -2 && b.isActive) return !1;
                                o.deleteTutorialBubble(), d.game.doActionCommand(a.onClickAction.command), a.onClickAction.uRL !== "" && d.game.processUrl(a.onClickAction.uRL, null, {})
                            })
                        }
                    });
                    return !0
                }
                return !1
            }
            a.pageFilter !== "" && (this._lastWindowPageFilter = a.pageFilter);
            var h = this.getMenu(),
                j = h.getDialogForMenuName(e);
            $(".tutorial-window-notification").remove(), i.removeAllTutorialBubbles(), $(".tutorial-bubble").remove();
            var k = null;
            if (a.displayLayers.length > 0) {
                for (var l in a.displayLayers) {
                    var m = a.displayLayers[l];
                    m.url = b.resolveDynamicImage(b.getImageFromId(m.info))
                }
                k = $("#_template-display-layers").tmpl(a.displayLayers)
            }
            k = k ? k.html() : null;
            var n = null;
            a.displayLayers.length > 0 ? n = $('<div class="tutorial-window-notification"><div class="dropdown-images">' + k + '</div><div class="dropdown-text" style="margin-left: 64px">' + a.displayString + "</div></div>") : n = $('<div class="tutorial-window-notification"><div class="dropdown-text">' + a.displayString + "</div></div>"), $(".overview", j).prepend(n)
        },
        tutorialPlayerDied: function () {
            this._tutorialPlayerDidDie = !0
        },
        processChat: function (a, b) {
            var c = i.getMarkerForElementId(a.chatId);
            c && a.roomId === "MAP" && c.addChatBubble({
                text: a.text,
                roomId: a.roomId,
                displayLayers: b.displayLayers
            })
        },
        processWaypointAdd: function (a) {
            i.processWaypointAdd(a)
        },
        processElementAttention: function (a) {
            i.processElementAttention(a)
        },
        setMapSatelliteMode: function () {
            i.setMapSatelliteMode()
        },
        setMapRoadmapMode: function () {
            i.setMapRoadmapMode()
        },
        showArrow: function (a) {
            var b = $('<div class="arrow-down"></div>'),
                c = $(a).width() / 2 - 25;
            b.css({
                position: "absolute",
                left: c + "px",
                top: "-60px",
                display: "block"
            }), b.appendTo(a), this._arrowBounceTimeout = setTimeout(function d() {
                b.animate({
                    top: "-=20px"
                }, 600, "linear").animate({
                    top: "+=20px"
                }, 600, "linear", function () {
                    self._bounceTimeout = setTimeout(d, 10)
                })
            }, 10)
        },
        showArrowOnItem: function (a, b) {
            var c = g.getTargetInMenu(a, b),
                d = $('<div class="arrow-left"></div>'),
                e = $(c).height() / 2 - 25;
            d.css({
                position: "absolute",
                right: "0px",
                top: e + "px",
                display: "block"
            }), d.appendTo(c), this._arrowBounceTimeout = setTimeout(function f() {
                d.animate({
                    right: "+=20px"
                }, 600, "linear").animate({
                    right: "-=20px"
                }, 600, "linear", function () {
                    self._bounceTimeout = setTimeout(f, 10)
                })
            }, 10)
        },
        removeUiArrows: function () {
            $(".arrow-down").remove(), clearTimeout(this._arrowBounceTimeout), this._arrowBounceTimeout = null
        }
    }
}), define("sounds.data", ["settings", "ab", "stats", "state"], function (a, b, c, d) {
    var e = 4e3;
    return {
        _soundMetadata: {},
        _ambientSoundOptions: function (a, b) {
            return {
                onload: function () {
                    this.onposition(this.duration - e, function () {
                        a.crossFade(this.sID, a.getRandom(b))
                    })
                },
                onplay: function () {
                    a._currentAmbientSoundID = this.sID
                },
                onstop: function () {
                    this.sID == a._currentAmbientSoundID && (a._currentAmbientSoundID = "")
                }
            }
        },
        _ambientMusicOptions: function (a) {
            return {
                onload: function () {
                    this.onposition(this.duration - e, function () {
                        a.fadeOut(this)
                    })
                },
                onplay: function () {
                    a._currentAmbientMusicID = this.sID
                },
                onstop: function () {
                    this.sID == a._currentAmbientMusicID && (a._currentAmbientMusicID = "")
                }
            }
        },
        _loopOptions: function (a) {
            return {
                onfinish: function () {
                    a.play(this)
                }
            }
        },
        _splashOptions: function (a) {
            return {
                volume: 50,
                onload: function () {
                    a.play(this)
                },
                onfinish: function () {
                    a.play(this)
                }
            }
        },
        loadOrder: {
            splash: {
                SPLASH: !0
            },
            primary: {
                AMB_GEN_LAND: !0,
                AMB_WATER: !0
            },
            secondary: {
                CRITICAL_CONDITION: !0,
                ACTION_CLICK: !0,
                ACTION_CANCEL: !0,
                MENU_CLICK: !0,
                MENU_OPEN: !0,
                MENU_CLOSE: !0,
                MENU_ITEMS_OPEN: !0,
                MENU_ITEMS_CLOSE: !0,
                MENU_CHAT_OPEN: !0,
                MENU_CHAT_CLOSE: !0,
                NOTIF: !0
            }
        },
        generate: function (a) {
            var b = {
                AMB_GEN_LAND: {
                    location: "Ambient/GenLand.mp3",
                    variations: 3,
                    channel: "ambientSound",
                    maxVolume: 200,
                    options: this._ambientSoundOptions(a, "AMB_GEN_LAND")
                },
                AMB_WATER: {
                    location: "Ambient/Water.mp3",
                    variations: 3,
                    channel: "ambientSound",
                    maxVolume: 50,
                    options: this._ambientSoundOptions(a, "AMB_WATER")
                },
                CRITICAL_CONDITION: {
                    location: "SoundEffects/LowHealthLoop.mp3",
                    maxVolume: 400,
                    priority: 100,
                    options: this._loopOptions(a)
                },
                ACTION_CLICK: {
                    location: "UI/ActionWindClick.mp3",
                    priority: 90
                },
                ACTION_CANCEL: {
                    location: "UI/ActionWindClick.mp3",
                    priority: 90
                },
                MENU_CLICK: {
                    location: "UI/ActionWindClick.mp3",
                    priority: 90
                },
                MENU_OPEN: {
                    location: "UI/GenMenuOpen.mp3",
                    priority: 90
                },
                MENU_CLOSE: {
                    location: "UI/GenMenuOpen.mp3",
                    priority: 10
                },
                MENU_ITEMS_OPEN: {
                    location: "UI/BackpackOpenShort.mp3",
                    priority: 10
                },
                MENU_ITEMS_CLOSE: {
                    location: "UI/BackpackCloseShort.mp3",
                    priority: 10
                },
                MENU_CHAT_OPEN: {
                    location: "UI/ChatWindOpen.mp3",
                    priority: 90
                },
                MENU_CHAT_CLOSE: {
                    location: "UI/ChatWindClose.mp3",
                    priority: 90
                },
                NOTIF: {
                    location: "UI/SystemNotification.mp3",
                    priority: 90
                },
                SPLASH: {
                    location: "theme_joe.mp3",
                    options: this._splashOptions(a)
                }
            };
            return b
        },
        _addMonsterSounds: function (a, b) {
            var c = b.toUpperCase(),
                d = b.replace(/_/g, "");
            a[c + "_ATTACK"] = {
                location: "Entities/" + d + "/" + d + "Attack.mp3",
                variations: 5,
                priority: 50
            }, a[c + "_DEATH"] = {
                location: "Entities/" + d + "/" + d + "Death.mp3",
                priority: 60
            }
        }
    }
}), define("sounds", ["settings", "ab", "stats", "state", "sounds.data"], function (a, b, c, d, e) {
    var f = {
        water: "AMB_WATER",
        land: "AMB_GEN_LAND"
    },
        g = {
            prompt: "ACTION_CLICK",
            action: "ACTION_CLICK",
            element: "ACTION_CLICK",
            cancel: "ACTION_CANCEL"
        },
        h = {},
        i = {},
        j = .99,
        k = 1e4,
        l = 6e3,
        m = 4e3,
        n = {
            _initChannels: function () {
                this._channels = {
                    main: {
                        fadeFunction: this.instantCrossFade,
                        slots: 5,
                        sounds: []
                    },
                    ambientMusic: {
                        fadeFunction: this.crossFade,
                        slots: 1,
                        sounds: []
                    },
                    ambientSound: {
                        fadeFunction: this.crossFade,
                        slots: 1,
                        sounds: []
                    }
                }
            },
            _removeFromChannel: function (a, b) {
                a = this._soundcheck(a);
                if ( !! a) {
                    b = this._channels[b || "main"];
                    var c = [];
                    for (var d = 0; d < b.sounds.length; d++) b.sounds[d] != a.sID && c.push(b.sounds[d]);
                    b.sounds = c
                }
            },
            _soundMetadata: {},
            fromClickType: function (a) {
                return g[a]
            },
            fromAreaType: function (a) {
                return f[a]
            },
            fromID: function (a) {
                return i[a]
            },
            _sounds: {},
            _soundcheck: function (a) {
                var b = null;
                typeof a == "string" ? b = this._sounds[a] : b = a;
                if (!b) return null;
                if (!this.enabled(b)) {
                    console.log("Soundcheck: sound not enabled", typeof a == "string" ? '"' + a + '"' : a);
                    return null
                }
                return b
            },
            _enabledSound: !1,
            _enabledTests: {},
            enabled: function (a) {
                var b = this._soundMetadata[this.fromID(a && a.sID)].tests;
                if (!b) return !0;
                for (var c = 0; c < b.length; c++) if (this._enabledTests[b[c]]) return !0;
                return !1
            },
            tryEnableTest: function (a) {
                if ( !! a) {
                    if (b.getTestValue(a) !== "on") return;
                    this.enableTest(a)
                }
            },
            enableTest: function (a) { !! this._enabledSound, this._enabledTests[a] = !0
            },
            muted: !1,
            init: function () {
                var a = this;
                this._enabledSound = !0, this._initChannels(), this.loadSettings();
                var b = this.muted;
                require(["ui"], function (a) {
                    a.showSoundControls(b)
                }), soundManager.onready(function () {
                    console.log("Sound manager initialized."), a._soundMetadata = e.generate(a), a.loadSounds("splash")
                })
            },
            startGame: function () {
                var a = this;
                this.tryEnableTest("sound_ui"), this.tryEnableTest("sound_gameplay"), this.tryEnableTest("sound_music"), this.tryEnableTest("sound_attacks"), this.fadeSplash(), this.loadSounds("primary"), setTimeout(function () {
                    a.loadSounds("secondary")
                }, 200), setTimeout(function () {
                    a.loadSounds("all")
                }, 1e3), this._heartBeat()
            },
            loadSounds: function (a) {
                for (var b in a == "all" ? this._soundMetadata : e.loadOrder[a]) this.loadSound(b)
            },
            loadSound: function (a) {
                var b = this._soundMetadata[a];
                if (!b.loaded) {
                    numVariations = b.variations || 1;
                    for (var c = 0; c < numVariations; c++) this.loadSoundVariation(a, b, c)
                }
            },
            loadSoundVariation: function (a, b, c) {
                var d = this,
                    e = /(.+)(\.[^\.]+)$/.exec(b.location),
                    f = e[1],
                    g = e[2],
                    h = b.variations ? c + 1 : "",
                    j = a + h,
                    k = b.options && b.options.onfinish,
                    l = function () {
                        d._removeFromChannel(this, b.channel), typeof k == "function" && k.call(this)
                    },
                    m = b.options && b.options.onstop,
                    n = function () {
                        d._removeFromChannel(this, b.channel), typeof m == "function" && m.call(this)
                    },
                    o = $.extend({
                        id: j,
                        url: "/static/sounds/" + f + h + g,
                        volume: b.maxVolume || 100
                    }, b.options, {
                        onfinish: l,
                        onstop: n
                    });
                this._sounds[j] = soundManager.createSound(o).load(), this._soundMetadata[a].loaded = !0, i[j] = a
            },
            play: function (a, b) {
                a = this._soundcheck(a);
                if ( !! a) {
                    var c = this._soundMetadata[this.fromID(a.sID)],
                        d = this._channels[c && c.channel || "main"];
                    b || a.setVolume(c.maxVolume || 100);
                    if (d.sounds.length < d.slots) d.sounds.push(a.sID), a.play();
                    else for (var e = 0; e < d.sounds.length; e++) {
                        var f = this._soundMetadata[this.fromID(d.sounds[e])];
                        if (+f.priority <= +c.priority) {
                            typeof fadeFunction == "function" ? d.fadeFunction.call(this, d.sounds[e], a) : this.crossFade(d.sounds[e], a), d.sounds.push(a.sID);
                            break
                        }
                    }
                }
            },
            playRandom: function (a) {
                this.play(this.getRandom(a))
            },
            getRandom: function (a) {
                var b = a,
                    c = [];
                if (this._soundMetadata[a] && this._soundMetadata[a].variations) {
                    var d = this._soundMetadata[a].variations;
                    for (var e = 0; e < d; e++) c[e] = e + 1;
                    while (c.length > 0) {
                        var f = Math.floor(Math.random() * c.length),
                            g = c[f];
                        b = this._soundcheck(a + g);
                        if (!b || !b.playState) return b;
                        b = null, c = c.slice(0, f).concat(c.slice(f + 1))
                    }
                }
                return this._soundcheck(b)
            },
            stop: function (a) {
                a = this._soundcheck(a);
                !a || a.stop()
            },
            isPlaying: function (a) {
                a = this._soundcheck(a);
                if ( !! a) return a.playState
            },
            fade: function (a, b, c, d) {
                a = this._soundcheck(a);
                if ( !! a) {
                    var e = this._soundMetadata[this.fromID(a.sID)].maxVolume || 100;
                    if (b == "max" || b > e) b = e;
                    if (c == "max" || c > e) c = e;
                    var f = (d && d.step || e / 100) * (b < c ? 1 : -1),
                        g = d && d.tstep || 100,
                        i = d && d.onfinish ||
                    function () {};
                    a.setVolume(b), a.playState || a.play();
                    if (b == c) {
                        i();
                        return
                    }
                    clearTimeout(h[a.sID]);
                    var j = function () {
                            var d = a.volume;
                            b < c && d >= c || b > c && d <= c ? i() : (a.setVolume(Math.max(Math.min(d + f, e), 0)), h[a.sID] = setTimeout(j, g))
                        };
                    j()
                }
            },
            fadeIn: function (a) {
                a = this._soundcheck(a);
                !a || this.fade(a, 0, "max")
            },
            fadeOut: function (a) {
                a = this._soundcheck(a);
                if ( !! a) {
                    var b = this;
                    a.playState && this.fade(a, a.volume, 0, {
                        onfinish: function () {
                            b.stop(a)
                        }
                    })
                }
            },
            crossFade: function (a, b) {
                a = this._soundcheck(a), b = this._soundcheck(b), a && this.fadeOut(a), b && this.fadeIn(b)
            },
            instantCrossFade: function (a, b) {
                this.stop(a), this.play(b)
            },
            mute: function (a) {
                if (a) {
                    a = this._soundcheck(a);
                    if (!a) return;
                    a.mute()
                } else this.muted = !0, soundManager.mute()
            },
            unmute: function (a) {
                if (a) {
                    a = this._soundcheck(a);
                    if (!a) return;
                    a.unmute()
                } else this.muted = !1, soundManager.unmute()
            },
            fadeSplash: function () {
                sound = this._soundcheck("SPLASH");
                !sound || (sound.position < l - 100 ? sound.onposition(l, function () {
                    this.fadeOut(sound)
                }, this) : this.fadeOut(sound))
            },
            saveSettings: function () {
                var a = {
                    SettingName: "sound",
                    SettingValue: this.muted ? "off" : "on"
                };
                c.setting(a)
            },
            loadSettings: function () {
                this.muted = pk.state.userSettings.sound == "off"
            },
            _heartBeatTimeOut: null,
            _heartBeat: function () {
                if ( !! this._enabledSound) {
                    var a = this,
                        b = 0,
                        c = function () {
                            a.checkForCriticalCondition();
                            var e = d.getPlayerAreaType();
                            e != a._currentAmbientArea && a.ambientAreaChange(e);
                            var f = a.ambientMusicChance(b);
                            f ? (a._currentAmbientMusicID = f, a.play(f), b = 0) : b++, a._heartBeatTimeOut = setTimeout(c, k)
                        };
                    this._heartBeatTimeOut = setTimeout(c, 1500), firstLoop = !1
                }
            },
            _currentAmbientMusicID: "",
            ambientMusicChance: function (a) {
                if (this.isPlaying(this._currentAmbientMusicID)) return "";
                var b = a / (a + 1),
                    c = Math.random();
                if (c < j * b) {
                    var d = "",
                        e = Math.floor(Math.random() * 100 + 1) - 1;
                    return d
                }
                return ""
            },
            _currentAmbientArea: "",
            _currentAmbientSoundID: "",
            ambientAreaChange: function (a) {
                var b = this.getRandom(this.fromAreaType(a));
                this.crossFade(this._currentAmbientSoundID, b), this._currentAmbientArea = a, this._currentAmbientSoundID = b
            },
            _preMsgHandlers: null,
            preProcessGameMessage: function (a, b) {
                this._msgHandlers || (this._msgHandlers = {
                    MapElementRemoved: this._processElementRemoved,
                    MapElementAttackResult: this._processElementAttackResult
                });
                var c = this._msgHandlers[a];
                c && c.call(this, b)
            },
            _postMsgHandlers: null,
            postProcessGameMessage: function (a, b) {
                this._postMsgHandlers || (this._postMsgHandlers = {
                    MapElementHPChange: this._processElementHPChange,
                    MapElementDisplayLayersChange: this._processElementDisplayLayerChange
                });
                var c = this._postMsgHandlers[a];
                c && c.call(this, b)
            },
            _processElementRemoved: function (a) {
                a.animation == "death" && (monster = a.elementId && a.elementId.match(/Mon/) && d.getElementWithId(a.elementId), monType = monster && monster.displayString && monster.displayString.replace(/^(Timid|Strong|Vicious|Epic) (.*)$/, "$2").replace(/ /g, "_"), monType && this.play(monType.toUpperCase() + "_DEATH"))
            },
            _processElementAttackResult: function (a) {
                var b = d.getElementWithId(a.attackerId),
                    c = b && b.displayString && b.displayString.replace(/^(Timid|Strong|Vicious|Epic) (.*)$/, "$2").replace(/ /g, "_");
                if (c) {
                    var e = this.getRandom(c.toUpperCase() + "_ATTACK");
                    this.play(e)
                }
            },
            _processElementHPChange_isCritical: !1,
            _processElementHPChange: function (a) {
                a.elementId === d.data.yourId && (a.hpChange < -30 && this.play("CRITICAL_HIT"), this.checkForCriticalCondition(!0))
            },
            checkForCriticalCondition: function (a) {
                0 < d.data.hp && d.data.hp < 30 ? d.data.isCritical || (this.play("CRITICAL_CONDITION"), d.data.isCritical = !0) : a && d.data.hp == 0 ? (this.stop("CRITICAL_CONDITION"), this.play("DEATH"), d.data.isCritical = !1) : d.data.isCritical && (this.stop("CRITICAL_CONDITION"), d.data.isCritical = !1)
            },
            _processElementDisplayLayerChange: function (a) {
                if (a.elementId == d.data.yourId) {
                    var b = d.getPlayerAreaType();
                    this._currentAmbientArea != b && this.ambientAreaChange(b)
                }
            },
            _actionHandlers: null,
            processDoAction: function (a, b) {
                this._actionHandlers || (this._actionHandlers = {
                    CHOP_DOWN: this._processDoActionGeneric
                });
                var c = this._actionHandlers[a.command];
                c && c.call(this, a)
            },
            _processDoActionGeneric: function (a) {
                this.playRandom(a.command)
            }
        };
    return n
}), define("ui/menu/menu_chat", ["settings", "resources", "utils", "map_utils", "net", "state", "ui/window"], function (a, b, c, d, e, f, g) {
    return {
        _isInited: !1,
        chat: [],
        _roomMap: {},
        handlesOwnSound: !0,
        init: function (a, b, c, d) {
            this.parentDiv = a, this.bottomDiv = b, this.scrollDiv = c, this._isInited = !0, this._menu = d
        },
        isInited: function () {
            return this._isInited
        },
        load: function (a) {},
        onResize: function (a, b) {
            var c = this,
                d = b.size.height,
                e = this._menu.getDialog(c.parentDiv),
                f = $(".ui-dialog-titlebar", e).height(),
                g = $(".chat-bottom", e).height(),
                h = f + g,
                i = d - h,
                j = $(e).height(),
                k = i + f + g;
            if (k != j) {
                var l = j - k;
                i += l
            }
            this.scrollDiv.height(i), $(".chat-content-left", this.scrollDiv).height(i), $(".chat-content-right", this.scrollDiv).height(i), this._currentChatRoom && $(".chat-room-bottom-input :input", this.bottomDiv).width($(".chat-room-bottom-input", this.bottomDiv).width() - 13), this.scrollDiv.tinyscrollbar_update("relative"), $(".chat-content", this.scrollDiv).width(this.scrollDiv.width() - 19 - 19)
        },
        onOpen: function (a, b) {
            require(["sounds"], function (a) {
                a.play("MENU_CHAT_OPEN")
            }), this._menu.doResize(this.parentDiv, this)
        },
        onClose: function (a, b) {
            require(["sounds"], function (a) {
                a.play("MENU_CHAT_CLOSE")
            })
        },
        getRoomForId: function (a) {
            if (!f.data.chatRooms) return null;
            return this._roomMap[a]
        },
        processChatRooms: function () {
            var a = f.data.chatRooms;
            this._roomMap = {};
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                this._roomMap[c.roomId] = c
            }
            this._currentChatRoom || this.showChatRooms(), this.chatMessagesList && (this.chatMessagesList.empty(), this.scrollDiv.tinyscrollbar_update("bottom"))
        },
        processChatActions: function () {
            var a = f.data.chatActions;
            a.unshift({
                displayString: "$b" + _("player_menu_view_profile") + "$x",
                command: "VIEW_PROFILE"
            }), a.unshift({
                displayString: "$b" + _("player_menu_send_message") + "$x",
                command: "SEND_MESSAGE"
            })
        },
        processChat: function (b) {
            var d = c.intColorToHex(b.color);
            b.htmlColor = d[0], b.htmlOpacity = d[1];
            if (b.roomId == $("#list-chat-room-messages").data("rid")) {
                var e = !1;
                parseInt($(".overview", this.scrollDiv).css("top"), 10) + $(".overview", this.scrollDiv)[0].scrollHeight == parseInt($(".viewport", this.scrollDiv).css("height"), 10) ? e = !0 : e = -parseInt($(".overview", this.scrollDiv).css("top"), 10);
                var f = this.chatMessagesList.children();
                f.children().length > a.MAX_CHAT_HISTORY && f.first().remove(), this.chatMessagesList.append($("#template-menu-chat-room-message").tmpl(b)), e === !0 ? this.scrollDiv.tinyscrollbar_update("bottom") : this.scrollDiv.tinyscrollbar_update(e)
            }
        },
        toggleInput: function (a) {
            $(".chat-room-bottom", this.bottomDiv).toggle(a), $(".chat-rooms-bottom", this.bottomDiv).toggle(!a)
        },
        showChatRooms: function () {
            var a = this;
            if ( !! f.data.chatRooms) {
                this._menu.doResize(a.parentDiv, a);
                var c = f.data.chatRooms,
                    d = [];
                $(c).each(function () {
                    $(this.displayLayers).each(function () {
                        d.push(this.info), this.url = b.resolveDynamicImage(b.getImageFromId(this.info))
                    })
                }), b.requireImages(d), $(this.parentDiv).empty(), this._menu.setTitle(this.parentDiv, _("menu_chat")), this.chatList = $('<ul id="list-chat">').appendTo(this.parentDiv), this.chatMenu = $("#template-menu-chat").tmpl(c).appendTo(this.chatList), $(this.chatMenu).translate(), $("input:checkbox", this.chatList).change($.proxy(a.chatRoomChanged, this)).checkBox(), $(".ui-checkbox", this.chatList).addClass("ui-checkbox-chat"), $(".menu-chat-left, .menu-chat-center", this.chatList).click($.proxy(a.chatRoomClicked, this)), this.toggleInput(!1), this.scrollDiv.tinyscrollbar({
                    offsetY: 0
                })
            }
        },
        showChatRoomWithId: function (a) {
            this.showChat(this.getRoomForId(a))
        },
        showChat: function (a) {
            var c = this,
                d = f.data.chat;
            this._currentChatRoom = a;
            var g = d[this._currentChatRoom.roomId];
            $(c.parentDiv).empty(), c.chatMessagesList = $('<ul id="list-chat-room-messages" data-rid="' + this._currentChatRoom.roomId + '"></ul>').appendTo(c.parentDiv), $("#template-menu-chat-room-message").tmpl(g).appendTo(c.chatMessagesList), $(".menu-chat-room-message", c.parentDiv).die("click"), $(".menu-chat-room-message", c.parentDiv).live("click", $.proxy(c.chatClicked, this)), this.toggleInput(!0);
            var h = $(".chat-room-bottom-input :text", c.bottomDiv);
            h.unbind("keyup"), h.keyup(function (a) {
                a.keyCode == 13 && c.chatSendClicked(a)
            }), h.focus();
            var i = [];
            $(this._currentChatRoom.displayLayers).each(function () {
                i.push(this.info), this.url = b.resolveDynamicImage(b.getImageFromId(this.info))
            }), b.requireImages(i), this._menu.setTitle(this.parentDiv, this._currentChatRoom.displayString), $(".chat-header-left-icon", this.parentDiv.closest(".ui-dialog")).html($("#_template-display-layers").tmpl(this._currentChatRoom.displayLayers)), this._menu.showBackButton(this.parentDiv), this._menu.bindBackButton(this.parentDiv, function () {
                e.post({
                    fullName: "ExitChat1",
                    roomId: c._currentChatRoom.roomId
                }, function (a) {}), c._currentChatRoom = null, c._menu.hideBackButton(c.parentDiv), $(".chat-header-left-icon", c.parentDiv.closest(".ui-dialog")).empty(), c.showChatRooms(), c._menu.doResize(c.parentDiv, c);
                return !1
            }), this._menu.doResize(c.parentDiv, c), c.scrollDiv.tinyscrollbar_update("bottom")
        },
        chatRoomChanged: function (a) {
            var b = f.data.chatRooms,
                c = this,
                d = $(a.currentTarget).data("rid");
            e.post({
                fullName: $(a.currentTarget).prop("checked") ? "SubscribeToChat1" : "UnsubscribeToChat1",
                roomId: $(a.currentTarget).data("rid")
            }, function (a) {}), $(b).each(function () {
                if (this.roomId == d) {
                    this.subscribed = $(a.currentTarget).prop("checked");
                    return !1
                }
            });
            return !0
        },
        chatRoomClicked: function (a) {
            var b = f.data.chatRooms,
                c = this,
                d = $(a.currentTarget).data("rid");
            $(b).each(function () {
                if (this.roomId == d) {
                    c.showChat(this);
                    return !1
                }
            }), e.post({
                fullName: "EnterChat1",
                roomId: d
            }, function (a) {});
            return !1
        },
        chatClicked: function (a) {
            var b = this,
                c = f.data.chatActions,
                d = $(a.currentTarget).data("cid"),
                e = $(a.currentTarget).data("sn");
            d != "player" && d != f.data.yourId && g.showActionWindow(_("select_action_on", e), {
                chatId: d,
                actions: c
            }, "chatId", function (a, b) {
                console.log("clicked on " + a), console.log("Performing action: " + b.command);
                switch (b.command) {
                case "SEND_MESSAGE":
                    console.log("Sending Message to " + e), $(document).trigger("action.url.load", ["pkclient://newtopic?to=" + e, null]);
                    break;
                case "VIEW_PROFILE":
                    console.log("Viewing Profile of " + e);
                    var c = {};
                    c.charId = d, c.displayString = e, $(document).trigger("action.player.view", [c]);
                    break;
                default:
                    $(document).trigger("action.generic", [a, b])
                }
                return !1
            });
            return !1
        },
        chatSendClicked: function (b) {
            var c = this,
                d = $(".chat-room-bottom-input :text", c.bottomDiv);
            d.focus();
            if (d.val()) {
                e.post({
                    fullName: "PostChat1",
                    roomId: this._currentChatRoom.roomId,
                    text: d.val()
                }, function (a) {}), f.data.chat[this._currentChatRoom.roomId].push({
                    chatId: "player",
                    senderName: _("chat_self"),
                    text: d.val(),
                    roomId: this._currentChatRoom.roomId,
                    htmlColor: "GoldenRod",
                    htmlOpacity: 1
                });
                var g = this.chatMessagesList.children();
                g.length > a.MAX_CHAT_HISTORY && g.first().remove(), c.chatMessagesList.append($("#template-menu-chat-room-message").tmpl({
                    senderName: _("chat_self"),
                    chatId: "player",
                    text: d.val(),
                    htmlColor: "GoldenRod",
                    htmlOpacity: 1
                })), d.val(""), this.scrollDiv.tinyscrollbar_update("bottom")
            }
            return !1
        }
    }
}), define("auth/web", ["net", "authstates", "resources", "ui", "ui/window", "settings", "utils"], function (a, b, c, d, e, f, g) {
    return {
        init: function (a) {
            this._game = a, this._bindNetHandlers()
        },
        _bindNetHandlers: function () {
            var c = this;
            a.onState(b.FAILED, function (a) {
                setTimeout(function () {
                    d.showDropDown(_("error_cant_connect"))
                }, 2e3)
            }), a.onState(b.CONNECTED, function (b) {
                d.loadingStep(a.getAuthState()), d.loadPageArt()
            }), a.onState(b.INITED, function (a) {}), a.onState(b.MUST_LOGIN, function (b) {
                d.loadingStep(a.getAuthState());
                var e = $.cookie(f.USER_PREFS_KEY);
                e ? (this.userPrefs = $.parseJSON(e), this.userPrefs.pwh === undefined ? ($.cookie(f.USER_PREFS_KEY, "", {
                    expires: 365
                }), this.userPrefs = {}, require(["game"], function (a) {
                    iscreen == "create" ? c._showCreateScreen() : iscreen == "fbcreate" ? c._showCreateScreen() : c._showLoginScreen()
                })) : a.authenticate(this.userPrefs.username, this.userPrefs.pwh)) : require(["game"], function (a) {
                    iscreen == "create" ? c._showCreateScreen() : iscreen == "fbcreate" ? c._showCreateScreen() : c._showLoginScreen()
                })
            }), a.onState(b.MUST_VERIFY, function (b) {
                d.showStringPromptWindow({
                    stringPromptDisplay: _("web_verify_email")
                }, function (b) {
                    var c = {
                        fullName: "VerifyEmail1",
                        email: b
                    };
                    a.post(c)
                })
            }), a.onState(b.CREATE, function (a) {}), a.onState(b.AUTH_ERROR_LOGIN, function (a) {
                d.endLoading(), d.processAuthError(a)
            }), a.onState(b.AUTH_ERROR_CREATE, function (a) {
                d.endLoading(), d.showCreateError(a)
            }), a.onState(b.GAME_SERVER_CONNECT_TO, function (b) {
                d.hideEntranceWindows(), d.loadingStep(a.getAuthState())
            }), a.onState(b.GAME_SERVER_CLIENT_INFO, function (b) {
                d.hideLoginWindow(), d.startLoading(a.getAuthState()), d.loadingStep(a.getAuthState())
            }), a.onState(b.GAME_SERVER_CONNECTED, function (b) {
                d.loadingStep(a.getAuthState()), g.saveUserData(a.getLoginData());
                if (a.getDidCreateCharacter()) {
                    pk.state.isIQU && $(".iqu-iframe.iqu-created").size() == 0 && $('<iframe class="iqu-iframe iqu-created" src="/stat/iqucreated"></iframe>').appendTo("body");
                    var e = a.getLoginData(),
                        f = e.pwh || this.userPrefs.pwh,
                        h = e.username || this.userPrefs.username,
                        i = {
                            characterName: h,
                            hash: f,
                            EnteredRefCode: e.EnteredRefCode
                        };
                    a.created(i, function (a) {})
                }
                c.loadGameData(function () {
                    $("#window-loading").dialog("close"), b.yourId === "TUTCLIENT" ? c._game.startClientTutorial(b) : c._game.startGame(b)
                })
            })
        },
        loadGameData: function (a) {
            c.fakeLoadAllImages(function () {
                $("#game-w").show(), a()
            }, function (a, b, c) {
                d.updateLoadingProgress(a, b, "Loaded image " + c.id)
            })
        },
        _showCreateScreen: function (a) {
            var b = this;
            d.endLoading();
            var c = g.parseQueryString(window.location.search);
            iscreen === "fbcreate" ? d.showFbCreateWindow() : d.showWebCreateWindow()
        },
        _showLoginScreen: function () {
            var a = this;
            d.endLoading(), d.showNewLoginWindow()
        }
    }
}), define("game", ["net", "authstates", "ab", "sounds", "stats", "ui", "settings", "resources", "state", "utils", "tut", "auth/web", "auth/facebook", "auth/kongregate"], function (a, b, c, d, e, f, g, h, j, k, l, m, n, o) {
    return {
        _notificationQueue: [],
        userPrefs: {},
        createData: {},
        loadedImageList: {},
        _lastLocation: null,
        _currentLocation: null,
        _isLandingPrompt: !1,
        _createAttemptNumber: 0,
        init: function () {
            var b = this;
            c.loadTests(), this.checkBrowser(), this.initWindowEvents(), this.checkForSk(), d.init(), f.initEntranceWindows(), a.init(), a.onGameMessage($.proxy(this.processGameMessage, this)), this._authHandler = m, this._servicesInit(), this._bindUiDispatchEvents(), this._authHandler.init(this), f.startLoading(a.getAuthState())
        },
        _servicesInit: function () {
            pk.state.isKongregate ? (o.preInit(), o.isInFrame() && (console.log("Using Kongregate Auth"), this._authHandler = o)) : pk.state.isFacebook ? (console.log("Using Facebook Auth"), this._authHandler = n) : console.log("Using Web Auth")
        },
        _bindUiDispatchEvents: function () {
            var c = this;
            $(document).unbind("action.tryLogin"), $(document).bind("action.tryLogin", function (b, c, d) {
                var e = hex_md5(d).toUpperCase();
                a.authenticate(c, e)
            }), $(document).bind("action.tryExistingLogin", function (a, b, d) {
                c._doAuthWithCreds(b, d)
            }), $(document).bind("action.invalidateExistingLogin", function (a) {
                k.clearSession(), c._showCreateScreen(!0)
            }), $(document).unbind("action.createCharacter"), $(document).bind("action.createCharacter", function (d, e) {
                c._authHandler == o ? a.setAuthState(b.MUST_CREATE, e) : a.create(e)
            }), $(document).unbind("action.locationDetected"), $(document).bind("action.locationDetected", function (a, b) {
                c._detectedLocation = b
            })
        },
        checkBrowser: function () {
            var a = $.cookie(g.USER_PREFS_KEY);
            a && (this.userPrefs = $.parseJSON(a)), $.browser.msie && parseInt($.browser.version.substring(0, 1)) >= 9 && !this.userPrefs.skip_browser_warn != !0
        },
        load: function () {
            f.init(this)
        },
        initWindowEvents: function () {
            window.onbeforeunload = function (a) {}, window.onunload = function (b) {
                a.disconnect()
            }, window.onerror = function (a, b, c) {
                if ($.isEmptyObject(console)) {
                    if (typeof printStackTrace == "function") {
                        var d = printStackTrace();
                        if (d) {
                            var f = b + ":" + c + "\n" + d.join("\n");
                            e.error({
                                type: "window.onerror",
                                trace: f,
                                path: "",
                                extra: a
                            }, f)
                        }
                    }
                    return !0
                }
            };
            return !1
        },
        checkForSk: function () {
            var a = $.cookie(g.USER_PREFS_KEY),
                b = null;
            a && (this.userPrefs = $.parseJSON(a), this.userPrefs.hasOwnProperty("sk") && (b = this.userPrefs.sk)), b || (b = k.guid().replace(/-/g, "")), this._identifier = b, this.userPrefs.sk = b, k.saveUserData(this.userPrefs)
        },
        relocate: function () {
            clearTimeout(this._relocationTimeout), this._relocationTimeout = setTimeout(function () {
                a.post({
                    fullName: "RealMove1",
                    location: {
                        lat: 0,
                        lng: 0
                    }
                }, null, l.isActive)
            }, 1e3)
        },
        queryCurrentLocation: function (a) {
            if (navigator.geolocation) {
                var b = !0,
                    c = setTimeout(function () {
                        c = null, a(null)
                    }, 1e4);
                navigator.geolocation.getCurrentPosition(function (b) {
                    if ( !! c) {
                        clearTimeout(c);
                        var d = new google.maps.Geocoder,
                            e = new google.maps.LatLng(b.coords.latitude, b.coords.longitude);
                        d.geocode({
                            latLng: e
                        }, function (c, d) {
                            var e = [];
                            for (var f = 0; f < c.length; f++) {
                                var g = c[f],
                                    h = !1;
                                for (var i = 0; i < g.address_components.length; i++) {
                                    var j = g.address_components[i];
                                    for (var k = 0; k < j.types.length; k++) {
                                        var l = j.types[k];
                                        if (l === "locality" || l == "administrative_area_level_1" || l == "country") {
                                            e.push(j.long_name), h = !0;
                                            break
                                        }
                                    }
                                }
                                if (h) break
                            }
                            a(b, e.join(", "))
                        })
                    }
                }, function (b) {
                    a(null)
                })
            } else a(null)
        },
        getTutorialNotifications: function () {
            return this._tutorialNotifications
        },
        startClientTutorial: function (a) {
            var b = this;
            j.initFromBootData(a), $(document).bind("tutorialFinished", function (a) {
                b._shouldRecordTutorialFinished = !0
            });
            var c = j.getYouLocationElement();
            l.init($.proxy(b.processGameMessage, b)), $.getJSON(g.CLIENT_GET_TUT_STATE_PATH + "?characterName=" + c.displayString, function (c) {
                c.tutorialKey === "" ? l.startNewTutorial(a) : l.startFromExistingTutorial(a, c.tutorialKey, c.stateKey), b.onGameStart()
            })
        },
        onGameStart: function () {
            var b = this,
                c = j.getYouLocationElement(),
                h = c ? c.name : null,
                i = c && c.elementId.toLowerCase() !== "you" ? c.elementId : null,
                l = j.data.referralCode;
            (n.isInFrame() || iscreen === "fbcreatequick") && f.showRefLink(l), !o.isInFrame() && !n.isInFrame() && (f.showRefLink(l), $("#link-logout").show());
            var m = j.data.yourId;
            m.toLowerCase() !== "you" && (k.prefsAddKey("cid", m), $(".tut-info-popup-window").remove(), $("#tab-tut-info").remove(), f.processElementAttention({
                elements: []
            })), e.sig(), e.demos({
                CharacterName: h,
                CharacterId: i
            });
            if (campaignClickId && campaignId) {
                var c = j.getYouLocationElement();
                if (c) {
                    var p = {
                        CampaignId: campaignId,
                        ClickId: campaignClickId,
                        CharacterName: c.name
                    };
                    c.elementId.toLowerCase() !== "you" && (p.CharacterId = c.elementId), $.ajax({
                        url: g.CLIENT_STAT_CAMPAIGN_PATH,
                        dataType: "json",
                        contentType: "application/json; charset=utf-8",
                        type: "POST",
                        data: JSON.stringify(p),
                        success: function (a) {}
                    })
                }
            }
            a.getDidCreateCharacter() && j.data.yourId.toLowerCase() != "you" && j.data.yourId.toLowerCase() != "tutclient" && !this._authHandler == o && e.tryAb("bookmark", "prompt", "noprompt") && f.showBookmarkPopup(), a.getDidCreateCharacter() && e.tryAb("sound_ambient", "on", "off") && d.tryEnableTest("sound_ambient"), this._alreadyGameStarted = !0
        },
        startGame: function (e) {
            var g = this;
            this.bindHandlers(), j.initFromBootData(e), this.onGameStart(), a.sync({
                KongID: pk && pk.state && pk.state.kongUserId,
                KongGameAuthToken: pk && pk.state && pk.state.kongGameAuthToken,
                KongUserName: pk && pk.state && pk.state.kongUserName,
                FacebookID: pk && pk.state && pk.state.fbUserId
            }, $.proxy(function (h) {
                pk.state.activeTests = h.tests, c.loadTests(), f.hideEntranceWindows(), f.startLoading(a.getAuthState()), this.bootData = e, this._shouldRecordTutorialFinished && (l.recordState("DONE", "LEAVE_ISLAND"), this._shouldRecordTutorialFinished = !1), refCode && $.trim(refCode) != "" && j.data.yourId.toLowerCase() !== "you" && (g.doAction({
                    elementId: j.data.yourId
                }, {
                    command: "ENTER_REFERRAL_CODE",
                    stringResponse: refCode,
                    intResponse: "",
                    stringPromptDisplay: "",
                    intPromptDisplay: "",
                    uRL: ""
                }), a.usedRefCode());
                var i = a.getUnprocessedMessages();
                f.loadingStep(a.getAuthState());
                var k = [];
                for (var m in i) {
                    var n = i[m];
                    n.fullName === "LocationData1" || n.fullName === "ClientConfigs1" ? g.processGameMessage(n) : k.push(n)
                }
                a.clearUnprocessedMessages(), f.onMapReady(function (c) {
                    a.setAuthState(b.GAME_RUNNING), f.loadingStep(a.getAuthState()), console.log("MAP READY"), f.hideSplash(), f.endLoading();
                    while (k.length > 0) {
                        var d = k.shift();
                        g.processGameMessage(d)
                    }
                    o.isInFrame() && !this._hasCheckedForPurchases && (o.checkForPurchases(), this._hasCheckedForPurchases = !0)
                }), f.loadInterface(), f.bindKeyboardEvents(), d.startGame()
            }, this))
        },
        bindHandlers: function () {
            var b = this;
            $(document).unbind("menu.change"), $(document).bind("menu.change", function (a, c) {
                var d = c.uRL,
                    e;
                for (e = 0; e < b._notificationQueue.length; e++) {
                    var g = b._notificationQueue[e];
                    if (g.pageFilter === d) {
                        b._notificationQueue.splice(0, e + 1), f.showNotification(g);
                        break
                    }
                }
                for (e = 0; e < b._tutorialNotifications.length; e++) {
                    var g = b._tutorialNotifications[e];
                    g.pageFilter === d && (f.removeUiArrows(), b._tutorialNotifications.splice(0, e + 1), f.processNotification(g))
                }
                for (e = 0; e < b._tutorialNotifications.length; e++) {
                    var g = b._tutorialNotifications[e],
                        h = k.urlParse(g.pageFilter),
                        i = 0;
                    for (var e in h.params) h.params.hasOwnProperty(e) && i++;
                    if (f.getMenu().isOpen(h.hostname) && i > 0) {
                        console.log("Notification for menu item, showing arrow"), f.showArrowOnItem(h.hostname, h.params);
                        break
                    }
                }
            }), $(document).unbind("action.chat.room.show"), $(document).bind("action.chat.room.show", function (a, b) {
                require(["ui/menu/menu_chat"], function (a) {
                    f.getMenu().showMenu("chat", b), a.showChatRoomWithId(b)
                })
            }), $(document).unbind("action.player.view"), $(document).bind("action.player.view", function (b, c) {
                var d = c.charId.substring(0, 3),
                    e = null;
                switch (d) {
                case "Cty":
                    e = j.data.clientConfigs[g.CONFIGS.WEB_VIEW_URL] + "/city.aspx?cityid=" + c.charId;
                    break;
                case "Kng":
                    e = j.data.clientConfigs[g.CONFIGS.WEB_VIEW_URL] + "/kingdom.aspx?kingdomid=" + c.charId.substring(3);
                    break;
                default:
                    e = j.data.clientConfigs[g.CONFIGS.WEB_VIEW_URL] + "/profile.aspx?charid=" + c.charId
                }
                a.post({
                    fullName: "WebViewActionsRequest1",
                    uRL: e
                }, function (a) {}), f.addIframeTab(e, _("web_tab_player_profile", c.displayString), !0);
                return !1
            }), $(document).unbind("action.elementClicked"), $(document).bind("action.elementClicked", function (a, c, d) {
                b._handleElementClick(a, c, d)
            }), $(document).unbind("action.elementAnalogMoved"), $(document).bind("action.elementAnalogMoved", function (a, c, d, e, f) {
                b.movePlayerAnalog(c, d, e, f)
            }), $(document).unbind("action.url.load"), $(document).bind("action.url.load", function (a, c, d) {
                b.processUrl(c, d, null)
            }), $(document).unbind("menu.settings.quickUpdated"), $(document).bind("menu.settings.quickUpdated", function (a, b) {
                k.prefsAddKey("map_enable_sat", b), b ? f.setMapSatelliteMode() : f.setMapRoadmapMode()
            }), $(document).unbind("menu.settings.updated"), $(document).bind("menu.settings.updated", function (b, c, d, e, f) {
                k.prefsAddKey("pwh", f), a.post({
                    fullName: "ChangeSettings1",
                    password: f,
                    email: c,
                    receiveSms: d,
                    receiveEmail: e
                }, function (a) {})
            }), $(document).unbind("state.element.replaced"), $(document).bind("state.element.replaced", function (a, b) {
                f.replaceElement(b)
            }), $(document).unbind("game.relocate"), $(document).bind("game.relocate", function (a) {
                f.showAreYouSureWindow(_("are_you_sure_you_want_to_relocate"), function () {
                    b.relocate()
                })
            }), $(document).unbind("tutorial.pop"), $(document).bind("tutorial.pop", function (a) {
                b._tutorialNotifications.shift()
            }), $(document).unbind("tutorial.check"), $(document).bind("tutorial.check", function (a) {
                f.setLastWindowPageFilter(null)
            })
        },
        openShareEmail: function () {
            var a = _("web_referral_email_title"),
                b = _("web_referral_email_body"),
                c = '<a href="http://play.parallelkingdom.com/game/ref?r=' + j.data.referralCode + '">http://play.parallelkingdom.com/game/ref?r=' + j.data.referralCode + "</a>";
            b = b.replace("<ref_code>", c);
            var d = "mailto:?subject=" + a + "&body=" + b;
            window.open(d, "emailwindow")
        },
        movePlayerAnalog: function (b, c, d, e) {
            a.post({
                fullName: "AnalogMove1",
                location: {
                    lat: c.lat(),
                    lng: c.lng(),
                    target: d
                }
            })
        },
        doAction: function (b, c, e, h) {
            var i = this;
            switch (c.command) {
            case "NO_REF_CODE":
                if (refCode && refCode !== "") {
                    c.stringResponse = refCode, refCode = undefined;
                    var k = {
                        fullName: "DoAction1",
                        actionId: b.elementId,
                        command: "REF_CODE"
                    };
                    c.stringResponse && (k.stringParam = c.stringResponse), a.post(k, function (a) {}, !1), a.post(k, function (a) {}, !0), i._clearAction(c)
                } else {
                    var k = {
                        fullName: "DoAction1",
                        actionId: b.elementId,
                        command: c.command
                    };
                    a.post(k, function (a) {}, !0), i._clearAction(c)
                }
                h(!0);
                break;
            case "REF_CODE":
                if (!c.stringResponse || $.trim(c.stringResponse) == "") f.showStringPromptWindow(c, function (a) {
                    c.stringResponse = a, refCode = a, i.doAction(b, c)
                }, function () {
                    i._clearAction(c), h(!1)
                }, refCode && refCode !== "" ? refCode : "");
                else {
                    var k = {
                        fullName: "DoAction1",
                        actionId: b.elementId,
                        command: c.command
                    };
                    k.stringParam = c.stringResponse, i._clearAction(c), a.post(k, null, !1), a.post(k, null, !0), typeof h == "function" && h(!0)
                }
                break;
            case j.data.clientConfigs[g.CONFIGS.SELL_FOR_FOOD_COMMAND_STRING]:
                f.showSellPrompts(b, h, !0);
                break;
            case j.data.clientConfigs[g.CONFIGS.SELL_FOR_GOLD_COMMAND_STRING]:
                f.showSellPrompts(b, h, !1);
                break;
            case "EXIT":
            case "VISIT":
            case "VISIT0":
            case "VISIT1":
            case "VISIT2":
            case "WALK_DOG":
                i._tutorialNotifications = [], f.setLastWindowPageFilter(null);
                var l = j.data.yourId;
                l.toLowerCase() === "you" && (console.log("Did reset action in tutorial, hiding menus and stuff"), f.getMenu().closeAllWindows());
            default:
                if (c.stringPromptDisplay !== "" && !c.stringResponse || c.intPromptDisplay !== "" && !c.intResponse) f.showMultiPromptWindow(c, function (a, d) {
                    c.stringResponse = a, c.intResponse = d, i.doAction(b, c)
                }, function () {
                    i._clearAction(c), h(!1)
                }, c.stringPromptDisplay !== "", c.intPromptDisplay !== "");
                else if (c.prompt && !c.promptResponse) f.showPromptWindow(c, function (a) {
                    c.promptResponse = a, a && i.doAction(b, c)
                });
                else {
                    if (c.uRL !== "") {
                        i.processUrl(c.uRL, c.displayString, {
                            action: c
                        });
                        var k = {
                            fullName: "DoAction1",
                            actionId: b.elementId,
                            command: c.command
                        };
                        d.processDoAction(c, b.elementId), a.post(k)
                    } else {
                        var k = {
                            fullName: "DoAction1",
                            actionId: b.elementId,
                            command: c.command
                        };
                        c.intResponse && (k.intParam = c.intResponse), c.stringResponse && (k.stringParam = c.stringResponse), d.processDoAction(c, b.elementId), a.post(k, function (a) {}), i._clearAction(c), c.command === "HELP" && f.showInfo(b, c)
                    }
                    typeof h == "function" && h(!0)
                }
            }
        },
        doActionGeneric: function (b, c, e, g) {
            var h = this;
            if (c.stringPromptDisplay !== "" && !c.stringResponse || c.intPromptDisplay !== "" && !c.intResponse) f.showMultiPromptWindow(c, function (a, d) {
                c.stringResponse = a, c.intResponse = d, h.doActionGeneric(b, c, e, g)
            }, function () {
                g(!1)
            }, c.stringPromptDisplay !== "", c.intPromptDisplay !== "");
            else if (c.prompt && !c.promptResponse) f.showPromptWindow(c, function (a) {
                c.promptResponse = a, a ? h.doActionGeneric(b, c, e, g) : (h._clearAction(c), g(!1))
            });
            else {
                if (c.uRL !== "") h.processUrl(c.uRL, c.displayString, {
                    action: c
                }), d.processDoAction(c, b);
                else {
                    var i = {
                        fullName: "DoAction1",
                        actionId: b,
                        command: c.command
                    };
                    c.intResponse ? i.intParam = c.intResponse : e && (i.intParam = e), c.stringResponse && (i.stringParam = c.stringResponse), d.processDoAction(c, b), a.post(i, function (a) {}), h._clearAction(c)
                }
                g(!0)
            }
        },
        doActionCommand: function (b, c, d, e) {
            if (b !== "") {
                var f = {
                    fullName: "DoAction1",
                    command: b
                };
                c && (f.actionId = c), e && (f.intParam = e), d && (f.stringParam = d), a.post(f, function (a) {})
            }
        },
        _clearAction: function (a) {
            a.intResponse = undefined, a.stringResponse = undefined, a.promptResponse = undefined
        },
        _msgHandlers: null,
        processGameMessage: function (a) {
            var b = this;
            if ( !! a.fullName) {
                var c = a.fullName.substring(0, a.fullName.length - 1);
                c !== "Chat" && (console.log("Game Message (" + (new Date).toLocaleTimeString() + "): " + c), console.log(a)), this._msgHandlers || (this._msgHandlers = {
                    BootData: this.processBootData,
                    ConnectTo: this.processConnectTo,
                    ClientConfigs: this.processClientConfigs,
                    RequestEmail: this.processRequestEmail,
                    PlayerSkillInfo: this.processPlayerSkillInfo,
                    MakeTypes: this.processMakeTypes,
                    LocationData: this.processLocationData,
                    BoundsUpdate: this.processBoundsUpdate,
                    Notification: this.processNotification,
                    ErrorResponse: this.processErrorResponse,
                    SuccessResponse: function (a) {},
                    WebViewActions: this.processWebViewActions,
                    BuyScreenInfo: this.processBuyScreenInfo,
                    BuyScreenItems: this.processBuyScreenItems,
                    AddBuyScreenItems: this.processAddBuyScreenItem,
                    RemoveBuyScreenItem: this.processRemoveBuyScreenItem,
                    UpdateTradePostCut: this.processUpdateTradePostCut,
                    TopicFolders: this.processTopicFolders,
                    MapElementLocationChange: this.processElementLocationChange,
                    MapElementAttackResult: this.processElementAttackResult,
                    MapElementGoldChange: this.processElementGoldChange,
                    MapElementExpChange: this.processElementExpChange,
                    MapElementHPChange: this.processElementHpChange,
                    MapElementRemoved: this.processElementRemoved,
                    MapElementAdded: this.processElementAdded,
                    MapElementActionsChange: this.processElementActionsChange,
                    MapElementMovementSpeedChange: this.processElementMovementSpeedChange,
                    MapElementNameChange: this.processElementNameChange,
                    MapElementDisplayLayersChange: this.processElementDisplayLayersChange,
                    MapElementDisplayStringChange: this.processElementDisplayStringChange,
                    MapElementUpdateTimer: this.processElementUpdateTimer,
                    WeightUpdate: this.processWeightUpdate,
                    ResourceUpdate: this.processResourceUpdate,
                    UpdateEXPHud: this.processUpdateExpHud,
                    FoodUpdate: this.processFoodUpdate,
                    ViewURL: this.processViewUrl,
                    ChatRooms: this.processChatRooms,
                    Chat: this.processChat,
                    ChatActions: this.processChatActions,
                    ShowBetaSwitch: this.processBetaSwitch,
                    GetTopicsResponse: this.processGetTopicsResponse,
                    GetCommentsResponse: this.processGetCommentsResponse,
                    FolderUnreadCountsResponse: this.processFolderUnreadCounts,
                    NewComment: this.processNewComment,
                    NewTopic: this.processNewTopic,
                    PlayerLists: this.processPlayerLists,
                    PlayerResults: this.processPlayerResults,
                    DeleteTopic: this.processDeleteTopic,
                    DeleteAllTopics: this.processDeleteAllTopics,
                    MarkFolderRead: this.processMarkFolderRead,
                    MarkTopicRead: this.processMarkTopicRead,
                    WaypointAdd: this.processWaypointAdd,
                    MapElementAttention: this.processElementAttention,
                    HelpTips: this.processHelpTips,
                    HelpTipsEnabled: this.processHelpTipsEnabled
                }), d.preProcessGameMessage(c, a);
                var e = this._msgHandlers[c];
                e ? e.call(this, a) : console.error(c + " NOT BEING HANDLED!"), d.postProcessGameMessage(c, a)
            }
        },
        processUrl: function (b, c, d) {
            var e = this;
            if ((pkIndex = b.indexOf("pkclient://")) >= 0) {
                var h = b.replace("pkclient://", "");
                b = g.getUrlForKey(h);
                if (b) f.addIframeTab(b, c, !0);
                else {
                    var i = h.indexOf("?") >= 0;
                    if (i) {
                        var k = h.substring(h.indexOf("?")),
                            l = h.substring(0, h.indexOf("?")),
                            m = k.replace("?", ""),
                            n = m.split("&"),
                            o = {};
                        for (var p in n) {
                            var q = n[p].split("=");
                            o[q[0]] = q[1]
                        }
                        e.processPkUrlLoad(l, o, d)
                    } else e.processPkUrlLoad(h, null, d)
                }
            } else b.indexOf("http") < 0 && (b.charAt(0) == "/" ? b = j.data.clientConfigs[g.CONFIGS.WEB_VIEW_URL] + b : b.charAt(0) == "?" && (b = j.data.clientConfigs[g.CONFIGS.HELP_URL] + "/" + b)), f.addIframeTab(b, c, !0), a.post({
                fullName: "WebViewActionsRequest1",
                uRL: b
            }, function (a) {})
        },
        processPkUrlLoad: function (a, b, c) {
            var d = this,
                e = {
                    share: d.openShareEmail,
                    newcomment: d.processNewCommentUrl,
                    newtopic: d.processNewTopicUrl,
                    buyitems: d.processBuyItemsUrl,
                    items: d.processItemsUrl,
                    skills: d.processSkillsUrl,
                    create: d.processCreateUrl,
                    topics: d.processTopicsUrl,
                    comments: d.processCommentsUrl
                },
                f = e[a];
            f && f.call(this, a, b, c)
        },
        processBetaSwitch: function (a) {
            k.prefsAddKey("showBetaSwitchFlag", a.shouldShow)
        },
        processPlayerSkillInfo: function (a) {
            j.data.playerSkillInfo = a, f.getMenu().updateSkillsMenu(a)
        },
        processMakeTypes: function (a) {
            var b = j.data.makeTypes,
                c = !1;
            for (i in b) {
                var d = b[i];
                if (d.makeId == a.makeId) {
                    j.data.makeTypes[i] = a, c = !0;
                    break
                }
            }
            if (!c) for (i in b) {
                var d = b[i];
                if (!d.makeId) {
                    j.data.makeTypes[i] = a;
                    break
                }
            }
            f.getMenu().updateCreateMenu(a)
        },
        processLocationData: function (a) {
            j.setLocationData(a), f.processLocationData(a)
        },
        processBoundsUpdate: function (a) {
            j.setBounds(a), f.processBoundsUpdate(a)
        },
        _tutorialNotifications: [],
        processNotification: function (b) {
            var c = this,
                d = b.duration,
                e = d != -2,
                g = j.data.yourId;
            if (g && g.toLowerCase() === "you") {
                if (b.type != "tut") return;
                console.log("Notification in tutorial"), this._tutorialNotifications.push(b);
                var i = this._tutorialNotifications.length - 1;
                if (b.pageFilter === "" || b.pageFilter == "pkclient://map" && f.getLastWindowPageFilter() === null) b.pageFilter == "pkclient://map" && f.setLastWindowPageFilter(null), clearTimeout(this._tutorialNotificationTimeout), function (a, b) {
                    c._tutorialNotificationTimeout = setTimeout(function () {
                        f.processNotification(a) && c._tutorialNotifications.shift()
                    }, 250)
                }(b, i);
                else {
                    var l = k.urlParse(b.pageFilter),
                        m = 0;
                    for (var n in l.params) l.params.hasOwnProperty(n) && m++;
                    !f.getMenu().isOpen(l.hostname) && m == 0 && (console.log("Notification for non menu, showing arrow"), f.showArrow($("#tab-" + l.hostname)))
                }
            } else if (!g) a.pushUnprocessedMessage(b);
            else {
                if (b.type === "tut") {
                    console.log("Ignoring tutorial message after tutorial!");
                    return
                }
                if (b.displayString != "" || b.displayLayers.length > 0) if (b.pageFilter === "" || b.pageFilter === "pkclient://map") {
                    var o = null;
                    if (b.displayLayers.length > 0) {
                        for (var n in b.displayLayers) {
                            var p = b.displayLayers[n];
                            p.url = h.resolveDynamicImage(h.getImageFromId(p.info))
                        }
                        o = $("#_template-display-layers").tmpl(b.displayLayers)
                    }
                    o = o ? o.html() : null, $("#h").dropDown("closeAll").dropDown({
                        text: b.displayString,
                        imageHtml: o,
                        showOnBotton: b.showOnBottom,
                        canClose: e,
                        hideDelay: b.duration,
                        isDown: !0,
                        onClose: function () {},
                        onClick: function () {
                            e && $(this).dropDown("closeAll"), c.doActionCommand(b.onClickAction.command), b.onClickAction.uRL !== "" && c.processUrl(b.onClickAction.uRL, null, {})
                        }
                    }), f.processNotification(b)
                } else this._notificationQueue.push(b);
                else $("#h").dropDown("closeAll")
            }
        },
        processErrorResponse: function (a) {
            l.isActive || f.showError(a)
        },
        processConnectTo: function (b) {
            a.gameServerConnect(b)
        },
        processBootData: function (a) {
            this.startGame(a)
        },
        processElementAttackResult: function (a) {
            var b = j.data;
            if (a.elementId == b.yourId) {
                var c = b.hp;
                b.hp = a.hpFinal, b.hpMax = a.hpMax, f.getInterface().update(), c > 0 && a.hpFinal <= 0 && this.playerDied()
            }
            var d = j.getElementWithId(a.elementId);
            if ( !! d) {
                f.updateHp(d, a);
                var e = j.getElementWithId(a.attackerId),
                    g = h.requireImages([a.animation], function (b) {
                        f.addLayerToElement(e, a.animation, 4)
                    })
            }
        },
        processElementNameChange: function (a) {},
        processElementLocationChange: function (a) {
            var b = j.getElementWithId(a.elementId);
            f.moveElement(b, a)
        },
        processElementGoldChange: function (a) {
            a.elementId == j.data.yourId && (j.data.gold = a.goldFinal, f.getInterface().update());
            if (a.goldChange != 0) {
                var b = j.getElementWithId(a.elementId);
                f.updateGold(b, a)
            }
        },
        processElementHpChange: function (a) {
            if (a.elementId == j.data.yourId) {
                var b = j.data.hp;
                j.data.hp = a.hpFinal, j.data.hpMax = a.hpMax, f.getInterface().update(), b > 0 && a.hpFinal <= 0 && this.playerDied()
            }
            var c = j.getElementWithId(a.elementId);
            !c || a.hpChange != 0 && f.updateHp(c, a)
        },
        processElementExpChange: function (a) {
            a.elementId == j.data.yourId && (j.data.exp = a.expFinal, j.data.expMax = a.expMax, f.getInterface().update());
            if (a.expChange != 0) {
                var b = j.getElementWithId(a.elementId);
                f.updateExp(b, a)
            }
        },
        processElementRemoved: function (a) {
            switch (a.target.split("|")[0]) {
            case "player":
                j.removePlayerItemElement(a.elementId, a), f.getMenu().updateItemsMenu(a);
                break;
            case "estate":
                j.removePlayerEstateElement(a.elementId, a), f.getMenu().updateEstatesMenu(a);
                break;
            default:
                var b = j.getElementWithId(a.elementId);
                b && (f.removeElement(b, a), j.removeItemFromMap(b, a))
            }
            f.getInterface().update()
        },
        processElementAdded: function (a) {
            a.element.displayString = k.UI.parseDisplayString(a.element.displayString);
            if ( !! a.element.location.hasOwnProperty("target")) {
                switch (a.element.location.target.split("|")[0]) {
                case "player":
                    j.removeItemFromMap(a.element, a), j.addPlayerItemElement(a.element, a), f.getMenu().updateItemsMenu(a);
                    break;
                case "estate":
                    j.addPlayerEstateElement(a.element, a), f.getMenu().updateEstatesMenu(a);
                    break;
                default:
                    j.addLocationElement(a.element, a), a.element.elementId === j.data.yourId && f.getInterface().update(), f.addElementToMap(a.element, a)
                }
                f.getInterface().update()
            }
        },
        processElementActionsChange: function (a) {
            var b = j.getElementWithId(a.elementId);
            if (b) {
                b.actions = a.actions;
                switch (a.target.split("|")[0]) {
                case "player":
                    f.getMenu().updateItemsMenu(a);
                    break;
                case "estate":
                    f.getMenu().updateEstatesMenu(a)
                }
            }
        },
        processElementMovementSpeedChange: function (a) {
            var b = j.getElementWithId(a.elementId);
            b && (b.movementSpeed = a.movementSpeed)
        },
        processElementDisplayLayersChange: function (a) {
            var b = j.getElementWithId(a.elementId);
            if (b) {
                switch (a.target.split("|")[0]) {
                case "player":
                    j.updatePlayerItemElement(b, a), f.getMenu().updateItemsMenu(a);
                    break;
                case "estate":
                    j.updatePlayerEstateElement(b, a), f.getMenu().updateEstatesMenu(a);
                    break;
                default:
                    b.displayLayers = a.displayLayers, f.updateDisplayLayersForElement(b, a.displayLayers)
                }
                f.getInterface().update()
            }
        },
        processElementDisplayStringChange: function (a) {
            var b = j.getElementWithId(a.elementId);
            if (b) {
                b.displayString = k.UI.parseDisplayString(a.displayString);
                switch (a.target.split("|")[0]) {
                case "player":
                    f.getMenu().updateItemsMenu(a);
                    break;
                case "estate":
                    f.getMenu().updateEstatesMenu(a)
                }
            }
        },
        processElementUpdateTimer: function (a) {
            var b = j.getElementWithId(a.elementId);
            b && f.showTimerForElement(b, a)
        },
        processClientConfigs: function (a) {
            j.setClientConfigs(a.configs);
            for (var b in a.configs) b.indexOf("tip") >= 0 && (j.addHelpTip(a.configs[b]), f.loadingTipsReady())
        },
        processRequestEmail: function (c) {
            a.setAuthState(b.MUST_VERIFY)
        },
        processWeightUpdate: function (a) {
            j.data.currentWeight = a.currentWeight, j.data.totalWeightCapacity = a.totalWeightCapacity, f.getInterface().update()
        },
        processResourceUpdate: function (a) {
            j.data.yourResources = a.yourResources, f.getMenu().updateCreateMenu(a)
        },
        processUpdateExpHud: function (a) {
            f.updateExpHud(a)
        },
        processFoodUpdate: function (a) {},
        processViewUrl: function (a) {
            var b = a.uRL.replace("pkclient://", "");
            f.switchToMenu(b)
        },
        processChatRooms: function (a) {
            j.data.chatRooms = a.rooms, j.data.chat || (j.data.chat = []);
            for (var b = 0; b < a.rooms.length; b++) {
                var c = a.rooms[b];
                j.data.chat[c.roomId] = []
            }
            f.getMenu().updateChatMenu(a)
        },
        processChat: function (a) {
            j.data.chat || (j.data.chat = []), j.data.chat[a.roomId] || (j.data.chat[a.roomId] = []);
            if (j.data.chat[a.roomId].length > g.MAX_CHAT_HISTORY) {
                var b = j.data.chat[a.roomId],
                    c = b.length - g.MAX_CHAT_HISTORY;
                b.splice(0, c)
            }
            var d = j.getYouLocationElement();
            d && a.senderName === d.displayString && (a.senderName = "You"), j.data.chat[a.roomId].push(a), f.getMenu().updateChatMenu(a), require(["ui/menu/menu_chat"], function (b) {
                var c = b.getRoomForId(a.roomId);
                f.getInterface().showChatMessage(a, c), d && a.senderName !== d.displayString && f.processChat(a, c)
            })
        },
        processChatActions: function (a) {
            j.data.chatActions = a.actions, f.getMenu().updateChatMenu(a)
        },
        processWebViewActions: function (a) {
            f.getMenu().processWebViewActions(a);
            var b = f.getMenu().getOpenWindow(a);
            b && f.showActionBarForWindow(b, a.actions, a.elementId)
        },
        processBuyScreenInfo: function (a) {
            f.processBuyScreenInfo(a)
        },
        processBuyScreenItems: function (a) {
            f.processBuyScreenItems(a)
        },
        processAddBuyScreenItem: function (a) {
            f.processAddBuyScreenItem(a)
        },
        processRemoveBuyScreenItem: function (a) {
            f.processRemoveBuyScreenItem(a)
        },
        processUpdateTradePostCut: function (a) {
            f.processUpdateTradePostCut(a)
        },
        processTopicFolders: function (a) {
            j.data.topicFolders = a.topicFolders, f.getMenu().updateMessagesMenu(a)
        },
        processGetTopicsResponse: function (a) {
            f.getMenu().updateMessagesMenu(a)
        },
        processGetCommentsResponse: function (a) {
            f.getMenu().updateMessagesMenu(a)
        },
        processFolderUnreadCounts: function (a) {
            f.getMenu().updateMessagesMenu(a)
        },
        processNewComment: function (a) {
            f.getMenu().updateMessagesMenu(a)
        },
        processNewTopic: function (a) {
            f.getMenu().updateMessagesMenu(a)
        },
        processDeleteTopic: function (a) {
            f.getMenu().updateMessagesMenu(a)
        },
        processDeleteAllTopics: function (a) {
            f.getMenu().updateMessagesMenu(a)
        },
        processMarkFolderRead: function (a) {
            f.getMenu().updateMessagesMenu(a)
        },
        processMarkTopicRead: function (a) {
            f.getMenu().updateMessagesMenu(a)
        },
        processBuyItemsUrl: function (a, b, c) {
            f.showBuyInfoWindow()
        },
        processPlayerLists: function (a) {
            f.getMenu().updatePlayerMenu(a)
        },
        processPlayerResults: function (a) {
            f.getMenu().updatePlayerMenu(a)
        },
        processWaypointAdd: function (a) {
            f.processWaypointAdd(a)
        },
        processElementAttention: function (a) {
            f.processElementAttention(a)
        },
        processHelpTips: function (a) {
            f.getMenu().updateTutInfoMenu(a)
        },
        processHelpTipsEnabled: function (a) {
            f.getMenu().updateTutInfoMenu(a)
        },
        playerDied: function () {
            var a = this;
            f.playerDied(), clearTimeout(this._deathTimeout), this._deathTimeout = setTimeout(function () {
                a.doActionCommand("RESPAWN", j.data.yourId)
            }, parseInt(j.data.clientConfigs[g.CONFIGS.RESPAWN_TIME]) * 1e3);
            var b = j.data.yourId;
            b.toLowerCase() === "you" ? f.tutorialPlayerDied() : f.showDropDown(_("you_have_died", j.data.clientConfigs[g.CONFIGS.RESPAWN_TIME]), {
                hideDelay: j.data.clientConfigs[g.CONFIGS.RESPAWN_TIME] * 1e3
            })
        },
        processNewCommentUrl: function (b, c) {
            f.showNewCommentWindow(function (b) {
                var d = c.to;
                d = decodeURIComponent(d), a.post({
                    fullName: "PostNewComment1",
                    body: b,
                    topicID: d
                }, function (a) {})
            })
        },
        processNewTopicUrl: function (b, c) {
            var d = c ? decodeURIComponent(c.to).replace(/\+/g, " ") : null;
            f.showNewTopicWindow(d, function (b, c) {
                a.post({
                    fullName: "PostNewTopic1",
                    body: c,
                    receiverName: b
                }, function (a) {})
            })
        },
        processItemsUrl: function (a, b, c) {
            b ? f.getMenu().showMenu(a) : f.showItemsWindow()
        },
        processSkillsUrl: function (a, b) {
            (!b || b.length == 0) && f.getMenu().showMenu(a)
        },
        processCreateUrl: function (a, b, c) {
            !b || b.length == 0 ? f.getMenu().showMenu(a) : f.showCreateWindow(b.type)
        },
        processTopicsUrl: function (a, b, c) {
            f.getMenu().showMenu(a, b)
        },
        processCommentsUrl: function (a, b, c) {
            f.getMenu().showMenu(a, b)
        }
    }
}), console = {}, console.log = function () {}, console.error = function () {}, function (a) {
    function x() {
        var b = this.nodes;
        a.tmpl(null, null, null, this).insertBefore(b[0]), a(b).remove()
    }
    function w(b, c) {
        var d = this._wrap;
        return a.map(a(a.isArray(d) ? d.join("") : d).filter(b || "*"), function (a) {
            return c ? a.innerText || a.textContent : a.outerHTML || r(a)
        })
    }
    function v(b, c) {
        var d = b.options || {};
        d.wrapped = c;
        return a.tmpl(a.template(b.tmpl), b.data, d, b.item)
    }
    function u(b, c, d) {
        return a.tmpl(a.template(b), c, d, this)
    }
    function t(a, b, c, d) {
        if (!a) return k.pop();
        k.push({
            _: a,
            tmpl: b,
            item: this,
            data: c,
            options: d
        })
    }
    function s(b) {
        function p(b) {
            function p(a) {
                a = a + d, n = k[a] = k[a] || l(n, e[n.parent.key + d] || n.parent)
            }
            var g, h = b,
                m, n, o;
            if (o = b.getAttribute(c)) {
                while (h.parentNode && (h = h.parentNode).nodeType === 1 && !(g = h.getAttribute(c)));
                g !== o && (h = h.parentNode ? h.nodeType === 11 ? 0 : h.getAttribute(c) || 0 : 0, (n = e[o]) || (n = f[o], n = l(n, e[h] || f[h]), n.key = ++i, e[i] = n), j && p(o)), b.removeAttribute(c)
            } else j && (n = a.data(b, "tmplItem")) && (p(n.key), e[n.key] = n, h = a.data(b.parentNode, "tmplItem"), h = h ? h.key : 0);
            if (n) {
                m = n;
                while (m && m.key != h) m.nodes.push(b), m = m.parent;
                delete n._ctnt, delete n._wrap, a.data(b, "tmplItem", n)
            }
        }
        var d = "_" + j,
            g, h, k = {},
            m, n, o;
        for (m = 0, n = b.length; m < n; m++) {
            if ((g = b[m]).nodeType !== 1) continue;
            h = g.getElementsByTagName("*");
            for (o = h.length - 1; o >= 0; o--) p(h[o]);
            p(g)
        }
    }
    function r(a) {
        var b = document.createElement("div");
        b.appendChild(a.cloneNode(!0));
        return b.innerHTML
    }
    function q(a) {
        return a ? a.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
    }
    function p(b, c) {
        b._wrap = m(b, !0, a.isArray(c) ? c : [d.test(c) ? c : a(c).html()]).join("")
    }
    function o(b) {
        return new Function("jQuery", "$item", "var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" + a.trim(b).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function (b, c, d, e, f, g, h) {
            var i = a.tmpl.tag[d],
                j, k, l;
            if (!i) throw "Unknown template tag: " + d;
            j = i._default || [], g && !/\w$/.test(f) && (f += g, g = ""), f ? (f = q(f), h = h ? "," + q(h) + ")" : g ? ")" : "", k = g ? f.indexOf(".") > -1 ? f + q(g) : "(" + f + ").call($item" + h : f, l = g ? k : "(typeof(" + f + ")==='function'?(" + f + ").call($item):(" + f + "))") : l = k = j.$1 || "null", e = q(e);
            return "');" + i[c ? "close" : "open"].split("$notnull_1").join(f ? "typeof(" + f + ")!=='undefined' && (" + f + ")!=null" : "true").split("$1a").join(l).split("$1").join(k).split("$2").join(e || j.$2 || "") + "__.push('"
        }) + "');}return __;")
    }
    function n(b) {
        var c = document.createElement("div");
        c.innerHTML = b;
        return a.makeArray(c.childNodes)
    }
    function m(b, d, e) {
        var f, g = e ? a.map(e, function (a) {
            return typeof a == "string" ? b.key ? a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + c + '="' + b.key + '" $2') : a : m(a, b, a._ctnt)
        }) : b;
        if (d) return g;
        g = g.join(""), g.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function (b, c, d, e) {
            f = a(d).get(), s(f), c && (f = n(c).concat(f)), e && (f = f.concat(n(e)))
        });
        return f ? f : n(g)
    }
    function l(b, c, d, g) {
        var h = {
            data: g || g === 0 || g === !1 ? g : c ? c.data : {},
            _wrap: c ? c._wrap : null,
            tmpl: null,
            parent: c || null,
            nodes: [],
            calls: t,
            nest: u,
            wrap: v,
            html: w,
            update: x
        };
        b && a.extend(h, b, {
            nodes: [],
            parent: c
        }), d && (h.tmpl = d, h._ctnt = h._ctnt || h.tmpl(a, h), h.key = ++i, (k.length ? f : e)[i] = h);
        return h
    }
    var b = a.fn.domManip,
        c = "_tmplitem",
        d = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
        e = {},
        f = {},
        g, h = {
            key: 0,
            data: {}
        },
        i = 0,
        j = 0,
        k = [];
    a.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (b, c) {
        a.fn[b] = function (d) {
            var f = [],
                h = a(d),
                i, k, l, m, n = this.length === 1 && this[0].parentNode;
            g = e || {};
            if (n && n.nodeType === 11 && n.childNodes.length === 1 && h.length === 1) h[c](this[0]), f = this;
            else {
                for (k = 0, l = h.length; k < l; k++) j = k, i = (k > 0 ? this.clone(!0) : this).get(), a(h[k])[c](i), f = f.concat(i);
                j = 0, f = this.pushStack(f, b, h.selector)
            }
            m = g, g = null, a.tmpl.complete(m);
            return f
        }
    }), a.fn.extend({
        tmpl: function (b, c, d) {
            return a.tmpl(this[0], b, c, d)
        },
        tmplItem: function () {
            return a.tmplItem(this[0])
        },
        template: function (b) {
            return a.template(b, this[0])
        },
        domManip: function (c, d, f) {
            if (c[0] && a.isArray(c[0])) {
                var h = a.makeArray(arguments),
                    i = c[0],
                    k = i.length,
                    l = 0,
                    m;
                while (l < k && !(m = a.data(i[l++], "tmplItem")));
                m && j && (h[2] = function (b) {
                    a.tmpl.afterManip(this, b, f)
                }), b.apply(this, h)
            } else b.apply(this, arguments);
            j = 0, !g && a.tmpl.complete(e);
            return this
        }
    }), a.extend({
        tmpl: function (b, c, d, g) {
            var i, j = !g;
            if (j) g = h, b = a.template[b] || a.template(null, b), f = {};
            else if (!b) {
                b = g.tmpl, e[g.key] = g, g.nodes = [], g.wrapped && p(g, g.wrapped);
                return a(m(g, null, g.tmpl(a, g)))
            }
            if (!b) return [];
            typeof c == "function" && (c = c.call(g || {})), d && d.wrapped && p(d, d.wrapped), i = a.isArray(c) ? a.map(c, function (a) {
                return a ? l(d, g, b, a) : null
            }) : [l(d, g, b, c)];
            return j ? a(m(g, null, i)) : i
        },
        tmplItem: function (b) {
            var c;
            b instanceof a && (b = b[0]);
            while (b && b.nodeType === 1 && !(c = a.data(b, "tmplItem")) && (b = b.parentNode));
            return c || h
        },
        template: function (b, c) {
            if (c) {
                typeof c == "string" ? c = o(c) : c instanceof a && (c = c[0] || {}), c.nodeType && (c = a.data(c, "tmpl") || a.data(c, "tmpl", o(c.innerHTML)));
                return typeof b == "string" ? a.template[b] = c : c
            }
            return b ? typeof b != "string" ? a.template(null, b) : a.template[b] || a.template(null, d.test(b) ? b : a(b)) : null
        },
        encode: function (a) {
            return ("" + a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
        }
    }), a.extend(a.tmpl, {
        tag: {
            tmpl: {
                _default: {
                    $2: "null"
                },
                open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"
            },
            wrap: {
                _default: {
                    $2: "null"
                },
                open: "$item.calls(__,$1,$2);__=[];",
                close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
            },
            each: {
                _default: {
                    $2: "$index, $value"
                },
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": {
                open: "if(($notnull_1) && $1a){",
                close: "}"
            },
            "else": {
                _default: {
                    $1: "true"
                },
                open: "}else if(($notnull_1) && $1a){"
            },
            html: {
                open: "if($notnull_1){__.push($1a);}"
            },
            "=": {
                _default: {
                    $1: "$data"
                },
                open: "if($notnull_1){__.push($.encode($1a));}"
            },
            "!": {
                open: ""
            }
        },
        complete: function () {
            e = {}
        },
        afterManip: function (b, c, d) {
            var e = c.nodeType === 11 ? a.makeArray(c.childNodes) : c.nodeType === 1 ? [c] : [];
            d.call(b, c), s(e), j++
        }
    })
}(jQuery), function (a) {
    var b = a.tmpl.complete,
        c = a.fn.domManip;
    a.tmpl.complete = function (c) {
        var d;
        b(c);
        for (d in c) d = c[d], d.addedTmplItems && a.inArray(d, d.addedTmplItems) === -1 && d.addedTmplItems.push(d);
        for (d in c) d = c[d], d.rendered && d.rendered(d)
    }, a.extend({
        tmplCmd: function (b, c, d) {
            function g(a, b) {
                for (var c = [], d, e, f = b.length, g, h = 0, i = a.length; h < i;) {
                    g = a[h++];
                    for (e = 0; e < f;) d = b[e++], d.data === g && c.push(d)
                }
                return c
            }
            var e = [],
                f;
            c = a.isArray(c) ? c : [c];
            switch (b) {
            case "find":
                return g(c, d);
            case "replace":
                c.reverse()
            }
            a.each(d ? g(c, d) : c, function (c, g) {
                coll = g.nodes;
                switch (b) {
                case "update":
                    g.update();
                    break;
                case "remove":
                    a(coll).remove(), d && d.splice(a.inArray(g, d), 1);
                    break;
                case "replace":
                    f = f ? a(coll).insertBefore(f)[0] : a(coll).appendTo(coll[0].parentNode)[0], e.unshift(g)
                }
            });
            return e
        }
    }), a.fn.extend({
        domManip: function (b, d, e) {
            var f = b[1],
                g = b[0],
                h;
            if (b.length >= 2 && typeof f == "object" && !f.nodeType && !(f instanceof a)) {
                h = a.makeArray(arguments), h[0] = [a.tmpl(a.template(g), f, b[2], b[3])], h[2] = function (b) {
                    a.tmpl.afterManip(this, b, e)
                };
                return c.apply(this, h)
            }
            return c.apply(this, arguments)
        }
    })
}(jQuery);
var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser", this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version", this.OS = this.searchString(this.dataOS) || "an unknown OS"
    },
    searchString: function (a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b].string,
                d = a[b].prop;
            this.versionSearchString = a[b].versionSearch || a[b].identity;
            if (c) {
                if (c.indexOf(a[b].subString) != -1) return a[b].identity
            } else if (d) return a[b].identity
        }
    },
    searchVersion: function (a) {
        var b = a.indexOf(this.versionSearchString);
        if (b != -1) return parseFloat(a.substring(b + this.versionSearchString.length + 1))
    },
    dataBrowser: [{
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
    }, {
        string: navigator.userAgent,
        subString: "OmniWeb",
        versionSearch: "OmniWeb/",
        identity: "OmniWeb"
    }, {
        string: navigator.vendor,
        subString: "Apple",
        identity: "Safari",
        versionSearch: "Version"
    }, {
        prop: window.opera,
        identity: "Opera"
    }, {
        string: navigator.vendor,
        subString: "iCab",
        identity: "iCab"
    }, {
        string: navigator.vendor,
        subString: "KDE",
        identity: "Konqueror"
    }, {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
    }, {
        string: navigator.vendor,
        subString: "Camino",
        identity: "Camino"
    }, {
        string: navigator.userAgent,
        subString: "Netscape",
        identity: "Netscape"
    }, {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer",
        versionSearch: "MSIE"
    }, {
        string: navigator.userAgent,
        subString: "Gecko",
        identity: "Mozilla",
        versionSearch: "rv"
    }, {
        string: navigator.userAgent,
        subString: "Mozilla",
        identity: "Netscape",
        versionSearch: "Mozilla"
    }],
    dataOS: [{
        string: navigator.platform,
        subString: "Win",
        identity: "Windows"
    }, {
        string: navigator.platform,
        subString: "Mac",
        identity: "Mac"
    }, {
        string: navigator.userAgent,
        subString: "iPhone",
        identity: "iPhone/iPod"
    }, {
        string: navigator.platform,
        subString: "Linux",
        identity: "Linux"
    }]
};
BrowserDetect.init(), $.ajaxSetup({
    cache: !1
}), $.cloneObject = function (a) {
    var b = a instanceof Array ? [] : {};
    for (i in a) {
        if (i == "clone") continue;
        a[i] && typeof a[i] == "object" ? b[i] = $.cloneObject(a[i]) : b[i] = a[i]
    }
    return b
}, $.trim = function (a) {
    return a.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
}, jQuery.extend({
    postJSON: function (a, b, c) {
        return jQuery.ajax({
            type: "POST",
            url: a,
            data: JSON.stringify(b),
            success: c,
            dataType: "json",
            contentType: "application/json",
            processData: !1
        })
    }
}), jQuery.cookie = function (a, b, c) {
    if (arguments.length > 1 && String(b) !== "[object Object]") {
        c = jQuery.extend({}, c);
        if (b === null || b === undefined) c.expires = -1;
        if (typeof c.expires == "number") {
            var d = c.expires,
                e = c.expires = new Date;
            e.setDate(e.getDate() + d)
        }
        b = String(b);
        return document.cookie = [encodeURIComponent(a), "=", c.raw ? b : encodeURIComponent(b), c.expires ? "; expires=" + c.expires.toUTCString() : "", c.path ? "; path=" + c.path : "", c.domain ? "; domain=" + c.domain : "", c.secure ? "; secure" : ""].join("")
    }
    c = b || {};
    var f, g = c.raw ?
    function (a) {
        return a
    } : decodeURIComponent;
    return (f = (new RegExp("(?:^|; )" + encodeURIComponent(a) + "=([^;]*)")).exec(document.cookie)) ? g(f[1]) : null
}, function (a) {
    var b = [],
        c = [];
    a.fn.dropDown = function (d) {
        if (typeof d != "string") {
            var e = a.extend({}, a.fn.dropDown.defaults, d);
            return this.each(function () {
                var f = a(this),
                    g = '<div class="' + e.className + " " + e.typeClassName + ' clearfix"><div class="dropdown-top"></div><div class="dropdown-content">';
                e.imageHtml ? g += '<div class="dropdown-images">' + e.imageHtml + '</div><div class="dropdown-text-image">' + d.text + "</div>" : g += '<div class="dropdown-text">' + d.text + "</div>", e.canClose && (g += '<a href="#" class="dropdown-close"></a>'), g += '</div><div class="dropdown-bottom"></div></div>', dropDown = a(g), e.canClose ? a(".dropdown-close", dropDown).click(a.proxy(function () {
                    var d = this;
                    if (e.closeHandler()) {
                        var f, g, h;
                        a(b).each(function (a) {
                            if (this == d) {
                                f = b.splice(a, 1)[0], g = c.splice(a, 1)[0], h = a;
                                return !1
                            }
                        }), g && clearTimeout(g), f.slideUp(e.upSpeed, function () {
                            f.remove(), a(b).each(function (a) {
                                a >= h && this.css({
                                    "margin-top": this.css("margin-top").replace("px", "") - this.outerHeight() + "px"
                                })
                            })
                        }), e.onClose.call(this)
                    }
                    return !1
                }, dropDown)) : a(".dropdown-close", dropDown).hide(), a(".dropdown-content a", dropDown).click(function (a) {
                    a.stopPropagation();
                    return !0
                }), a(".dropdown-content", dropDown).click(function () {
                    e.onClick.call(this);
                    return !1
                });
                var h = f.height();
                a("body").append(dropDown);
                if (e.isDown) {
                    if (b.length >= 1) {
                        var i = 0;
                        for (var j = 0; j < b.length; j++) {
                            var k = b[j];
                            i += k.outerHeight()
                        }
                        dropDown.css({
                            top: h + "px",
                            marginTop: i + 10 + "px"
                        })
                    } else dropDown.css({
                        top: h + "px",
                        marginTop: "5px"
                    });
                    dropDown.slideDown(e.downSpeed, function () {
                        e.hideDelay >= 0 && c.push(setTimeout(function () {
                            var d = b.shift();
                            c.shift(), d && d.slideUp(e.upSpeed, function () {
                                var c = d.outerHeight();
                                d.remove(), a(b).each(function () {
                                    this.css({
                                        marginTop: parseInt(this.css("marginTop")) - c + "px"
                                    })
                                }), e.onClose.call(this)
                            })
                        }, Math.max(e.hideDelay, 0)))
                    })
                }
                b.push(dropDown)
            })
        }
        if (d == "closeAll") {
            var e = a.fn.dropDown.defaults;
            b = [], a(c).each(function () {
                clearTimeout(this)
            }), c = [], a(".dropdown").remove();
            return this.each(function () {
                e.onClose.call(this)
            })
        }
    }, a.fn.dropDown.defaults = {
        className: "dropdown",
        typeClassName: "dropdown-normal",
        text: "",
        imageHtml: null,
        downSpeed: 300,
        upSpeed: 300,
        hideDelay: 5e3,
        isDown: !0,
        canClose: !0,
        onClose: function () {},
        onClick: function () {},
        closeHandler: function () {
            return !0
        }
    }
}(jQuery), function (a) {
    a.fn.bubbleAnimate = function (b) {
        var c = a.extend({}, a.fn.bubbleAnimate.defaults, b);
        return this.each(function () {
            if (c.amount != 0) {
                var b = a(this),
                    d = c.amount >= 0 ? [1, "+", c.upClassName] : [-1, "-", c.downClassName],
                    e = Math.abs(c.amount),
                    f = a('<div class="bubble ' + d[2] + '">' + d[1] + " " + e + "</div>"),
                    g = b.offset(),
                    h = g.left,
                    i = g.top,
                    j = b.outerWidth();
                a("body").append(f);
                var k = h - f.outerWidth() / 2,
                    l = i - 60;
                f.css({
                    opacity: 1,
                    left: k + "px",
                    top: l + "px"
                }), console.log("setting target at " + h + ", " + i), f.animate({
                    top: "-=40px",
                    opacity: 0
                }, 3e3, function () {
                    f.remove()
                })
            }
        })
    }, a.fn.bubbleAnimate.defaults = {
        className: "bubble-default",
        upClassName: "bubble-default-up",
        downClassName: "bubble-default-down",
        amount: 0
    }
}(jQuery), function (a) {
    a.translateAll = function () {
        return a("span[data-i]").each(function () {
            a(this).html(_(a(this).data("i")))
        })
    }, a.fn.translate = function () {
        return a("span[data-i]", this).each(function () {
            a(this).html(_(a(this).data("i")))
        })
    }
}(jQuery), require(["game"], function (a) {
    a.init(), $(document).ready(function () {
        a.load()
    })
}), define("main", function () {})