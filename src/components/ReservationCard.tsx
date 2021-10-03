import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../features/resvervations/reservationsSlice'
import { addCustomer } from  '../features/customer/customerSlice'

interface ReservationCardTypes{
    name: string
    index: number
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function ReservationCard({name, index}: ReservationCardTypes ) {
    
    const dispatch = useDispatch()
    return (
        <div onClick={()=>{
            dispatch(removeReservation(index))
            dispatch(addCustomer({
                id: name+index,
                name,
                dishes: []
            }))
        }} className="reservation-card-container">{name}</div>
    )
}
