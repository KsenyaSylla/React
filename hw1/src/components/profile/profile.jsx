import { React, useRef, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Button } from '@material-ui/core/';
import { Provider, useDispatch, useSelector } from "react-redux";
import { profileStore } from "../../store/profileStore";
import { SET_GENDER_FEMALE, SET_GENDER_MALE, SET_GENDER_OTHER } from "./action";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
    },
    media: {
        height: 300,
    },
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    }
}));

const Info = () => {
    const dispatch = useDispatch();
    const gender = useSelector((state) => state.gender);
    const classes = useStyles();
    const [value, setValue] = useState(gender);
    const genderValue = useRef(null);


    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClick = () => {
        if (value == "male") {
            dispatch({ type: SET_GENDER_MALE });
        } else if (value == "female") {
            dispatch({ type: SET_GENDER_FEMALE });
        } else if (value == "other") {
            dispatch({ type: SET_GENDER_OTHER });
        }
    };

    return (

        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image="http://placekitten.com/200/300"
                title="kitten"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <form onSubmit={handleSubmit}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" ref={genderValue} value={value} onChange={handleChange} row>
                            <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                            <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                            <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
                        </RadioGroup>
                        <Button type="submit" variant="outlined" color="primary" className={classes.button} onClick={handleClick}>
                            Submit
                        </Button>
                    </FormControl>
                </form>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widezspread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
            </CardContent>
        </Card >
    );
};

export const Profile = () => {
    return (
        <Provider store={profileStore}>
            <Info />
        </Provider>
    )
};