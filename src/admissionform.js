import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import logo from './images/schoollogo.png';
import './form.css';

function Form() {

  const [studentinfo, setStudentinfo] = useState({
  name: "",
  gender: "",
  date: new Date(),
  standard: "",
  address: "",
  city: "",
  phonenumber: "",
  fathername: "",
  fatheroccupation: "",
  mothername: "",
  motheroccupation: "",
  email: ""
  });

  const handleChange = e => {
    setStudentinfo({
      ...studentinfo,
      [e.target.name]: e.target.value,
    })
  }


  return (
    <div className="app">
      <div className="innerapp">
      <div>
      <img src={logo} className="schoollogo"/>
      <h1 className="schoolname">Central School</h1>
      </div>
      <h1 className="heading2">Application For Admission 2022-2023</h1>
      <p className="note">PLEASE NOTE THAT FILLING UP THIS FORM IS NO GUARANTEE OF ADMISSION</p>
      <form>
      <div>
      <label className="labels" htmlFor="name">Full Name </label>
      <input className="answers" type="text" id="name" name="name" value={studentinfo.name} onChange={handleChange} placeholder="Full Name.."/>
      </div>
      <div>
      <label className="labels" htmlFor="gender">Select Gender</label>
      <select className="answers" name="gender" id="gender" value={studentinfo.gender} onChange={handleChange}>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Others">Others</option>
      </select>
      </div>
      <label className="labels" htmlFor="date">Date
      <DatePicker className="answers" id="date"
      name="date"
      selected={studentinfo.date} 
      onChange={edate => setStudentinfo({
      ...studentinfo,
      date: edate,
    })} 
      />
      </label>
      <div>
      <label className="labels" htmlFor="standard">Select Class</label>
      <select className="answers" name="standard" id="standard" value={studentinfo.standard} onChange={handleChange}>
      <option value="1">I</option>
      <option value="2">II</option>
      <option value="3">III</option>
      <option value="4">IV</option>
      <option value="5">V</option>
      <option value="6">VI</option>
      <option value="7">VII</option>
      <option value="8">VIII</option>
      <option value="9">IX</option>
      </select>
      </div>
      <div>
      <label className="labels" htmlFor="address">Address</label>
      <input className="answers" type="text" id="address" name="address" value={studentinfo.address} onChange={handleChange} placeholder="address.."/>
      </div>
      <div>
      <label className="labels" htmlFor="City">City</label>
      <input className="answers" type="text" id="City" name="city" value={studentinfo.city} onChange={handleChange} placeholder="City..."/>
      </div>
      <div>
      <label className="labels" htmlFor="phonenumber">Phone Number</label>
      <input className="answers" type="tel" id="phonenumber" name="phonenumber" value={studentinfo.phonenumber} onChange={handleChange} placeholder="Ex:- 0000000000"/>
      </div>
      <div>
      <label className="labels" htmlFor="father-name">Father's Name </label>
      <input className="answers" type="text" id="father-name" name="fathername" value={studentinfo.fathername} onChange={handleChange} placeholder="Father Name.."/>
      </div>
      <div>
      <label className="labels" htmlFor="father-occupation">Father's Occupation </label>
      <input className="answers" type="text" id="father-occupation" name="fatheroccupation" value={studentinfo.fatheroccupation} onChange={handleChange} placeholder="father's occupation"/>
      </div>
      <div>
      <label className="labels" htmlFor="Mother-name">Mother's Name </label>
      <input className="answers" type="text" id="Mother-name" name="mothername" value={studentinfo.mothername} onChange={handleChange} placeholder="mother's name"/>
      </div>
      <div>
      <label className="labels" htmlFor="mother-occupation">Mother's Occupation </label>
      <input className="answers" type="text" id="mother-occupation" name="motheroccupation" value={studentinfo.motheroccupation} onChange={handleChange} placeholder="mother's occupation"/>
      </div>
      <div>
      <label className="labels" htmlFor="email">Email Address </label>
      <input className="answers" type="email" id="email" name="email" value={studentinfo.email} onChange={handleChange} placeholder="email@email.com"/>
      </div>
      <button type="submit" className="btn btn-success">Submit Application</button>
      </form>
    </div>
  </div>
  );
}

export default Form;
