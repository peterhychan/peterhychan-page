import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import LanguageIcon from "@material-ui/icons/Language";
import CodeIcon from "@material-ui/icons/Code";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    marginTop: 25,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function RecipeReviewCard({
  name,
  description,
  stacks,
  category,
  projectImage,
  deployedURL,
  sourceURL,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={
          projectImage ? projectImage : "https://source.unsplash.com/random"
        }
      />
      <CardContent>
        <div className="static rounded text-center py-2 m-2 bg-blue-500 uppercase px-1 py-1 text-xs font-bold text-white">
          {category}
        </div>
        <Typography gutterBottom variant="h5" component="h2" align="center">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <div className="py-6">
          {stacks
            ? stacks.map((stack) => (
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2"
                  key={stack}
                >
                  {stack}
                </span>
              ))
            : null}
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="language">
          <a href={deployedURL}>
            <LanguageIcon />
          </a>
        </IconButton>
        <IconButton aria-label="code">
          <a href={sourceURL}>
            <CodeIcon />
          </a>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default RecipeReviewCard;
