import { Space, theme } from "antd";
import { useState } from "react";
const { useToken } = theme;

const ActivityList = () => {
  const { token } = useToken();
  const [activeTab, setActiveTab] = useState("favorite");
  const [favorites] = useState(["Overview", "Users"]);
  const [recents] = useState(["Dashboard", "Overview"]);

  const renderListItems = (activeTab) => {
    let renderList = activeTab === "favorite" ? favorites : recents;
    return renderList.map((item, index) => (
      <li
        style={{
          color: token.colorTextHeading,
        }}
        key={index}
      >
        {item}
      </li>
    ));
  };

  return (
    <>
      <Space size="middle">
        <p
          onClick={() => setActiveTab("favorite")}
          style={{
            color: activeTab !== "favorite" ? token.colorTextDisabled : "",
            cursor: "pointer",
          }}
        >
          Favorites
        </p>
        <p
          onClick={() => setActiveTab("recent")}
          style={{
            color: activeTab !== "recent" ? token.colorTextDisabled : "",
            cursor: "pointer",
          }}
        >
          Recent
        </p>
      </Space>
      <div className="favorite-recent-list">
        <ul>{renderListItems(activeTab)}</ul>
      </div>
    </>
  );
};

export default ActivityList;
