import React, { Component } from "react";

const Input = ({ label,type, id, name, onChange,errors }) => {
  return (
    <>
      <label htmlFor= {id} className="form-label">
        { label }
      </label>
      <input
        type={ type }
        className="form-control"
        id={ id }
        name={ name }
        onChange={ onChange }
      />
      { errors[name] && <span style={{color:'red'}}>{errors[name]} </span> }
    </>
  );
};

export default Input;
