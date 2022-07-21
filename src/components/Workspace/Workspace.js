import React from "react";
import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";
import "./Workspace.scss";

export const Workspace = ({ userDetail, handleChange, onButtonClick }) => {
  return (
    <div>
      <Input
        placeholder="Eden"
        label="Workspace Name"
        name="workspaceName"
        value={userDetail?.workspaceName}
        handleChange={handleChange}
      />
      <Input
        placeholder="Example"
        label="Workspace URL"
        sublabel="(optional)"
        name="workspaceUrl"
        value={userDetail?.workspaceUrl}
        handleChange={handleChange}
        urlMsg="www.eden.com/"
      />
      <Button onClick={onButtonClick} buttonTxt="Create Workspace" />
    </div>
  );
};
