import React from 'react';
import LeftMenu from './LeftMenu';
import Complogo from '../Assets/Images/Clapi-logo.png'
import UserLogo from '../Assets/Images/MaleUser.jpg'


// -=-=-===-=-=-Css section -=-==-=--=-=-=-=-=-
import '../Assets/Plugins/bootstrap-daterangepicker/daterangepicker.css'
import '../Assets/Plugins/bootstrap-select/dist/css/select2.css'
import "../Assets/Css/custom.css"
import "../Assets/Plugins/timepicker/bootstrap-datetimepicker.min.4.17.37.css"
import '../Assets/Css/tabs.css'
import '../Assets/Css/ValidationEngine.css'
import '../Assets/Css/simplyCountdown.css'
import '../Assets/Plugins/jquery-ui-1.13.2/jquery-ui.min.css'   
import '../Assets/Css/EIL.css'   
import '../Assets/Css/DatePicker.css'   
import '../Assets/Plugins/font-awesome/css/font-awesome-animation.min.css'   
import '../Assets/Plugins/datatables.net-bs/css/dataTables.bootstrap.min.css'  
import '../Assets/Plugins/datatables.net-buttons-bs/css/buttons.bootstrap.min.css'
import '../Assets/Plugins/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css'
import '../Assets/Plugins/datatables.net-responsive-bs/css/responsive.bootstrap.min.css'
import '../Assets/Plugins/datatables.net-scroller-bs/css/scroller.bootstrap.min.css'

// -=-=-===-=-=-Js section -=-==-=--=-=-=-=-=-
//import '../Assets/Js/jquery_3.6.3.min.js'
import $ from 'jquery'
import '../Assets/Js/Constant.js'
//import '../Assets/Js/aes.js'
//import '../Assets/Js/randexp.min.js'
//import '../Assets/Js/Search.js'
//import '../Assets/Js/CommonUtility.js'
import '../Assets/Js/Common.js'




