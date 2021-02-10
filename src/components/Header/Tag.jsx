import React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles, createStyles,Theme } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        tag:{
            display: "flex",
            flexDisplay: "row",
        },
        number:{
            color: "cyan",
        },
        anchor:{
            textDecoration: "none",
            color: "white",
        }
        // eslint-disable-next-line comma-dangle
    })
);


const Tag = ({tag, id}) => {
    const classes = useStyles();
    return(
        <div className = {classes.tag}>
            <a className = {classes.anchor} href = {id}>
                <Typography className = {classes.descriptor}>{tag}</Typography>
            </a>
        </div>
    )
}

export default Tag;