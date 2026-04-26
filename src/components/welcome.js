import React from 'react'
import { Link } from 'gatsby'
import "./main.css"
import devsiteHero from "../images/devsite-hero.png"

const Welcome = () => 
    (
    <div className="content-container home-hero">
        <img className="home-hero-img" src={devsiteHero} alt="" aria-hidden="true" />

        <div className="home-hero-copy">
            <p>Hello, I'm Jonathan,</p>

            <h3>I build beautiful in-app experiences.</h3>
            <h4>I'm a web and mobile app developer with a wide range of skills for problem solving and product development.</h4>

            <ul className="cta-main">
              <li><Link to="/portfolio">SEE MY WORK</Link></li>
              <li><a href="mailto:jedgardev@gmail.com">GET IN TOUCH</a></li>
            </ul>
        </div>
    </div>
    )


export default Welcome