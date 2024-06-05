import {Component} from 'react'
import ConfigurationContext from './context/ConfigurationContext'
import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  toggleShowContent = () => {
    const {showContent} = this.state
    this.setState({showContent: !showContent})
  }

  toggleShowLeftNavbar = () => {
    const {showLeftNavbar} = this.state
    this.setState({showLeftNavbar: !showLeftNavbar})
  }

  toggleShowRightNavbar = () => {
    const {showRightNavbar} = this.state
    this.setState({showRightNavbar: !showRightNavbar})
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <div>
        <ConfigurationContext.Provider
          value={{
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent: this.toggleShowContent,
            onToggleShowLeftNavbar: this.toggleShowLeftNavbar,
            onToggleShowRightNavbar: this.toggleShowRightNavbar,
          }}
        >
          <ConfigurationController />
          <Layout />
        </ConfigurationContext.Provider>
      </div>
    )
  }
}

export default App
