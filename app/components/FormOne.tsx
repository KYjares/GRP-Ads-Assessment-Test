import React from "react";

type FormOneData = {
  email: string;
  firstName: string;
  lastName: string;
  interest: "Cars" | "Music" | "Sport" | "";
};

type FormOneProps = {
  data: FormOneData;
  onChange: (data: FormOneData) => void;
  onSubmit: () => void;
};

const FormOne: React.FC<FormOneProps> = ({ data, onChange, onSubmit }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="space-y-4"
    >
      <div>
        <label className="form-label">Email</label>
        <input
          required
          name="email"
          value={data.email}
          type="email"
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div>
        <label className="form-label">First Name</label>
        <input
          required
          name="firstName"
          value={data.firstName}
          type="text"
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div>
        <label className="form-label">Last Name</label>
        <input
          required
          name="lastName"
          value={data.lastName}
          type="text"
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div>
        <label className="form-label">Interest</label>
        <select
          required
          name="interest"
          value={data.interest}
          onChange={handleChange}
          className="form-input"
        >
          <option value="">Select...</option>
          <option value="Cars">Cars</option>
          <option value="Music">Music</option>
          <option value="Sport">Sport</option>
        </select>
      </div>
      <button type="submit" className="form-button submit-button">
        Next
      </button>
    </form>
  );
};

export default FormOne;
