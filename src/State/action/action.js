export const depositMoney = (money) => {
    return dispatch => {
        dispatch({
            type: "DEPOSIT",
            payload: money
        })
    }
}

export const withdrawMoney = (money) => {
    return dispatch => {
        dispatch({
            type: "WITHDRAW",
            payload: money
        })
    }
}