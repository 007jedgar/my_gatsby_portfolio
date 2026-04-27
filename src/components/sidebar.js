import React from 'react'
import { Link } from "gatsby"
import "./main.css"
import portfolio_cropped_me from "../images/portfolio_cropped_me.jpg"

const Sidebar = ({ color, handleClick }) => {
    return (
      <div className="sidebar-container" style={{background: color, padding: "1em", marginBottom: "1em"}}>
        
        <figure className="hide-mobile">
          <img src={portfolio_cropped_me} alt="my profile"></img>
        </figure>

        <div className="subheader hide-mobile">
          <p>Mobile Developer</p>            
          <p>Web Developer</p>            
          {/* <p>Product Manager</p> */}
        </div>
  
        <div className="content-links hide-mobile">
          <h4><Link onClick={handleClick} to="/portfolio">Projects</Link></h4>
          {/* <h4><Link onClick={handleClick} to="/blogs">Blog</Link></h4> */}
          <h4><a target="_blank" rel="noreferrer noopener" onClick={handleClick} href="mailto:jedgardev@gmail.com">Contact</a></h4>
        </div>

        <div className="other-links hide-mobile">
          <p>Other Links</p>
          <p><a href="https://github.com/007jedgar" target="_blank" rel="noreferrer noopener">Github</a> <br /></p>
          <p><a href="https://twitter.com/jon_eaux" target="_blank" rel="noreferrer noopener">Twitter</a> <br /></p>
          <p><a href="https://www.linkedin.com/in/jonathan-e-8398a2112/" target="_blank" rel="noreferrer noopener">Linkedin</a> <br /></p>
        </div>

        <div className="top-bar hide-desktop">
          <h4 className="hide-desktop">
            <button
              type="button"
              onClick={() => handleClick('menu')}
              className="menu-toggle"
              style={{ background: "none", border: "none", padding: 0, font: "inherit", cursor: "pointer" }}
            >
              MENU
            </button>
          </h4>
          
          <figure className="hide-desktop">
            <img src={portfolio_cropped_me} alt="my profile"></img>
          </figure>

          <h4 className="hide-desktop"><a target="_blank" rel="noreferrer noopener" onClick={() => handleClick('email')} href="mailto:jedgardev@gmail.com">EMAIL</a></h4>
        </div>

      </div>
    )
}

export default Sidebar;