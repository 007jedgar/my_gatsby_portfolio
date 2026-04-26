import React from "react"
import "./main.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
    const image = getImage(project?.frontmatter?.image01)
    return (
        <div >
            <h4>{project.title}</h4>
            {image ? <GatsbyImage image={image} alt={project?.frontmatter?.title || project?.title || "Project image"} /> : null}
            <div dangerouslySetInnerHTML={{__html: project.body}}></div>
        </div>
    )
}

// export default Project