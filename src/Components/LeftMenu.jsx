//import './SideNav.css';
import Complogo from '../Assets/Images/Clapi-logo.png'

const LeftMenu = () => {

    return (
        <>
             <div className="col-md-3 left_col scroller2">
                <div className="left_col scroll-view">
                    <div className="clearfix"></div>
                    <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                        <div className="menu_section">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-xs-12">
                                    <div className="panel-group" id="accordion">
                                        {/* Setting Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading " data-bs-toggle="collapse" data-bs-parent="#accordion" data-bs-target="#Settings" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className="fa  fa-cog MenuIcon"></i>Settings<span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="Settings" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Pages<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Page Url</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Logs<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Audit Log</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Setting End */}

                                        {/* IAM Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-parent="#accordion" data-bs-target="#IAM" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className="fa  fa-user MenuIcon"></i>IAM<span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="IAM" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Access Management <span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">User-Role</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Policies</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Users</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">User Rights</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">User Payment Auth</a>
                                                                </li>
                                                            </ul>
                                                            
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Entity Credentials<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Entity Credentials</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* IAM End */}

                                        {/* Master Setup Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-parent="#accordion" data-bs-target="#MasterSetup" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className="fa  fa-book MenuIcon"></i>Master Setup<span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="MasterSetup" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">

                                                    <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Motor<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Manufacturer</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Model</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Variant</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Transmission Type</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Color</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Fuel Type</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Body Type</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Ex Showroom Price</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">RTO Location</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Depreciation Rate</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Product Discount</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Discount Type</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Premium Rate</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Manufacturer Model</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Model Variant</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Variant Transmission Type</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Variant Color</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Variant Fuel Type</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Variant Body Type</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Salvage Vendor</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Vehicle Info</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Marine<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Commodity Type</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Conveyance Mode</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Voyage Type</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Excess Type</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Storage Type</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Fire<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Occupancy</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Motor Claim<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Loss Location</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Spare parts</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Catastrophe</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Claim Other Details</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Court Type</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Court</a>
                                                                </li>
                                                            </ul>

                                                        </li>

                                                        <li id="12" className="active">                                                       
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Generic<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Product Category for TPA Upload</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Coverage for TPA Upload</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Reason To Disable</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">MyAxa Claim Types</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">MyAxa Claim Types Mapping</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Claims Questions For MyAxa</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">HR Coverage/Benifit Master</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Profession</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Relation</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Risk Class</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Family Type</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Taxes</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Document</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Discrepency</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Department</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Exclusion</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Industry</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Marital Status</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Medical Test</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Medical Test Rate</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Preexisting</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">RI Cession</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Bank</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Bank Branch</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Generic Master</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Industry</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Age Band</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Panel</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Card Type</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">ICD Length Config</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">InstrumentType</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Question</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">ICD Benifit Config</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Benefit Package Tagging</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">ICD</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Business Date</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Grade</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Clause</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Condition</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Rejection</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Product Rejection</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Audit Log</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Product Surgical Limit</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">PCS</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">MOH Fees Upload</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Claim Assignment</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Claim Status Internal/Externl</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">ClaimStatus Rule Internal/Externl</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Ex-Gratia Approvers</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Ex-Gratia Approval Reasons</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Claim Sub-Status</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Room Type</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Customer Care</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Coverage for TOSP Monitoring</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Claim Status for TOSP Monitoring</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Claim Status Rule</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Claim Cost Type</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Inventory</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Inventory Utilization</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Product Class</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Payment Voucher Reason</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Payment Allowed Reason</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Mail Format</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">IBNR Rate</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Products For Early Claim</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">ICD Group for Early Claim</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Claim Requirement</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Payment Allowed Voucher</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Allowed Currencies for TeleTransfer/WordLink</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Hold Claim</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Claim Rule SetUp</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Default Ward Type</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Claim Rule SetUp Tagging</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Claim Rule</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Questionnaire</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Questionnaire SetUp</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Claim Other Details motor</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Bulk Upload Template Master</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Bulk Upload Template</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">BG Account</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">CD Account</a>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Output<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Letter Config</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">OutPut Process</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">SMS Config</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Master Setup End */}

                                        {/* Product Workspace Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-parent="#accordion" data-bs-target="#ProductWorkspace" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className="fa fa-product-hunt MenuIcon"></i>Product Workspace<span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="ProductWorkspace" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Product Libary<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Contract Type</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">LOB</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Rider Mapping</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Profession Mapping</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Coverage</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Payment File Config</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Grace Period Config</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Citizenship Factor</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Package Mapping</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Short Term Cancellation</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Tollerance Limit Config</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Document Mapping</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Product Rules SetUp</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Payment Mode Config</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Communication Matrix</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Tax Version</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Product SLA</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Product Loading Discount</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Product SI Capping</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Product Rounding Rules</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">RI Rate BulkUplaod</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Global EM Bulk Upload</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Channel Partner-Commission </a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Product Loss Type</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Product Policy Loss Type</a>
                                                                </li>
                                                            </ul> 
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Product Endorsement Notes</a>
                                                                </li>
                                                            </ul>
                                                             <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Product Discount</a>
                                                                </li>
                                                            </ul> 
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Generic Product Risk Tagging</a>
                                                                </li>
                                                            </ul>
                                                             <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Product AWL</a>
                                                                </li>
                                                            </ul> 
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Product Coinsurance</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Product Proration Factor</a>
                                                                </li>
                                                            </ul><ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Product Rate Type</a>
                                                                </li>
                                                            </ul><ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Product Premium Frequency</a>
                                                                </li>
                                                            </ul>
                                                            
                                                            
                                                            
                                                            
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Workspace End */}

                                        {/* Entity Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-parent="#accordion" data-bs-target="#Entity" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className="fa fa-group MenuIcon"></i>Entity<span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="Entity" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Sales Manager<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">SalesManager Enquiry</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Company<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Company Enquiry</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Client<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Client-Enquiry</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Channel Partner<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Channel Partner Enquiry</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Channel Partner Restriction</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Source Code</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Tagged Source Code Report</a>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Third Party<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Third Party-Enquiry</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Third Party-Branch</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Third Party-Insurer Tagging</a>
                                                                </li>
                                                            </ul>
                                                            
                                                        </li>

                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Insurer<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Insurer-Enquiry</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Insurer-Claim TAT</a>
                                                                </li>
                                                            </ul>                                                                               
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Branch<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Branch-Enquiry</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Reinsurer<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Reinsurer-Enquiry</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Provider<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Clinic-Enquiry</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Provider-Enquiry</a>
                                                                </li>
                                                            </ul><ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Doctor-Enquiry</a>
                                                                </li>
                                                            </ul><ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Drug Reprository-Enquiry</a>
                                                                </li>
                                                            </ul>
                                                            
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Drug Type-Enquiry</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Garage-Enquiry</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Vendors<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Vendor</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Entity Dashboard<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Entity Dashboard</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Entity End */}

                                        {/* Rule Engine Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-parent="#accordion" data-bs-target="#RuleEngine" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className="fa fa-cogs MenuIcon"></i>Rule Engine<span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="RuleEngine" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Configurator<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Rule SetUp</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Rule Engine  End*/}

                                        {/*Acknowledgement Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-parent="#accordion" data-bs-target="#Acknowledgement" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className="fa fa-arrow-right MenuIcon"></i>Acknowledgement<span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="Acknowledgement" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Contract<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Application-Enquiry</a>
                                                                </li>
                                                            </ul>
                                                        </li>                                                    
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Takaful</a>
                                                                </li>
                                                            </ul>
                                                       
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Acknowledgement End */}

                                        {/* Underwriting  Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-parent="#accordion" data-bs-target="#Underwriting" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className="fa fa-shield MenuIcon"></i> Underwriting <span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="Underwriting" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Application<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Application-Enquiry</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Application-Review</a>
                                                                </li>
                                                            </ul><ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Application-Underwriting</a>
                                                                </li>
                                                            </ul><ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Application-PPMC</a>
                                                                </li>
                                                            </ul><ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Application-Rejected</a>
                                                                </li>
                                                            </ul><ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Application-Defficiancy</a>
                                                                </li>
                                                            </ul><ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Application-Counter Offer</a>
                                                                </li>
                                                            </ul><ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Application-Defficit</a>
                                                                </li>
                                                            </ul><ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Application-Booked</a>
                                                                </li>
                                                            </ul><ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Application-Terminated</a>
                                                                </li>
                                                            </ul><ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Application-Lapsed</a>
                                                                </li>
                                                            </ul><ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Application-BulkUplaod</a>
                                                                </li>
                                                            </ul><ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Insured Profile-Enquiry</a>
                                                                </li>
                                                            </ul><ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Application-BulkUploadData</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Renewal<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Renewal-Notice</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Endorsement<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Bulk Upload</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Request-HR Portal</a>
                                                                </li>
                                                            </ul> <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Endorsement Process</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>HR Portal<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Portal BulkUplaod</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Underwriting  End */}

                                        {/* Finance Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-parent="#accordion" data-bs-target="#Finance" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className="fa fa-pencil-square MenuIcon"></i>Finance<span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="Finance" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Master SetUp<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Account Year</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Catastrophe</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Cession</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Schedule</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Category</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Session Attachment</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Coverage Restriction</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Treaty</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Premium</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Pooling Partner</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Finance End */}

                                        {/* Claims Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-parent="#accordion" data-bs-target="#Claims" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className="fa fa-sliders MenuIcon"></i>Claims<span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="Claims" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Dashboard<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Claim Dashboard</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Acknowledgement<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Application-Enquiry</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>PreAuth<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Claim-Enquiry</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">PreAuth-Request</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">PreAuth-Approved</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">PreAuth Denial</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">PreAuth-Superceed</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Forward for Approval</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Pre-Signed LOG</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">GI PreAuth Requested</a>
                                                                </li>
                                                            </ul>

                                                        </li>

                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Reimbursement<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Claim-Enquiry</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Claim-Approval</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Claim Documents-Portal</a>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Payments<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Payment-Enquiry</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Payment-Bulk Approval</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Other Expense Payment</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Approved Claims</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Claim Batch Payment</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Claim Batch Approval</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">TPA Payment</a>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Recovery<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Recovery-Enquiry</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Raise Recovery</a>
                                                                </li>
                                                            </ul>
                                                            
                                                        </li>

                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Third Party Claim Upload<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Upload Claim File</a>
                                                                </li>
                                                            </ul>  
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Claim Batch<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Claim-Batch</a>
                                                                </li>
                                                            </ul>  
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>All Claim-Enquiry<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Claim-Enquiry</a>
                                                                </li>
                                                            </ul>  
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">View Claim</a>
                                                                </li>
                                                            </ul>  
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Utilities<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">CPF File-Download</a>
                                                                </li>
                                                            </ul>  
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">75th Percentile Info</a>
                                                                </li>
                                                            </ul>  
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">CPF Return File-Upload</a>
                                                                </li>
                                                            </ul>  
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Claim Admin<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Claim Allocation</a>
                                                                </li>
                                                            </ul>  
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Special instructions</a>
                                                                </li>
                                                            </ul>  
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">World Check Detail</a>
                                                                </li>
                                                            </ul>  
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">World Check File Upload</a>
                                                                </li>
                                                            </ul>  
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">STP Rule</a>
                                                                </li>
                                                            </ul>  
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Download STP Rule File</a>
                                                                </li>
                                                            </ul>  
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Skip STP Approval<span className=""></span>
                                                            </a>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Claim Investigator<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Investigator Appointment</a>
                                                                </li>
                                                            </ul>  
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Investigation Report Submission</a>
                                                                </li>
                                                            </ul>  
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Investigation Close</a>
                                                                </li>
                                                            </ul>  
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">View Investigation</a>
                                                                </li>
                                                            </ul>  
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Claims End */}

                                        {/* Reinsurance Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-parent="#accordion" data-bs-target="#Reinsurance" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className="fa fa-retweet MenuIcon"></i>Reinsurance <span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="Reinsurance" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Master SetUp<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Accounting Year</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Catastrophe</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Cession</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Schedule</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Category</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Cession Attachment</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Coverage Restriction</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Treaty</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Premium</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Pooling Partner</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Reinsurance End */}

                                        {/*Reports Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-parent="#accordion" data-bs-target="#Reports" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className="fa fa-line-chart MenuIcon"></i>Reports<span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="Reports" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Reinsurance<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">CLAIM BORDEREAUX</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">PREMIUM BORDEREAUX</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Claim Details</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">RiPolicy Details</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Transaction Date List</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Premium Database Summary</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">IBNR Data</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Experience Refund Data</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Premium Database</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">RIPolicyRegister Report</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Printing<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Health Card Print</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Register<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Claim Register</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Invoice Register</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Contract Register</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Receipt Register</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Member Register</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Intermediary Register</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Contract Commission Register</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">PreAuth Register</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Payment Register</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Flexi Paln Updates</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Underwriting Member Register</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Pooling Policy Register</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Mail Item Status</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Channel Partner Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Claim Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">TPA Fullerton Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">TPA Alliance Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Claim Submission Extraction Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">TPA Others Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Member Onboarding Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Experience Data Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">User Session  History Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">BetterMe Summary Report </a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Outstanding Underwriting Medical Requirement</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Flexi Enrollment Summary </a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Outstanding Underwriting Medical Decision </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Finance<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">AccounGLEntry</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Trail BAlance Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Account Monthly Summary</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">CashBook-Collection</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Membership List</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Debtors Module</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Journal Voucher Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Debtors Matching Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Commission Payments Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Monthly Commission Summary</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Individual Debtor Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Commission Statement Generated Module</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Paymnet Reminder FollowUp Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">TeleTransfer World Link Payment Related Information</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Team Invoice Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Premium Claims Summary</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Debtor Aging Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Debtor Aging Details Report</a>
                                                                </li>
                                                            </ul>
                                                            
                                                            
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>TAT<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Channel Partner TAT</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Contract TAT</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Claim TAT</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Provider TAT</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Payment TAT</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Coi Issuance TAT </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Analysis<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Claim Analysis Graph</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Claim Analysis Consumpation</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Porln Format</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">TAC_A</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">TAC_B</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>MDM LOG<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">MDM LOG Report</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Contingency<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Collections Tranxn Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Prems and Comms Tranxn Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Premiums Commisions Summary Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Payment Voucher Approved Summary Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Collections Summary Repport</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Paymnet Voucher Summary Status Fail Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Bank Summary Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Reconciliation Premiums Commissions Reports</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Reconciliation Collections Report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Reconciliation Payment Vouchers report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Reconciliation Bank report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Payment Vocher Transaction report</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Reconciliation Payment Vouchers Status Fail Report</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Reports End */}

                                        {/*Calculator Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-parent="#accordion" data-bs-target="#Calculator" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className="fa fa-calculator MenuIcon"></i>Calculator<span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="Calculator" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Health & Accident<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Health Cal</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Motor<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Motor Calculator</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Calculator End */}

                                        {/* Change Password  Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-parent="#accordion" data-bs-target="#ChangePassword" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className="fa fa-cog MenuIcon"></i> Change Password <span className=""></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            {/* <div id="ChangePassword" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                           
                                                            
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
                                            </div> */}
                                        </div>
                                        {/* Change Password  End */}

                                        {/* DMS Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-parent="#accordion" data-bs-target="#DMS" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className="fa fa-file MenuIcon"></i>DMS<span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="DMS" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Document<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Document-Enquiry</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                       
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* DMS End */}

                                        {/* Communication Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-parent="#accordion" data-bs-target="#Communication" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className="fa fa-envelope MenuIcon"></i>Communication<span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="Communication" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Documents<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Documnets-Track</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                       
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Communication End */}

                                        {/* Quotation Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-parent="#accordion" data-bs-target="#Quotation" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className="fa fa-file MenuIcon"></i>Quotation <span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="Quotation" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Sales/Branch<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Quote Enquery</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Quote Creation</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Quote Approved</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Quote Expired</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Quote Rejected</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Quote Freezed</a>
                                                                </li>
                                                            </ul><ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Retail Quick Quote</a>
                                                                </li>
                                                            </ul><ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Group Quick Quote</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>UW<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Quote Enquery</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Port In Format<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Portability Upload</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Quotation End */}

                                        {/* Claims Motor Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-parent="#accordion" data-bs-target="#ClaimsMotor" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className="fa fa-car MenuIcon"></i>Claims Motor<span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="ClaimsMotor" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Acknowledgement<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Application-Enquery</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Claim Enquiry<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Claim Enquiry</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Claims Motor End */}

                                        {/* Claims Generic Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-parent="#accordion" data-bs-target="#ClaimsGeneric" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className="fa fa-asterisk MenuIcon"></i>Claims Generic<span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="ClaimsGeneric" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Acknowledgement<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Application-Enquiry</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Reimbursement<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Claim-Enquiry</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Claims Generic End */}

                                        {/* Formula Config Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-parent="#accordion" data-bs-target="#FormulaConfig" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className=" fa fa-cog MenuIcon"></i>Formula Config <span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="FormulaConfig" className="panel-collapse collapse" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Formula<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Formula</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Formula Mapping</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="30709">
                                                            <a >
                                                                <i className="fa fa-clone">
                                                                </i>Premium Parameters<span className="fa fa-chevron-down"></span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Parameters</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="30709Settings">
                                                                <li id="30710">
                                                                    <a className="aMenu" href="#">Parameters Mapping</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Formula Config End */}

                                        {/* Health Checukp Start */}
                                        <div className="panel panel-default" >
                                            <div className="panel-heading collapsed" data-bs-toggle="collapse" data-bs-target="#HealthChecukp" aria-expanded="false">
                                                <h4 className="panel-title">
                                                    <a>
                                                        <i className=" fa  fa-cog MenuIcon"></i>Health Checukp<span className="fa fa-chevron-down"></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="HealthChecukp" className="panel-collapse collapse" data-bs-parent="#accordion" aria-expanded="false">
                                                <div className="panel-body">
                                                    <ul className="nav side-menu">
                                                        <li id="12" className="active">
                                                            <a >
                                                                <i className="fa fa-clone" >
                                                                </i>Case Process<span className="fa fa-chevron-down">
                                                                </span>
                                                            </a>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Case Manage</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Next Calling Date</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="nav child_menu scroller2" id="12Settings" >
                                                                <li id="13">
                                                                    <a className="aMenu" href="#">Case Process</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Health Checukp End */}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-footer hidden-small">
                            <a data-bs-toggle="tooltip" data-placement="top" title="Logout" href="#"  >
                                <small>Logout&nbsp;&nbsp;<span className="fa fa-power-off" aria-hidden="true"></span></small>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default LeftMenu;