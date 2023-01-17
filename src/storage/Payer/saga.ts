import { createAsyncThunk } from "@reduxjs/toolkit"
import { AppDispatch, RootState } from ".."
import { apiCashbag } from "../../services/api"
import { IData } from "./types"

export const getData = createAsyncThunk<
    IData,
    { clientId: string, pipelineStepId: string },
    {
        dispatch: AppDispatch,
        state: RootState,
    }
>(
    'api-cashbag/getData',
    async ({ clientId, pipelineStepId }, thunkApi) => {
        const response = await apiCashbag.get<IData>(
            `/v1/client/show?client_id=${clientId}&pipeline_step_id=${pipelineStepId}`,
            { headers: {} }
        )

        return response.data
    }
)

export const deleteDuplicatedGroup = createAsyncThunk<
    void,
    { clientId: string, groupId: string, groupOrder: number },
    {
        dispatch: AppDispatch,
        state: RootState,
    }
>(
    'api-cashbag/deleteData',
    async ({ clientId, groupId, groupOrder }, thunkApi) => {
        await apiCashbag.delete<void>(
            `/v1/client/removeClientAttribute?client_id=${clientId}&order_group=${groupOrder}&attribute_group_id=${groupId}`,
            { headers: {} }
        )
    }
)

export const updateClientAttributes = createAsyncThunk<
    void,
    { id: string, data: IData },
    {
        dispatch: AppDispatch,
        state: RootState,
    }
>(
    'api-cashbag/updateData',
    async ({ id, data }, thunkApi) => {

        await apiCashbag.put<void>(
            `/v1/client?client_id=${id}`,
            data,
            { headers: {} }
        )
    }
)
