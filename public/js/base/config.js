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
  default_order: "ASC", // DESC
};