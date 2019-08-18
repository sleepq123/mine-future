const initState = {
    userName:'未登录',
}

export default (state = initState, actions) => {
    const {type,value} = actions;
    switch(type){
        case 'CHANGE':
            return {
                ...state,
                ...value,
            }
        default:
            return state;
    }
}
