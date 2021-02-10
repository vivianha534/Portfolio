import React from "react"
import {Typography, useMediaQuery} from "@material-ui/core"
import { makeStyles, createStyles,Theme } from "@material-ui/core/styles";
import Tag from "./Tag"
import PortfolioLogo from "../../assets/PortfolioLogo.svg"

const useStyles = makeStyles((theme) =>
    createStyles({
        header:{
                display: "flex",
                flexDirection: "row",
                color: "white",
                paddingTop:"6vh",
                paddingBottom:"1vh",
                paddingLeft:"10vw",
                paddingRight:"10vw",
                justifyContent: "space-between"
        },
        logo:{
            width:"5vw",
            marginLeft: "-7vw",
            marginTop: "-3vh",
        },
        [theme.breakpoints.up("sm")]: {
            tags:{
                width: "30vw",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            },
        }
        // eslint-disable-next-line comma-dangle
    })
);

const tags = [
    ["#about-me", "About Me"],
    ["#about-me", "Contact"],
    ["#projects", "Projects"]
]
const Header = () => {
    const classes = useStyles();
    const desktopView = useMediaQuery("(min-width:900px)");

    if(desktopView){
        return(
            <div className= {classes.header}>
                <img className = {classes.logo} src = {PortfolioLogo}/>
                <div className = {classes.tags}>
                    {tags.map((tag) => (
                        <Tag tag={tag[1]} id={tag[0]}/>
                    ))}
                </div>
            </div>
        )
    }else{
        return(null)
    }
}

export default Header;