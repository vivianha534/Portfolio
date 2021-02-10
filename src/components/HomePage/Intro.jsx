import React from "react"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        aboutMe: {
            marginLeft: "10vw",
            marginRight: "10vw",
            width: "80vw",
            paddingLeft: "3vw",
            paddingBottom: "5vh",
            paddingTop: "5vh",
        },
        slogan:{
            color: "grey",
        },
        name:{
            color: "white",
        },
        description: {
            color: "grey",
        },
        greeting: {
            color: "cyan",
        },
        button: {
            color: "cyan",
            marginTop: "6vh",
            paddingTop: "2vh",
            paddingBottom:"2vh",
            paddingLeft:"2vw",
            paddingRight:"2vw",
        },
        anchor:{
            textDecoration: "none",
        },
        [theme.breakpoints.down("sm")]: {
            description:{
                width: "80vw",
                marginTop: "-2vh",
            },
            name:{
                fontSize: "12vw",
            },
            slogan:{
                fontSize:"8vw",
            },
            text:{
                marginTop: "5vh",
                marginBottom: "2vh",
            },
            button:{
                marginTop: "8vh",
            }
        },
        [theme.breakpoints.up("sm")]: {
            text:{
                fontSize: "20px",
            },
            description:{
                width: "80vw"
            },
            name:{
                fontSize: "8vw",
            },
            slogan:{
                marginBottom: "2vh",
                fontSize:"4vw",
            }
        },
        // eslint-disable-next-line comma-dangle
    })
);

const Intro = () => {
    const classes = useStyles();
    return(
        <div className = {classes.aboutMe}>
            <div className = {classes.greeting}>
                <Typography className = {classes.text}>
                    Hi, my name is
                </Typography>
            </div>
            <Typography className = {classes.name}>
                Vivian Ha
            </Typography>
            <Typography className = {classes.slogan}>
                I build things for the web
            </Typography>

            <div className = {classes.description}>
                <Typography className = {classes.text}>
                    I'm currently a second year undergraduate computer science major at the University of California, 
                    Los Angeles (UCLA), and a software development intern for Psypher LA
                </Typography>
            </div>

            <a className = {classes.anchor} target="_blank" rel="noopener noreferrer" href = "mailto:vivian.ha534@gmail.com">
                <Button className = {classes.button} variant = "outlined" color = "inherit">Get In Touch</Button>
            </a>
        </div>
    )
}

export default Intro