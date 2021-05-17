import { createMuiTheme } from "@material-ui/core/styles";

export const light = createMuiTheme(
    {
        palette: {
            primary: {
                light: '#6e43a3',
                main: '#4a148c',
                dark: '#330e62',
                contrastText: '#fff',
              },
        }
    },
    
);

export const dark = createMuiTheme(
    {
        palette: {
            type: 'dark',
            primary: {
                light: '#c29fff',
                main: '#b388ff',
                dark: '#7d5fb2',
                contrastText: '#fff',
              },
        }
    },
);

export default light;