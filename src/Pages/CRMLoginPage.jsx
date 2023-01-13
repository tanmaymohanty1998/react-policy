import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Assets/login/CSS/fonts.googleapis.css';
import '../Assets/login/CSS/custom-login.css';
import logo from "../Assets/Images/Clapi-logo.png";
import logo1 from "../Assets/Images/logo.png";

const LoginPage = () => {

    let navigate = useNavigate();

    const LoginValid = () => {
       navigate('/home')
    }

    return (
        <>
            <div id="main">
                <div className="wrapper">
                    <div className="container content">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <section id="section_signin" className="section-padding shadowed">
                                    <div className="col-xs-12 col-sm-6 col-md-6 bg-left">
                                        <div className="left-content-wrapper">
                                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                                <div className="carousel-indicators">
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                </div>
                                                <div className="carousel-inner">
                                                    <div className="carousel-item clapi_logo active">
                                                        <h2 className="text-white">
                                                            Digital Insurance End-to-End Platform</h2>
                                                        <br />
                                                        <h5 className="text-white para">Cloud-based, modular, end-to-end, core policy software suite for
                                                            health insurance.
                                                        </h5>
                                                        <img src={logo} className="d-block img_clapi m-auto mt-5" alt="..." />
                                                    </div>
                                                    <div className="carousel-item clapi_logo">
                                                        <h2 className="text-white">
                                                            Digital Insurance End-to-End Platform</h2>
                                                        <br />
                                                        <h5 className="text-white para"> Quality-centric, scalable software, engineered in compliance with industry standards and supported by a secure, integrated infrastructure.
                                                        </h5>
                                                        <img src={logo} className="d-block img_clapi m-auto mt-5" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <%--/Slider--%> */}
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 bg-right">
                                        <div className="row text-right">
                                            <div className="axa-logo hidden-xs-down">
                                                <img id="imgCompanylogo" alt="logo" src={logo1} />
                                            </div>
                                        </div>
                                        {/* <!--Login Form Section start--> */}
                                        <div className="row">
                                            <div className="col-xs-1 col-sm-1 col-md-4">
                                            </div>
                                            <div className="col-xs-10 col-sm-10 col-md-7">
                                                <div className="row">
                                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                                        <i className="spacer"></i>
                                                    </div>
                                                </div>
                                                <form >
                                                    <div className="row login-textbox-cont">
                                                        <div className="col-md-10 col-sm-10 col-xs-12 ErrorMsgDiv" >
                                                            <div role="alert" id="DivMsg">
                                                                <strong>
                                                                    <label id="lblDispMsg"></label>
                                                                </strong>
                                                            </div>
                                                        </div>
                                                        <div className="form-horizontal form-label-left input_mask login-form">
                                                            <div className="x_content">
                                                                <div className="col-md-10 col-sm-10 col-xs-12  has-feedback">
                                                                    <div className="input-group">
                                                                        <span className="input-group-addon">
                                                                            <span className="fa fa-user" aria-hidden="true"></span>
                                                                        </span>
                                                                        <input type="text" id="txtUserName" className="form-control has-feedback-left" autoComplete="username" placeholder="Username" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-10 col-sm-10 col-xs-12  has-feedback">
                                                                    <div className="input-group">
                                                                        <span className="input-group-addon">
                                                                            <span className="fa fa-user-plus " aria-hidden="true"></span>
                                                                        </span>
                                                                        <select id="ddluserrole" className="form-control">
                                                                            <option>---Select---</option>
                                                                            <option value="Test1">Test1</option>
                                                                            <option value="Test2">Test2</option>
                                                                            <option value="Test3">Test3</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div id="divPassword" className="col-md-10 col-sm-10 col-xs-12 has-feedback">
                                                                    <div className="input-group">
                                                                        <span className="input-group-addon">
                                                                            <span className="fa fa-key " aria-hidden="true"></span>
                                                                        </span>
                                                                        <input type='password' id="txtPassword" placeholder="Password" className="form-control has-feedback-left" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row login-textbox-cont">
                                                        <div className="offset-md-3 col-md-12">
                                                            <input type="button" id="btnLogin" className="expdbutton" value={"Login"} onClick={LoginValid} />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* <!--Login Form Section End --> */}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default LoginPage;