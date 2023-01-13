import React from 'react';
import MasterPage from '../Components/MasterPages';

const Dashboard = () => {

   
    return (

        <MasterPage Titel={'Home'}>

                    <div id="updpanel1">

                        <div className="tile_count">
                            <span id="ContentPlaceHolder1_lblUDate"></span>
                            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                                <span className="count_top">Total Quotations</span>

                                <div className="count ">40276</div>

                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                                <span className="count_top">Total Proposal</span>
                                <div className="count orange">55879</div>


                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                                <span className="count_top">Total Policies</span>
                                <div className="count green">15448</div>


                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                                <span className="count_top">Total Claims</span>
                                <div className="count red">4609</div>


                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                                <span className="count_top">Total Payments</span>
                                <div className="count">15448</div>


                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                                <span className="count_top">Total Collections</span>
                                <div className="count blue">1231</div>


                            </div>
                            <div className="col-md-12  col-sm-10 col-xs-11">
                                <ul className="nav navbar-nav navbar-right">

                                    <span id="ContentPlaceHolder1_lblUpdatedDate">Updated Date :20-12-2022 10:53:40</span>
                                </ul>
                            </div>



                        </div>


                        {/* middle box  start */}
                        {/* <div className="mid"> */}
                        <div className="row">

                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="x_panel tile">
                                    <div className="x_title">
                                        <h2>Proposal across status</h2>
                                        <ul className="nav navbar-right panel_toolbox">
                                            <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                            </li>
                                            <li><a className="close-link"><i className="fa fa-close"></i></a>
                                            </li>
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="x_content h23vh">
                                        <div className="widget_summary">
                                            <div className="w_left w_15 Font_15">
                                                <span>Unbooked</span>
                                            </div>
                                            <div className="w_center w_55">
                                                <div className="progress">
                                                    <div id="ContentPlaceHolder1_UnbookedProposal" className="progress-bar bg-blue ui-progressbar ui-corner-all ui-widget ui-widget-content" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
                                                        <span className="sr-only">
                                                            <span id="ContentPlaceHolder1_lblPerUnbookedProposal">28%</span>
                                                        </span>
                                                        <div className="ui-progressbar-value ui-corner-left ui-widget-header" ></div></div>
                                                </div>
                                            </div>
                                            <div className="w_right w_20" >
                                                <span>
                                                    <span id="ContentPlaceHolder1_lblUnbooked">15448</span></span>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="widget_summary">
                                            <div className="w_left w_15 Font_15">
                                                <span>Booked</span>
                                            </div>
                                            <div className="w_center w_55">
                                                <div className="progress">
                                                    <div id="ContentPlaceHolder1_BookedProposal" className="progress-bar bg-green ui-progressbar ui-corner-all ui-widget ui-widget-content" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
                                                        <span id="ContentPlaceHolder1_lblPerBookedProposal">72%</span>
                                                        <div className="ui-progressbar-value ui-corner-left ui-widget-header" ></div></div>
                                                </div>
                                            </div>
                                            <div className="w_right w_20" >
                                                <span>
                                                    <span id="ContentPlaceHolder1_lblBooked">40276</span></span>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="widget_summary">
                                            <div className="w_left w_15 Font_15">
                                                <span>Rejected</span>
                                            </div>
                                            <div className="w_center w_55">
                                                <div className="progress">
                                                    <div id="ContentPlaceHolder1_RejectedProposal" className="progress-bar bg-red ui-progressbar ui-corner-all ui-widget ui-widget-content" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
                                                        <span id="ContentPlaceHolder1_lblPerRejectedProposal">0%</span>
                                                        <div className="ui-progressbar-value ui-corner-left ui-widget-header" ></div></div>
                                                </div>
                                            </div>
                                            <div className="w_right w_20" >
                                                <span>
                                                    <span id="ContentPlaceHolder1_lblProRejected">155</span></span>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="x_panel tile overflow_hidden" >
                                    <div className="x_title">
                                        <h2>Claims across status</h2>
                                        <ul className="nav navbar-right panel_toolbox">
                                            <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                            </li>
                                            <li><a className="close-link"><i className="fa fa-close"></i></a>
                                            </li>
                                        </ul>
                                        <div className="clearfix "></div>
                                    </div>
                                    <div className="x_content h23vh">
                                        <table className="">
                                            <tbody><tr>
                                                <th ></th>
                                                <th>
                                                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                                        <p className="">Status</p>
                                                    </div>
                                                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                                        <p className="">Progress</p>
                                                    </div>
                                                </th>
                                            </tr>
                                                <tr>
                                                    <td><iframe className="chartjs-hidden-iframe" ></iframe>
                                                        <canvas className="canvasDoughnut" height="140" width="140"></canvas>
                                                    </td>
                                                    <td>
                                                        <table className="tile_info">
                                                            <tbody><tr>
                                                                <td>
                                                                    <p><i className="fa fa-square blue"></i>Open </p>
                                                                </td>
                                                                <td>
                                                                    <span id="ContentPlaceHolder1_lblOpen">86%</span></td>
                                                            </tr>
                                                                <tr>
                                                                    <td>
                                                                        <p><i className="fa fa-square green"></i>Paid </p>
                                                                    </td>
                                                                    <td>
                                                                        <span id="ContentPlaceHolder1_lblPaid">10%</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <p><i className="fa fa-square red"></i>Rejected </p>
                                                                    </td>
                                                                    <td>
                                                                        <span id="ContentPlaceHolder1_lblRejected">4%</span></td>
                                                                </tr>
                                                            </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-12 col-sm-12 col-xs-12 ">
                            <div className="x_panel tile fixed_height_250 web">
                                <div className="x_title">
                                    <h2>Status Summary</h2>
                                    <ul className="nav navbar-right panel_toolbox">
                                        <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                        </li>
                                        <li><a className="close-link"><i className="fa fa-close"></i></a>
                                        </li>
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="x_content h38vh">
                                    <div className="widget_summary">
                                        <div className="w_left w_15 Font_15">
                                            <span>Proposal Stage</span>
                                        </div>
                                        <div className="w_center w_55">
                                            <div className="progress">
                                                <div id="ContentPlaceHolder1_ProposalStage" className="progress-bar bg-blue ui-progressbar ui-corner-all ui-widget ui-widget-content" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
                                                    <span className="sr-only">
                                                        <span id="ContentPlaceHolder1_lblPreProposalStage">7%</span>
                                                    </span>
                                                    <div className="ui-progressbar-value ui-corner-left ui-widget-header" ></div></div>
                                            </div>
                                        </div>
                                        <div className="w_right w_20 tx-blue">
                                            <span>
                                                <span id="ContentPlaceHolder1_lblProposalStage">3779</span></span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="widget_summary">
                                        <div className="w_left w_15 Font_15">
                                            <span>QC</span>
                                        </div>
                                        <div className="w_center w_55">
                                            <div className="progress">
                                                <div id="ContentPlaceHolder1_QC" className="progress-bar bg-green ui-progressbar ui-corner-all ui-widget ui-widget-content" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
                                                    <span id="ContentPlaceHolder1_lblPreQC">6%</span>
                                                    <div className="ui-progressbar-value ui-corner-left ui-widget-header" ></div></div>
                                            </div>
                                        </div>
                                        <div className="w_right w_20 tx-green" >
                                            <span>
                                                <span id="ContentPlaceHolder1_lblQC">3340</span></span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="widget_summary">
                                        <div className="w_left w_15 Font_15">
                                            <span>Underwriting</span>
                                        </div>
                                        <div className="w_center w_55">
                                            <div className="progress">
                                                <div id="ContentPlaceHolder1_Underwriting" className="progress-bar bg-red ui-progressbar ui-corner-all ui-widget ui-widget-content" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
                                                    <span id="ContentPlaceHolder1_lblPreUnderwriting">12%</span>
                                                    <div className="ui-progressbar-value ui-corner-left ui-widget-header" ></div></div>
                                            </div>
                                        </div>
                                        <div className="w_right w_20 tx-red" >
                                            <span>
                                                <span id="ContentPlaceHolder1_lblUnderwriting">6845</span></span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="widget_summary">
                                        <div className="w_left w_15 Font_15">
                                            <span>PPMC</span>
                                        </div>
                                        <div className="w_center w_55">
                                            <div className="progress">
                                                <div id="ContentPlaceHolder1_PPMC" className="progress-bar bg-purple ui-progressbar ui-corner-all ui-widget ui-widget-content" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
                                                    <span className="sr-only">
                                                        <span id="ContentPlaceHolder1_lblPrePPMC">0%</span>
                                                    </span>
                                                    <div className="ui-progressbar-value ui-corner-left ui-widget-header" ></div></div>
                                            </div>
                                        </div>
                                        <div className="w_right w_20 tx-purple" >
                                            <span>
                                                <span id="ContentPlaceHolder1_lblPPMC">0</span></span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="widget_summary">
                                        <div className="w_left w_15 Font_15">
                                            <span>Rejected</span>
                                        </div>
                                        <div className="w_center w_55">
                                            <div className="progress">
                                                <div id="ContentPlaceHolder1_RejectedStatus" className="progress-bar bg-mediumvioletred ui-progressbar ui-corner-all ui-widget ui-widget-content" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
                                                    <span className="sr-only">
                                                        <span id="ContentPlaceHolder1_lblPreRejectedStatus">1%</span>
                                                    </span>
                                                    <div className="ui-progressbar-value ui-corner-left ui-widget-header" ></div></div>
                                            </div>
                                        </div>
                                        <div className="w_right w_20 tx-mediumvioletred" >
                                            <span>
                                                <span id="ContentPlaceHolder1_lblRejectedStatus">820</span></span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="widget_summary">
                                        <div className="w_left w_15 Font_15">
                                            <span>Deficiency</span>
                                        </div>
                                        <div className="w_center w_55">
                                            <div className="progress">
                                                <div id="ContentPlaceHolder1_Deficiency" className="progress-bar bg-yellowgreen ui-progressbar ui-corner-all ui-widget ui-widget-content" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                                    <span id="ContentPlaceHolder1_lblPreDeficiency">0%</span>
                                                    <div className="ui-progressbar-value ui-corner-left ui-widget-header" ></div></div>
                                            </div>
                                        </div>
                                        <div className="w_right w_20 tx-yellowgreen">
                                            <span>
                                                <span id="ContentPlaceHolder1_lblDeficiency">0</span></span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="widget_summary">
                                        <div className="w_left w_15 Font_15">
                                            <span>Counter Offer</span>
                                        </div>
                                        <div className="w_center w_55">
                                            <div className="progress">
                                                <div id="ContentPlaceHolder1_CounterOffer" className="progress-bar bg-blueviolet ui-progressbar ui-corner-all ui-widget ui-widget-content" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
                                                    <span id="ContentPlaceHolder1_lblPreCounterOffer">1%</span>
                                                    <div className="ui-progressbar-value ui-corner-left ui-widget-header" ></div></div>
                                            </div>
                                        </div>
                                        <div className="w_right w_20 tx-blueviolet" >
                                            <span>
                                                <span id="ContentPlaceHolder1_lblCounterOffer">306</span></span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="widget_summary">
                                        <div className="w_left w_15 Font_15">
                                            <span>No Cash</span>
                                        </div>
                                        <div className="w_center w_55">
                                            <div className="progress">
                                                <div id="ContentPlaceHolder1_NoCash" className="progress-bar bg-purple2 ui-progressbar ui-corner-all ui-widget ui-widget-content" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
                                                    <span className="sr-only">
                                                        <span id="ContentPlaceHolder1_lblPreNoCash">0%</span>
                                                    </span>
                                                    <div className="ui-progressbar-value ui-corner-left ui-widget-header" ></div></div>
                                            </div>
                                        </div>
                                        <div className="w_right w_20 tx-purple2">
                                            <span>
                                                <span id="ContentPlaceHolder1_lblNoCash">0</span></span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="widget_summary">
                                        <div className="w_left w_15 Font_15">
                                            <span>Booked</span>
                                        </div>
                                        <div className="w_center w_55">
                                            <div className="progress">
                                                <div id="ContentPlaceHolder1_BookedStatus" className="progress-bar bg-bronze ui-progressbar ui-corner-all ui-widget ui-widget-content" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
                                                    <span id="ContentPlaceHolder1_lblPreBookedStatus">71%</span>
                                                    <div className="ui-progressbar-value ui-corner-left ui-widget-header"></div></div>
                                            </div>
                                        </div>
                                        <div className="w_right w_20 tx-bronze" >
                                            <span>
                                                <span id="ContentPlaceHolder1_lblBookedStatus">39194</span></span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="widget_summary">
                                        <div className="w_left w_15 Font_15">
                                            <span>Terminated</span>
                                        </div>
                                        <div className="w_center w_55">
                                            <div className="progress">
                                                <div id="ContentPlaceHolder1_Terminated" className="progress-bar bg-blueviolet ui-progressbar ui-corner-all ui-widget ui-widget-content" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
                                                    <span id="ContentPlaceHolder1_lblPreTerminated">2%</span>
                                                    <div className="ui-progressbar-value ui-corner-left ui-widget-header"></div></div>
                                            </div>
                                        </div>
                                        <div className="w_right w_20 tx-blueviolet" >
                                            <span>
                                                <span id="ContentPlaceHolder1_lblTerminated">958</span></span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="widget_summary">
                                        <div className="w_left w_15 Font_15">
                                            <span>Lapsed</span>
                                        </div>
                                        <div className="w_center w_55">
                                            <div className="progress">
                                                <div id="ContentPlaceHolder1_Lapsed" className="progress-bar bg-yellowgreen ui-progressbar ui-corner-all ui-widget ui-widget-content" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                                    <span className="sr-only">
                                                        <span id="ContentPlaceHolder1_lblPreLapsed">0%</span>
                                                    </span>
                                                    <div className="ui-progressbar-value ui-corner-left ui-widget-header"></div></div>
                                            </div>
                                        </div>
                                        <div className="w_right w_20 tx-yellowgreen ">
                                            <span>
                                                <span id="ContentPlaceHolder1_lblLapsed">0</span></span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

        </MasterPage>

      );
};



export default Dashboard;
