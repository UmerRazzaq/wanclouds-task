import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';




function mapStateToProps(state) {
    return {
        //        checklogin: state.authen,
    }
}




function mapDispatchToProps(dispatch) {
    return {


    }
}

class Main extends React.Component {
    constructor(props) {

        super(props);
        this.state = {

        };

    }




    render() {

        return (
            <div style={{ marginLeft: '19cm' , marginTop: '7cm'}} >

                <h1>Get Started</h1>

                <Link to="/createuser">
                    <h2 style={{ marginLeft: '0.7cm' }} >
                        Create User
                </h2>

                </Link>

                <Link to="/viewuser" >

                    <h2 style={{ marginLeft: '0.7cm' }} >
                        View User
                </h2>


                </Link>

            </div>
        );
    }

}

const connectedMain = connect(mapStateToProps, mapDispatchToProps)(Main);
export { connectedMain as Main };



