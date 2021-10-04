import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import App from './app/app';
import store from './store';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
