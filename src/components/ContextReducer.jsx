import React,{useReducer,useContext, createContext, act} from 'react'

const CartStateContext=createContext();
const CartDispatchContext=createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{id:action.id,name:action.name,price:action.price,quantity:action.quantity,size:action.size,img:action.img}]
        case "REMOVE":
            let newArray=[...state]
            newArray.splice(action.index,1)
            return newArray;
        case "UPDATE":
            let arr=[...state]
            arr.find((food,index)=>{
                if(food.id===action.id){
                    arr[index]={...food,quantity:parseInt(action.quantity)+food.quantity,price:parseInt(action.price)+food.price,img:action.img}
                }
            }
            )
            return arr;
        case "DROP":
            let emptyarr=[];
            return emptyarr;
        default:
            console.log("Error in CartReducer")
    }
}

export const ContextReducer = ({children}) => {
    const [state,dispatch]=useReducer(reducer,[])
  return (
    <CartDispatchContext.Provider value={dispatch}>
        <CartStateContext.Provider value={state}>
            {children}
            </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export const useCart=()=> useContext(CartStateContext);
export const useDispatchCart=()=> useContext(CartDispatchContext);
