import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-con">
          {showLeftNavbar && (
            <div className="left">
              <h1 className="body-heading"> Left Navbar Menu </h1>
              <ul className="left-list-con">
                <li className="left-desc desc"> Item 1 </li>
                <li className="left-desc desc"> Item 2 </li>
                <li className="left-desc desc"> Item 3 </li>
                <li className="left-desc desc"> Item 4 </li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content">
              <h1 className="body-heading"> Content </h1>
              <p className="desc">
                Lorem ipsum dolor sit ampet, consectetur adipiscin elit sed do,
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right">
              <h1 className="body-heading"> Right Navbar Menu </h1>
              <div className="extra-con">
                <p className="extra"> Ad 1 </p>
                <p className="extra"> Ad 2 </p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
