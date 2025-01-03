import axios from 'axios'

export const FOOTER_REQUEST = "FOOTER_REQUEST"
export const FOOTER_SUCCESS = "FOOTER_SUCCESS"
export const FOOTER_MESSAGE = "FOOTER_MESSAGE"
//export const SET_LANGUAGE = "SET_LANGUAGE"

export const footerRequest = () => ({
    type: FOOTER_REQUEST
})
export const footerSuccess = (footer) => ({
    type: FOOTER_SUCCESS,
    payload: footer,
})
export const footerMessage = (error) => ({
    type: FOOTER_MESSAGE,
    payload: error,
})
/*export const setLanguage = (language) => ({
    type: SET_LANGUAGE,
    payload: language,
}) */

export const getFooter = () => {
    return (dispatch) => {
        dispatch(footerRequest())
        axios.get("/data.json").then((res) => {
            dispatch(footerSuccess(res.data.footer))
        })
            .catch((error) => {
                dispatch(footerMessage(error.message))
            })
    }
}

