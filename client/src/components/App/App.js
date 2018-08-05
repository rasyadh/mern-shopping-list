import React, { Component } from 'react';
import NavbarApp from './Navbar/NavbarApp';
import ShoppingList from '../../containers/ShoppingList/ShoppingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavbarApp />
                <ShoppingList />
            </div>
        );
    }
}

export default App;
