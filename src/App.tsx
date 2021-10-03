/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/resvervations/reservationsSlice";

function App(): JSX.Element {
  const [reservationNameInput, setReservationNameInput] = useState("");

  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );
  const customers = useSelector((state: RootState) => state.customer.value);

  console.log(`customers`, customers);

  const dispatch = useDispatch();

  const handleAddReservations = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput)); //update state
    setReservationNameInput("");  // reset input
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return (
                  <ReservationCard
                    key={name+index}
                    name={name}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => {
                setReservationNameInput(e.target.value);
              }}
            />
            <button
              onClick={() => {
                handleAddReservations();
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div className="customer-food-container">
        {customers.map((customer, index) => {
                return (
                  <CustomerCard
                    key={customer.name+index}
                    id={customer.name+index}
                    name={customer.name}
                    dishes={customer.dishes}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default App;
