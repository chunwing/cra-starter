/* eslint-disable react/jsx-key */
import React, { MouseEventHandler, useState } from 'react'
import { useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux'
import { addDish } from "../features/customer/customerSlice";

interface CustomerCardTypes{
    id: string,
    name: string,
    dishes: string[]
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function CustomerCard({name, dishes, id}: CustomerCardTypes ) {
    
    const [dishInput, setDishInput] = useState("");

    const dispatch = useDispatch();

    const handleAddDishes = (id:string):MouseEventHandler<HTMLButtonElement> | undefined => {
      if (!dishInput) return; // check state
    
      const dish = {
        id,
        dish:dishInput
      }
      dispatch(addDish(dish)); //update state
      setDishInput("");  // reset input state
    };
    return (
        <div className="customer-food-card-container">
        <p>{name}</p>
        <div className="customer-foods-container">

        <div className="customer-food">
        {
                dishes.map((dish)=> <p>{dish}</p>
                
                )
            }
        </div>
            
          
          <div className="customer-food-input-container">
          <input value={dishInput}
              onChange={(e) => {
                setDishInput(e.target.value);
              }}
              />
        <button onClick={()=>{
            console.log(id)
            handleAddDishes(id)
            }}>Add</button>
          </div>
        </div>
      </div>
    )
}
