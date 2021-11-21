const githubReducer = (state,action) => {
    switch(action.type){
        case "SEARCH_USERS":
            return {
                ...state,
                users:action.payload,
                howmuch:(action.howmuch+1),
                keyw:action.keyw,
                issent:true,
                alert:null,
                loading:false
            }
        case "SET_LOADING":
            return {
                ...state,
                loading:true
            }
        case "CLEAR_USERS":
            return {
                ...state,
                users:[],
                alert:null,
                keyw:'',
                issent:false,               
                loading:false
            }
        
        case "GET_USER":
            return {
                ...state,
                user:action.payload,
                loading:false
            }
        
        case "GET_REPOS":
            return {
                ...state,
                repos:action.payload,
                loading:false
            }
        case "GET_REPO":
            return {
                ...state,
                repo:action.payload,
                loading:false
            }
        default:
            return state
    }
}
export default githubReducer