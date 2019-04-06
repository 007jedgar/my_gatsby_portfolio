import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./main.css"

const ListLink = props => (
  <li class="nav-list" >
    <Link class="nav-links" to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `#A5CBC3`,
      background: "#fff",
      marginBottom: `1em`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `.8em 0 0 0`,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <h3 >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            alignSelf: 'center'
          }}
        >
          {siteTitle}
        </Link>
      </h3>
      <div style={{alignItems: "center"}} class="nav-container">
          <ul style={{ listStyle: `none` }}>
            <ListLink to="/projects">Projects</ListLink>
            <ListLink to="/about/">About Me</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
