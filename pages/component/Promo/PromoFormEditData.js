import React, { Component } from 'react';
import { connect } from 'react-redux'
import Axios from 'axios';
class PromoFormEditData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null,
            promo: {

            }
        }
    }
    componentDidMount() {
        this.setState({
            promo: this.props.prm
        })
    }

    handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            promo: {
                ...this.state.promo,
                [name]: value
            }

        }, console.log(this.state.promo));
    }
    sub() {
        const fd = new FormData();
        if (this.state.img === null) {
            fd.append('image', "kosong");
        }
        else {
            fd.append('thumb', this.state.img, this.state.img.name);
        }
        fd.append('id', this.state.promo.id);
        fd.append('judul', this.state.promo.judul);
        fd.append('desk', this.state.promo.deskripsi);
        Axios.post(`${this.props.server}WebApi/editPromo`, fd).then((response) => {
            this.props.closeEdit()
            this.props.refresh();
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="wrapper wrapper-content">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <h5>New data for the report</h5> <span className="label label-primary">IN+</span>
                                <div className="ibox-tools">
                                    <a className="collapse-link">
                                        <i className="fa fa-chevron-up"></i>
                                    </a>
                                    <a className="close-link">
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="ibox-content">
                                <div className="form-group">
                                    <input defaultValue={this.state.promo.judul}
                                        onChange={(e) => this.handleInput(e)}
                                        type="text" className="form-control" name="judul" placeholder="Nama" />
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.state.promo.deskripsi}
                                        onChange={(e) => this.handleInput(e)}
                                        type="text" className="form-control" name="deskripsi" placeholder="Deskripsi" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(e) => { this.setState({ img: e.target.files[0] }) }} type="file" className="form-control" name="f" placeholder="" />
                                </div>
                                <br />
                                <button onClick={this.sub.bind(this)} type="button" className="btn btn-primary">Update</button>
                                <button onClick={() => this.props.closeEdit()} type="button" className="btn btn-danger">cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        server: state.globalReducer.server,
        dataIdentitas: state.globalReducer.id,
        prm: state.globalReducer.prm

    }
}
const mapDispatchToProps = dispatch => {
    return {
        reset: () => dispatch({ type: 'RESET' }),
        ubahId: (id) => dispatch({ type: 'ubahId', data: id })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PromoFormEditData);