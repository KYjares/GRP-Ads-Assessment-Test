"use client";

import React, { useState } from "react";

import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";

export default function Home() {
  const [form, setForm] = useState(1);
  const [formOneData, setFormOneData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    interest: "" as "Cars" | "Music" | "Sport" | "",
  });
  const [formTwoData, setFormTwoData] = useState({
    toc: false,
    favorite: "",
  });
  const [isDisabled, setIsDisabled] = useState(false);

  const handleFormOneSubmit = () => {
    setForm(2);
  };

  const handleFormTwoSubmit = () => {
    console.log("Form 1 values:", formOneData);
    console.log("Form 2 values:", formTwoData);
    setIsDisabled(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg mt-10 outline outline-offset-2 outline-1">
      <h1 className="text-2xl font-bold mb-4">Sign-up for an account</h1>
      {form === 1 ? (
        <FormOne
          data={formOneData}
          onChange={setFormOneData}
          onSubmit={handleFormOneSubmit}
        />
      ) : (
        <FormTwo
          data={formTwoData}
          onChange={setFormTwoData}
          onBack={() => setForm(1)}
          onSubmit={handleFormTwoSubmit}
          interest={formOneData.interest}
          isDisabled={isDisabled}
        />
      )}
    </div>
  );
}
