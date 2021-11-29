import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import "./main.css"
import me from "../images/me.jpg"


class Header extends Component {
  render() {
    return (
      <header>
         <div className="sidebar-container" style={{background: "#fff", padding: "1em", marginBottom: "1em"}}>
            
            <figure className="hide-mobile">
              <img src={me} alt="my profile"></img>
            </figure>
    
            <div className="subheader hide-mobile">
              <p>Mobile Developer</p>            
              <p>Web Developer</p>            
              {/* <p>Product Manager</p> */}
            </div>
      
            <div className="content-links hide-mobile">
              <h4><Link to="/">Home</Link></h4>
              <h4><Link to="/portfolio">Portfolio</Link></h4>
              {/* <h4><Link to="/blog">Blog</Link></h4> */}
              <h4><a target="_blank" href="mailto:jedgardev@gmail.com">Contact</a></h4>
            </div>
    
            <div className="other-links hide-mobile">
              <p>Other Links</p>
              <p><a href="https://github.com/007jedgar" target="_blank">Github</a> <br /></p>
              <p><a href="https://www.linkedin.com/in/jonathan-e-8398a2112/" target="_blank">Linkedin</a> <br /></p>
              <p><a href="https://twitter.com/jon_eaux" target="_blank">Twitter</a> <br /></p>
              {/* <p><a href="https://www.instagram.com/jon.a.la.mode/" target="_blank">Instagrm</a> <br /></p> */}
            </div>
    
            <div className="top-bar hide-desktop">
              <h4 className="hide-desktop"><a onClick={this.props.handleClick} href="#">MENU</a></h4>
              
              <figure className="hide-desktop">
                <img src={me} alt="my profile"></img>
              </figure>
    
              <h4 className="hide-desktop"><a href="mailto:jedgardev@gmail.com" target="_blank">EMAIL</a></h4>
            </div>
    
          </div>
      </header>
    )    
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
