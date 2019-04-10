import React, {Component} from "react"
import "../components/main.css"
import Welcome from "../components/welcome.js"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pretty: false,
      content: true,
      showMenu: false,
    }
  }

  handleClick = () => {
    console.log('menu pressed')
    this.setState({ 
      showMenu: !this.state.showMenu,
    })
  }

  renderMenu() {
    if (this.state.showMenu) {
      return (
        <div className="menu">
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
          <ul>
            <li><a href="/portfolio">Projects</a></li>
          </ul>
          <ul>
            <li><a href="/blog">Blog</a></li>
          </ul>
          <ul>
            <li><a href="mailto:jedgardev@gmail.com">Contact</a></li>
          </ul>
        </div>
      )
    }
  }

  handlePrettify = () => {
    this.setState({ pretty: !this.state.pretty })
  }

  renderContent() {
    if (this.state.content) {
      return (
        <Welcome />
      )
    }
  }

  renderProjects() {

  }

  renderBlogs() {

  }

  renderContact() {

  }

  menuToggle = (d) => {
    console.log(d)
  }

  render() {
    return (
      <Layout showMenu={this.menuToggle}>
        <SEO title="Home" /> 
        <div className="page-layout">

          <div>
            {this.renderContent()}
            {this.renderMenu()}
          </div>
        </div>
      </Layout>
    )
  }
} 

export default IndexPage
