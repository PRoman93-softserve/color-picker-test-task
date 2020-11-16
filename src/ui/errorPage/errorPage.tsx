import React from "react"
import {NavLink} from "react-router-dom"
import {MAIN_PAGE} from "../../accets/constants";

export const ErrorPage = () => {
    return (
        <>
            <h2>page not found</h2>
            <div><NavLink to={MAIN_PAGE}>go to main page</NavLink></div>
        </>
    )
}