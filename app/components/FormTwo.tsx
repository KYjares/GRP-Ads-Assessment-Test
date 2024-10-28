import React, { useState } from "react";

type FormTwoData = {
  toc: boolean;
  favorite: string;
};

type FormTwoProps = {
  data: FormTwoData;
  onChange: (data: FormTwoData) => void;
  onBack: () => void;
  onSubmit: () => void;
  isDisabled: boolean;
  interest: "Cars" | "Music" | "Sport" | "";
};

const FormTwo: React.FC<FormTwoProps> = ({
  data,
  onChange,
  onBack,
  onSubmit,
  isDisabled,
  interest,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && name === "toc") {
      onChange({
        ...data,
        toc: e.target.checked,
      });
    } else {
      onChange({
        ...data,
        [name]: value,
      });
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="space-y-4"
      >
        <div>
          <label className="flex items-center space-x-2">
            <input
              required
              name="toc"
              type="checkbox"
              checked={data.toc}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="text-sm font-medium text-gray-700">
              Accept{" "}
              <span className="text-blue-500 cursor-pointer underline">
                Terms and Conditions
              </span>
            </span>
          </label>
        </div>
        <div>
          <label className="form-label">
            {interest === "Cars" && "Favorite Car Type"}
            {interest === "Music" && "Favorite Music Genre"}
            {interest === "Sport" && "Favorite Sport"}
          </label>
          <select
            required
            name="favorite"
            value={data.favorite}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select...</option>
            {interest === "Cars" && (
              <>
                <option value="Convertible">Convertible</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Other">Other</option>
              </>
            )}
            {interest === "Music" && (
              <>
                <option value="Folk">Folk</option>
                <option value="Jazz">Jazz</option>
                <option value="Punk">Punk</option>
                <option value="Other">Other</option>
              </>
            )}
            {interest === "Sport" && (
              <>
                <option value="Baseball">Baseball</option>
                <option value="Basketball">Basketball</option>
                <option value="Football">Football</option>
                <option value="Ice Hockey">Ice Hockey</option>
                <option value="Other">Other</option>
              </>
            )}
          </select>
        </div>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={onBack}
            disabled={isDisabled}
            className="form-button back-button"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={isDisabled}
            className="form-button submit-button"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default FormTwo;
