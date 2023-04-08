// import { createContext, useContext, useState, useReducer } from "react";

// import cartItems from "./component/Magazin/magazinArray";
// import reducer from "./component/reducer";

// const AppContext = createContext();

// const initialState = {
//     loading: false,
//     cart: cartItems,
//     total: 0,
//     amount: 0,
// }
  
// const AppProvider = ({ children }) => {

//     const [state, dispatch] = useReducer(reducer, initialState);

//     const clearCart = () => {
//         dispatch({type: 'CLEAR_CART'})
//     }

//     const removeItem = (id) => {
//         dispatch({type: 'REMOVE', payload: id})
//     }

//     const [count, setCount] = useState(9);
    
//     return (
//         <AppContext.Provider value={{...state, clearCart, removeItem}} >
//             {children}
//         </AppContext.Provider>
//     )
// }

// export const useGlobalContext = () => {
//     return useContext(AppContext)
// }

// export {AppContext, AppProvider}

