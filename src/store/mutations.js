export default {
    FN_DEMO: (state, name) => {

    },
    HANDLE_SIGN: (state, option) => {
        // 退出登录
        if (JSON.stringify(option) === '{}') {
            state.token = '';
            state.username = '';
            sessionStorage.removeItem('user')
        } else {
            // 登录
            state.token = option.token;
            state.username = option.username;
            if (option.token && option.username) {
                sessionStorage.setItem('user', JSON.stringify(option))
            }
        }
    }
}