import React from 'react';
import Items from './Cards';
import {Grid } from '@material-ui/core';
import cardContent from './cardContent';



const Content=()=>{

    const getCard=(cardContentobj)=>{
        return(
            <Grid item xs={12} sm={6} lg={4}>
                <Items {... cardContentobj}/>
            </Grid>
        )
    }


    return (
        <Grid container spacing={2}>
            {
                cardContent.map(cardContentobj=>getCard(cardContentobj))
            }

        </Grid>
    );
}

export default Content;

