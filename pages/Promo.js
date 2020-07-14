import React, { Component } from 'react';
import HeaderDash from './component/HeaderDash'
import Navigasi from './component/Navigasi';
import MenuNav from './component/MenuNav';
import FooterDash from './component/FooterDash';
import Axios from 'axios';
import { connect } from 'react-redux'
import PromoFormTambahData from './component/Promo/PromoFormTambahData';
import PromoFormEditData from './component/Promo/PromoFormEditData';
import PromoTabel from './component/Promo/PromoTabel';


class Promo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tambahPromo: false,
            d: {
                nama: '',
                alamat: '',
            },
            promo: [],
            promoDetail: {},
            edit: false,
        }
    }
    componentDidMount() {
        console.log(this.props);
        this.refreshData();
    }
    refreshData = () => {
        Axios.get(this.props.server + "promo").then((response) => {
            this.setState({
                promo: response.data
            })
        })
    }
    showFormData = () => {
        this.setState({ tambahPromo: !this.state.tambahPromo })
    }
    closeForm = () => {
        this.setState({
            tambahPromo: !this.state.tambahPromo
        })
    }
    showEdit = (id) => {
        Axios.get(this.props.server + "getPromoById/" + id).then((response) => {
            // console.log(response.data[0]);
            this.props.setPrm(response.data);
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
                <HeaderDash title="Promo Kimochi" />
                <Navigasi />
                <div id="page-wrapper" className="gray-bg dashbard-1">
                    <MenuNav />
                    {
                        this.state.tambahPromo ?
                            <div>
                                <PromoFormTambahData
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
                                <PromoFormEditData
                                    // data = {this.state.mknDetail}
                                    refresh={this.refreshData}
                                    closeEdit={this.closeEdit}
                                />
                            </div>
                            :
                            <div></div>
                    }
                    <PromoTabel showFormData={this.showFormData}
                        showEdit={this.showEdit}
                        promo={this.state.promo}
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
        setPrm: (promo) => dispatch({ type: 'SETPROMO', data: promo }),
        ubahId: (id) => dispatch({ type: 'ubahId', data: id })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Promo);