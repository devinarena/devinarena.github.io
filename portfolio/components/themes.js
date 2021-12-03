import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from '@chakra-ui/react';

const fonts = {
    body: "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const overrides = {
    ...chakraTheme,
    fonts,
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const theme = extendTheme(overrides, {config} );

export default theme;