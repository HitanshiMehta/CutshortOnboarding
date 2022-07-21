import Complete from "../../assets/images/complete.png";
import { Button } from "../common/Button/Button";
import { PageHeader } from "../PageHeader/PageHeader";
import "./Congratulations.scss";

export const Congratulations = () => {
  return (
    <>
      <img src={Complete} className="congratulations-img" alt="congratulation"/>
      <PageHeader activePage={4} className="c-page-header" />
      <Button buttonTxt="Launch Eden" />
    </>
  );
};
