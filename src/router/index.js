import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/LoginTest'
import Home from '../components/Home'
import ArticleList from '../components/ArticleList'
import CateMana from '../components/CateMana'
import DataCharts from '../components/DataCharts'
import PostArticle from '../components/PostArticle'
import UserMana from '../components/UserMana'
import BlogDetail from '../components/BlogDetail'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      hidden: true,
      component: Login
    }, {
      path: '/home',
      name: '',
      component: Home,
      hidden: true
    }, {
      path: '/home',
      component: Home,
      name: '博客管理',
      iconCls: 'fa fa-file-text-o',
      children: [
        {
          path: '/articleList',
          name: '博客列表',
          component: ArticleList,
          meta: {
            keepAlive: true
          }
        }, {
          path: '/postArticle',
          name: '发表博客',
          component: PostArticle,
          meta: {
            keepAlive: false
          }
        }, {
          path: '/blogDetail',
          name: '博客详情',
          component: BlogDetail,
          hidden: true,
          meta: {
            keepAlive: false
          }
        }, {
          path: '/editBlog',
          name: '编辑博客',
          component: PostArticle,
          hidden: true,
          meta: {
            keepAlive: false
          }
        }
      ]
    }, {
      path: '/home',
      component: Home,
      name: '用户管理',
      children: [
        {
          path: '/user',
          iconCls: 'fa fa-user-o',
          name: '用户管理',
          meta:{requireAuth:true},
          component: UserMana
        }
      ]
    }, {
      path: '/home',
      component: Home,
      name: '分类管理',
      children: [
        {
          path: '/cateMana',
          iconCls: 'fa fa-reorder',
          name: '分类管理',
          component: CateMana
        }
      ]
    }, {
      path: '/home',
      component: Home,
      name: '数据统计',
      iconCls: 'fa fa-bar-chart',
      children: [
        {
          path: '/charts',
          iconCls: 'fa fa-bar-chart',
          name: '数据统计',
          component: DataCharts
        }
      ]
    }
  ]
})

// import Vue from 'vue'
// import Router from 'vue-router'
// import LoginTest from '../components/LoginTest'
// import Home from '../components/Home'
// import Login from '../components/Login'
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'LoginTest',
//       component: LoginTest
//     },{
//       path: '/Home',
//       name:'Home',
//       component: Home
//     }
//   ]
// })
