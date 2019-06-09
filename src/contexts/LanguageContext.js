import React from 'react'

const Context = React.createContext('english')

export class LanguageStore extends React.Component {
  state = {
    language: 'english'
  }

  onLanguageChange = language => {
    this.setState({ language })
  }
  
  render () {
    const context = { ...this.state, onLanguageChange: this.onLanguageChange }
    return (
      <Context.Provider value={context}>
        {this.props.children}
      </Context.Provider>
    )
  }
}


export default Context