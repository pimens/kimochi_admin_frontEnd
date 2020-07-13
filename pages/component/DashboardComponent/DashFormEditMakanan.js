import React, { Component } from 'react';
import { connect } from 'react-redux'
import Axios from 'axios';
class DashFormEditMakanan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null,
            makanan: {

            }
        }
    }
    componentDidMount() {
        this.setState({
            makanan: this.props.mkn
        })
    }

    handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            makanan: {
                ...this.state.makanan,
                [name]: value
            }

        }, console.log(this.state.makanan));
    }
    sub() {
        const fd = new FormData();
        if (this.state.img === null) {
            fd.append('image', "kosong");
        }
        else {
            fd.append('thumb', this.state.img, this.state.img.name);
        }
        fd.append('id', this.state.makanan.id);
        fd.append('judul', this.state.makanan.nama);
        fd.append('harga', this.state.makanan.harga);
        fd.append('desk', this.state.makanan.deskripsi);
        fd.append('category', 1);
        Axios.put(`${this.props.server}editMakanan`, fd).then((response) => {
            console.log(response.data)
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
                                    <input defaultValue={this.state.makanan.nama}
                                        onChange={(e) => this.handleInput(e)}
                                        type="text" className="form-control" name="nama" placeholder="Nama" />
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.state.makanan.harga}
                                        onChange={(e) => this.handleInput(e)}
                                        type="text" className="form-control" name="harga" placeholder="Harga" />
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.state.makanan.deskripsi}
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
        mkn: state.globalReducer.mkn

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
)(DashFormEditMakanan);