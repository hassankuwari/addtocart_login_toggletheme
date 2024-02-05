const inititalState = {
    cartQuantity: 0,
    login: "",
    darkMode: false
}

const MyReducer = (state = inititalState, action) => {
    switch (action.type) {
        case "ADD_QTY_TO_CART":
            return {
                ...state,
                cartQuantity: action.payload
            }

        case "SHOW_LOGIN_ID":
            return {
                ...state,
                login: action.payload
            }

        case "TOGGLE_BG_THEME":
            return {
                ...state,
                darkMode: !state.darkMode
            }

        default: return state
    }
}

export default MyReducer;