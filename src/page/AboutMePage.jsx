import React from "react"
import Description from "../components/AboutMe/Description"
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        about:{
            minHeight: "100vh",
            backgroundColor: "white",
        }
        // eslint-disable-next-line comma-dangle
    })
);


const HomePage = () => {
    const classes = useStyles()
    return(
        <div className = {classes.about} id = "about-me">
            <Description/>
        </div>
    )
}

export default HomePage