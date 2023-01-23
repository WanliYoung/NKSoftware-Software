import VueRouter from "vue-router";
import behav_bainian   from "@/views/behav_bainian";
import behavior from "@/views/behavior";
import behav_hongbao from "@/views/behav_hongbao";
import behav_chunlian from "@/views/behav_chunlian";
import behav_huadeng from "@/views/behav_huadeng";
import behav_wushi from "@/views/behav_wushi";

import clothes from "@/views/clothes"
import clothes_word_intro from "@/views/clothes_word_intro";
import clothes_img_show from "@/views/clothes_img_show";
import clothes_video_intro from "@/views/clothes_video_intro";
import clothes_recommend from "@/views/clothes_recommend";
import test2 from '@/views/test/test2';
import eat from '@/views/eat'
import test1 from '@/views/test/test1';
import live from '@/views/live'
import main from '@/views/mianin'
import Login from '@/views/Login'
import Remember from "@/views/Remember";
import Owner from "@/views/Owner";
import Test from "@/views/test/test";
import test from "@/views/test/test";
import Adim from "@/views/Adim";
import SpecialClick from "@/views/test/SpecialClick";
const originalPush = VueRouter.prototype.push
import layue28 from "@/views/28"
import lun from '@/views/lun'
import NewWish from "@/views/NewWish";
import newWish from "@/views/NewWish";
import showImg from "@/components/main_vue/ShowImg";
import ShowImg from "@/components/main_vue/ShowImg";
import UpdateImg from "@/views/main/UpdateImg";
import RemeImg from "@/views/main/RemeImg";
import ShowWord from "@/views/main/ShowWord";
import Updateword from "@/views/main/Updateword";

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
//ds
const router = new VueRouter({
    routes:
        [
            {
                path:'/lun',
                name: 'lun',
                component:lun
            },
            {
                path: '/click',
                component:SpecialClick
            },
            {
                path: '/test28',
                component:layue28
            },
            {
                path: "/main/",
                name:'main',
                component:main,
            },
            {
                path: '/adim',
                component:Adim
            },
            {
                path:'/Remember',
                name:'remember',
                component:Remember,
                children: [
                    {
                        path: '/Remember/newWish',
                        name: 'newWish',
                        component:NewWish
                    },
                    {
                        path:'/Remember/showImg',
                        name:'showImg',
                        component:RemeImg
                    },
                    {
                        path:'/Remember/updateImg',
                        name:'updateImg',
                        component:UpdateImg
                    },
                    {
                        path: '/Remember/showWord',
                        name:'showWord',
                        component:ShowWord
                    },
                    {
                        path: '/Remember/updateWord',
                        name:'updateWord',
                        component:Updateword
                    },
                ]

            },
            {
                path: '/Owner',
                name: 'Owner',
                component:Owner
            },
            {
              path: '/',
              component:Login
            },
            {
              path: '/test',
              component:test
            },
            {
                path:'/test1',
                component: test1
            }
            ,
            {
                path:'/test2',
                component: test2
            }
            ,
            {
                path: '/',
                component: Login
            },
            {
                path: '/live',
                component: live
            },
            {
                path: '/behavior',
                component: behavior,

            },
            {
                path:'/behavior/bainian',
                component:behav_bainian,
            },
            {
                path:'/behavior/hongbao',
                component:behav_hongbao,
            },
            {
                path:'/behavior/chunlian',
                component:behav_chunlian,
            },
            {
                path:'/behavior/huadeng',
                component:behav_huadeng,
            },
            {
                path:'/behavior/wushi',
                component:behav_wushi,
            }
            ,
            {
                path: '/clothes',
                component: clothes
            }
            ,
            {
                path: '/clothes_word_intro',
                component: clothes_word_intro
            }
            ,
            {
                path: '/clothes_video_intro',
                component: clothes_video_intro
            }
            ,
            {
                path: '/clothes_img_show',
                component: clothes_img_show
            }
            ,
            {
                path: '/clothes_recommend',
                component: clothes_recommend
            },
            {
                path: '/eat',
                component: eat
            }
        ]
})
export default router
