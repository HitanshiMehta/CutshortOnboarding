import { PageHeaderTitle } from "../../utils/commonConstant";
import "./PageHeader.scss";

export const PageHeader = ({ activePage, className }) => {
  return (
    <div className={`d-flex-column ${className}`}>
      <div className="page-header-title">
        {PageHeaderTitle[activePage]?.title}
      </div>
      <div className="page-header-subtitle d-flex">
        {PageHeaderTitle[activePage]?.subtitle}
      </div>
    </div>
  );
};
