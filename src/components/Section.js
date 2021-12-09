import BookItem from './BookItem'
import { Grid } from '@material-ui/core'

function Section () {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4}>
        <BookItem bookTitle=' A Sign of Four' Author='Sir Arthor Conan Doyle' />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <BookItem
          bookTitle=' A Study in Scarlet'
          Author='Sir Arthor Conan Doyle'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <BookItem
          bookTitle=' Baskervilles Hound'
          Author='Sir Arthor Conan Doyle'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <BookItem
          bookTitle=' The Adventures of Sherlock Holmes'
          Author='Sir Arthor Conan Doyle'
        />
      </Grid>
    </Grid>
  )
}

export default Section
