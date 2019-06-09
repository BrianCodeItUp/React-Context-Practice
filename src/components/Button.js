import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component {
  renderButton = color => {
    return (
      <button className={`btn btn-${color}`}>
          <LanguageContext.Consumer>
              {({ language }) => language === 'english' ? 'Submit' : '送出'}
          </LanguageContext.Consumer>
      </button> 
    )
  }
  render () {
    return (
      <ColorContext.Consumer>
        {
          (color) => this.renderButton(color)
        }
      </ColorContext.Consumer>
    )
  }
}


export default Button
