import React from "react"
import Layout from "../components/layout.js"
import "../components/main.css"
import { graphql, StaticQuery } from "gatsby"
import img1 from "../images/demia-01.png"
import img2 from "../images/vp-00.png"
import img3 from "../images/pixe.png"

const Work = () => (
    <Layout>
        <div className="page-layout">
            <div className="content-container portfolio">
                <p>PORTFOLIO</p>

                <h3>Selected Projects</h3>

                <div>
                    <div className="project-container">
                        <img className="phone-mockup" src={img1} />

                        <div className="proj-text">
                            <h5>Demia Mobile App and Website</h5>
                            <p>A mobile platform for finding your child a mentor or students mentoring their peers. The project was developed By me and a co-founder to help address some of the problems with private tutoring. </p>
                            <p className="hide-extra">Built in: React Native (Javascript framework for native mobile applications), Google Firebase (backend).</p>
                            <p className="hide-extra">Note: It was an incredibly fun project! I got to work with payments, messaging and email all on a serverless backend.</p>
                        </div>
                    </div>
                    <div className="project-container">
                        <img className="phone-mockup" src={img2} />

                        <div className="proj-text">
                            <h5>VarsityPrep Mobile App</h5>
                            <p>An accompanying app for the VarsityPrep website that allowed for parents to book, schedule, and pay for their children's private athletic coaches.</p>
                            <p className="hide-extra"><strong>Built in:</strong> React Native (Javascript framework for native mobile applications), Google Firebase (backend).</p>
                            <p className="hide-extra"><strong>Note:</strong> This was the first mobile app I built using React Native and I was blown away by how powerful the framework was.</p>
                        </div>
                    </div>
                    <div className="project-container">
                        <img className="phone-mockup" src={img3} />

                        <div className="proj-text">
                            <h5>Pixe Mobile App</h5>
                            <p>The first project I managed was a social media app. It allowed it's users to follow groups of people or organizations rather than just individuals. </p>
                            <p className="hide-extra">Built in: Native iOS AWS servers hosting PHP laravel.</p>
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