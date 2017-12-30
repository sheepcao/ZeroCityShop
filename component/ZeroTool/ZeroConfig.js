'use strict'

const  ZeroConfig={
    api:{
        //首页轮播广告图
        homeBanner_URL :  "https://portal-web.cjwsc.com/home/topBanner.action" ,
        //首页热卖推荐
        homeHotCommendGoods_URL:"https://portal-web.cjwsc.com/home/hotRecommend.action",
    },

    params:{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/x-www-form-urlencoded',
        },
        timeout:10000,
    }
}



module.exports = ZeroConfig;
