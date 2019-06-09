import React from 'react'

class LanguageSelector extends React.Component {
  render () {
    const { onLanguageChange } = this.props
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
