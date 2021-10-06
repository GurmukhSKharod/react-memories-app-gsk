import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import {useSelector} from 'react-redux'; /*fetch data from global redux store using selectors*/

import Post from './Post/Post'
import useStyles from "./styles";

const Posts = ({setCurrentId}) => {
    //use the following line to get access to whole global redux state/store
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);
    
    return (
        /*
        If no posts, show progress bar, else, show posts in grid.
        12 is full sie of screen, so we map through each post, then each item is a grid itself, taking up the whole screen on mobile - "xs={12}" and half on larger screens - "sm={6}".
        Then in the grid item we send the post with props {post}.
        */
        !posts.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}> 
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>    
                    </Grid>
                ))} 
            </Grid>
        )
    )
}

export default Posts