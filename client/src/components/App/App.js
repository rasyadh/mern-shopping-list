import React, { Component } from 'react';
import NavbarApp from './Navbar/NavbarApp';
import ShoppingList from '../../containers/ShoppingList/ShoppingList';
import ModalItem from '../Modal/ModalItem';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from '../../store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <NavbarApp />
                    <Container>
                        <ModalItem />
                        <ShoppingList />
                    </Container>
                </div>
            </Provider>
        );
    }
}

export default App;
