export const depositMoney = (amount:number) =>{
    return (dispatch: any):void=>{
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
}
export const withdrawMoney = (amount:number) =>{
    return (dispatch: any):void=>{
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}