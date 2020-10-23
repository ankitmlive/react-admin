import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import * as serviceWorker from './serviceWorker';
import { store } from "./redux/storeConfig/store"
import Spinner from "./components/@vuexy/spinner/Fallback-spinner"
import { Layout } from "./utility/Layout"
import { IntlProviderWrapper } from "./utility/Internationalization"

import "./index.scss"

const LazyApp = lazy(() => import("./App"))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <Layout>
          <IntlProviderWrapper>
            <LazyApp />
          </IntlProviderWrapper>
        </Layout>
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
