import * as ReactDOM from 'react-dom/client'
import AppRouter from './src/component/router/AppRouter';
import { Provider } from 'react-redux';
import Store from './src/redux/store/Store';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={Store}>
    <RouterProvider router={AppRouter}></RouterProvider>
    </Provider>
);