import React from 'react'
import LanguageSelector from './LanguageSelector'
import UserCreate from './UserCreate'
import { LanguageStore } from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class App extends React.Component {
  state = {
    language: 'english'
  }

  render () {
    return (
      <div className='container mt-sm-4'>
          <LanguageStore>
            <LanguageSelector />
            <div className='row'>
              <div className='col-3'>
                <ColorContext.Provider value='danger'>
                    <UserCreate />
                </ColorContext.Provider>
              </div>
            </div>
          </LanguageStore>
      </div>
    )
  } 
}

export default App