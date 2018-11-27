import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers';
import { PrivateRoute } from '../components';
import { Main, CreateUser, ViewUser, } from '../containers';


class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (

            <div>
                <Router history={history}>
                    <div>
                        <PrivateRoute exact path="/" component={Main} />
                        <Route path="/main" component={Main} />
                        <Route path="/createuser" component={CreateUser} />
                        <Route path="/viewuser" component={ViewUser} />



                    </div>

                </Router>

            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        hist: state
    }
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 