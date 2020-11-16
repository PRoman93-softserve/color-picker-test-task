import {GET_COLOR, LOADING_SUCCESS, ON_COLOR_SUBMIT, ON_RESET_CLICK} from "../accets/constants";
import {api} from "../dal/api";
import {
    addColorSuccessType,
    ColorType,
    getColorType,
    InitialStateType,
    loadingSuccessType,
    resetColorSuccessType
} from "../accets/types";
import {AppStateType} from "./store";
import {ThunkDispatch} from "redux-thunk";

const initialState: InitialStateType = {
    color: {r: 0, g: 0, b: 0},
    loading: true
}

const colorsReducer = (state: InitialStateType = initialState, action: ColorActionType) => {
    switch (action.type) {
        case GET_COLOR:
            return {
                ...state, color: action.color
            }
        case ON_COLOR_SUBMIT:
            return {
                ...state, color: action.color
            }
        case ON_RESET_CLICK:
            return {
                ...state, color: action.color
            }
        case LOADING_SUCCESS:
            return {
                ...state, loading: action.loading
            }
    }
    return state
}
export default colorsReducer

const getColorSuccess = (color: ColorType): getColorType => ({type: GET_COLOR, color})
const onAddColorSuccess = (color: ColorType): addColorSuccessType => ({type: ON_COLOR_SUBMIT, color})
const onResetColorSuccess = (color: ColorType): resetColorSuccessType => ({type: ON_RESET_CLICK, color})
const onLoadingSuccess = (loading: boolean): loadingSuccessType => ({type: LOADING_SUCCESS, loading})

type ColorActionType =
    getColorType
    | addColorSuccessType
    | resetColorSuccessType
    | loadingSuccessType

type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionType>

type ActionType = ColorActionType

export const getColor = () => async (dispatch: ThunkDispatchType) => {
    dispatch(onLoadingSuccess(true))
    const color = await api.getColor()
    dispatch(getColorSuccess(color))
    dispatch(onLoadingSuccess(false))
}
export const addColor = (color: ColorType) => async (dispatch: ThunkDispatchType) => {
    dispatch(onLoadingSuccess(true))
    await api.changeColor(color)
    dispatch(onAddColorSuccess(color))
    dispatch(onLoadingSuccess(false))
}
export const onResetColor = (color: ColorType) => async (dispatch: ThunkDispatchType) => {
    dispatch(onLoadingSuccess(true))
    await api.changeColor(color)
    dispatch(onResetColorSuccess(color))
    dispatch(onLoadingSuccess(false))
}
