import React from 'react';
import { BottomNavigation} from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import  {makeStyles}  from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography,Box } from '@material-ui/core';



const useStyles=makeStyles({
    social:{
        margin:10,
        fontSize:'large',
        color:'primary',
    },
    section:{
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#757575',
        opacity:'0.8',
        color:'solidBlack'
    },
    address:{
       display:'block',
       textAlign:'center',
       color:'black',
       opacity:'1',
    },
    bottom:{
        height:'100%',
        position:'relative',
        overflow:'auto',
    }
});

const BottomNav=()=>{

    const classes=useStyles();

    return(
        <BottomNavigation className={classes.bottom}>
            <Grid container direction='column '>
                <Grid item xs={12} sm={4} className={classes.section}>

                </Grid>
                <Grid item xs={12} sm={4} className={classes.section}>
                    <Typography className={classes.address}>
                        <Box fontSize="h6.fontSize">Address</Box>
                        <Box>Kurunegala</Box>
                    </Typography>

                </Grid>
                <Grid item xs={12} sm={4} className={classes.section}>
                    <FacebookIcon className={classes.social}/>
                    <TwitterIcon className={classes.social}/>
                    <LinkedInIcon className={classes.social}/>

                </Grid>
            </Grid>
            
        </BottomNavigation>
    )

};

export default BottomNav;