/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/build";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(9);
	module.exports = __webpack_require__(13);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Created by gaojun on 15/12/10.
	 */

	'use strict';

	/**
	 * 基础配置
	 * @type {*|exports|module.exports}
	 */
	global.config = __webpack_require__(19);
	global['enum'] = __webpack_require__(23);

	var dep_vars = ['ng-admin', 'ngCookies', 'http-auth-interceptor', 'LocalStorageModule'];

	var app = angular.module('jframe', dep_vars);

	// custom API flavor
	var apiFlavor = __webpack_require__(2);
	app.config(['RestangularProvider', apiFlavor.requestInterceptor]);
	app.config(['RestangularProvider', apiFlavor.responseInterceptor]);

	/**
	 * 路由模块
	 */
	app.config(['$urlRouterProvider', '$stateProvider', __webpack_require__(3)]);

	/**
	 * 运行监听
	 */
	__webpack_require__(4)(app);

	/**
	 * controllers,services,directives,filters
	 */
	__webpack_require__(6)(app);
	__webpack_require__(14)(app);
	__webpack_require__(17)(app);
	__webpack_require__(18)(app);

	/**
	 * 基础实体配置
	 */
	app.config(['NgAdminConfigurationProvider', __webpack_require__(21)]);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Created by gaojun on 15/12/10.
	 */

	'use strict';

	var requestInterceptor = function requestInterceptor(RestangularProvider) {
	  // use the custom query parameters function to format the API request correctly
	  RestangularProvider.addFullRequestInterceptor(function (element, operation, what, url, headers, params) {
	    if (operation == "getList") {
	      // custom pagination params
	      //if (params._page) {
	      //  params._start = (params._page - 1) * params._perPage;
	      //  params._end = params._page * params._perPage;
	      //}
	      //delete params._page;
	      //delete params._perPage;
	      // custom sort params
	      if (params._sortField) {
	        params._sort = params._sortField;
	        params._order = params._sortDir;
	        delete params._sortField;
	        delete params._sortDir;
	      }
	      // custom filters
	      if (params._filters) {
	        for (var filter in params._filters) {
	          params[filter] = params._filters[filter];
	        }
	        delete params._filters;
	      }
	    }
	    return { params: params };
	  });
	};

	var responseInterceptor = function responseInterceptor(RestangularProvider) {
	  RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response) {
	    if (operation == "getList") {
	      response.totalCount = response.headers('Content-Range');
	      //response.totalCount = contentRange;
	    } else if (operation == "remove") {}
	    return data;
	  });
	};

	module.exports = {
	  requestInterceptor: requestInterceptor,
	  responseInterceptor: responseInterceptor
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Created by gaojun on 15/12/11.
	 */

	'use strict';

	var route = function route($urlRouterProvider, $stateProvider) {
	  $stateProvider.state('login', {
	    url: '/login',
	    templateUrl: '/views/login.html',
	    controller: 'loginCtrl'
	  });

	  $stateProvider.state('404', {
	    url: '/404',
	    templateUrl: '/views/404.html'
	  });

	  $urlRouterProvider.when('', '/login');
	  $urlRouterProvider.otherwise('/404');
	};

	module.exports = route;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by gaojun on 15/12/11.
	 */

	'use strict';

	module.exports = function (app) {
	  app.run(['$rootScope', '$location', __webpack_require__(5)]);
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Created by gaojun on 15/12/11.
	 */

	'use strict';

	var fn = function fn($rootScope, $location) {
	  /**
	   * 登陆监听，如果没有登陆，则跳转登陆页面
	   *
	   * @param event
	   * @param toState
	   */
	  function routeChangeStart(event, toState) {
	    //console.log(toState);
	    if (("login" != toState.name || "404" != toState.name) && !$rootScope.islogin) {
	      $location.path('login'); //设置路由地址
	    }
	  }

	  $rootScope.$on('$stateChangeStart', routeChangeStart);
	};

	module.exports = fn;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by gaojun on 15/12/11.
	 */

	'use strict';

	module.exports = function (app) {
	  app.controller('appCtrl', __webpack_require__(7));

	  app.controller('loginCtrl', __webpack_require__(8));
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Created by gaojun on 15/12/11.
	 */

	'use strict';

	var appCtrl = function appCtrl($rootScope, $scope, $state, authSrv, menuSrv) {
	  $rootScope.islogin = false;
	  $rootScope.user = {};

	  /**
	   * userInit function
	   */
	  $rootScope.userInit = function () {
	    if (authSrv.isLogin()) {
	      $rootScope.$broadcast('event:auth-loginConfirmed', status);
	    } else {
	      $rootScope.$broadcast('event:auth-loginRequired', status);
	    }
	  };

	  /**
	   * 用户登出
	   */
	  $scope.logout = function () {
	    authSrv.logout();
	  };

	  /**
	   * 登陆后的初始化
	   */
	  $rootScope.init = function () {
	    // 根据权限动态添加菜单
	    //menuSrv.reloadMenu();
	  };

	  $scope.$on('event:auth-loginRequired', function (e, rejection) {
	    console.log('handling login required');
	    $rootScope.islogin = false;
	    $state.go('login');
	  });

	  $scope.$on('event:auth-loginConfirmed', function () {
	    $rootScope.islogin = true;

	    $rootScope.user = authSrv.getUserInfo();

	    // 初始化
	    $rootScope.init();

	    $state.go('dashboard');
	  });

	  $scope.$on('event:auth-login-failed', function (e, status) {
	    var error = "Login failed.";
	    if (status == 401) {
	      error = "Invalid Username or Password.";
	    }
	    $scope.message = error;
	  });

	  $scope.$on('event:auth-logout-complete', function () {
	    console.log("logout complete");
	    $rootScope.islogin = false;
	    $rootScope.user = {};
	    $state.go('login');
	    //$state.go('app.home', {}, {reload: true, inherit: false});
	  });

	  $scope.$on('event:menus-changed', function (e, menus) {
	    // 更新菜单数据
	    if (!_.isUndefined(menus) && !_.isNull(menus)) {
	      menuSrv.setMenusInfo(menus);
	    }

	    // 重载菜单
	    menuSrv.reloadMenu();
	  });
	};

	appCtrl.$inject = ['$rootScope', '$scope', '$state', 'authSrv', 'menuSrv'];

	module.exports = appCtrl;

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Created by gaojun on 15/12/11.
	 */

	'use strict';

	var loginCtrl = function loginCtrl($rootScope, $scope, $state, authSrv) {
	  $scope.user = {
	    username: '',
	    password: ''
	  };

	  /**
	   * 用户登陆
	   */
	  $scope.login = function () {
	    $scope.message = "";

	    authSrv.login($scope.user);
	  };
	};

	loginCtrl.$inject = ['$rootScope', '$scope', '$state', 'authSrv'];

	module.exports = loginCtrl;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by gaojun on 15/12/11.
	 */

	'use strict';

	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);

/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
	 AngularJS v1.4.8
	 (c) 2010-2015 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	"use strict";

	(function (p, c, n) {
	  'use strict';function l(b, a, g) {
	    var d = g.baseHref(),
	        k = b[0];return function (b, e, f) {
	      var g, h;f = f || {};h = f.expires;g = c.isDefined(f.path) ? f.path : d;c.isUndefined(e) && (h = "Thu, 01 Jan 1970 00:00:00 GMT", e = "");c.isString(h) && (h = new Date(h));e = encodeURIComponent(b) + "=" + encodeURIComponent(e);e = e + (g ? ";path=" + g : "") + (f.domain ? ";domain=" + f.domain : "");e += h ? ";expires=" + h.toUTCString() : "";e += f.secure ? ";secure" : "";f = e.length + 1;4096 < f && a.warn("Cookie '" + b + "' possibly not set or overflowed because it was too large (" + f + " > 4096 bytes)!");k.cookie = e;
	    };
	  }c.module("ngCookies", ["ng"]).provider("$cookies", [function () {
	    var b = this.defaults = {};this.$get = ["$$cookieReader", "$$cookieWriter", function (a, g) {
	      return { get: function get(d) {
	          return a()[d];
	        }, getObject: function getObject(d) {
	          return (d = this.get(d)) ? c.fromJson(d) : d;
	        }, getAll: function getAll() {
	          return a();
	        }, put: function put(d, a, m) {
	          g(d, a, m ? c.extend({}, b, m) : b);
	        }, putObject: function putObject(d, b, a) {
	          this.put(d, c.toJson(b), a);
	        }, remove: function remove(a, k) {
	          g(a, n, k ? c.extend({}, b, k) : b);
	        } };
	    }];
	  }]);c.module("ngCookies").factory("$cookieStore", ["$cookies", function (b) {
	    return { get: function get(a) {
	        return b.getObject(a);
	      }, put: function put(a, c) {
	        b.putObject(a, c);
	      }, remove: function remove(a) {
	        b.remove(a);
	      } };
	  }]);l.$inject = ["$document", "$log", "$browser"];c.module("ngCookies").provider("$$cookieWriter", function () {
	    this.$get = l;
	  });
	})(window, window.angular);
	//# sourceMappingURL=angular-cookies.min.js.map

/***/ },
/* 11 */
/***/ function(module, exports) {

	/*global angular:true, browser:true */

	/**
	 * @license HTTP Auth Interceptor Module for AngularJS
	 * (c) 2012 Witold Szczerba
	 * License: MIT
	 */
	'use strict';

	(function () {
	  'use strict';

	  angular.module('http-auth-interceptor', ['http-auth-interceptor-buffer']).factory('authService', ['$rootScope', 'httpBuffer', function ($rootScope, httpBuffer) {
	    return {
	      /**
	       * Call this function to indicate that authentication was successfull and trigger a
	       * retry of all deferred requests.
	       * @param data an optional argument to pass on to $broadcast which may be useful for
	       * example if you need to pass through details of the user that was logged in
	       * @param configUpdater an optional transformation function that can modify the
	       * requests that are retried after having logged in.  This can be used for example
	       * to add an authentication token.  It must return the request.
	       */
	      loginConfirmed: function loginConfirmed(data, configUpdater) {
	        var updater = configUpdater || function (config) {
	          return config;
	        };
	        $rootScope.$broadcast('event:auth-loginConfirmed', data);
	        httpBuffer.retryAll(updater);
	      },

	      /**
	       * Call this function to indicate that authentication should not proceed.
	       * All deferred requests will be abandoned or rejected (if reason is provided).
	       * @param data an optional argument to pass on to $broadcast.
	       * @param reason if provided, the requests are rejected; abandoned otherwise.
	       */
	      loginCancelled: function loginCancelled(data, reason) {
	        httpBuffer.rejectAll(reason);
	        $rootScope.$broadcast('event:auth-loginCancelled', data);
	      }
	    };
	  }])

	  /**
	   * $http interceptor.
	   * On 401 response (without 'ignoreAuthModule' option) stores the request
	   * and broadcasts 'event:auth-loginRequired'.
	   * On 403 response (without 'ignoreAuthModule' option) discards the request
	   * and broadcasts 'event:auth-forbidden'.
	   */
	  .config(['$httpProvider', function ($httpProvider) {
	    $httpProvider.interceptors.push(['$rootScope', '$q', 'httpBuffer', function ($rootScope, $q, httpBuffer) {
	      return {
	        responseError: function responseError(rejection) {
	          var config = rejection.config || {};
	          if (!config.ignoreAuthModule) {
	            switch (rejection.status) {
	              case 401:
	                var deferred = $q.defer();
	                httpBuffer.append(config, deferred);
	                $rootScope.$broadcast('event:auth-loginRequired', rejection);
	                return deferred.promise;
	              case 403:
	                $rootScope.$broadcast('event:auth-forbidden', rejection);
	                break;
	            }
	          }
	          // otherwise, default behaviour
	          return $q.reject(rejection);
	        }
	      };
	    }]);
	  }]);

	  /**
	   * Private module, a utility, required internally by 'http-auth-interceptor'.
	   */
	  angular.module('http-auth-interceptor-buffer', []).factory('httpBuffer', ['$injector', function ($injector) {
	    /** Holds all the requests, so they can be re-requested in future. */
	    var buffer = [];

	    /** Service initialized later because of circular dependency problem. */
	    var $http;

	    function retryHttpRequest(config, deferred) {
	      function successCallback(response) {
	        deferred.resolve(response);
	      }
	      function errorCallback(response) {
	        deferred.reject(response);
	      }
	      $http = $http || $injector.get('$http');
	      $http(config).then(successCallback, errorCallback);
	    }

	    return {
	      /**
	       * Appends HTTP request configuration object with deferred response attached to buffer.
	       */
	      append: function append(config, deferred) {
	        buffer.push({
	          config: config,
	          deferred: deferred
	        });
	      },

	      /**
	       * Abandon or reject (if reason provided) all the buffered requests.
	       */
	      rejectAll: function rejectAll(reason) {
	        if (reason) {
	          for (var i = 0; i < buffer.length; ++i) {
	            buffer[i].deferred.reject(reason);
	          }
	        }
	        buffer = [];
	      },

	      /**
	       * Retries all the buffered requests clears the buffer.
	       */
	      retryAll: function retryAll(updater) {
	        for (var i = 0; i < buffer.length; ++i) {
	          retryHttpRequest(updater(buffer[i].config), buffer[i].deferred);
	        }
	        buffer = [];
	      }
	    };
	  }]);
	})();

/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * An Angular module that gives you access to the browsers local storage
	 * @version v0.2.3 - 2015-10-11
	 * @link https://github.com/grevory/angular-local-storage
	 * @author grevory <greg@gregpike.ca>
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */"use strict";

	!(function (a, b) {
	  "use strict";var c = b.isDefined,
	      d = b.isUndefined,
	      e = b.isNumber,
	      f = b.isObject,
	      g = b.isArray,
	      h = b.extend,
	      i = b.toJson,
	      j = b.module("LocalStorageModule", []);j.provider("localStorageService", function () {
	    this.prefix = "ls", this.storageType = "localStorage", this.cookie = { expiry: 30, path: "/" }, this.notify = { setItem: !0, removeItem: !1 }, this.setPrefix = function (a) {
	      return this.prefix = a, this;
	    }, this.setStorageType = function (a) {
	      return this.storageType = a, this;
	    }, this.setStorageCookie = function (a, b) {
	      return this.cookie.expiry = a, this.cookie.path = b, this;
	    }, this.setStorageCookieDomain = function (a) {
	      return this.cookie.domain = a, this;
	    }, this.setNotify = function (a, b) {
	      return this.notify = { setItem: a, removeItem: b }, this;
	    }, this.$get = ["$rootScope", "$window", "$document", "$parse", function (a, b, j, k) {
	      var l,
	          m = this,
	          n = m.prefix,
	          o = m.cookie,
	          p = m.notify,
	          q = m.storageType;j ? j[0] && (j = j[0]) : j = document, "." !== n.substr(-1) && (n = n ? n + "." : "");var r = function r(a) {
	        return n + a;
	      },
	          s = (function () {
	        try {
	          var c = q in b && null !== b[q],
	              d = r("__" + Math.round(1e7 * Math.random()));return c && (l = b[q], l.setItem(d, ""), l.removeItem(d)), c;
	        } catch (e) {
	          return q = "cookie", a.$broadcast("LocalStorageModule.notification.error", e.message), !1;
	        }
	      })(),
	          t = function t(b, c) {
	        if ((c = d(c) ? null : i(c), !s || "cookie" === m.storageType)) return s || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), p.setItem && a.$broadcast("LocalStorageModule.notification.setitem", { key: b, newvalue: c, storageType: "cookie" }), z(b, c);try {
	          l && l.setItem(r(b), c), p.setItem && a.$broadcast("LocalStorageModule.notification.setitem", { key: b, newvalue: c, storageType: m.storageType });
	        } catch (e) {
	          return a.$broadcast("LocalStorageModule.notification.error", e.message), z(b, c);
	        }return !0;
	      },
	          u = function u(b) {
	        if (!s || "cookie" === m.storageType) return s || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), A(b);var c = l ? l.getItem(r(b)) : null;if (!c || "null" === c) return null;try {
	          return JSON.parse(c);
	        } catch (d) {
	          return c;
	        }
	      },
	          v = function v() {
	        var b, c;for (b = 0; b < arguments.length; b++) if ((c = arguments[b], s && "cookie" !== m.storageType)) try {
	          l.removeItem(r(c)), p.removeItem && a.$broadcast("LocalStorageModule.notification.removeitem", { key: c, storageType: m.storageType });
	        } catch (d) {
	          a.$broadcast("LocalStorageModule.notification.error", d.message), B(c);
	        } else s || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), p.removeItem && a.$broadcast("LocalStorageModule.notification.removeitem", { key: c, storageType: "cookie" }), B(c);
	      },
	          w = function w() {
	        if (!s) return a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), !1;var b = n.length,
	            c = [];for (var d in l) if (d.substr(0, b) === n) try {
	          c.push(d.substr(b));
	        } catch (e) {
	          return a.$broadcast("LocalStorageModule.notification.error", e.Description), [];
	        }return c;
	      },
	          x = function x(b) {
	        var c = n ? new RegExp("^" + n) : new RegExp(),
	            d = b ? new RegExp(b) : new RegExp();if (!s || "cookie" === m.storageType) return s || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), C();var e = n.length;for (var f in l) if (c.test(f) && d.test(f.substr(e))) try {
	          v(f.substr(e));
	        } catch (g) {
	          return a.$broadcast("LocalStorageModule.notification.error", g.message), C();
	        }return !0;
	      },
	          y = (function () {
	        try {
	          return b.navigator.cookieEnabled || "cookie" in j && (j.cookie.length > 0 || (j.cookie = "test").indexOf.call(j.cookie, "test") > -1);
	        } catch (c) {
	          return a.$broadcast("LocalStorageModule.notification.error", c.message), !1;
	        }
	      })(),
	          z = function z(b, c, h) {
	        if (d(c)) return !1;if (((g(c) || f(c)) && (c = i(c)), !y)) return a.$broadcast("LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED"), !1;try {
	          var k = "",
	              l = new Date(),
	              m = "";if ((null === c ? (l.setTime(l.getTime() + -864e5), k = "; expires=" + l.toGMTString(), c = "") : e(h) && 0 !== h ? (l.setTime(l.getTime() + 24 * h * 60 * 60 * 1e3), k = "; expires=" + l.toGMTString()) : 0 !== o.expiry && (l.setTime(l.getTime() + 24 * o.expiry * 60 * 60 * 1e3), k = "; expires=" + l.toGMTString()), b)) {
	            var n = "; path=" + o.path;o.domain && (m = "; domain=" + o.domain), j.cookie = r(b) + "=" + encodeURIComponent(c) + k + n + m;
	          }
	        } catch (p) {
	          return a.$broadcast("LocalStorageModule.notification.error", p.message), !1;
	        }return !0;
	      },
	          A = function A(b) {
	        if (!y) return a.$broadcast("LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED"), !1;for (var c = j.cookie && j.cookie.split(";") || [], d = 0; d < c.length; d++) {
	          for (var e = c[d]; " " === e.charAt(0);) e = e.substring(1, e.length);if (0 === e.indexOf(r(b) + "=")) {
	            var f = decodeURIComponent(e.substring(n.length + b.length + 1, e.length));try {
	              return JSON.parse(f);
	            } catch (g) {
	              return f;
	            }
	          }
	        }return null;
	      },
	          B = function B(a) {
	        z(a, null);
	      },
	          C = function C() {
	        for (var a = null, b = n.length, c = j.cookie.split(";"), d = 0; d < c.length; d++) {
	          for (a = c[d]; " " === a.charAt(0);) a = a.substring(1, a.length);var e = a.substring(b, a.indexOf("="));B(e);
	        }
	      },
	          D = function D() {
	        return q;
	      },
	          E = function E(a, b, d, e) {
	        e = e || b;var g = u(e);return null === g && c(d) ? g = d : f(g) && f(d) && (g = h(d, g)), k(b).assign(a, g), a.$watch(b, function (a) {
	          t(e, a);
	        }, f(a[b]));
	      },
	          F = function F() {
	        for (var a = 0, c = b[q], d = 0; d < c.length; d++) 0 === c.key(d).indexOf(n) && a++;return a;
	      };return { isSupported: s, getStorageType: D, set: t, add: t, get: u, keys: w, remove: v, clearAll: x, bind: E, deriveKey: r, length: F, cookie: { isSupported: y, set: z, add: z, get: A, remove: B, clearAll: C } };
	    }];
	  });
	})(window, window.angular);

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by gaojun on 15/12/11.
	 */

	'use strict';

	module.exports = function (app) {
	  app.factory('authSrv', __webpack_require__(15));

	  app.factory('reqSrv', __webpack_require__(16));

	  app.factory('menuSrv', __webpack_require__(31));
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Created by gaojun on 15/12/11.
	 */

	'use strict';

	var authSrv = function authSrv($rootScope, $http, authService, localStorageService, reqSrv, $state) {
	  var user = {},
	      role = {};

	  function getUserInfo() {
	    return user;
	  }

	  function getRoleInfo() {
	    return role;
	  }

	  function isLogin() {
	    return !_.isUndefined(user) && null != user && "" != user && 0 < _.size(user);
	  }

	  var login = function login(user) {
	    var promise = reqSrv.login(user);

	    promise.success(function (data, status, headers, config) {
	      if (0 == data.ret) {
	        user = data.user;
	        role = data.role;

	        // 菜单变更事件
	        $rootScope.$broadcast('event:menus-changed', data.menus);

	        //$http.defaults.headers.common.Authorization = user.authToken;  // Step 1
	        // A more secure approach would be to store the token in SharedPreferences for Android, and Keychain for iOS
	        localStorageService.set('authorizationToken', user.authToken);
	        localStorageService.set('userdata', user);
	        localStorageService.set('roledata', data.role);
	        localStorageService.set('menudata', data.menus);
	        localStorageService.set('logintime', Date.parse(new Date()));

	        // Need to inform the http-auth-interceptor that
	        // the user has logged in successfully.  To do this, we pass in a function that
	        // will configure the request headers with the authorization token so
	        // previously failed requests(aka with status == 401) will be resent with the
	        // authorization token placed in the header
	        authService.loginConfirmed(data, function (config) {
	          // Step 2 & 3
	          config.headers.Authorization = user.authToken;
	          return config;
	        });

	        $rootScope.islogin = true;
	      } else {
	        status = 401;
	        $rootScope.$broadcast('event:auth-login-failed', status);
	      }
	    }).error(function (data, status, headers, config) {
	      status = 401;
	      $rootScope.$broadcast('event:auth-login-failed', status);
	    });
	  };

	  var logout = function logout() {
	    var promise = reqSrv.logout();
	    promise['finally'](function (data) {
	      user = {};

	      localStorageService.remove('authorizationToken');
	      localStorageService.remove('userdata');
	      localStorageService.remove('roledata');
	      localStorageService.remove('menudata');
	      //delete $http.defaults.headers.common.Authorization;

	      $rootScope.islogin = false;

	      $rootScope.$broadcast('event:auth-logout-complete');
	    });
	  };

	  var loginCancelled = function loginCancelled() {
	    authService.loginCancelled();
	  };

	  function init() {
	    if (localStorageService.get('authorizationToken')) {
	      var lasttime = localStorageService.get('logintime') || 0;
	      var now = Date.parse(new Date());
	      // 超时，需要重新登录
	      if (now - lasttime > config.cookie_expiration_time) {
	        user = null;
	      } else {
	        user = localStorageService.get('userdata');
	        role = localStorageService.get('roledata');
	      }
	    }
	  }

	  init();

	  return {
	    login: login,
	    logout: logout,
	    loginCancelled: loginCancelled,
	    getUserInfo: getUserInfo,
	    getRoleInfo: getRoleInfo,
	    isLogin: isLogin
	  };
	};

	authSrv.$inject = ['$rootScope', '$http', 'authService', 'localStorageService', 'reqSrv', '$state'];

	module.exports = authSrv;

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Created by gaojun on 15/12/11.
	 */

	'use strict';

	var reqSrv = function reqSrv($http) {
	  var host = config.local_url;
	  return {
	    // login request
	    login: function login(user) {
	      return $http.post(host + 'login', { user: user }, { ignoreAuthModule: true });
	    },
	    // logout request
	    logout: function logout() {
	      return $http.post(host + 'logout', {}, { ignoreAuthModule: true });
	    },
	    // game request
	    game: function game() {
	      return $http.post(host + 'game', {});
	    }
	  };
	};

	reqSrv.$inject = ['$http'];

	module.exports = reqSrv;

/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Created by gaojun on 15/12/11.
	 */

	'use strict';

	module.exports = function (app) {};

/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Created by gaojun on 15/12/11.
	 */

	'use strict';

	module.exports = function (app) {};

/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Created by gaojun on 15/12/11.
	 */

	'use strict';

	module.exports = {
	  // name
	  name: "JFrame",

	  /**
	   * 服务器ip
	   */
	  local_url: "http://localhost:3333/",

	  // deafult cookie name
	  cookie_user_name: "JFRAME_USER_COOKIE",

	  /*
	   * default cookie expire time
	   * default value : 30 minutes
	   */
	  cookie_expiration_time: 30 * 60 * 1000,

	  /*
	   * 默认每页数据条数，20
	   */
	  default_perpage: 20,
	  /**
	   * 默认排序方式,ASC升序
	   */
	  default_order: "ASC" };
	// DESC

/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Created by gaojun on 15/12/11.
	 */

	'use strict';

	module.exports = function (nga) {
	  // create an admin application
	  var admin = nga.application(config.name).baseApiUrl('/data/'); // main API endpoint

	  // 将 admin 和 nga对象设为全局
	  global.admin = admin;
	  global.nga = nga;

	  // add entities
	  admin.addEntity(__webpack_require__(22));

	  admin.addEntity(__webpack_require__(33));
	  admin.addEntity(__webpack_require__(32));
	  admin.addEntity(__webpack_require__(34));

	  // 页头
	  admin.header(__webpack_require__(25));
	  // 首页
	  admin.dashboard(__webpack_require__(26)());
	  // 菜单在登录之后动态生成

	  nga.configure(admin);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Created by gaojun on 15/12/11.
	 */

	'use strict';

	var userinfo = nga.entity('userinfo');

	userinfo.listView().fields([nga.field('name'), nga.field('username'), nga.field('email')]);

	module.exports = userinfo;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by gaojun on 15/12/12.
	 */

	'use strict';

	module.exports = {
	  ret: __webpack_require__(24)
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * Created by gaojun on 15/11/3.
	 */

	'use strict';

	module.exports = {
	  /*
	   * 返回标识
	   * 基础 		-1 -> -100
	   * 用户 		-101 -> -200
	   */

	  // 基础 		-1 -> -100
	  SUCCESS: 0, // 成功
	  ERROR: -1, // 错误
	  PARAM_ERROR: -2, // 参数有误
	  INNER_ERROR: -99, // 内部异常

	  // 用户 		-101 -> -200
	  USER_PW_UNEQUAL: -101, // 两次密码不一致
	  USER_EMAIL_REG: -102, // 邮箱规则错误
	  USER_EMAIL_EXIST: -103, // 邮箱已存在
	  USER_EMAIL_SRV: -104, // 邮件服务器错误
	  USER_NO_EXIST: -105, // 用户不存在
	  USER_TOKEN_ERROR: -106 };
	// token失效

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<div class=\"navbar-header\">\n  <button type=\"button\" class=\"navbar-toggle\" ng-click=\"isCollapsed = !isCollapsed\">\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\" ng-click=\"appController.displayHome()\">JFrame Admin</a>\n</div>\n<ul class=\"nav navbar-top-links navbar-right hidden-xs\">\n  <!--<li>-->\n    <!--<a href=\"https://github.com/marmelab/ng-admin-demo\">-->\n      <!--<i class=\"fa fa-github fa-lg\"></i>&nbsp;Source-->\n    <!--</a>-->\n  <!--</li>-->\n  <li dropdown>\n    <a dropdown-toggle href=\"#\" aria-expanded=\"true\">\n      <i class=\"fa fa-user fa-lg\"></i>&nbsp;{{ user.nickname }}&nbsp;<i class=\"fa fa-caret-down\"></i>\n    </a>\n    <ul class=\"dropdown-menu dropdown-user\" role=\"menu\">\n      <li><a href=\"#\" ng-click=\"logout()\"><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a></li>\n    </ul>\n  </li>\n</ul>\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by gaojun on 15/12/12.
	 */

	'use strict';

	module.exports = function () {
	  return nga.dashboard().template(__webpack_require__(27));
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row dashboard-content\">\n  <div class=\"col-lg-6\">\n    <div style=\"text-align: center\"><h1>JFrame 后台管理系统</h1></div>\n  </div>\n</div>\n";

/***/ },
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ function(module, exports) {

	/**
	 * Created by gaojun on 15/12/11.
	 */

	'use strict';

	var menuSrv = function menuSrv($rootScope, authSrv, localStorageService) {
	  var menus = [];

	  function setMenusInfo(newMenus) {
	    menus = newMenus;
	  }

	  function getMenusInfo() {
	    return menus;
	  }

	  function reloadMenu() {
	    // 获取用户角色及对应菜单权限
	    var roleInfo = authSrv.getRoleInfo();
	    var menuLimit = roleInfo.menu;

	    var fatherMenus = [];
	    var sonMenus = {};
	    _.forEach(menus, function (menuItem) {
	      // 父节点
	      if (0 == menuItem.parent) {
	        fatherMenus.push(menuItem);
	      }
	      // 子节点
	      else {
	          var items = sonMenus['' + menuItem.parent];
	          if (_.isUndefined(items) || _.isNull(items)) {
	            sonMenus['' + menuItem.parent] = [];
	          }
	          sonMenus['' + menuItem.parent].push(menuItem);
	        }
	    });

	    // 获取menu对象
	    var menu = nga.menu();

	    // 遍历所有父节点
	    _.forEach(fatherMenus, function (fatherMenu) {
	      // 该用户有权限
	      if (_.isEqual('*', menuLimit) || 0 <= menuLimit.indexOf(',' + fatherMenu.id + ',')) {
	        var fmenu;
	        // 绑定实体
	        if (1 == fatherMenu.isEntity) {
	          fmenu = nga.menu(nga.entity(fatherMenu.key));
	        } else {
	          fmenu = nga.menu();
	          //fmenu.link(fatherMenu.link);
	          if (_.isUndefined(fatherMenu.link) || _.isNull(fatherMenu.link) || _.isEqual('', fatherMenu.link)) {
	            //fmenu.link('');
	          } else {
	              fmenu.link(fatherMenu.link);
	            }

	          if (_.isUndefined(fatherMenu.icon) || _.isNull(fatherMenu.icon) || _.isEqual('', fatherMenu.icon)) {
	            fmenu.icon('<span class="glyphicon glyphicon-list ng-scope"></span>');
	          } else {
	            fmenu.icon('<span class="' + fatherMenu.icon + '"></span>');
	          }

	          fmenu.active(function (path) {
	            return path.indexOf('/null') === 0;
	          });
	        }
	        fmenu.title(fatherMenu.name);

	        //// 子菜单
	        _.forEach(sonMenus['' + fatherMenu.id], function (sonMenu) {
	          var smenu;
	          // 绑定实体
	          if (1 == sonMenu.isEntity) {
	            smenu = nga.menu(nga.entity(sonMenu.key));
	          } else {
	            smenu = nga.menu();
	            if (_.isUndefined(sonMenu.link) || _.isNull(sonMenu.link) || _.isEqual('', sonMenu.link)) {
	              //smenu.link('');
	            } else {
	                smenu.link(sonMenu.link);
	              }

	            if (_.isUndefined(sonMenu.icon) || _.isNull(sonMenu.icon) || _.isEqual('', sonMenu.icon)) {
	              smenu.icon('<span class="glyphicon glyphicon-list ng-scope"></span>');
	            } else {
	              smenu.icon('<span class="' + sonMenu.icon + '"></span>');
	            }

	            smenu.active(function (path) {
	              return path.indexOf('/null') === 0;
	            });
	          }
	          smenu.title(sonMenu.name);

	          fmenu.addChild(smenu);
	          //fmenu.addChild(nga.menu(nga.entity('userinfo')).title('用户管理'));
	        });

	        menu.addChild(fmenu);
	      }
	    });

	    // 修改菜单
	    admin.menu(menu);
	  }

	  function init() {
	    if (authSrv.isLogin()) {
	      menus = localStorageService.get('menudata');

	      reloadMenu();
	    }
	  }

	  init();

	  return {
	    getMenusInfo: getMenusInfo,
	    setMenusInfo: setMenusInfo,
	    reloadMenu: reloadMenu
	  };
	};

	menuSrv.$inject = ['$rootScope', 'authSrv', 'localStorageService'];

	module.exports = menuSrv;

/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * Created by gaojun on 15/12/11.
	 */

	'use strict';

	var GM_Menu = nga.entity('GM_Menu');

	// list
	GM_Menu.listView().title('Comments').perPage(config.default_perpage).sortDir(config.default_order).fields([nga.field('id').label('ID'), nga.field('name').label('菜单名称'), nga.field('key').label('实体key'),
	//nga.field('menu')
	//  .title('菜单层级'),
	nga.field('parent', 'reference').label('父菜单').targetEntity(GM_Menu).targetField(nga.field('name')), nga.field('isEntity', 'choice').label('绑定实体').choices([{ label: '否', value: 0 }, { label: '是', value: 1 }]), nga.field('indexNo').label('排序')]).listActions(['edit', 'delete']);

	// add
	GM_Menu.creationView().fields([nga.field('name').label('菜单名称').validation({ required: true, minlength: 1, maxlength: 20 }), nga.field('key').label('实体key').attributes({ placeholder: '绑定的实体key' }).validation({ minlength: 1, maxlength: 20 }),
	//nga.field('menu')
	//  .label('菜单层级')
	//  .validation({required: true}),
	//nga.field('parent', 'reference')
	//  .label('父菜单id')
	//  .targetEntity(menu) // Select a target Entity
	//  .targetField(nga.field('id')),
	nga.field('parent', 'number').label('父菜单id').attributes({ value: 0, placeholder: '没有父菜单则填0' }), nga.field('isEntity', 'choice').label('绑定实体').choices([{ label: '否', value: 0 }, { label: '是', value: 1 }]).validation({ required: true }), nga.field('link').label('关联页面').attributes({ placeholder: '如果绑定了实体则不填' }), nga.field('active').label('激活').attributes({ placeholder: '激活' }), nga.field('icon').label('图标').attributes({ placeholder: 'css class名称,多个用空格分隔' }), nga.field('indexNo', 'number').label('排序').validation({ required: true })]);

	// edit
	GM_Menu.editionView().title('Edit menu').actions(['list', 'delete']).fields([nga.field('id').label('菜单id').editable(false), nga.field('name').label('菜单名称').validation({ required: true, minlength: 1, maxlength: 20 }), nga.field('key').label('实体key').attributes({ placeholder: '绑定的实体key' }).validation({ minlength: 1, maxlength: 20 }), nga.field('parent', 'number').label('父菜单id').attributes({ value: 0, placeholder: '没有父菜单则填0' }), nga.field('isEntity', 'choice').label('绑定实体').choices([{ label: '否', value: 0 }, { label: '是', value: 1 }]).validation({ required: true }), nga.field('link').label('关联页面').attributes({ placeholder: '如果绑定了实体则不填' }), nga.field('active').label('激活').attributes({ placeholder: '激活' }), nga.field('icon').label('图标').attributes({ placeholder: 'css class名称,多个用空格分隔' }), nga.field('indexNo', 'number').label('排序').validation({ required: true })]);

	module.exports = GM_Menu;

/***/ },
/* 33 */
/***/ function(module, exports) {

	/**
	 * Created by gaojun on 15/12/11.
	 */

	'use strict';

	var GM_Role = nga.entity('GM_Role');

	// list
	GM_Role.listView().fields([nga.field('id'), nga.field('name'), nga.field('menu')]);

	module.exports = GM_Role;

/***/ },
/* 34 */
/***/ function(module, exports) {

	/**
	 * Created by gaojun on 15/12/11.
	 */

	'use strict';

	var GM_User = nga.entity('GM_User');

	GM_User.listView().fields([nga.field('id'), nga.field('username'), nga.field('nickname'), nga.field('role', 'reference').label('Role').targetEntity(admin.getEntity('GM_Role')).targetField(nga.field('name')), nga.field('state')]);

	// add
	GM_User.creationView().fields([nga.field('username').label('gm账号').validation({ required: true, minlength: 3, maxlength: 20 }), nga.field('password', 'password').label('gm密码').validation({ required: true }), nga.field('nickname').label('昵称').validation({ required: true, minlength: 1, maxlength: 20 }), nga.field('role', 'reference').label('角色').targetEntity(admin.getEntity('GM_Role')).targetField(nga.field('name')).validation({ required: true }), nga.field('state', 'choice').label('状态').choices([{ label: '禁用', value: 0 }, { label: '正常', value: 1 }]).validation({ required: true })]);

	// edit
	GM_User.editionView().actions(['list', 'delete']).fields([nga.field('id').label('gm用户id').editable(false), nga.field('username').label('gm账号').editable(false), nga.field('nickname').label('昵称').validation({ required: true, minlength: 1, maxlength: 20 }), nga.field('role', 'reference').label('角色').targetEntity(admin.getEntity('GM_Role')).targetField(nga.field('name')).validation({ required: true }), nga.field('state', 'choice').label('状态').choices([{ label: '禁用', value: 0 }, { label: '正常', value: 1 }]).validation({ required: true })]);

	module.exports = GM_User;

/***/ }
/******/ ]);