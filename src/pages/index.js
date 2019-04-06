import React, {Component} from "react"
import Layout from "../components/Layout.js"
import "../components/main.css"
import Sidebar from "../components/sidebar.js"

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: "#fff",
      pretty: false,
      content: true,
    }
  }

  handleClick = (option) => {
    this.setState({ content: true })
  }

  handlePrettify = () => {
    this.setState({ pretty: !this.state.pretty })
  }

  renderContent() {
    if (this.state.content) {
      return (
        <div className="content-container">
          <p>Hello, I'm Jonathan,</p>

          <h3>I help small businesses and personal brands express themselves online</h3>
          <h4>I'm a web and mobile app developer with a wide arrange of skills for problem solving and product design.</h4>

          <ul className="cta-main">
            <li><a href="#">SEE MY WORK</a></li>
            <li><a href="#">GET IN TOUCH</a></li>
          </ul>
        </div>
      )
    }
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
        </div>
       
      </div>
    )
  }
} 

export default IndexPage
