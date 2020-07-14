import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux'

class CabangFormTambahData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: '',
            deskripsi: '',
            alamat: '',
            promo: []
        }
    }
    addData() {
        const fd = new FormData();
        fd.append('nama', this.state.nama);
        fd.append('alamat', this.state.alamat);
        fd.append('desk', this.state.deskripsi);
        Axios.post(`${this.props.server}insertCabang`, fd).then((response) => {
            console.log(response)
            this.props.closeForm();
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
                                    <input value={this.state.judul} onChange={(e) => { this.setState({ nama: e.target.value }) }} ref='na' type="text" className="form-control" name="n" aria-describedby="helpId" placeholder="Nama" />
                                </div>
                                <div className="form-group">
                                    <input value={this.state.alamat} onChange={(e) => { this.setState({ alamat: e.target.value }) }} ref='na' type="text" className="form-control" name="n" aria-describedby="helpId" placeholder="Alamat" />
                                </div>
                                <div className="form-group">
                                    <input value={this.state.deskripsi} onChange={(e) => { this.setState({ deskripsi: e.target.value }) }} ref='d' type="text" className="form-control" name="d" aria-describedby="helpId" placeholder="Deskripsi" />
                                </div>
                                <button className="btn btn-sm btn-primary" onClick={this.addData.bind(this)} >TambahData</button>
                                <button className="btn btn-sm btn-danger" onClick={this.props.closeForm} >Cancel</button>
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
        dataIdentitas: state.globalReducer.id
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
)(CabangFormTambahData);