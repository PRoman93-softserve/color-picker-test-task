import React, {useEffect, useMemo, useState} from "react"
import {ColorPickerPage} from "./colorPickerPage"
import {useDispatch, useSelector} from "react-redux";
import {addColor, getColor, onResetColor} from "../../bll/colorsReducer";
import Loading from "../../accets/loading";

export const ColorPickerContainer = () => {

    const dispatch = useDispatch()
    const color = useSelector((state: any) => state.reducer.color)
    const loading = useSelector((state: any) => state.reducer.loading)


    useEffect(() => {
        dispatch(getColor())
    }, [])

    const [r, setR] = useState(color.r)
    const [g, setG] = useState(color.g)
    const [b, setB] = useState(color.b)

    useEffect(() => {
        setR(color.r)
        setG(color.g)
        setB(color.b)
    }, [color.r, color.g, color.b])

    const [message, setMessageHint] = useState('')
    const [range, onRangeHiddenStatusChange] = useState(false)


    const onRChange = (valueR: number) => {
        setR(valueR)
        setMessageHint('')
    }
    const onGChange = (valueG: number) => {
        setG(valueG)
        setMessageHint('')
    }
    const onBChange = (valueB: number) => {
        setB(valueB)
        setMessageHint('')
    }


    const onCancelClick = () => {
        debugger
        onRangeHiddenStatusChange(false)
        setMessageHint('color was cleaned')
        const color = {r: 0, g: 0, b: 0}
        dispatch(onResetColor(color))
    }

    const onNewColorPicked = () => {
        debugger
        setMessageHint('color was chose')
        const color = {r, g, b}
        dispatch(addColor(color))
    }
    return (
        <>
            {loading
                ? <Loading/>
                : <ColorPickerPage message={message} onCancelClick={onCancelClick} onRChange={onRChange}
                                   onGChange={onGChange} onBChange={onBChange}
                                   r={r} g={g} b={b}
                                   range={range}
                                   onNewColorPicked={onNewColorPicked}
                                   onRangeHiddenStatusChange={onRangeHiddenStatusChange}/>
            }
        </>
    )
}