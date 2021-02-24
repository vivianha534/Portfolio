import React from "react"
import ProjectCard from "./ProjectCard"
import { makeStyles, createStyles,Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        projects:{
            display: "flex",
            flexDirection: "row",
        },
        [theme.breakpoints.down("md")]:{
            projects:{
                display: "flex",
                flexDirection:"column",
                marginBottom: "1vh",
            }
        }
        // eslint-disable-next-line comma-dangle
    })
);

const Projects = ({projects}) =>{
    const classes= useStyles()
    return(
        <div className={classes.projects}>
            {projects.map((project, idx) => <ProjectCard idx={idx} project = {project}/> )}
        </div>
    )
}

export default Projects