import Vue from 'vue';
import Router from 'vue-router';

Vue.use( Router );

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/signin',
      component ( resolve ){
        return require(["@/pages/usr/signin"], resolve);
      }
    },
    {
      path: '/book/add',
      component ( resolve ){
        return require(["@/pages/book/add"], resolve);
      }
    },
    {
      path: '/book/list',
      component ( resolve ){
        return require(["@/pages/book/list"], resolve);
      }
    }
  ]
});