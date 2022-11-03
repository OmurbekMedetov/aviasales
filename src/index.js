import * as ReactDOMClient from 'react-dom/client';
import App from './components/app/app';

const aviaceils = ReactDOMClient.createRoot(document.querySelector('.root'));
aviaceils.render(<App />);
