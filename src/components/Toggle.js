import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

function Toggle() {
    const {toggleColorMode} = useColorMode();

    return (
        <IconButton
        aria-label="Toggle theme"
        colorScheme={useColorModeValue('green', 'orange')}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
      ></IconButton>
    )
  }

  export default Toggle