import React from 'react'
import "./main.css"
import me from '../images/me.jpg'

const Sidebar = ({ color, pretty, handleClick, handlePrettify }) => {
    return (
      <div className="sidebar-container" style={{background: color, padding: "1em", marginBottom: "1em"}}>
        
        <figure className="hide-mobile">
          <img src={me} alt="my profile"></img>
        </figure>

        <div className="subheader hide-mobile">
          <p>Mobile Developer</p>            
          <p>Web Developer</p>            
          <p>Product Manager</p>
        </div>
  
        <div className="content-links hide-mobile">
          <h4><Link onClick={handleClick} to="/portfolio">Projects</Link></h4>
          <h4><Link onClick={handleClick} to="/blogs">Blog</Link></h4>
          <h4><a target="_blank" onClick={handleClick} href="mailto:jedgardev@gmail.com">Contact</a></h4>
        </div>

        <div className="other-links hide-mobile">
          <p>Other Links</p>
          <p><a href="#" target="_blank">Github</a> <br /></p>
          <p><a href="#" target="_blank">Twitter</a> <br /></p>
          <p><a href="#" target="_blank">Instagrm</a> <br /></p>
        </div>

        <div className="top-bar hide-desktop">
          <h4 className="hide-desktop"><a onClick={() => handleClick('menu')} href="#">MENU</a></h4>
          
          <figure className="hide-desktop">
            <img src={me} alt="my profile"></img>
          </figure>

          <h4 className="hide-desktop"><a target="_blank" onClick={() => handleClick('email')} href="mailto:jedgardev@gmail.com">EMAIL</a></h4>
        </div>

      </div>
    )
}

export default Sidebar;