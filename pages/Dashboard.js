import React, { Component } from 'react';
import HeaderDash from './component/HeaderDash'
import Navigasi from './component/Navigasi';
import MenuNav from './component/MenuNav';
import FooterDash from './component/FooterDash';
import DashTabel from './component/DashboardComponent/DashTabel';
import Axios from 'axios';
import { connect } from 'react-redux'
import { InsertButton } from 'react-bootstrap-table';
import DashFormTambahData from './component/DashboardComponent/DashFormTambahData';
import DashFormEditMakanan from './component/DashboardComponent/DashFormEditMakanan';
import SalesMonthly from './component/DashboardComponent/SalesMonthly';



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tambahMakanan: false,
            d: {
                nama: '',
                alamat: '',
            },
            makanan: [],
            mknDetail: {},
            edit: false,
            pemasukan: ''

        }
    }
    componentDidMount() {
        console.log(this.props);
        this.refreshData();
    }
    refreshData = () => {
        Axios.get(this.props.server + "WebApi/getMakanan").then((response) => {
            this.setState({
                makanan: response.data
            })
        })
        Axios.get(this.props.server + "WebApi/pemasukan").then((response) => {
            this.setState({
                pemasukan: response.data
            })
        })
    }
    showFormData = () => {
        this.setState({ tambahMakanan: !this.state.tambahMakanan })
    }
    closeForm = () => {
        this.setState({
            tambahMakanan: !this.state.tambahMakanan
        })
    }
    showEdit = (id) => {
        Axios.get(this.props.server + "WebApi/getMakananById/" + id).then((response) => {
            // console.log(response.data[0]);
            this.props.setMkn(response.data[0]);
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
                <HeaderDash title="Dashboard Kimochi" />
                <Navigasi />
                <div id="page-wrapper" className="gray-bg dashbard-1">
                    <MenuNav />
                    <SalesMonthly pemasukan={this.state.pemasukan} />
                    {
                        this.state.tambahMakanan ?
                            <div>
                                <DashFormTambahData
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
                                <DashFormEditMakanan
                                    // data = {this.state.mknDetail}
                                    refresh={this.refreshData}
                                    closeEdit={this.closeEdit}
                                />
                            </div>
                            :
                            <div></div>
                    }
                    <DashTabel showFormData={this.showFormData}
                        showEdit={this.showEdit}
                        makanan={this.state.makanan}
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
        setMkn: (mkn) => dispatch({ type: 'SETMKN', data: mkn }),
        // ubahId: (id) => dispatch(ubahId(id))
        ubahId: (id) => dispatch({ type: 'ubahId', data: id })

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);