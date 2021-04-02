import React                    from 'react';
import ReactDOM                 from 'react-dom';
import App                      from './App';
import TrackingInactivity       from 'HOC/TrackingInactivity/TrackingInactivity';
import GlobalContext            from 'HOC/GlobalContext/GlobalContext';
import './App.css';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

ReactDOM.render(
      <GlobalContext>
          <TrackingInactivity>
            <App />
          </TrackingInactivity>
      </GlobalContext>,
  document.getElementById('root')
);