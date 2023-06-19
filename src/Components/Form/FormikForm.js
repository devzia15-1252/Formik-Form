import React from "react";
import InpupField from "../InputFields/InpupField";
import "./formikform.css";
import Select from "../Select/Select";
const FormikForm = () => {
  return (
    <div className="Form-Stack">
      <div>
        <h1 className="Get-In-Touch">Get in touch</h1>
      </div>
      <div className="Input-Lable-Stack">
        <div className="Input-Lable">
          <lable className="lable">First Name</lable>
          <InpupField />
        </div>
        <div className="Input-Lable">
          <lable className="lable">Last Name</lable>
          <InpupField />
        </div>
      </div>
      <div className="Input-Lable-Stack">
        <div className="Input-Lable">
          <lable className="lable">Email</lable>
          <InpupField />
        </div>
        <div className="Input-Lable">
          <lable className="lable">Phone</lable>
          <InpupField />
        </div>
      </div>
      <div className="Input-Lable-Stack">
        <div className="Input-Lable">
          <lable className="lable">Select City</lable>
          <Select />
        </div>
        <div className="Input-Lable">
          <lable className="lable">Select Country</lable>
          <Select />
        </div>
      </div>
      <div className="Input-Lable-Stack">
        <div className="Input-Lable">
          <lable className="lable">Address</lable>
          <InpupField />
        </div>
      </div>
    </div>
  );
};

export default FormikForm;
