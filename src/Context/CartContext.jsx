import react,{useState,createContext} from "react"
export const cartContext=createContext({})

const CartProviders=({children})=>{
    const [cart , setCart]=useState([])
    return <cartContext.Provider value={{cart,setCart}}>
        {children}
    </cartContext.Provider>

}
export default  CartProviders
