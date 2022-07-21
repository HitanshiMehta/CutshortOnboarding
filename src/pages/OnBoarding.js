import React from "react";
import { Pagination } from "../components/common/Pagination/Pagination";
import { Content } from "../components/Content/Content";
import { CommonHeader } from "../components/Header/Header";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { PageFormColumns, PageFormErrors } from "../utils/commonConstant";

export const OnBoarding = () => {
  const [page, setPage] = React.useState(1);

  const [userDetail, setUserdetail] = React.useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
    userType: "",
  });
  const [errorMsg, setErrorMsg] = React.useState("");

  const handlePageChange = (e, pageNumber) => {
    const columns = PageFormColumns[page];
    let error = false;
    columns.forEach((c) => {
      if (!userDetail[c]) {
        error = true;
      }
    });
    if (!error) {
      const p = pageNumber ? pageNumber : page + 1;
      setPage(p);
    } else {
      setErrorMsg(PageFormErrors[page]);
    }
  };

  return (
    <div>
      <CommonHeader />
      <Pagination
        paginationCount={4}
        activePage={page}
        handlePageChange={handlePageChange}
      />
      {page !== 4 && <PageHeader activePage={page} />}
      <Content
        activePage={page}
        userDetail={userDetail}
        setUserdetail={setUserdetail}
        handlePageChange={handlePageChange}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      />
    </div>
  );
};
