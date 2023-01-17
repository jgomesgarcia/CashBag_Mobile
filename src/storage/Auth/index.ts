import { createSlice } from "@reduxjs/toolkit";
import { defaultRequestState } from "..";
import IState from "./types";
import * as reducers from './reducers'
import * as saga from "./saga";

const initialState: IState = {
    data: [],

    getData: defaultRequestState({}),
    deleteData: defaultRequestState(false),
    updateData: defaultRequestState(false),
}

export const AuthSlice = createSlice({
    name: "slice",
    initialState,
    reducers,
    extraReducers: (buidler) => {
        buidler.addCase(saga.getData.pending, (state, { payload }) => {
            state.getData = { success: null, loading: true, error: null };
        })
        buidler.addCase(saga.getData.fulfilled, (state, { payload }) => {
            state.getData = { success: payload, loading: false, error: null };
        })
        buidler.addCase(saga.getData.rejected, (state, { error }) => {
            state.getData = { success: null, loading: false, error: error };
        })
        buidler.addCase(saga.deleteDuplicatedGroup.pending, (state, { payload }) => {
            state.deleteData = { success: false, loading: true, error: null };
        })
        buidler.addCase(saga.deleteDuplicatedGroup.fulfilled, (state, { payload }) => {
            state.deleteData = { success: true, loading: false, error: null };
        })
        buidler.addCase(saga.deleteDuplicatedGroup.rejected, (state, { error }) => {
            state.deleteData = { success: false, loading: false, error: error };
        })
        buidler.addCase(saga.updateClientAttributes.pending, (state, { payload }) => {
            state.updateData = { success: false, loading: true, error: null };
        })
        buidler.addCase(saga.updateClientAttributes.fulfilled, (state, { payload }) => {
            state.updateData = { success: true, loading: false, error: null };
        })
        buidler.addCase(saga.updateClientAttributes.rejected, (state, { error }) => {
            state.updateData = { success: false, loading: false, error: error };
        })
    }
})

export const Actions = AuthSlice.actions
export default AuthSlice.reducer