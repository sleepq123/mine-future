import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from '@src/route';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

moment.locale('zh-cn');

const history = createBrowserHistory();

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
