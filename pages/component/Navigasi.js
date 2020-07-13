import React, { Component } from 'react';
import Link from "next/link";

const style_2 = {
    width: '100px',
    height: '100px'
}
const s1 = {
    marginbottom: 0
}

class Navigasi extends Component {
    render() {
        return (
            <div>
                <nav className="navbar-default navbar-static-side" role="navigation">
                    <div className="sidebar-collapse">
                        <ul className="nav metismenu" id="side-menu">
                            <li className="nav-header">
                                <div className="dropdown profile-element"> <span>
                                    <img alt="image" className="img-circle" src="../../static/img/logo.jpg" style={style_2} />
                                </span>

                                </div>
                                <div className="logo-element">
                                    Kimochi Admin
                            </div>
                            </li>
                            <li>
                                <Link href="/Dashboard"><a><i className="fa fa-diamond"></i> <span className="nav-label">Dashboard</span></a></Link>
                                {/* <Link href="/Dashboard"><span className="nav-label"><a>Dashboard</a></span></Link> */}
                            </li>
                            <li>
                                <Link href="/Promo"><a><i className="fa fa-diamond"></i> <span className="nav-label">Promo</span></a></Link>
                            </li>
                            <li>
                                <Link href="/Cabang"><a><i className="fa fa-diamond"></i> <span className="nav-label">Cabang</span></a></Link>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-th-large"></i> <span className="nav-label">Fitur</span><span className="fa arrow"></span></a>
                                <ul className="nav nav-second-level collapse">
                                    <li>
                                        <Link href="/Promo"><a>Promo</a></Link>
                                        <Link href="/Cabang"><a>Cabang</a></Link>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* <div id="page-wrapper" className="gray-bg dashbard-1"> */}

                {/* </div> */}

            </div>
        );
    }
}

export default Navigasi;