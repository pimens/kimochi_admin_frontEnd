import React, { Component } from 'react';
class SalesMonthly extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-2">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <span className="label label-success pull-right">Monthly</span>
                                <h5>Orders</h5>
                            </div>
                            <div className="ibox-content">
                                <h1 className="no-margins"> {this.props.pemasukan.ob} </h1>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <span className="label label-primary pull-right">Today</span>
                                <h5>Orders</h5>
                            </div>
                            <div className="ibox-content">
                                <h1 className="no-margins">{this.props.pemasukan.oh} </h1>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <span className="label label-success pull-right">Monthly</span>
                                <h5>Income</h5>
                            </div>
                            <div className="ibox-content">
                                <h1 className="no-margins">Rp. {this.props.pemasukan.status}</h1>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <span className="label label-primary pull-right">Today</span>
                                <h5>Income</h5>
                            </div>
                            <div className="ibox-content">
                                <h1 className="no-margins">Rp. {this.props.pemasukan.harian}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SalesMonthly;