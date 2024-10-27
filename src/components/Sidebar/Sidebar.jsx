import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Flex, Menu } from "antd";
import {
  PiShoppingBagOpen,
  PiBookOpen,
  PiUserSquareDuotone,
  PiIdentificationCardDuotone,
  PiNotebook,
  PiUsersThree,
  PiFolder,
  PiChatsTeardrop,
  PiChartPieSliceDuotone,
} from "react-icons/pi";
import UserProfile from "./organism/UserProfile";
import ActivityList from "./organism/ActivityList";

const icons = {
  "shopping-bag": (props) => <PiShoppingBagOpen {...props} />,
  "book-open": (props) => <PiBookOpen {...props} />,
  "arrow-right": (props) => <MdKeyboardArrowRight {...props} />,
  user: (props) => <PiUserSquareDuotone {...props} />,
  folder: (props) => <PiFolder {...props} />,
  "identification-card": (props) => <PiIdentificationCardDuotone {...props} />,
  note: (props) => <PiNotebook {...props} />,
  users: (props) => <PiUsersThree {...props} />,
  chat: (props) => <PiChatsTeardrop {...props} />,
};

const siderStyle = {
  overflow: "auto",
  // height: "100vh",
  // position: "fixed",
  width: "200px",
  // insetInlineStart: 0,
  // top: 0,
  // bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
  background: "transparent",
};
const getItem = (icon, text, arrowRotation = true) => {
  return (
    <Flex
      style={{
        width: "100%",
      }}
      gap={4}
      align="center"
      width="100%"
    >
      <MdKeyboardArrowRight
        size={20}
        style={{
          transform: `rotate(${arrowRotation}deg)`,
          transition: "transform 0.1s ease",
        }}
      />
      {icons[icon] && icons[icon]({ size: 20 })}
      <p>{text}</p>
    </Flex>
  );
};

const Sidebar = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };

  const [openKeys, setOpenKeys] = useState([]);

  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  const isOpen = (key) => (openKeys.includes(key) ? 90 : 0);

  const items = [
    {
      key: "user-profile-photo",
      label: <UserProfile />,
      type: "group",
    },
    {
      key: "activity",
      label: <ActivityList />,
      type: "group",
    },
    {
      key: "dashboards",
      label: "Dashboards",
      type: "group",
      children: [
        {
          key: "20",
          label: "Overview",
          icon: <PiChartPieSliceDuotone size={20} />,
        },
        {
          key: "ecommerce",
          label: getItem("shopping-bag", "eCommerce", isOpen("ecommerce")),
          children: [
            {
              key: "1",
              label: "Option 1",
            },
            {
              key: "2",
              label: "Option 2",
            },
          ],
        },
        {
          key: "projects",
          label: getItem("folder", "Projects", isOpen("projects")),
          children: [
            {
              key: "3",
              label: "Option 3",
            },
            {
              key: "4",
              label: "Option 4",
            },
          ],
        },
        {
          key: "online-courses",
          label: getItem(
            "book-open",
            "Online Courses",
            isOpen("online-courses")
          ),
          children: [
            {
              key: "5",
              label: "Option 3",
            },
            {
              key: "6",
              label: "Option 4",
            },
          ],
        },
      ],
    },
    {
      key: "pages",
      label: "Pages",
      type: "group",
      children: [
        {
          key: "user-profile",
          label: getItem("user", "User Profile", isOpen("user-profile")),
          children: [
            {
              key: "7",
              label: "Overview",
            },
            {
              key: "8",
              label: "Projects",
            },
            {
              key: "9",
              label: "Campaigns",
            },
            {
              key: "10",
              label: "Documents",
            },
            {
              key: "11",
              label: "Followers",
            },
          ],
        },
        {
          key: "account",
          label: getItem("identification-card", "Account", isOpen("account")),
          children: [
            {
              key: "12",
              label: "Option 3",
            },
            {
              key: "13",
              label: "Option 4",
            },
          ],
        },
        {
          key: "corporate",
          label: getItem("users", "Corporate", isOpen("corporate")),
          children: [
            {
              key: "14",
              label: "Option 3",
            },
            {
              key: "15",
              label: "Option 4",
            },
          ],
        },
        {
          key: "blog",
          label: getItem("note", "Blog", isOpen("blog")),
          children: [
            {
              key: "16",
              label: "Option 3",
            },
            {
              key: "17",
              label: "Option 4",
            },
          ],
        },
        {
          key: "social",
          label: getItem("chat", "Social", isOpen("social")),
          children: [
            {
              key: "18",
              label: "Option 3",
            },
            {
              key: "19",
              label: "Option 4",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div style={siderStyle}>
      <Menu
        onClick={onClick}
        onOpenChange={handleOpenChange}
        openKeys={openKeys}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default Sidebar;
