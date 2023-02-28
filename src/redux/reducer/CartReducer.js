// const initState = {
//     items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
//     totalQty: 0,
//     totalPrice: 0
// }

// initState.items.forEach((item) => {
//     initState.totalPrice += (item.product.prices * item.quantity);
//     initState.totalQty += item.quantity
// })

// const CartReducer = (state = initState, action) => {

//     switch (action.type) {
//         case "ADD":
//             let carts = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

//             if (carts.length === 0) {
//                 let item = {
//                     id: action.payload.product.id,
//                     product: action.payload.product,
//                     quantity: action.payload.quantity
//                 }
//                 carts.push(item);
//             } else {
//                 let checkExits = false;
//                 for (let index = 0; index < carts.length; index++) {
//                     const item = carts[index];
//                     if (item.id === action.payload.product.id) {
//                         checkExits = true;
//                         break;
//                     }
//                 }
//                 if (!checkExits) {
//                     let item = {
//                         id: action.payload.product.id,
//                         product: action.payload.product,
//                         quantity: action.payload.quantity
//                     }
//                     carts.push(item);
//                 } else {
//                     for (let index = 0; index < carts.length; index++) {
//                         if (carts[index].id === action.payload.product.id) {
//                             carts[index].quantity += action.payload.quantity;
//                         }
//                     }
//                 }
//             }

//             state.totalQty += action.payload.quantity;
//             state.totalPrice += action.payload.product.prices;

//             localStorage.setItem("cart", JSON.stringify(carts));
//             let newData = {
//                 ...state.items,
//                 carts
//             }
//             state.items = newData;

//             return {
//                 ...state
//             }
//         default:
//             return state
//     }
// }

// export default CartReducer;