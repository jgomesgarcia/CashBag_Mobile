import {  IStateRequest } from ".."


export default interface IState {
    data: IData

    getData: IStateRequest<IData | null>,
    deleteData: IStateRequest<boolean>,
    updateData: IStateRequest<boolean>,
}

export interface IData {

}

export interface IDataDTO {

}




