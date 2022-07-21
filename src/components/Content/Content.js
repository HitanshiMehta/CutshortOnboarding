import React from "react";
import { UserType } from "../UserType/UserType";
import { UserForm } from "../UserForm/UserForm";
import { Workspace } from "../Workspace/Workspace";
import "./Content.scss";
import { Congratulations } from "../Congratulations/Congratulations";

export const Content = ({
  activePage,
  setUserdetail,
  userDetail,
  handlePageChange,
  errorMsg,
  setErrorMsg,
}) => {
  const handleChange = (e) => {
    setUserdetail((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
    setErrorMsg("");
  };

  return (
    <div className="d-flex-column">
      {activePage === 1 && (
        <UserForm
          userDetail={userDetail}
          onButtonClick={handlePageChange}
          handleChange={handleChange}
        />
      )}
      {activePage === 2 && (
        <Workspace
          userDetail={userDetail}
          onButtonClick={handlePageChange}
          handleChange={handleChange}
        />
      )}
      {activePage === 3 && (
        <UserType
          onButtonClick={handlePageChange}
          userDetail={userDetail}
          setUserdetail={setUserdetail}
          setErrorMsg={setErrorMsg}
        />
      )}
      {activePage === 4 && <Congratulations />}
      {errorMsg && <div className="content-error-msg">* {errorMsg}</div>}
    </div>
  );
};
