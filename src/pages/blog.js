import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Project from "../components/project"

const Blog = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="page-layout">
      <div className="content-container">
        <h2>Blog posts coming soon</h2>
        <Link className="link-blog" to="/">Back to the homepage</Link>
      </div>
    </div>
  </Layout>
)

export default Blog
