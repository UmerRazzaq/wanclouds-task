import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../redux';

function mapStateToProps(state) {

    return {
        // groupsData: state.authen
    };
}


function mapDispatchToProps(dispatch) {

    return {

        onuserCreated: (user) => { dispatch(userActions.createuser(user)); }

    }


}

class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                address: '',
                company: '',
                contact: '',
                dob: ''
            },

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;

        if (name == 'contact') {

            if ((parseInt(event.nativeEvent.data) >= 0 && parseInt(event.nativeEvent.data) <= 9) || event.nativeEvent.data == null) {

                this.setState({
                    user: {
                        ...user,
                        [name]: value
                    }
                });
            }

        }
        else {

            this.setState({
                user: {
                    ...user,
                    [name]: value
                }
            });



        }

    }


    handleSubmit(e) {

        e.preventDefault();
        const { user } = this.state;
        this.props.onuserCreated(user);
        this.props.history.push('/viewuser')
        
    }

    render() {
        const { user } = this.state;

        return (
            <div style={{ marginTop: '4cm' }}>
                <div id="container">
                    <div id="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <div className="widget box">
                                        <div className="widget-header">
                                            <h4><i className="icon-reorder" />Create User</h4>
                                        </div>
                                        <div className="widget-content">
                                            <form onSubmit={this.handleSubmit} id="create-user-form" className="form-horizontal row-border">

                                                <div className="form-group">
                                                    <label className="col-sm-2 col-lg-2 control-label text-center">
                                                        {/* <span> Full Name</span> */}
                                                    </label>
                                                    <div style={{ margin: '0 auto', float: 'none' }} className="col-lg-6">
                                                        <div className="input-group">
                                                            <span className="input-group-addon addon-inside bg-white font-blue">
                                                                <i className="glyph-icon icon-user" />
                                                            </span>
                                                            <input type="text"
                                                                style={{ color: 'black' }}
                                                                maxlength="40"
                                                                id="firstName"
                                                                name="firstName"
                                                                className="form-control"
                                                                value={user.firstName}
                                                                onChange={this.handleChange}
                                                                placeholder="First Name"
                                                                required="First Name is required" />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-2 col-lg-2 control-label text-center" htmlFor="password">
                                                        {/* <span> Password</span> */}
                                                    </label>
                                                    <div style={{ margin: '0 auto', float: 'none' }} className="col-lg-6">
                                                        <div className="input-group">
                                                            <span className="input-group-addon addon-inside bg-white font-blue">
                                                                <i className="glyph-icon icon-lock" />
                                                            </span>
                                                            <input type="text"
                                                                style={{ color: 'black' }}
                                                                id="lastName"
                                                                name="lastName"
                                                                className="form-control"
                                                                value={user.lastName}
                                                                onChange={this.handleChange}
                                                                placeholder="Last Name"
                                                                required="Last Name is required" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-2 col-lg-2 control-label text-center" >
                                                        {/* <span> Contact</span> */}
                                                    </label>
                                                    <div style={{ margin: '0 auto', float: 'none' }} className="col-lg-6">
                                                        <div className="input-group">
                                                            <span className="input-group-addon addon-inside bg-white font-blue">
                                                                <i className="glyph-icon icon-phone" />
                                                            </span>
                                                            <input type="text"

                                                                style={{ color: 'black' }}
                                                                maxlength="20"
                                                                id="address"
                                                                name="address"
                                                                value={user.address}
                                                                onChange={this.handleChange}
                                                                className="form-control"
                                                                placeholder="Address"
                                                                required="Address is required" />
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="form-group">
                                                    <label className="col-sm-2 col-lg-2 control-label text-center" >
                                                        {/* <span> Contact</span> */}
                                                    </label>
                                                    <div style={{ margin: '0 auto', float: 'none' }} className="col-lg-6">
                                                        <div className="input-group">
                                                            <span className="input-group-addon addon-inside bg-white font-blue">
                                                                <i className="glyph-icon icon-phone" />
                                                            </span>
                                                            <input type="text"

                                                                style={{ color: 'black' }}
                                                                maxlength="20"
                                                                id="company"
                                                                name="company"
                                                                value={user.company}
                                                                onChange={this.handleChange}
                                                                className="form-control"
                                                                placeholder="Company"
                                                                required="Company is required" />
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="form-group">
                                                    <label className="col-sm-2 col-lg-2 control-label text-center" >
                                                        {/* <span> Contact</span> */}
                                                    </label>
                                                    <div style={{ margin: '0 auto', float: 'none' }} className="col-lg-6">
                                                        <div className="input-group">
                                                            <span className="input-group-addon addon-inside bg-white font-blue">
                                                                <i className="glyph-icon icon-phone" />
                                                            </span>
                                                            <input type="text"

                                                                style={{ color: 'black' }}
                                                                maxlength="20"
                                                                id="contact"
                                                                name="contact"
                                                                value={user.contact}
                                                                onChange={this.handleChange}
                                                                className="form-control"
                                                                placeholder="Phone Number"
                                                                required="Phone Number is required" />
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="form-group">
                                                    <label className="col-sm-2 col-lg-2 control-label text-center" >
                                                        {/* <span> Contact</span> */}
                                                    </label>
                                                    <div style={{ margin: '0 auto', float: 'none' }} className="col-lg-6">
                                                        <div className="input-group">
                                                            <span className="input-group-addon addon-inside bg-white font-blue">
                                                                <i className="glyph-icon icon-phone" />
                                                            </span>
                                                            <input type="text"

                                                                style={{ color: 'black' }}
                                                                maxlength="20"
                                                                id="dob"
                                                                name="dob"
                                                                value={user.dob}
                                                                onChange={this.handleChange}
                                                                className="form-control"
                                                                placeholder="Date of Birth"
                                                                required="Date of Birth is required" />
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="form-group">
                                                    <label className="col-sm-2 col-lg-2 control-label text-center">
                                                        {/* <span>Type</span> */}
                                                    </label>

                                                </div>

                                                <div className="form-group text-center">
                                                    <input type="hidden" />
                                                    <button style={{ width: 30 + '%' }} className="btn btn-lg btn-blue-alt btn-info" type="submit"
                                                    > <span> &nbsp;Create User</span></button>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

const connectedCreateUser = connect(mapStateToProps, mapDispatchToProps)(CreateUser);
export { connectedCreateUser as CreateUser };



