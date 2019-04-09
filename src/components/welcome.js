import React from 'react'
import { Link } from 'gatsby'
import "./main.css"

const Welcome = () => 
    (
    <div className="content-container">
        <p>Hello, I'm Jonathan,</p>

        <h3>I help small businesses and personal brands deliver beautiful online experiences.</h3>
        <h4>I'm a web and mobile app developer with a wide range of skills for problem solving and product design.</h4>

        <ul className="cta-main">
          <li><Link to="/portfolio">SEE MY WORK</Link></li>
          <li><a href="mailto:jedgardev@gmail.com">GET IN TOUCH</a></li>
        </ul>
    </div>
    )


export default Welcome