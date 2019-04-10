import React from "react"
import { Helmet } from "react-helmet"
import "./main.css"
import Img from "gatsby-image";

// const Project = ({ title, body, key }) => {
//     return (
//         <div key={key}>
//             <h4>{title}</h4>
//             <div dangerouslySetInnerHTML={{__html: body}}></div>
//         </div>
//     )
// }

export default function Template({data}) {
    const { markdown: project } = data;
    return (
        <div >
            <h4>{project.title}</h4>
            <Img fluid={project.frontmatter.image01.childImageSharp.fluid} />
            <div dangerouslySetInnerHTML={{__html: project.body}}></div>
        </div>
    )
}

// export default Project