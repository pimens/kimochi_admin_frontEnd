import React, { Component } from 'react';
import { connect } from 'react-redux'
import Axios from 'axios';
const style_2 = {
    width: '150px',
    height: '150px'
}
class CabangTabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            d: [],
            curentData: [],
            edit: false
        }
    }
    deleteData = async (id, nama) => {

        if (confirm(`Are you sure you want to delete ${nama}?`)) {
            console.log(id);
            try {
                await Axios.delete(`${this.props.server}deleteCabang/${id}`).then((response) => {
                    this.props.refresh();
                })
            } catch (error) {
                console.log(error);
                alert('cant delete');
            }
        }
    }
    edit = (row) => {

    }
    render() {
        const { cabang } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wrapper wrapper-content">
                            <div className="ibox float-e-margins">
                                <div className="ibox-title">
                                    <h5>Daftar Cabang</h5> <span className="label label-primary">Kimochi+</span>
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
                                    <button type="button"
                                        onClick={() => this.props.showFormData()}
                                        className="btn btn-sm btn-primary">Tambah Data</button>
                                    <div className='widget-content' style={{ overflow: 'auto', height: '550px' }}>
                                        <div className="table-responsive">
                                            <table id="example3" className="table table-hover table-striped table-bordered tabelKomentar">
                                                <thead>
                                                    <tr>
                                                        <th>Nama</th>
                                                        <th>Alamat</th>
                                                        <th>Deskripsi</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>{
                                                    cabang == null ? null :
                                                        cabang.map((dd) => {
                                                            return (
                                                                <tr key={dd.id}>
                                                                    <td scope="row">{dd.nama}</td>
                                                                    <td>{dd.alamat}</td>
                                                                    <td>{dd.deskripsi}</td>
                                                                    <td>
                                                                        <button type="button"
                                                                            onClick={() => this.props.showEdit(dd.id)}
                                                                            className="btn btn-sm btn-primary"><i className="fa fa-pencil"></i></button>
                                                                        <a className='btn btn-danger btn-sm' onClick={() => this.deleteData(dd.id, dd.nama)}><i className="fa fa-trash"></i></a>
                                                                    </td>

                                                                </tr>
                                                            )
                                                        })
                                                }
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Nama</th>
                                                        <th>Alamat</th>
                                                        <th>Deskripsi</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>

                                    </div>
                                </div>
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
        server1: state.globalReducer.server1,
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
)(CabangTabel);