import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class LanguageSelector extends React.Component {
  static contextType = LanguageContext

  render () {
    const { onLanguageChange } = this.context
    return (
        <div className='row'>
          <div className='col-2'>
            <span className='align-middle'>Select a language</span>
          </div>
          <div className='col-1'>
            <button className='btn btn-primary' onClick={() => onLanguageChange('english')} >
              English
            </button>
          </div>
          <div className='col-1'>
            <button className='btn btn-primary' onClick={() => onLanguageChange('chinese')}>
              中文
            </button>
        </div>
      </div>
    )
  }
}

export default LanguageSelector
