import UserMain from "../views/UserMain.vue";
import Main from "../views/ShopMain.vue";
import Store from "../store/index";

export default {
  path: "/",
  name: "home",
  component: UserMain,
  redirect: "/main",
  children: [
    {
      path: "main",
      name: "Main",
      component: Main,
    },
    {
      path: "productlist",
      name: "ProductListAll",
      component: import(/* webpackChunkName: "ProductListAll", webpackPrefetch: false */ "../views/product/ProductList.vue"),
    },
    {
      path: "productlist/:category",
      name: "ProductListCategory",
      component: import(/* webpackChunkName: "ProductListCategory", webpackPrefetch: false */ "../views/product/ProductList.vue"),
    },
    {
      path: "productinfo",
      name: "ProductInfo",
      component: import(/* webpackChunkName: "ProductInfo", webpackPrefetch: false */ "../views/product/ProductInfo.vue"),
    },
    {
      path: "signup",
      name: "SignUp",
      component: import(/* webpackChunkName: "SignUp", webpackPrefetch: false */ "../views/member/SignUp.vue"),
    },
    {
      path: "login",
      name: "LoginView",
      component: import(/* webpackChunkName: "LoginView", webpackPrefetch: false */ "../views/member/LoginView.vue"),
    },
    {
      path: "sociallogin",
      name: "SocialLogin",
      component: import(/* webpackChunkName: "sociallogin", webpackPrefetch: false */ "../views/member/SocialLogin.vue"),
    },
    {
      path: "searchid",
      name: "SearchID",
      component: import(/* webpackChunkName: "searchid", webpackPrefetch: false */ "../views/member/SearchID.vue"),
    },
    {
      path: "searchpw",
      name: "SearchPW",
      component: import(/* webpackChunkName: "searchpw", webpackPrefetch: false */ "../views/member/SearchPW.vue"),
    },
    {
      path: "withdraw",
      name: "WithdrawView",
      component: import(/* webpackChunkName: "withdraw", webpackPrefetch: false */ "../views/member/WithdrawView.vue"),
    },
    //=== < 박정언 > ================
    {
      path: "cart",
      name: "Cart",
      component: import(/* webpackChunkName: "Cart", webpackPrefetch: false */ "../views/order/CartView.vue"),

      beforeEnter: (to, from, next) => {
        let loginStatus = Store.state.memberStore.loginStatus;
        console.log('loginStatus : ', loginStatus);
        if (!loginStatus) {
          alert('로그인 후 접근 가능한 페이지입니다.'),
            next('/main');
        }
        else {
          next();
        }
      },
    },
    {
      path: "checkout",
      name: "CheckOut",
      component: import(/* webpackChunkName: "CheckOut", webpackPrefetch: false */ "../views/order/CheckOutView.vue"),

      beforeEnter: (to, from, next) => {
        let loginStatus = Store.state.memberStore.loginStatus;
        console.log('loginStatus : ', loginStatus);
        if (!loginStatus) {
          alert('로그인 후 접근 가능한 페이지입니다.'),
            next('/main');
        }
        else {
          next();
        }
      },
    },
    {
      path: "myorderlist",
      name: "MyOrderList",
      component: import(/* webpackChunkName: "MyOrderList", webpackPrefetch: false */ "../views/order/MyOrdListView.vue"),
    
      beforeEnter: (to, from, next) => {
        let loginStatus = Store.state.memberStore.loginStatus;
        console.log('loginStatus : ', loginStatus);
        if (!loginStatus) {
          alert('로그인 후 접근 가능한 페이지입니다.'),
            next('/main');
        }
        else {
          next();
        }
      },
    },
    {
      path: "myorderdetail",
      name: "MyOrderDetail",
      component: import(/* webpackChunkName: "MyOrderDetail", webpackPrefetch: false */ "../views/order/MyOrdDetailView.vue"),
    
      beforeEnter: (to, from, next) => {
        let loginStatus = Store.state.memberStore.loginStatus;
        console.log('loginStatus : ', loginStatus);
        if (!loginStatus) {
          alert('로그인 후 접근 가능한 페이지입니다.'),
            next('/main');
        }
        else {
          next();
        }
      },
    },
    {
      path: "likes",
      name: "Likes",
      component: import(/* webpackChunkName: "Likes", webpackPrefetch: false */ "../views/order/LikesView.vue"),
    },
    {
      path: "mypoint",
      name: "MyPoint",
      component: import(/* webpackChunkName: "MyPoint", webpackPrefetch: false */ "../views/member/MyPointView.vue"),
    },
    //=== < 박정언 > ================
    {
      path: "reviewlist",
      name: "ReviewList",
      component: import(/* webpackChunkName: "ReviewList", webpackPrefetch: false */ "../views/review/ReviewList.vue"),
    },
    {
      path: "reviewinsert",
      name: "ReviewInsert",
      component: import(/* webpackChunkName: "ReviewInsert", webpackPrefetch: false */ "../views/review/ReviewInsert.vue"),
    },
    {
      path: "pinquiryinsert",
      name: "PInquiryInsert",
      component: import(/* webpackChunkName: "PInquiryInsert", webpackPrefetch: false */ "../views/inquiry/PInquiryInsert.vue")
    },
    {
      path: "pinquirylist",
      name: "PInquiryList",
      component: import(/* webpackChunkName: "PInquiryList", webpackPrefetch: false */ "../views/inquiry/PInquiryList.vue"),
    },
    {
      path: 'reviewinfo',
      name: 'ReviewInfo',
      component: import(/* webpackChunkName: "ReviewInfo", webpackPrefetch: false */ "../views/review/ReviewInfo.vue")
    },
    {
      path: 'inquirylist',
      name: 'InquiryList',
      component: import(/* webpackChunkName: "InquiryList", webpackPrefetch: false */ "../views/inquiry/InquiryList.vue")
    },
    {
      path: 'inquiryinsert',
      name: 'InquiryInsert',
      component: import(/* webpackChunkName: "InquiryInsert", webpackPrefetch: false */ "../views/inquiry/InquiryInsert.vue")
    },
    {
      path: 'pinquiryinfo',
      name: 'PInquiryInfo',
      component: import(/* webpackChunkName: "PInquiryInfo", webpackPrefetch: false */ "../views/inquiry/PInquiryInfo.vue")
    },
    {
      path: 'inquiryinfo',
      name: 'InquiryInfo',
      component: import(/* webpackChunkName: "InquiryInfo", webpackPrefetch: false */ "../views/inquiry/InquiryInfo.vue")
    },
    {
      path: 'reviewupdate',
      name: 'ReviewUpdate',
      component: import(/* webpackChunkName: "ReviewUpdate", webpackPrefetch: false */ "../views/review/ReviewUpdate.vue")
    },
    {
      path: 'inquiryupdate',
      name: 'InquiryUpdate',
      component: import(/* webpackChunkName: "InquiryUpdate", webpackPrefetch: false */ "../views/inquiry/InquiryUpdate.vue")
    },
    {
      path: 'proinquiryupdate',
      name: 'ProInquiryUpdate',
      component: import(/* webpackChunkName: "ProInquiryUpdate", webpackPrefetch: false */ "../views/inquiry/ProInquiryUpdate.vue")
    },
    { 
      path: 'noticelist',
      name: 'NoticeList',
      component: import(/* webpackChunkName: "NoticeList", webpackPrefetch: false */ "../views/NoticeList.vue")
    },
  ],
};
