import {GET_COLOR, LOADING_SUCCESS, ON_COLOR_SUBMIT, ON_RESET_CLICK} from "./constants";

export type InitialStateType = {
    color: ColorType,
    loading: boolean
}
export type ColorType = {
    r: number,
    g: number,
    b: number,
    data?: any
}
export type getColorType = {
    type: typeof GET_COLOR,
    color: ColorType
}
export type addColorSuccessType = {
    type: typeof ON_COLOR_SUBMIT,
    color: ColorType
}
export type resetColorSuccessType = {
    type: typeof ON_RESET_CLICK,
    color: ColorType
}
export type loadingSuccessType = {
    type: typeof LOADING_SUCCESS,
    loading: boolean
}