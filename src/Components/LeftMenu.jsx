//import './SideNav.css';
import { Link } from "react-router-dom";
import Complogo from '../Assets/Images/Clapi-logo.png'
import LeftMenuJson from '../Assets/Js/Leftmenu';


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
                                        {/* demo */}
                                        {
                                            LeftMenuJson.map((Lobj, Lind) => {
                                                return (
                                                    <div className="panel panel-default" key={Lind.toString()} >
                                                        <div className="panel-heading " data-bs-toggle="collapse" data-bs-parent="#accordion" data-bs-target={`#${Lobj.id}`} aria-expanded="false">
                                                            <h4 className="panel-title">
                                                                <a>
                                                                    <i className={`fa ${Lobj.icon} MenuIcon`}></i>{Lobj.title}<span className="fa fa-chevron-down"></span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                        <div id={Lobj.id} className="panel-collapse collapse" aria-expanded="false">
                                                            {
                                                                Lobj.Child.map((LcObj, Lcind) => {
                                                                    return (
                                                                        <div className="panel-body" key={`${Lind}_${Lcind}`}>
                                                                            <div className="panel-heading " data-bs-toggle="collapse" data-bs-parent="#accordion" data-bs-target="#pages" aria-expanded="false">
                                                                                <h4 className="panel-title">
                                                                                    <a>
                                                                                        <i className="fa fa-clone"></i>{LcObj.title}<span className="fa fa-chevron-down"></span>
                                                                                    </a>
                                                                                </h4>
                                                                            </div>
                                                                            <div id="pages" className="panel-collapse collapse" aria-expanded="false">
                                                                                <div className="panel-body">
                                                                                    <ul className="nav side-menu">
                                                                                        {
                                                                                            LcObj.SubChild.map((LscObj, Lscind) => {
                                                                                                return (
                                                                                                    <li id="12" className="MenuActive" key={`${Lind}_${Lcind}_${Lscind}`}>
                                                                                                        <Link className="aMenu" to={LscObj.pageurl}>
                                                                                                            <i className="" ></i>
                                                                                                            {LscObj.title}
                                                                                                            <span className=""> </span>
                                                                                                            </Link>
                                                                                                    </li>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        {/* demo */}
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