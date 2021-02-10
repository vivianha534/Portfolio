import React from "react"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { blue, red } from '@material-ui/core/colors';
import Button from "@material-ui/core/Button"
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {useMediaQuery} from "@material-ui/core"

const useStyles = makeStyles((theme) =>
    createStyles({
        icon:{
            marginRight: "2vw",
            marginTop:"2vh",
        },
        anchor:{
            textDecoration: "none",
        },
        [theme.breakpoints.only("md")]:{
            icon:{
                marginTop:"5vh",
            },
        }
    }),
);

const Contact = () => {
    const classes = useStyles();
    const desktopView = useMediaQuery("(min-width:900px)");

    const buttonSize = {
        desktop: {
            size: "large",
        },
        mobile: {
            size: "small",
        }
    }

    return(
        <div>
            <a className = {classes.anchor} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vivian-ha-74abb8194/">
                <Button
                    style={{backgroundColor:blue[900], color: "white"}}
                    color="primary"
                    size ={desktopView ? buttonSize.desktop.size : buttonSize.mobile.size}
                    className={classes.icon}
                    startIcon={<LinkedInIcon />}
                >
                    My Linkedin
                </Button>
            </a>

            <a className = {classes.anchor} target="_blank" rel="noopener noreferrer" href="https://github.com/vivianha534">
                <Button
                    style={{backgroundColor:"black", color: "white"}}
                    size ={desktopView ? buttonSize.desktop.size : buttonSize.mobile.size}
                    className={classes.icon}
                    startIcon={<GitHubIcon />}
                >
                    My Github
                </Button>
            </a>

            <a className = {classes.anchor} target="_blank" rel="noopener noreferrer" href = "mailto:vivian.ha534@gmail.com">
                <Button
                    variant="contained"
                    style={{backgroundColor:red[500], color: "white"}}
                    size ={desktopView ? buttonSize.desktop.size : buttonSize.mobile.size}
                    className={classes.icon}
                    startIcon={<MailOutlineIcon />}
                >
                    Email Me
                </Button>
            </a>
        </div>
    )
}

export default Contact;