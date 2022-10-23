export default {
    namespaced: true,
    actions: {},
    mutations: {
        /* 切换是否显示界面 */
        showPop(state){
            if(state.isLogin === false){
                state.isShowPop = !state.isShowPop;
            }else if(state.isLogin === true){
                state.isShowPop = false;
            }
        },

        /* 切换登录状态 */
        changeIsLogin(state, value){
            state.isLogin = value;
            state.isShowPop = false;
        },

        /* 更新用户信息 */
        updateUserInfo(state, value){
            state.userInfo = value;
        },

        /* 更新用户等级 */
        updateUserLevel(state, value){
            state.userLevel = value;
        },

        /*更新用户签到状态*/
        updateUserSignIn(state, value){
            if(value){
                state.isSignIn = true
            }
        },

        /*初始state*/
        initialState(state){
            state.isLogin = false;// 是否登录
            state.userInfonull = null // 用户信息
            state.userLevel = 0; // 用户等级
            state.isShowPop = false; // 是否显示登录界面
            state.isShowUserInfo = false; // 是否显示个人信息
        }
    },
    getters: {
    },
    state: {
        /* 如果缓存中有就取出来，没有则为空 */
        isLogin: localStorage.getItem("isLogin") ? JSON.parse(localStorage.getItem("isLogin")) : false, // 是否登录
        userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null, // 用户信息
        userLevel: localStorage.getItem("userLevel") ? JSON.parse(localStorage.getItem("userLevel")) : 0, // 用户等级
        isShowPop: false, // 是否显示登录界面
        isSignIn: false
    }
}