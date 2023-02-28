
const initState = {
    user: JSON.parse(localStorage.getItem("user") || "[]")
}

const UserReducers = (state = initState, action) => {
    switch (action.type) {
        case "SAVE_USER":
            let data = action.payload;
            localStorage.setItem("user", JSON.stringify(data));
            state.user = { ...data };
            return {
                ...state,
                user: data
            }
        case "GET_USER":
            let u = state.user
            return u
        case "REMOVE_USER":
            localStorage.removeItem("user")
            let empty = {}
            return empty
        default:
            return state;
    }
}

export default UserReducers;