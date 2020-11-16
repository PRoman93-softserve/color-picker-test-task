import React from "react"
import s from "./colorPage.module.css"
import Range from "./range/range"

type PropType = {
    onNewColorPicked: () => void,
    onRangeHiddenStatusChange: (range: boolean) => void,
    onCancelClick: () => void,
    onRChange: (r: number) => void,
    onGChange: (g: number) => void,
    onBChange: (b: number) => void,
    message?: string,
    r: number,
    g: number,
    b: number,
    range: boolean,

}
export const ColorPickerPage = (props: PropType) => {
    let {
        onNewColorPicked, onRangeHiddenStatusChange,
        onCancelClick, onRChange,
        onGChange, onBChange,
        message, r, g, b, range
    } = props

    return (
        <div className={s.colorPickerPageWrapper}>
            <div style={{background: `rgb(${r}, ${g}, ${b})`, width: '200px', height: '200px', margin: '0 auto'}}></div>
            <div className={s.rangesBlock}>
                {range && <>
                    <div className={s.singleRangeBlock}><Range value={r} onHandlerChange={onRChange}/></div>
                    <div className={s.singleRangeBlock}><Range value={g} onHandlerChange={onGChange}/></div>
                    <div className={s.singleRangeBlock}><Range value={b} onHandlerChange={onBChange}/></div>
                </>}
            </div>
            <div>
                <button className={s.button} onClick={onCancelClick}>cancel</button>
                <button className={s.button} onClick={onNewColorPicked}>submit</button>
                {range
                    ? <button className={s.button} onClick={() => onRangeHiddenStatusChange(false)}>hide range</button>
                    : <button className={s.button} onClick={() => onRangeHiddenStatusChange(true)}>show range</button>
                }
                {message && <h5 className={s.hintMessage}>{message}</h5>}
            </div>
        </div>
    )
}
