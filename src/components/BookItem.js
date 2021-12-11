import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  makeStyles,
  CardHeader,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: { height: "82%", width: "75%" },
  cardMedia: { height: "50%", width: "75%" },
});

function BookItem({ bookTitle, Author, imageName }) {
  const classes = useStyles();

  return (
    <Card elevation={2} className={classes.card}>
      <CardHeader title={bookTitle} subheader={Author} />
      <CardMedia
        className={classes.cardMedia}
        component="img"
        image={process.env.PUBLIC_URL + imageName}
        alt={{ bookTitle }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Why do we use it? It is a long established fact that a
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" variant="contained" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default BookItem;
