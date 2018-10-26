import React from 'react'
import style from './button.scss'

export default function button(props) {
  return (
    <div className={style.button} onClick={props.mixer}>
      Start mixing.
    </div>
  )
}



