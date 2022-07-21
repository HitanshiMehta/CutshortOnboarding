import { Button } from "../common/Button/Button";
import { SelectBox } from "../common/SelectBox/SelectBox";

export const userType = [
  {
    id: "single",
    image: require("../../assets/images/singleUser.png"),
    title: "For myself",
    description: "Write better. Think more clearly. Stay organized.",
  },
  {
    id: "multiple",
    image: require("../../assets/images/multipleUser.png"),
    title: "With my team",
    description: "Wikis, docs, tasks & projects, all in one place.",
  },
];

export const UserType = ({
  onButtonClick,
  userDetail,
  setUserdetail,
  setErrorMsg,
}) => {
  const handleSelectBoxClick = (type) => {
    setUserdetail((u) => ({
      ...u,
      userType: type,
    }));
    setErrorMsg("");
  };
  return (
    <div className="d-flex-column">
      <SelectBox
        data={userType}
        handleSelectBoxClick={handleSelectBoxClick}
        selection={userDetail?.userType}
      />
      <Button onClick={onButtonClick} buttonTxt="Create Workspace" />
    </div>
  );
};
