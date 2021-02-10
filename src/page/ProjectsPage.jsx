import React from "react"
import { makeStyles, createStyles,Theme } from "@material-ui/core/styles";
import {Typography} from "@material-ui/core"
import Projects from "../components/Projects/Projects"

const useStyles = makeStyles((theme) =>
    createStyles({
        projects:{
            height: "100vh",
            backgroundColor: "#01214b",
        },
        container:{
            marginLeft: "10vw",
            marginRight: "10vw",
            width: "80vw",
            paddingLeft: "3vw",
            paddingTop: "6vh",
        },
        header: {
            fontSize: "40px",
            color: "white",
        },
        description:{
            marginTop: "5vh",
            fontSize: "20px",
            color: "grey",
        },
        list:{
            color: "white",
            marginTop: "5vh",
        },
        [theme.breakpoints.up("sm")]: {
        },
        // eslint-disable-next-line comma-dangle
    })
);

const projects = [
    {
        title: "Meditation Project",
        description: "A meditation website that allows you to choose how long and to what sounds you want to meditate to. Built with React JS, and Material UI, and deployed through Git Hub Pages",
        index: 0,
        website: "https://vivianha534.github.io/meditation-project/",
    }
]

const ProjectsPage = () => {
    const classes = useStyles()
    
    return(
        <div className = {classes.projects}>
            <div className = {classes.container}>
                <Typography className = {classes.header}>
                    Projects
                </Typography>
                <Projects projects = {projects}/>
            </div>
        </div>
    )
}

export default ProjectsPage

