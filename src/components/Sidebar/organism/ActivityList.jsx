import { Space, theme, Flex } from "antd";
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
      <Flex
        vertical
        key={index}
        style={{
          marginTop: 5,
        }}
      >
        <Space>
          <span
            className="dot"
            style={{
              background: token.colorSecondary,
            }}
          ></span>
          <span
            style={{
              color: token.colorTextHeading,
            }}
          >
            {item}
          </span>
        </Space>
      </Flex>
    ));
  };

  return (
    <>
      <Space size="middle">
        <p
          onClick={() => setActiveTab("favorite")}
          style={{
            color:
              activeTab !== "favorite"
                ? token.textDisabled
                : token.colorSecondary,
            cursor: "pointer",
          }}
        >
          Favorites
        </p>
        <p
          onClick={() => setActiveTab("recent")}
          style={{
            color:
              activeTab !== "recent"
                ? token.textDisabled
                : token.colorSecondary,
            cursor: "pointer",
          }}
        >
          Recent
        </p>
      </Space>
      <div className="favorite-recent-list">{renderListItems(activeTab)}</div>
    </>
  );
};

export default ActivityList;
