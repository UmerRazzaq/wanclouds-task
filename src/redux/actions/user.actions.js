
export const userActions = {
    createuser,    
};


function createuser(user){
    return {
        type: 'CREATEUSER',
        user
    };
}

