import { CaseReducer, PayloadAction } from "@reduxjs/toolkit"
import IState, { IData } from "./types"

export const setData: CaseReducer<IState, PayloadAction<IData[]>> = (state, action) => {
    state.data = action.payload
}

