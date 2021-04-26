import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue, green } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuMUI from "./navigationMUI/MenuMUI";
import Etusivu from "./Etusivu";
import SearchTitles from "./SearchTitles";
import SearchResult from "./SearchResult";
import RequestPage from './RequestPage';

//Sivun laajuinen default-teema
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#262a2e",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#808080",
      contrastText: "#000000",
    },

    text: {
      primary: "#000000",
      secondary: "#000000",
      contrastText: "#FFFFFF",
    },

    action: {
      active: blue[300],
      hover: "#262a2e85",
      selected: green[300],
    },

    background: {
      default: "#000000",
    },
  },
  typography: { fontFamily: ["Helvetica"], fontSize: 24 },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          paddingLeft: "50px",
          paddingRight: "50px",
          backgroundColor: "#00b6ca90",
        },
      },
    },
  },
});
function ProjektiApp() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <div>
          <CssBaseline />
          <MenuMUI />
          <Switch>
            <Route path="/search/:value" component={SearchResult} />
            <Route exact path="/etusivu" component={Etusivu} />
            <Route path="/pyyntosivu" component={RequestPage}/>
            <Route path="/" component={SearchTitles} />
          </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}
export default ProjektiApp;
