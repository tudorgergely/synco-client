import React, {Component} from "react";
import {Container} from "semantic-ui-react";
import "./App.css";
import {store} from "./redux/configure";
import {Provider} from "react-redux";
import Home from "./containers/Home";

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Provider store={store}>
                <Container fluid>
                    <Home/>
                </Container>
            </Provider>
        );
    }
}

export default App;
