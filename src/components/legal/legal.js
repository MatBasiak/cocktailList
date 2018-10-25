import React, { Component } from 'react'
import style from './legal.scss'

export default class legal extends Component {
  constructor(props) {
    super(props)
   
  }
  
    render() {
    return (
      <div className={style.container}>
        <h1>Ta strona zawiera tresci dla osob pełnoletnich.</h1>
        <div className={style.button}>
            <div className={style.b1} onClick={this.props.legal}><span>Wchodzę</span></div>
          <a href='https://www.google.com'><div className={style.b2}><span>Wychodzę</span></div></a> 
        </div>
      </div>
    )
  }
}
