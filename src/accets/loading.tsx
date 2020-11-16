import React from 'react'
import loader from './preloader.gif'
import s from './preloader.module.css'
const Loading = () => {
    return <div className={s.preloaderContainer}><img src={loader} alt="loading"/></div>
}
export default Loading