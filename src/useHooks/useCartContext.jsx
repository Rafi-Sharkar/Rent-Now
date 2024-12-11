import React,{useContext} from 'react'
import { cartContext } from '../Context/CartContext'

export default function useCartContext() {
  return useContext(cartContext)
}
