import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <div className="page-layout">
      <div className="content-container" style={{paddingBottom: "2em"}}>
        <h2>Blog posts coming soon</h2>
        <Link className="link-blog" to="/">Back to the homepage</Link>
      </div>
    </div>
  </Layout>
)

export default Blog
