const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

function login_pending(pending_info){

    return ({
        type:LOGIN_PENDING,
        pending_info
    });
}

function login_success(success_info){

    return ({
        type:LOGIN_SUCCESS,
        success_info
    });
}

function login_error(error_info){

    return ({
        type:LOGIN_ERROR,
        error_info
    });
}


export default function reducer(state = {
    pending_info:true,
    success_info:false,
    error_info:null

}, action){
    switch (action.type){
        case LOGIN_PENDING:{
            return {
                pending_info : action.pending_info
            }
        }
        case LOGIN_SUCCESS:{
            return {
                success_info : action.success_info
            }
        }
        case LOGIN_ERROR:{
            return {
                error_info : action.error_info
            }
        }
        default :
        return state;
    }

}



export function login (email, password){

    return dispatch => {
        dispatch(login_pending(true));
        dispatch(login_success(false));
        dispatch(login_error(null));

        loginRequest(email,password, err => {
        
            dispatch(login_pending(false));
            console.log(`email--${email}\npassword--${password}`);
            if(!err){
                console.log("in if part of login fn");
                dispatch(login_success(true));
            } else{
                console.log("in else part of login fn");
                dispatch(login_error(err));
            }
        });
    }
}

function loginRequest(email, password, callback){
    setTimeout(()=>{
        if (email === 'admin@admin.com' && password === 'admin'){
            return callback(true);
        }else{
            return callback(new Error('Invalid Email/Password'))
        }
    }, 1000);
}