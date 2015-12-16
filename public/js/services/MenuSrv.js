/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var menuSrv = function ($rootScope, authSrv, localStorageService) {
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
        sonMenus['' + menuItem.parent].push(menuItem)
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
          if (_.isUndefined(fatherMenu.link)
            || _.isNull(fatherMenu.link)
            || _.isEqual('', fatherMenu.link)) {
            //fmenu.link('');
          } else {
            fmenu.link(fatherMenu.link);
          }

          if (_.isUndefined(fatherMenu.icon)
            || _.isNull(fatherMenu.icon)
            || _.isEqual('', fatherMenu.icon)) {
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
            if (_.isUndefined(sonMenu.link)
              || _.isNull(sonMenu.link)
              || _.isEqual('', sonMenu.link)) {
              //smenu.link('');
            } else {
              smenu.link(sonMenu.link);
            }

            if (_.isUndefined(sonMenu.icon)
              || _.isNull(sonMenu.icon)
              || _.isEqual('', sonMenu.icon)) {
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
    reloadMenu: reloadMenu,
  };
};

menuSrv.$inject = ['$rootScope', 'authSrv', 'localStorageService'];

module.exports = menuSrv;