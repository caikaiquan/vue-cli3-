import types from './mutationType'
export default {
    fn_demo:({commit},name) =>{
        commit(types['FN_DEMO'],name);
    },
    handleSign:({commit},option) =>{
        commit(types['HANDLE_SIGN'],option);
    },
}