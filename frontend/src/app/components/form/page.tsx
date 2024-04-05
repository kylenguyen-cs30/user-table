import React, { useState } from "react";

interface FormData {
  fName: string;
  lName: string;
  email: string;
  phoneNum: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fName: "",
    lName: "",
    email: "",
    phoneNum: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // api endpoint POST REQUEST
    try {
      const response = await fetch("http://192.168.5.20:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User create succfully", data);
      } else {
        console.error("Failed to create user", response);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-items-center justify-center"
    >
      <div>
        <label htmlFor="fName">First Name</label>
        <input
          type="text"
          id="fName"
          value={formData.fName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lName">Last Name</label>
        <input
          type="text"
          id="lName"
          value={formData.lName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNum">Phone Number</label>
        <input
          type="text"
          id="phoneNum"
          value={formData.phoneNum}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
