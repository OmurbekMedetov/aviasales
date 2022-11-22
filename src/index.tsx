import * as ReactDOMClient from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const aviasales = ReactDOMClient.createRoot(document.querySelector('.root') as HTMLElement);
aviasales.render(
  <Provider store={store}>
    <App />
  </Provider>
);
