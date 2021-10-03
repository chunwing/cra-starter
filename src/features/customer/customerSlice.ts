import { createSlice, PayloadAction } from "@reduxjs/toolkit"
interface CustomerState {
    value: Customer[]
}

interface Customer {
    id: string;
    name: string;
    dishes: string[];
}

interface AddDish{
    id: string;
    dish :string;
}

const initialState: CustomerState = {
    value: []
}
export const customerSlice = createSlice({
    name: "customers",
    initialState, // Customer array
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            console.log(`-- on add customer --:`)
            state.value.push(action.payload)
        },
        addDish:(state, action:PayloadAction<AddDish> )=>{
            console.log(`-- on add dishes --:`)
           state.value.forEach((customer=>{
            console.log(customer.id)
               if(customer.id === action.payload.id)
                customer.dishes.push(action.payload.dish)
           
            }))
        }
    }
})

export const { addCustomer, addDish } = customerSlice.actions
export default customerSlice.reducer;