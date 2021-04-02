import React, { useContext }            from 'react';
import { theme }                        from 'UI/themeInstance'
import RouterComponent                  from 'RouterComponent';
import { MuiThemeProvider }             from '@material-ui/core/styles'
import { CssBaseline }                  from '@material-ui/core';
import { BrowserRouter }                from 'react-router-dom';
import { AuthContext }                  from 'context/AuthContext/AuthContext';
import { AdminUserContext }             from 'context/AdminUserContext/AdminUserContext';
import { GlobalLoader }                 from 'UI/GlobalLoader';
import { ToastContainer }               from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './fonts/fonts.css'

const  App = () => {
  const { isAuth } = useContext(AuthContext);
  const { setNoRoute } = useContext(AdminUserContext);

  if (isAuth === 2) return <GlobalLoader />;

  return (
      <MuiThemeProvider theme={theme}>
          <CssBaseline />

          <BrowserRouter getUserConfirmation={(message, callback) => {
              console.log(`%cPrompt ${message}`, "color: #2FD3FC; font-size: 16px");
              setNoRoute({
                  openDialog: true,
                  onOk: () => {
                      callback(true);
                  },
                  onCancel: () => {
                      callback(false);
                  }
              });
          }}>
              <RouterComponent />
          </BrowserRouter>

          <ToastContainer  />
      </MuiThemeProvider >
  );
};

export default App
