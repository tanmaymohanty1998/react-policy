import React from "react"
import '../Assets/Css/DatePicker.css'

const AddRoles = () => {
    return (<>

        <div className="main-dashboard">


            <div className="container-fluid">
                <div className="form-title-container">
                    <p className="form-titles">Add Roles</p>
                    <button type="submit" className="green-btn setBtn titleBtn"><span><i
                        className="fas fa-file-export"></i></span>Add Roles</button>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="input-container">
                            <label className="form-label">Role Name:</label>
                            <input type="text" className="form-control custom-input" id=""
                                aria-describedby="Role Name" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="input-container">
                            <label className="form-label">Role Description:</label>
                            <input type="text" className="form-control custom-input" id=""
                                aria-describedby="Role Description" />
                        </div>
                    </div>


                    <div className="row mt2">
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="input-container ">
                                <label className="form-label">Status:*</label>

                            </div>
                            <div className="d-flex dFlexAdjust bdrBlue">
                                <div className="input-container flxGrow">
                                    <input type="radio" id="active" name="fav_language" value="Active" />
                                    <label htmlFor="active" className="form-label click-lable sideLable">Active</label>
                                </div>
                                <div className="input-container flxGrow">
                                    <input type="radio" id="inActive" name="fav_language" value="InActive" />
                                    <label htmlFor="inActive" className="form-label click-lable sideLable"> In Active</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt2">
                    <div className="col-12 text-center">
                        <button type="submit" className="green-btn setBtn"><span><i
                            className="fas fa-file-export"></i></span> Submit</button>
                        <a href="#" className="red-anc-btn setBtn ml-0-4">Back</a>
                    </div>
                </div>
            </div>
        </div >

    </>);
}
export default AddRoles;
