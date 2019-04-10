import React, {Component} from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"


class Layout extends Component {
  constructor() {
    super()

    this.state = { showMenu: false }
  }

  renderMenu() {
    if (this.state.showMenu) {
      return (
        <div className="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
          <ul>
            <li><Link to="/portfolio">Portfolio</Link></li>
          </ul>
          <ul>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
          <ul>
            <li><a target="_blank" href="mailto:jedgardev@gmail.com">Contact</a></li>
          </ul>
        </div>
      )
    }
  }
  render() {
    const { children } = this.props
    return (
     <StaticQuery
       query={graphql`
         query SiteTitleQuery {
           site {
             siteMetadata {
               title
             }
           }
         }
       `}
       render={data => (
         <>
           <Header handleClick={() => this.setState({ showMenu: !this.state.showMenu })} siteTitle={data.site.siteMetadata.title} />
          
           <div>
             <main>
             {children}
             {this.renderMenu()}
             </main>
             <footer>
              <div className="footer">
                  <h3>Want to hear more?</h3>
    
                  <p>For business inquiries or casual chatter send an note via email. I love to get into app development, startup life and food/coffee culture.</p>
    
                  <h4><a target="_blank" href="mailto:jedgardev@gmail.com">jedgardev@gmail.com</a></h4>
              </div>
             </footer>
           </div>
         </>
       )}
     />
   )
 }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
