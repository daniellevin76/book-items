import { Box, Typography, Button, CardActions } from '@material-ui/core'

function BookItem ({ bookTitle, Author }) {
  return (
    <>
      <Box display='flex' flexDirection='column'>
        <Box>
          <Typography variant='h6' color='text.secondary' gutterBottom>
            {bookTitle}
          </Typography>
        </Box>
        <Box>
          <Typography variant='body6' color='text.secondary' gutterBottom>
            av {Author}
          </Typography>
        </Box>
        <Box>
          <Typography variant='body2'>
            lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit
            amet, consectetur adip
          </Typography>
        </Box>
      </Box>
      <CardActions>
        <Button size='medium' variant='contained' color='primary'>
          Add to cart
        </Button>
      </CardActions>
    </>
  )
}

export default BookItem
