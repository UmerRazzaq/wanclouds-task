import React from 'react';
import { connect } from 'react-redux';
import { authActions } from '../redux';


function mapStateToProps(state) {
    return {
        userData: state.authen
    };
}


function mapDispatchToProps(dispatch) {

    return {

    }


}


class ViewUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayUser: this.props.userData.user
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {

        e.preventDefault();
        this.props.history.push('/main')
        
    }
    


    render() {
        const { displayUser } = this.state;

        return (
            <div>

                <div id="container" style={{ marginLeft: '19cm', marginTop: '2cm' }}>

                    <h1>View User</h1>
                    <p>{displayUser.firstName}</p>
                    <p>{displayUser.lastName}</p>
                    <p>{displayUser.address}</p>
                    <p>{displayUser.company}</p>
                    <p>{displayUser.contact}</p>
                    <p>{displayUser.dob}</p>

                </div>

                <div className="form-group text-center">
                    <button style={{ width: 30 + '%' }} className="btn btn-lg btn-blue-alt btn-info" type="submit" onClick= {this.handleSubmit}
                    > <span> &nbsp;Go Back</span></button>

                </div>
            </div>


        );
    }
}

const connectedViewUser = connect(mapStateToProps, mapDispatchToProps)(ViewUser);
export { connectedViewUser as ViewUser };


