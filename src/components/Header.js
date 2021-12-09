import Logo from './Logo'
import Cart from './Cart'
import { Box } from '@material-ui/core'
function Header () {
  return (
    <Box display='flex' justifyContent='space-between'>
      <Box p={5}>
        <Logo />
      </Box>

      <Box p={5}>
        <Cart />
      </Box>
    </Box>
  )
}

export default Header
