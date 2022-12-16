

import { Button, Heading, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from  "axios"
import { useNavigate } from "react-router-dom";

function Signup({onClose}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const toast = useToast()
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = formData;
    // console.log(payload)
    axios
      .post("https://care-at-home.onrender.com/signup", payload)
      .then((res) => {
        console.log(res.data);
        onClose()
        toast({
          title: res.data,
          status: "success",
          duration: 1000,
          isClosable: true,
          position: "top-left"
        });
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="signup">
    <form onSubmit={handleSubmit} style={{ width: "95%", textAlign: "center", margin:"auto"}}>
      {/* <Heading>Signup</Heading> */}
      <br />
      <Input
        placeholder="name"
        type="text"
        w="100%"
        mb={5}
        name="name"
        required="required"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <Input
        placeholder="email"
        type="email"
        w="100%"
        mb={5}
        name="email"
        required="required"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <Input
        placeholder="password"
        type="password"
        w="100%"
        mb={5}
        name="password"
        required="required"
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      <Input type="submit" value="Signup" w="100px" color={"white"} bg="black"/>
    </form>
    </div>
  );
}

export default Signup;
