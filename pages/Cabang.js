import React, { Component } from 'react';
import HeaderDash from './component/HeaderDash'
import Navigasi from './component/Navigasi';
import MenuNav from './component/MenuNav';
import FooterDash from './component/FooterDash';
import Axios from 'axios';
import { connect } from 'react-redux'
import CabangFormTambahData from './component/Cabang/CabangFormTambahData';
import CabangFormEditData from './component/Cabang/CabangFormEditData';
import CabangTabel from './component/Cabang/CabangTabel';


class Cabang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tambahCabang: false,
            d: {
                nama: '',
                alamat: '',
            },
            cabang: [],
            cabangDetail: {},
            edit: false,
        }
    }
    componentDidMount() {
        console.log(this.props);
        this.refreshData();
    }
    refreshData = () => {
        Axios.get(this.props.server + "WebApi/getCabang").then((response) => {
            this.setState({
                cabang: response.data
            })
        })
    }
    showFormData = () => {
        this.setState({ tambahCabang: !this.state.tambahCabang })
    }
    closeForm = () => {
        this.setState({
            tambahCabang: !this.state.tambahCabang
        })
    }
    showEdit = (id) => {
        Axios.get(this.props.server + "WebApi/getCabangById/" + id).then((response) => {
            // console.log(response.data[0]);
            this.props.setCbng(response.data[0]);
            this.setState({ edit: true })
        })

    }
    closeEdit = () => {
        this.setState({
            edit: false
        })
    }
    render() {
        return (
            <div id="wrapper">
                <HeaderDash title="Cabang Kimochi" />
                <Navigasi />
                <div id="page-wrapper" className="gray-bg dashbard-1">
                    <MenuNav />
                    {
                        this.state.tambahCabang ?
                            <div>
                                <CabangFormTambahData
                                    refresh={this.refreshData}
                                    closeForm={this.closeForm}
                                />
                            </div>
                            :
                            <div></div>
                    }
                    {
                        this.state.edit ?
                            <div>
                                <CabangFormEditData
                                    // data = {this.state.mknDetail}
                                    refresh={this.refreshData}
                                    closeEdit={this.closeEdit}
                                />
                            </div>
                            :
                            <div></div>
                    }
                    <CabangTabel showFormData={this.showFormData}
                        showEdit={this.showEdit}
                        cabang={this.state.cabang}
                        refresh={this.refreshData}
                    />


                </div>
                <FooterDash />

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
        setCbng: (cabang) => dispatch({ type: 'SETCBNG', data: cabang }),
        ubahId: (id) => dispatch({ type: 'ubahId', data: id })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cabang);