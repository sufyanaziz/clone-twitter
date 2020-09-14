import React, { useEffect, useState, useRef } from "react";
import "./FieldInput.css";

import Card from "../Card/Card";

import SufyanImage from "../../images/sufyan_profile.jpg";
import Button from "../Button/Button";

const FieldInput = ({ ref, onChange }) => {
  const inputRef = useRef(null);
  const [currentValue, setCurrentValue] = useState("");

  useEffect(() => {
    inputRef.current.style.height = "10px";
    const scrollHeight = inputRef.current.scrollHeight;
    inputRef.current.style.height = scrollHeight + "px";
    inputRef.current.style.overflow = "auto";
    inputRef.current.style.maxHeight = "392px";
  }, [currentValue]);

  const handleChange = (e) => {
    setCurrentValue(e.target.value);
  };

  return (
    <Card image={SufyanImage} type="input">
      <div className="input">
        <textarea
          placeholder="What's happening"
          ref={inputRef}
          value={currentValue}
          onChange={handleChange}
        />
        <hr />
        <div className="action">
          <Button type="fill" text="Tweet" disabled />
        </div>
      </div>
    </Card>
  );
};

export default FieldInput;
