import {GET_COLOR, LOADING_SUCCESS, ON_COLOR_SUBMIT, ON_RESET_CLICK} from "../accets/constants";
import {api} from "../dal/api";
import {ColorType} from "../accets/types";

const initialState = {
    color: {r: 0, g: 0, b: 0},
    loading: false
}

const colorsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case GET_COLOR:
            return {
                ...state, color: action.color.data.data
            }
        case ON_COLOR_SUBMIT:
            return {
                ...state, color: action.color
            }
        case ON_RESET_CLICK:
            debugger
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

const getColorSuccess = (color: any) => ({type: GET_COLOR, color})
const onAddColorSuccess = (color: ColorType) => ({type: ON_COLOR_SUBMIT, color})
const onResetColorSuccess = (color: ColorType) => ({type: ON_RESET_CLICK, color})
const onLoadingSuccess = (loading: boolean) => ({type: LOADING_SUCCESS, loading})


export const getColor = () => async (dispatch: any) => {
    dispatch(onLoadingSuccess(true))
    const color = await api.getColor()
    dispatch(getColorSuccess(color))
    dispatch(onLoadingSuccess(false))
}
export const addColor = (color: ColorType) => async (dispatch: any) => {
    dispatch(onLoadingSuccess(true))
    await api.changeColor(color)
    dispatch(onAddColorSuccess(color))
    dispatch(onLoadingSuccess(false))
}
export const onResetColor = (color: ColorType) => async (dispatch: any) => {
    debugger
    dispatch(onLoadingSuccess(true))
    await api.changeColor(color)
    dispatch(onResetColorSuccess(color))
    dispatch(onLoadingSuccess(false))
}
