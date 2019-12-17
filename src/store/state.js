let username;
let token;
let user = sessionStorage.getItem('user');
if(user){
    user = JSON.parse(user);
}
if(user && user.username){
    username = user.username
}
if(user && user.token){
    token = user.token
}
export default {
    token, // 请求头携带的token
    username,// 用户名
}