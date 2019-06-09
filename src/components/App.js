import React from 'react'
import LanguageSelector from './LanguageSelector'
import UserCreate from './UserCreate'
import LaguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class App extends React.Component {
  state = {
    language: 'english'
  }

  onLanguageChange = language => {
    this.setState({ language })
  }

  render () {
    return (
      <div className='container mt-sm-4'>
          <LanguageSelector onLanguageChange={this.onLanguageChange} />
          <div className='row mt-4'>
            <div className='col-1'>
              <h3>
                {this.state.language === 'english' ? 'English' : '中文'}
              </h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-3'>
              <ColorContext.Provider value='danger'>
                <LaguageContext.Provider value={this.state.language}>  
                  <UserCreate />
                </LaguageContext.Provider>
              </ColorContext.Provider>
            </div>
          </div>
      </div>
    )
  } 
}

export default App