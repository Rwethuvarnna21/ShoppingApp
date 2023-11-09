export const initialstate = {
    data: [],
    error: null,
    loading: false,
    cart:[],
    SearchQuery:'',
    searchResult:[],
}
export const productReducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload,

            }
        case 'FAILURE':
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
            case 'DELETE':
            const updatedCart=state.cart.filter(item=>item.id!==action.payload)
            return{
                ...state,
                cart:updatedCart
            }
            case 'ADD_TO_CART':
                const existingProduct=state.cart.find(item=>item.id===action.payload.id)
                if(existingProduct){
                    const updatedCart=state.cart.map(item=>
                        item.id==action.payload.id
                        ?{...item,quantity:item.quantity+1}
                        :item
                        )
                        return{
                            ...state,
                            cart:updatedCart
                        }
                }else{
                return{
                    ...state,
                    cart:[...state.cart,{...action.payload,quantity:1}],
                    
                }
            }
            case 'SEARCH_QUERY':
                return{...state,SearchQuery:action.payload}
                case 'SEARCH_RESULT':
                    return{...state,searchResult:action.payload}
                    case 'SEARCH':
                        const updatedSearchResult=state.data.filter(product=>
                            product.title.toLowerCase().includes(action.payload.toLowerCase())
                            )
                            return{
                                ...state,
                             searchResult:updatedSearchResult,
                            }
            
        default:
            return state

    }
}