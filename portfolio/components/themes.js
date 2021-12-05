import { extendTheme } from "@chakra-ui/react";

/**
* @file themes.js
* @author Devin Arena
* @since 12/3/2021
* @description Contains theme information for ChakraUI.
*/

const fonts = {
    body: "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true,
};

const components = {
    Heading: {
        variants: {
            sectionTitle: {
                fontSize: 25,
                textDecoration: "underline",
                textUnderlineOffset: 8,
                textDecorationThickness: 4,
                textDecorationColor: "whiteAlpha.400",
                marginBottom: 6,
            }
        }   
    },
    Text: {
        variants: {
            indented: {
                textIndent: "1rem",
                textAlign: "justify",
            },
            year: {
                fontWeight: "bold",
                textIndent: "1rem",
            }
        }
    },
    Link: {
        baseStyle: {
            color: "lightgray",
            padding: "4px",
            _hover: {
                textDecoration: "none",
                background: "whiteAlpha.200",
                color: "gray"
            }
        }
    }
}

const theme = extendTheme({ config, fonts, components });

export default theme;