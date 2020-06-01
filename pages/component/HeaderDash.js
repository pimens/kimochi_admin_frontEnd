import React, { Component } from 'react';
import Head from 'next/head'
class HeaderDash extends Component {
    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
    componentDidMount(){
        var data = this.getCookie("userId")
        if (data === null | data==="") {
            console.log("not yet login")    
            window.location.href = "/";
        }
        console.log(data);
    }
    render() {
        return (
            <div>
                <Head>


                    <title>{this.props.title}</title>

                    <link href="../../static/css/bootstrap.min.css" rel="stylesheet" />
                    <link href="../../static/font-awesome/css/font-awesome.css" rel="stylesheet" />
                    <link href="../../static/css/animate.css" rel="stylesheet" />
                    <link href="../../static/css/style.css" rel="stylesheet" />

                </Head>
            </div>
        );
    }
}

export default HeaderDash;