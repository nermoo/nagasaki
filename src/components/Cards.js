// import React from 'react';
// import '../CSS/Cards.css'
// import { Button, CardMedia,CardActionArea, Grid } from '@material-ui/core';
// import Card from '@material-ui/core/Card';


// export default function itemsCard(){

//     return (
     
//             <Card className="items">
//                 <CardActionArea>
//                     <CardMedia className='images' image='media/image1.jpg' title='acar'/>
//                         {/* /* <img src='./media/image1.jpg' alt="gtr"></img> */ }
//                 </CardActionArea>
//                 <Button fullWidth='true' className="showButton">Show more</Button>
//             </Card>
    
//     );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia,CardHeader,Avatar,IconButton } from '@material-ui/core';


const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const ItemsCard=(props)=>{
    const classes = useStyles();


    return (
        <Card className={classes.root}>
          <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            {props.avatarUrl}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={props.title}
        subheader={props.price}
      />
        <CardContent>
            <CardMedia 
            component='img'
            height='200'
            image={props.imageUrl} >
            </CardMedia>
          <Typography variant="body2" component="p">
          {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    )
}

export default ItemsCard;