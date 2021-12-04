import { extendTheme } from "@chakra-ui/react";

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
                textIndent: 2,
                alignText: "justify",
            }
        }
    }
}

const theme = extendTheme({ config, fonts, components });

export default theme;