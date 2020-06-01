import React, { Component } from 'react';
import { connect } from 'react-redux'
import Axios from 'axios';
class CabangFormEditData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null,
            cabang: {

            }
        }
    }
    componentDidMount() {
        this.setState({
            cabang: this.props.cbng
        })
    }

    handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            cabang: {
                ...this.state.cabang,
                [name]: value
            }

        }, console.log(this.state.cabang));
    }
    sub() {
        const fd = new FormData();
        fd.append('id', this.state.cabang.id);
        fd.append('nama', this.state.cabang.nama);
        fd.append('alamat', this.state.cabang.alamat);
        fd.append('desk', this.state.cabang.deskripsi);
        Axios.post(`${this.props.server}WebApi/editCabang`, fd).then((response) => {
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
                                    <input defaultValue={this.state.cabang.nama}
                                        onChange={(e) => this.handleInput(e)}
                                        type="text" className="form-control" name="nama" placeholder="Nama" />
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.state.cabang.deskripsi}
                                        onChange={(e) => this.handleInput(e)}
                                        type="text" className="form-control" name="deskripsi" placeholder="Deskripsi" />
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.state.cabang.alamat}
                                        onChange={(e) => this.handleInput(e)}
                                        type="text" className="form-control" name="alamat" placeholder="Deskripsi" />
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
        cbng: state.globalReducer.cbng

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
)(CabangFormEditData);