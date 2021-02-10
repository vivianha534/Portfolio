import React from "react"
import Header from "../components/Header/Header"
import Intro from "../components/HomePage/Intro"
import { makeStyles, createStyles,Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        home:{
            height: "100vh",
            backgroundColor: "#01214b",
        }
        // eslint-disable-next-line comma-dangle
    })
);

const HomePage = () => {
    const classes = useStyles()

    return(
        <div className = {classes.home} id = "home">
            <Header/>
            <Intro/>
        </div>
    )
}

export default HomePage