import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue, green } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuMUI from "./navigationMUI/MenuMUI";
import EtuSivu from "./EtuSivu";
import SearchTitles from "./SearchTitles";
import SearchResult from "./SearchResult";
import RequestPage from './RequestPage';
import FeedbackCard from "./FeedbackCard";

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
          paddingLeft: "9%",
          paddingRight: "9%",
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
            <Route path="/search" component={SearchResult} />
            <Route exact path="/etusivu" component={EtuSivu} />
            <Route path="/pyyntosivu" component={RequestPage}/>
            <Route path="/palautesivu" component={FeedbackCard} />
            <Route path="/" component={SearchTitles} />

          </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}
export default ProjektiApp;
