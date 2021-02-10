import React from "react"
import ProjectCard from "./ProjectCard"

const Projects = ({projects}) =>{
    return(
        <div>
            {projects.map((project) => <ProjectCard project = {project}/> )}
        </div>
    )
}

export default Projects