import "./SelectBox.scss";

export const SelectBox = ({ data, selection, handleSelectBoxClick }) => {
  return (
    <div className="select-box-container">
      {data.map((user) => {
        return (
          <div
            className={`select-box ${
              selection === user.id ? "selecte-box" : ""
            }`}
            onClick={() => handleSelectBoxClick(user.id)}
          >
            <img src={user.image} className="select-box-user" alt="user"/>
            <div className="select-title">{user.title}</div>
            <div className="select-desc">{user.description}</div>
          </div>
        );
      })}
    </div>
  );
};
