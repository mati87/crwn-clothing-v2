import { createContext, useState , useEffect } from "react";
import PRODUCTS from "../shopdata.json";
// actual value you want to access. 
import { onAuthStateChangedListener,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const ProductsContext  = createContext({
    products: [],    
    
});

export const ProductProvider      =  ({ children }) =>{
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products};  
    return (
    <ProductsContext.Provider value={ value }>
        { children } 
    </ProductsContext.Provider>)
}

