
var authObject = {
    user: {}
};

export function authen(state = authObject, action) {

    switch (action.type) {

        case 'CREATEUSER':
        // return { ...state, users: [...state.users,action.user] };
        return { ...state, user: action.user };
        default:
            return state;

    }
   
}


