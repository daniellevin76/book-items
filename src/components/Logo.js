import { Card, CardMedia } from '@material-ui/core'

function Logo () {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='140'
        image={process.env.PUBLIC_URL + '/holmes.png'}
        alt='green iguana'
      />
    </Card>

    /*
    
    <img src={process.env.PUBLIC_URL + '/holmes.png'} alt='logo' width='100%' />
    */
  )
}

export default Logo
