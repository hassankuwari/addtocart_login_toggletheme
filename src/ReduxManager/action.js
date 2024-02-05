export const addToCart=(num)=>({
    type:"ADD_QTY_TO_CART",
    payload:num
})

export const saveLogin=(id)=>({
    type: "SHOW_LOGIN_ID",
    payload:id
})

export const toggleTheTheme=()=>({
    type:"TOGGLE_BG_THEME"
})