import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component {  
  render () {
    return (
      <ColorContext.Consumer>
        {
           (value) => ( 
            <button className={`btn btn-${value}`}>
                <LanguageContext.Consumer>
                    {value => value === 'english' ? 'Submit' : '送出'}
                </LanguageContext.Consumer>
            </button> 
           )
        }
      </ColorContext.Consumer>
    )
  }
}


export default Button
