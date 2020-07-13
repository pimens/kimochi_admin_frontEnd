import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            da: {
                email: '',
                password: ''
            },
            valid: true,
            msg: ''
        }
    }
    handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            da: {
                ...this.state.da,
                [name]: value
            }

        }, console.log(this.state.da));
    }
    login = async () => {
        console.log(this.state.da);
        const fd = new FormData();
        fd.append('email', this.state.da.email);
        fd.append('password', this.state.da.password);
        try {
            const response = await Axios.post(this.props.server+"login", fd);
            if (response.data == null) {
                console.log(response);
                this.setState({
                    msg: "password atau uname salah"
                })
                console.log("er");

            } else {
                console.log(response.data[0].username);
                this.setState({
                    msg: "Login berhasil"
                })
                document.cookie = `userId=${response.data[0].username}; max-age=3000; path=/;`;
                window.location.href = "/Dashboard";
            }
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <link href="../static/css/bootstrap.min.css" rel="stylesheet" />
                <div className="row">
                    <div className="col-md-12">
                        <center><h2>Login Page</h2></center>
                        <div className="alert alert-secondary" role="alert">
                            {this.state.msg}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 offset-md-4">
                        <div className='form-group'>
                            <input type='text' name='email'
                                onChange={(e) => this.handleInput(e)}
                                className="form-control" placeholder="Enter email" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 offset-md-4">
                        <div className='form-group'>
                            <input type='text' name='password'
                                onChange={(e) => this.handleInput(e)}
                                className="form-control" placeholder="Enter Password" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 offset-md-4">
                        <button type="button"
                            onClick={this.login.bind(this)}
                            className="btn btn-large btn-block btn-default">Submit</button>
                    </div>
                </div>
            </div >

        );
    }
}

const mapStateToProps = (state) => {
    return {
        server: state.globalReducer.server,
        dataIdentitas: state.globalReducer.id
    }
}
const mapDispatchToProps = dispatch => {
    return {
        reset: () => dispatch({ type: 'RESET' }),
        // ubahId: (id) => dispatch(ubahId(id))
        ubahId: (id) => dispatch({ type: 'ubahId', data: id })

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);