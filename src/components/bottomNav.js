import React from 'react';
import { BottomNavigation} from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import classes from '*.module.css';
import  {makeStyles}  from '@material-ui/core';


const useStyles=makeStyles({
    social:{
        margin:10,
        fontSize:'large',
        color:'primary',
    },
});

const BottomNav=()=>{

    const classes=useStyles();

    return(
        <BottomNavigation>
            <Grid container direction='column '>
                <Grid item xs={12} sm={4}>

                </Grid>
                <Grid item xs={12} sm={4}>

                </Grid>
                <Grid item xs={12} sm={4}>
                    <FacebookIcon className={classes.social}/>
                    <TwitterIcon className={classes.social}/>

                </Grid>
            </Grid>
            
        </BottomNavigation>
    )

};

export default BottomNav;