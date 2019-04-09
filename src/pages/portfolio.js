import React from "react"
import Layout from "../components/layout.js"
import "../components/main.css"
import { graphql, StaticQuery } from "gatsby"
import img1 from "../images/demia-01.png"
import img2 from "../images/vp-00.png"
import img3 from "../images/demia-02.png"

const Work = () => (
    <Layout>
        <div className="page-layout">
            <div className="content-container">
                <p>PORTFOLIO</p>

                <h3>Selected Projects</h3>

                <div>
                    <div className="project-container">
                        <img className="phone-mockup" src={img1} />

                        <div className="proj-text">
                            <h5>Demia Mobile App and Website</h5>
                            <p>App information</p>
                        </div>
                    </div>
                    <div className="project-container">
                        <img className="phone-mockup" src={img2} />

                        <div className="proj-text">
                            <h5>Demia Mobile App and Website</h5>
                            <p>App information</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </Layout>
)

const projectQuery = graphql `query {
      allMarkdownRemark {
		edges {
        node {
            id
            frontmatter {
                title
                header
                path
            }
            html
        }
    }
  }
}`


{/* <StaticQuery query={projectQuery} render={data => {
    return (
        <div>
            {data.allMarkdownRemark.edges.map(({node}) => {
                console.log(data);
                return <Project 
                    key={node.id}
                    title={node.frontmatter.title}
                    body={node.html}
                />
            
            })}
        </div>
    )
}}/> */}

export default Work;