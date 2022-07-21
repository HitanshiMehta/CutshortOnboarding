import "./Button.scss";

export const Button = ({ buttonTxt, onClick }) => {
  return (
    <button className="common-button" onClick={onClick}>
      {buttonTxt}
    </button>
  );
};
