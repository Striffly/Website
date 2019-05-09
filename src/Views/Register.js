import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CareApi from '../api';
// import { userActions } from '../_actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        // if (user.firstName && user.lastName && user.email && user.password) {
        //     dispatch(userActions.register(user));
        // }
        var content = CareApi.tryRegister(this.state.user.firstName,
            this.state.user.lastName,
            this.state.user.email,
            this.state.user.password);
        console.log(content);
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
        return (
            <div>
                <br /><br /><br /><br /><br /><br />
                <div className="col-md-6 col-md-offset-3">
                    <form>
                        <div className="form-group">
                            <label htmlFor="InputName">First Name</label>
                            <input type="name" className="form-control" id="InputFirstName" placeholder="Enter first name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputName">Last Name</label>
                            <input type="name" className="form-control" id="InputLastName" placeholder="Enter last name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                else.
                                </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="exampleCheck1">Yaaa</label>
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />

                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     const { registering } = state.registration;
//     return {
//         registering
//     };
// }

// const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { RegisterPage as Register };