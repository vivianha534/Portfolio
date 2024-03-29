import React from "react"
import {Typography} from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles";
import ProfilePic from "../../assets/ProfilePic.svg"
import Contact from "./Contact"


const useStyles = makeStyles((theme) =>
    createStyles({
        number:{
            fontSize: "40px",
        },
        header:{
            fontSize: "40px",
        },
        container: {
            width: "80vw",
            paddingLeft: "3vw",
            paddingTop: "5vh",
        },
        icons:{
            marginTop: "5vh",
        },
        text:{
            marginTop: "2vh",
            fontSize: "20px",
        },
        [theme.breakpoints.up("lg")]: {
            descripContain:{
                width: "80vw",
                display: "flex",
            },
            image:{
                width: "30vw",
                height: "50vh",
                marginLeft: "-2.5vw",
                marginTop: "3vh",
                marginRight: "2vw",
            },
            container:{
                marginLeft: "10vw",
                marginRight: "10vw",
            },
        },
        [theme.breakpoints.down("md")]:{
            container:{
                marginLeft: "5vw",
                marginRight: "5vw",
            },
            header:{
                fontSize: "2.25vh",
            },
            text:{
                fontSize: "1.75vh",
            },
            image:{
                width: "30vw",
                height: "30vh",
            },
            icons:{
                marginTop: "3vh",
                marginLeft: "8vw",
                display: "flex",
                flexDisplay: "row",
            },
            imageAndContact:{
                display: "flex",
                flexDisplay: "row",
                marginBottom: "-5vh",
                marginTop: "-3vh",
            }
        }
    })
);

const Description = () => {
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Typography className={classes.header}>
                About Me
            </Typography>
        
            <div className = {classes.descripContain}>

                <div className = {classes.imageAndContact}>
                    <img className = {classes.image} src = {ProfilePic}/>
                    <div className = {classes.icons}>
                        <Contact/>
                    </div>
                </div>

                <div className = {classes.description}>
                    <Typography className = {classes.text}>
                        Hello! My name is Vivian, and I'm a software engineer based in Los Angeles, CA. 
                    </Typography>

                    <Typography className = {classes.text}>
                        I enjoy building websites, applications, and games that help underserved communities obtain access to
                        resources that they need. In particular, I am especially passionate about education, mental health and wellness
                        and helping the LGBTQ+ community!
                    </Typography>

                    <Typography className = {classes.text}>
                        I am currently a fourth year computer science major. I am a previous intern at Amazon, and in this role I developed an autofill variable feature using Angular, and AngularJS that is able to 
                        autofill hundreds of variables with default values by parsing a script of code making test for process engineers faster. I also developed a sidebar to persist compilation errors
                        and warnings using Angular and Angular JS making code corrections quicker and easier. I was also a previous intern at DotDash, and during my internship,
                        I implemented news schema badges on the four different VeryWell sites that touched over 3000+ articles, and increased EAT and SEO performance.
                        I am also a previous intern at Psypher LA, and in this role I helped to develeop a progressive web app to promote mental health and wellness in underserved communities.
                    </Typography>
                    <Typography className = {classes.text}>
                        Previously, I was a learning labs project lead and static site director
                        at ACM Teach LA at UCLA. As a learning labs project lead, I lead a team of developers in creating interactive learning modules 
                        to help students gain a better understanding of math heavy computer science topics. In addition to my duties as a project lead,
                        as the static site director I was in charge of leading a group of developers in maintaining, and impelementing new features to
                        our static site. 
                    </Typography>
                    <Typography className = {classes.text}>
                        Outside of school, I like to dance! Not only does dance give me an outlet to creatively express myself,
                        it also gives me the opportunity to collaboratively work in a team to create some amazing things.
                    </Typography>
                </div>
            </div>


        </div>
    )
}

export default Description