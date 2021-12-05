import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

const ThemeButton = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton icon={colorMode == 'light' ? <MoonIcon /> : <SunIcon />} 
        aria-label="ThemeButton" onClick={toggleColorMode} />
    );
}

export default ThemeButton;