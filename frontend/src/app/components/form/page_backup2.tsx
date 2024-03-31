import React, { useState } from "react";

const Form: React.FC = () => {
  const [firstName, setFirstName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  return (
    <form className="flex flex-col justify-items-center justify-center">
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleChange}
        />
      </div>
      <button type="button" onClick={() => console.log(firstName)}>
        Log First Name
      </button>
    </form>
  );
};

export default Form;
