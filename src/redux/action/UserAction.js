export const saveUserToLocalStorage = (user) => {
    return {
        type: "SAVE_USER",
        payload: user
    }
}

export const getUser = () => {
    return {
        type: "GET_USER"
    }
}