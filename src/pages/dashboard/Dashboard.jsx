import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ updateToken }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [show, setShow] = useState(false);
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [patientName, setPatientName] = useState("");
  const [hospitalId, setHospitalId] = useState("");
  const [billNo, setBillNo] = useState("");
  const [referBy, setReferBy] = useState("");
  const [status, setStatus] = useState("");

  const tableDta = [
    {
      orderNumber: "A19023",
      date: "2023-05-01",
      patient: "Sankaranarayanan",
      hospitalId: "DH2023/0001245",
      testName: "Anti Leukemia 1 Serum",
      doctorName: "Dr. Arun K Thambi",
      eta: "2023-05-03",
      status: "Ready",
    },
    {
      orderNumber: "A19024",
      date: "2023-05-01",
      patient: "Baby. Alan",
      hospitalId: "DH2023/0001242",
      testName: "Anti Leukemia 1 Serum",
      doctorName: "Dr. Abdul Siddique",
      eta: "2023-05-03",
      status: "Partial Report",
    },
    {
      orderNumber: "A19025",
      date: "2023-05-01",
      patient: "Baby. Anirudh",
      hospitalId: "DH2023/0001212",
      testName: "Anti Leukemia 1 Serum",
      doctorName: "Dr. Raveendran",
      eta: "2023-05-03",
      status: "Lab dropped",
    },
    {
      orderNumber: "A19026",
      date: "2023-05-01",
      patient: "Sankaranarayanan Warrier",
      hospitalId: "DH2023/0001247",
      testName: "Comprehensive leukemia - Basic Lineage Panel",
      doctorName: "Dr. Vignesh Muraleedharan",
      eta: "2023-05-03",
      status: "Ready",
    },
  ];

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  function handleLogout() {
    localStorage.clear();
    updateToken("");
    
  }

 
  const filteredData = tableDta.filter((item) => {
    return (
      (!fromDate || new Date(item.date) >= new Date(fromDate)) &&
      (!toDate || new Date(item.date) <= new Date(toDate)) &&
      (!patientName ||
        item.patient.toLowerCase().includes(patientName.toLowerCase())) &&
      (!hospitalId ||
        item.hospitalId.toLowerCase().includes(hospitalId.toLowerCase())) &&
      (!billNo ||
        item.orderNumber.toLowerCase().includes(billNo.toLowerCase())) &&
      (!referBy ||
        item.doctorName.toLowerCase().includes(referBy.toLowerCase())) &&
      (!status || item.status.toLowerCase().includes(status.toLowerCase()))
    );
  });


  const displayData = isFilterApplied ? filteredData : tableDta;

  return (
    <div className="dashbord_main">
      <div className="dasgboard_nav">
        <div>
          <img
            src="./Group 366.png"
            alt="icon"
            className="dashboard_nav_icon"
          />
        </div>

        <div className="nav_right">
          <span>{user}</span>
          <img src="./sitting-8.png" alt="" className="login_icon" />
          <img
            src="./Group 368.png"
            alt="logout icon"
            className="login_icon"
            style={{cursor:"pointer"}}
            onClick={handleLogout}
          />
        </div>
      </div>

      <div className="dashboard_content">
        <div className="dashboard_content_top">
          <div>
            <h3 style={{ color: "#1F6CAB" }}> Patient Reports</h3>
          </div>
          <div className="filter_and_search">
            <div className="apply_filter" onClick={() => setShow(!show)}>
              <span className="filter_text">Apply Filter</span>
              <img
                src="./filter.png"
                alt="filter image"
                className="filter_image"
              />
            </div>
            <div className="filter_search">
              <input
                type="text"
                placeholder="Search by Doctor Name/ bill..."
                className="filter_input"
                onChange={(e) => setReferBy(e.target.value)}
              />
              <img
                src="./Group 362.png"
                alt="search icon"
                className="search_icon"
              />
            </div>
          </div>
        </div>

        {show && (
          <div className="dashboard_middle">
            <div className="dashboard_middle_filters">
              <div className="dashboaed_middle_filter_one">
                <div className="from_date">
                  <p className="from_text">From Date</p>
                  <input
                    type="date"
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </div>
                <div className="patient_name">
                  <p className="patient_text">Patient Name</p>
                  <input
                    type="text"
                    onChange={(e) => setPatientName(e.target.value)}
                  />
                </div>
                <div className="bill_no">
                  <p className="bill_text">Bill No</p>
                  <input
                    type="text"
                    onChange={(e) => setBillNo(e.target.value)}
                  />
                </div>
              </div>

              <div className="dashboaed_middle_filter_two">
                <div className="todate">
                  <p className="toate_text">To Date</p>
                  <input
                    type="date"
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>
                <div className="hospital_id">
                  <p className="hospital_id_text">Hospital ID</p>
                  <input
                    type="text"
                    onChange={(e) => setHospitalId(e.target.value)}
                  />
                </div>
              </div>

              <div className="dashboaed_middle_filter_three">
                <div className="referby">
                  <p className="referby_text">Refer by</p>
                  <input
                    type="text"
                    onChange={(e) => setReferBy(e.target.value)}
                  />
                </div>
                <div className="status">
                  <p className="status_text">Status</p>
                  <input
                    type="text"
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="search_and_clear_main">
              <div>
                <span className="serac_text">
                  Please provide search criteria and hit search button.
                </span>
              </div>
              <div className="search_and_clear">
                <div
                  className="dashboard_middile_search"
                  onClick={() => setIsFilterApplied(true)}
                >
                  <img src="123.png" alt="" className="middile_search_icon" />
                  <span className="middile_search_text">Search</span>
                </div>
                <div
                  className="clear"
                  onClick={() => {
                    setFromDate("");
                    setToDate("");
                    setPatientName("");
                    setHospitalId("");
                    setBillNo("");
                    setReferBy("");
                    setStatus("");
                    setIsFilterApplied(false);
                  }}
                >
                  <img src="./Group 334.png" alt="" className="clear_icon" />
                  <span className="clear_text">Clear</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div>
          <table className="table">
            <thead>
              <tr className="row_heading">
                <th className="order_no">Order No</th>
                <th className="date">Date</th>
                <th className="patient_namez">Patient Name</th>
                <th className="hospital_idz">Hospital ID</th>
                <th className="test_name">Test Name</th>
                <th className="doctor_nme">Doctor Name</th>
                <th className="eta">ETA</th>
                <th className="statuz">Status</th>
                <th className="actinz">Action</th>
              </tr>
            </thead>
            <tbody>
              {displayData.map((items, index) => (
                <tr key={index} className="row_details">
                  <td className="order_no">{items.orderNumber}</td>
                  <td className="date">{items.date}</td>
                  <td className="patient_namez">{items.patient}</td>
                  <td className="hospital_idz">{items.hospitalId}</td>
                  <td className="test_name">{items.testName}</td>
                  <td className="doctor_nme">{items.doctorName}</td>
                  <td className="eta">{items.eta}</td>
                  <td className="statuz">{items.status}</td>
                  <td className="actinz"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
