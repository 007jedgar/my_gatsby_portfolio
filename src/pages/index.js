import React, {Component} from "react"
import "../components/main.css"
import Sidebar from "../components/sidebar.js"
import Welcome from "../components/welcome.js"
import Footer from "../components/footer.js"

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: "#fff",
      pretty: false,
      content: true,
      showMenu: false,
    }
  }

  handleClick = (option) => {
    switch(option) {
      case 'menu':
        return this.setState({ 
          showMenu: !this.state.showMenu,
        })
      case 'email':
        return;
      default:
        return option;
    }
  }

  renderMenu() {
    if (this.state.showMenu) {
      return (
        <div className="menu">
          <ul>
            <li><a>Projects</a></li>
          </ul>
          <ul>
            <li><a>Blog</a></li>
          </ul>
          <ul>
            <li><a>Contact</a></li>
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

  render() {
    return (
      <div className="page-layout">
        <Sidebar 
          color={this.state.color} 
          pretty={this.state.pretty} 
          handleClick={this.handleClick} 
          handlePrettify={this.handlePrettify} 
        />

        <div>
          {this.renderContent()}
          {this.renderMenu()}
          <Footer />
        </div>

       
      </div>
    )
  }
} 

export default IndexPage