const MasterPage = ({Titel, children}) => {

    return (
    <>
        <form id="form1" >
      
        <div className="body">
            
            <div className="main_container">
                {/* <!-- top navigation --> */}
                <div className="top_nav">
                    <div className="nav_menu">
                        <nav>
                            <div className="row">
                                <div className="col-md-6 col-sm-2 col-xs-12">
                                     <div className="col-md-3 col-sm-3 col-xs-3 cm_lg">
                                         <div className="Comp_logo">
                                               <img id="claims_imgCompanylogo" alt="logo" className="nav-logo" src={Complogo} />
                                         </div>
                                     </div>
                                     <div className="col-md-1 col-sm-1 col-xs-1">
                                       <div className="nav toggle">
                                           <a id="menu_toggle"><i className="fa fa-bars"></i></a>
                                       </div>
                                    </div>
                                    <div className="col-md-8 col-sm-8 col-xs-8">
                                        <ul className="nav navbar-left ">
                                            <li id="Doc_Details">
                                            </li>
                                        </ul>
                                   </div>
                                </div>
                                <div className="col-md-6 col-sm-10 col-xs-12">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li>
                                            <section className="user-profile ">
                                                <img id="imgUserImg" alt="Img" src={UserLogo}  />
                                                <label id="lblUserDetails">Admin</label>
                                                <label>| Role : </label>
                                                <span>
                                                    <select  id="ddluserrole">
                                                        <option value={''}>---Select---</option>
                                                        <option value={"Test1"}>Test1</option>
                                                        <option value={"Test2"}>Test2</option>
                                                        <option value={"Test3"}>Test3</option>
                                                    </select>
                                                </span>
                                                <label id=""> | Last Login: </label>
                                                <label id="lbllstlogin">13-01-2023</label>
                                                <a href='/Logout.aspx'><span className="fa fa-power-off fa-2x LogoutIcon"></span></a>
                                            </section>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* <!-- /top navigation --> */}
                {/* <!-- LeftMenu --> */}

                     {<LeftMenu/>}
 
                {/* <!-- LeftMenu End --> */}
                <div className="right_col" >
                    {/* <div className="x_content bs-example-popovers" id="popoverdiv"  visible="false" style="clear: none;">
                        <div role="alert" className="alert alert-success alert-dismissible fade in" id="popover"  style="padding: 8px 0px 2px 2px; margin: 0px 14px 7px 715px;">
                            <button type="button"  className="close" data-dismiss="alert" aria-label="Close" id="popoverbtn" style="right: 0px; color: #8b650f; opacity: 1;">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div style="text-align: center; text-align: center; padding: 3px 18px 9px 15px; font-size: initial;">
                                <label  id="lblPopover"> </label>
                            </div>
                        </div>
                    </div>
                    <div className="row" style="position: fixed; z-index: 100; width: 89%;">
                        <div className="x_content bs-example-popovers" id="popoverdivSuccess"  visible="false" style="clear: none;">
                            <div role="alert" className="alert alert-success alert-dismissible fade in" id="popoverSuccess"  style="padding: 8px 0px 2px 2px; margin: 0px 14px 7px 760px;">
                                <button type="button"  className="close" data-dismiss="alert" aria-label="Close" id="popoverbtnSuccess" style="right: 0px; color: #8b650f; opacity: 1;">
                                    <span aria-hidden="true">×</span>
                                </button>
                                <div style="text-align: center; text-align: center; padding: 3px 18px 9px 15px; font-size: initial;">
                                    <label  id="lblPopoverSuccess"> </label>
                                </div>
                            </div>
                        </div>
                        <div className="x_content bs-example-popovers" id="popoverdivWarning"  visible="false" style="clear: none;">
                            <div role="alert" className="alert alert-warning alert-dismissible fade in" id="popoverWarning"  style="padding: 8px 0px 2px 2px; margin: 0px 14px 7px 760px;">
                                <button type="button"  className="close" data-dismiss="alert" aria-label="Close" id="popoverbtnWarning" style="right: 0px; color: #8b650f; opacity: 1;">
                                    <span aria-hidden="true">×</span>
                                </button>
                                <div style="text-align: center; text-align: center; padding: 3px 18px 9px 15px; font-size: initial;">
                                    <label  id="lblPopoverWarning"> </label>
                                </div>
                            </div>
                        </div>
                        <div className="x_content bs-example-popovers" id="popoverdivError"  visible="false" style="clear: none;">
                            <div role="alert" className="alert alert-danger alert-dismissible fade in" id="popoverError"  style="padding: 8px 0px 2px 2px; margin: 0px 14px 7px 760px;">
                                <button type="button"  className="close" data-dismiss="alert" aria-label="Close" id="popoverbtnError" style="right: 0px; color: #8b650f; opacity: 1;">
                                    <span aria-hidden="true">×</span>
                                </button>
                                <div style="text-align: center; text-align: center; padding: 3px 18px 9px 15px; font-size: initial;">
                                    <label  id="lblPopoverError"> </label>
                                </div>
                            </div>
                        </div>
                        <div className="x_content bs-example-popovers" id="popoverdivInfo"  visible="false" style="clear: none;">
                            <div role="alert" className="alert alert-info alert-dismissible fade in" id="popoverInfo"  style="padding: 8px 0px 2px 2px; margin: 0px 14px 7px 760px;">
                                <button type="button"  className="close" data-dismiss="alert" aria-label="Close" id="popoverbtnInfo" style="right: 0px; color: #8b650f; opacity: 1;">
                                    <span aria-hidden="true">×</span>
                                </button>
                                <div style="text-align: center; text-align: center; padding: 3px 18px 9px 15px; font-size: initial;">
                                    <label  id="lblPopoverInfo"> </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12" style="display: none;">
                        <div className="" role="alert"  id="Divalert">
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <strong>
                                <label  id="lblmstmsg"></label></strong>
                        </div>
                    </div> */}
                       
                      {children}

                    {/* <!-- Modal Popup --> */}
                    {/* <div className="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true" id="modalSearch">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-body" style="padding: 2px">
                                    <div className="modal-header">
                                        <div className="modal-body" style="padding: 2px">
                                            <iframe id="Iframe2"  name="myframe2" scrolling="yes" marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0" style="width: 100%; min-height: 500px;"></iframe>
                                        </div>
                                        <div className="modal-footer" style="padding: 2px; display: none">
                                            <button type="button" className="btn btn-default btn-xs" data-dismiss="modal" id="btnModalClose">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <!-- /Modal Popup --> */}
                    {/* <!--Validation modal --> */}
                    {/* <div className="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-hidden="true" id="ModalPopupValidation">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                <div className="modal-header" style="background-color: #d9534f; text-align: center">
                                    <h4 className="modal-title" style="color: white">Validation Error</h4>
                                </div>
                                <div className="modal-body" style="overflow-y: scroll; height: 400px">
                                    <ul id="errorbody">
                                    </ul>
                                </div>
                                <div className="modal-footer" style="padding: 2px;">
                                    <button type="button" className="btn btn-default btn-xs" data-dismiss="modal" id="btncloseModal" style="background-color: #d9534f; color: white">Close</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <!-- /Validation modals --> */}
                    {/* <!--Success modal --> */}
                    {/* <div className="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-hidden="true" id="ModalPopupSucess">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                <div className="modal-header" style="background-color: #5cb85c; text-align: center">
                                    <h4 className="modal-title" id="" style="color: white">Success Message</h4>
                                </div>
                                <div className="modal-body" style="overflow-y: scroll; height: 150px">
                                    <ul id="Sucessbody">
                                    </ul>
                                </div>
                                <div className="modal-footer" style="padding: 2px;">
                                    <button type="button" className="btn btn-default btn-xs" data-dismiss="modal" id="btncloseModalSuccess" style="background-color: #5cb85c; color: white">Ok</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <!-- /Success modals --> */}
                    {/* <!--Warning modal --> */}
                    {/* <div className="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-hidden="true" id="ModalPopupWarning">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                <div className="modal-header" style="background-color: #d86725; text-align: center">
                                    <h4 className="modal-title" style="color: white">Information</h4>
                                </div>
                                <div className="modal-body" style="overflow-y: scroll; height: 400px">
                                    <ul id="WarningBody">
                                    </ul>
                                </div>
                                <div className="modal-footer" style="padding: 2px;">
                                    <button type="button" className="btn btn-default btn-xs" data-dismiss="modal" id="btnclosewarning" style="background-color: #d86725; color: white">Ok</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <!-- /Warning modals --> */}
                </div>
                
                  {/* <!-- /footer content --> */}
                <footer className="CustFooter">
                    <div className="pull-right">
                        <p>
                            <label  id="lblCR">@2022 Insurance Limited.All Rights Reserved. &nbsp; (<label  id="lblVersion">SIT Version 1.0.0</label>)</label>
                        </p>
                    </div>
                    <div className="clearfix"></div>
                </footer>
            </div>
            {/* <%--Don't remove this--%> */}
           
           
            <div id="spinner">
                <div className="loader10">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div id="loadingText">Loading</div>
            </div>
            {/* <%--!Don't remove this--%> */}
        </div>
      
        <input type="hidden" id="_ispostbackmaster" value="" />
    </form>

    </>);

};

export default MasterPage;

