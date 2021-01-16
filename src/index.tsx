import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles/global-style';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const store = createStore(rootReducer);

ReactDOM.render(
    <DndProvider backend={HTML5Backend}>
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    </DndProvider>,
    document.getElementById('root')
);
