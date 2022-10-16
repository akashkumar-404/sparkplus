import { Button, Input } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { patchUser, getUser, postUser } from "../Redux/action";

function getuserbyId(users, id) {
  return users.filter((el) => el.id == id)[0];
}

function EditUser() {
  const { id } = useParams();
  const [jobs, setJobs] = useState("");
  const [company_name, setCompany_name] = useState("");
  const [img, setImg] = useState("");
  const [salary, setSalary] = useState("");
  const [joining_date, setJoining_date] = useState("");
  const [discrip, setDiscrip] = useState("");
  const editUser = useSelector((state) => state.user);
  const user = getuserbyId(editUser, id);
  console.log("user", user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      console.log("ifuser", user);
      //dispatch(patchUser(id));
      setJobs(user.jobs);
      setCompany_name(user.company_name);
      setSalary(user.salary);
      setJoining_date(user.joining_date);
      setDiscrip(user.discrip);
    }
  }, [id, editUser.length]);
  const handleChange = () => {
    const payload = {
      jobs: jobs,
      company_name: company_name,
      salary: salary,
      joining_date: joining_date,
      discrip: discrip,
    };
    dispatch(patchUser(id, payload)).then((res) => {
      dispatch(getUser()).then((res) => {
        navigate("/");
      });
    });
  };

  return (
    <div
      style={{
        height:'500px',width:'400px',margin:'auto',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      }}
    >
      <h1 style={{ fontWeight: "bolder", fontSize: "20px" }}>EDIT JOBS</h1>
      <div>
        <label>Job Title</label>
        <br />
        <Input
          type="text"
          onChange={(e) => setJobs(e.target.value)}
          value={jobs}
        />
        <br />
        <label>Company</label>
        <br />
        <Input
          type="text"
          id="company"
          onChange={(e) => setCompany_name(e.target.value)}
          value={company_name}
        />
        <br />
        <div
          style={{
            display: "flex",
            margin: "auto",
            justifyContent: "space-between",
          }}
        >
          <div>
            <label>salary</label>
            <br />
            <Input
              type="text"
              style={{ width: "100px" }}
              onChange={(e) => setSalary(e.target.value)}
              value={salary}
            />
          </div>
          <div>
            <label>Joining Date-time</label>
            <br />
            <Input
              type="text"
              style={{ width: "100px" }}
              onChange={(e) => setJoining_date(e.target.value)}
              value={joining_date}
            />
          </div>
        </div>
        <br />
        <label>Description</label>
        <br />
        <textarea
          id="w3review"
          rows="4"
          cols="50"
          style={{ border: "1px solid", width: "100%" }}
          onChange={(e) => setDiscrip(e.target.value)}
          value={discrip}
        ></textarea>
        <Button onClick={handleChange}>Update</Button>
      </div>
    </div>
  );
}

export default EditUser;
