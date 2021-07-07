import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    Typography
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { red } from '@material-ui/core/colors';
import MealImage from '../images/2.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 360,
        // maxWidth: 360
    },
    buttonLine: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: theme.spacing(2),
        '& > *': {
            margin: theme.spacing(2),
        },
    },
    mealButton: {
        backgroundColor: '#100837',
        color: 'white',
        width: '25ch',
    },
    avatar: {
        backgroundColor: red[500],
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

const SingleMealPlan = (mealDetails) => {

    const classes = useStyles();
    const [mealArray, setMealArray] = useState([]);

    useEffect(() => {
        setMealArray(mealDetails.mealDetails);
    }, [mealDetails]);

    // const mealArray = mealDetails.mealDetails;
    console.log('meals:', mealArray);
    return (
        <div className={classes.buttonLine}>
            {mealArray !== undefined && (
                mealArray.map((meal, index) => {
                    return (
                        <div key={index}>
                            <Card className={classes.root}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            M
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={meal.meal}
                                    subheader={meal.calories}
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={MealImage}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography>
                                        This will display the required nutrition levels should include in your {meal.meal} meal plan.
                                    </Typography>
                                    <Typography>Number of servings: {meal.numOfServings}</Typography>
                                    <Typography>Maximum number of servings can have: {meal.maxNumOfServings}</Typography>
                                    {/* <Typography>Recipie: {meal.recipe.id}</Typography> */}
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </div>
                    );
                })
            )}
        </div >
    );
}

export default SingleMealPlan;