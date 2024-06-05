import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value

          const toggleShowContent = () => {
            onToggleShowContent()
          }

          const toggleShowLeftNavbar = () => {
            onToggleShowLeftNavbar()
          }

          const toggleShowRightNavbar = () => {
            onToggleShowRightNavbar()
          }

          return (
            <div className="config-con">
              <h1 className="config-heading"> Layout </h1>
              <ul className="list-con">
                <li className="input-con">
                  <input
                    checked={showContent}
                    type="checkbox"
                    id="content"
                    onChange={toggleShowContent}
                  />
                  <label htmlFor="content"> Content </label>
                </li>
                <li className="input-con">
                  <input
                    checked={showLeftNavbar}
                    type="checkbox"
                    id="left"
                    onChange={toggleShowLeftNavbar}
                  />
                  <label htmlFor="left"> Left Navbar </label>
                </li>
                <li className="input-con">
                  <input
                    checked={showRightNavbar}
                    type="checkbox"
                    id="right"
                    onChange={toggleShowRightNavbar}
                  />
                  <label htmlFor="right"> Right Navbar </label>
                </li>
              </ul>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
