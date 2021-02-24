import React from 'react';
import { makeStyles, createStyles, theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MeditationProject from "../../assets/Projects/MeditationProject.svg"
import SnapShotProject from "../../assets/Projects/SnapShotProject.png"

const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        maxWidth: 345,
        marginRight: "2vw",
      },
      media: {
        height: 140,
      },
      anchor:{
          textDecoration: "none",
          color: "black",
      },
      [theme.breakpoints.down("md")]:{
        root:{
          marginTop: "2vh",
        }
      }
    }),
);

export default function ProjectCard({project, idx}) {
  const classes = useStyles();

  const getImage = (i) =>{
    let image;
    console.log(i)
    switch(i){
      case 0:
        image = MeditationProject
        break;
      case 1:
        image = SnapShotProject
        break;
    }
    return image;
  }

  return (
    <Card className={classes.root}>
      <a target = "_blank" className = {classes.anchor} href = {project.website}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image= {getImage(idx)}
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
