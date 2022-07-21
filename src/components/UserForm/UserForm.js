import React from "react";
import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";

export const UserForm = ({ userDetail, handleChange, onButtonClick }) => {
  return (
    <div className="d-flex-column">
      <Input
        placeholder="Steve jobs"
        label="Full Name"
        name="fullName"
        value={userDetail?.fullName}
        handleChange={handleChange}
      />
      <Input
        placeholder="Steve jobs"
        label="Display Name"
        name="displayName"
        value={userDetail?.displayName}
        handleChange={handleChange}
      />
      <Button onClick={onButtonClick} buttonTxt="Create Workspace" />
    </div>
  );
};
