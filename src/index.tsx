import * as ReactDOMClient from 'react-dom/client';
import App from './components/app/app';
import { legacy_createStore as createStore } from 'redux';
import { ReducerAvia } from './components/redux-logic/reduce';
import { Provider } from 'react-redux';

const store = createStore(ReducerAvia);

const aviaceils = ReactDOMClient.createRoot(document.querySelector('.root') as HTMLElement);
aviaceils.render(
  <Provider store={store}>
    <App />
  </Provider>
);
