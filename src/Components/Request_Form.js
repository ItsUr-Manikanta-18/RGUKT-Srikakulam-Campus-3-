import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Footer2 from "./Footer2";

const Request_Form = (props) => {
    return (
        <>
        <Header name={props.headername}/>
        <div>
            <form className="leave_out_in-form">
                <div className="leave_out_in-form_div">
                    <div className="leave_out_in_side">
                        <div className="leave_out_label_input">
                            <label className="leave_out_input_label">Name:</label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Enter your name"
                                className="leave_out_input"
                            />
                        </div>
                        <div className="leave_out_label_input">
                            <label className="leave_out_input_label">Student Id:</label>
                            <input 
                                type="text" 
                                name="studentId"
                                placeholder="Enter your ID number"
                                className="leave_out_input"
                            />
                        </div>
                        
                        <div className="leave_out_label_input">
                            <label className="leave_out_input_label">Academic Year:</label>
                            <select name="academicYear" className="leave_out_input_section">
                                <option>Select</option>
                                <option>E3</option>
                                <option>E4</option>
                            </select>
                        </div>
                        <div className="leave_out_label_input">
                            <label className="leave_out_input_label">Branch:</label>
                            <select name="branch" className="leave_out_input_section">
                                <option>Select</option>
                                <option>CSE</option>
                                <option>ECE</option>
                                <option>EEE</option>
                                <option>CE</option>
                                <option>MECH</option>
                            </select>
                        </div>
                        <div className="leave_out_label_input">
                            <label className="leave_out_input_label">Section:</label>
                            <select name="section" className="leave_out_input_section">
                                <option>Select</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                                <option>F</option>
                            </select>
                        </div>
                        <div className="leave_out_label_input">
                            <label className="leave_out_input_label">Issue Type:</label>
                            <select name="section" className="leave_out_input_section">
                                <option>Select</option>
                                <option>Physical Damage</option>
                                <option>System Issue</option>
                            </select>
                        </div>
                    </div>

                    <div className="leave_out_in_side">
                        <div className="leave_out_label_input">
                            <label className="leave_out_input_label">Student Mobile Number:</label>
                            <input 
                                type="text" 
                                name="studentMobile" 
                                className="leave_out_input"
                                placeholder="Enter your mobile number"
                            />
                        </div>
                        <div className="leave_out_label_input">
                            <label className="leave_out_input_label">S/N No:</label>
                            <input 
                                type="text" 
                                name="studentMobile" 
                                className="leave_out_input"
                                placeholder="Laptop's S/N number"
                            />
                        </div>
                        <div className="leave_out_label_input">
                            <label className="leave_out_input_label">Notebook Computer MO:</label>
                            <input 
                                type="text" 
                                name="studentMobile" 
                                className="leave_out_input"
                                placeholder="Laptop's Notebook Computer MO "
                            />
                        </div>
                        <div className="leave_out_label_input">
                            <label className="leave_out_input_label">Reason:</label>
                            <input 
                                type="text" 
                                name="studentMobile" 
                                className="leave_out_input"
                                placeholder="Frame your issue"
                            />
                        </div>
                    </div>
                </div>
                <button className="leave_out_in_button">
                    {props.name === "Repair" ? "Request To Repair" : "Request To Replace"}
                </button>
            </form>
        </div>
        <Footer2 previouspath={props.previouspath} />
        </>
    );
};

export default Request_Form;