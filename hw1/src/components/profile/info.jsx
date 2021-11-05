import { Container } from "@material-ui/core";
import { React } from "react";
import { Header } from "./header";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core/';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export const Info = () => {
    const classes = useStyles();
    return (
        <Container>
            <Header />
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
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};