import React from "react"
import {NavLink} from "react-router-dom"
import {COLOR_PICKER_PAGE} from "../../accets/constants"
import s from "./startPage.module.css"

export const StartPage = () => {
    return (
        <div className={s.startPageWrapper}>
            <h2>It's our main page</h2>
            <h3><NavLink to={COLOR_PICKER_PAGE}>let's choose a color</NavLink></h3>
        </div>
    )
}