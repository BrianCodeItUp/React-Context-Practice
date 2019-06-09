import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Field extends React.Component {
  static contextType = LanguageContext
  render () {
    const text = this.context === 'english' ? 'Ｎame' : '姓名'
    return (
      <form>
        <div className="form-group">
          <label>{text}</label>
          <input type="email" className="form-control" />
        </div>
      </form>
    )
  }
}

export default Field
