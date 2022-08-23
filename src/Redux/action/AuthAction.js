import * as ActionTypes from "../ActionTypes";

export const signUpAction = (values) => (dispatch) => {
    dispatch({type: ActionTypes.SIGNUP_USER, payload:values})
}