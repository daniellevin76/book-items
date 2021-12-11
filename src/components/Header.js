import Logo from './Logo'
import Cart from './Cart'
import { Box } from '@material-ui/core'
function Header () {
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      mb={10}
      bgcolor='primary.main'
    >
      <Box>
        <Logo />
      </Box>

      <Box p={7}>
        <Cart nrOfItems={0} />
      </Box>
    </Box>
  )
}

export default Header
