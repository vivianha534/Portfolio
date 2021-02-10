import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MeditationProject from "../../assets/Projects/MeditationProject.svg"
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  anchor:{
      textDecoration: "none",
      color: "black",
  }
});

export default function ProjectCard({project}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <a target = "_blank" className = {classes.anchor} href = {project.website}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image= {MeditationProject}
            title= {project.title}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {project.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {project.description}
            </Typography>
            </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
}
