import { FOOTER_MESSAGE, FOOTER_REQUEST, FOOTER_SUCCESS } from "./footerActions"

const initialState = {
    loading: false,
    footer: [],
    error: "",
    //language: "en",
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FOOTER_REQUEST:
            return { ...state, loading: true }
        case FOOTER_SUCCESS:
            return { ...state, loading: false, footer: action.payload }
        case FOOTER_MESSAGE:
            return { ...state, loading: false, error: action.payload }
        //case SET_LANGUAGE:
        //console.log("Language set to:", action.payload)
        //return { ...state, loading: false, language: action.payload }

        default:
            return state
    }
}