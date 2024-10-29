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
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const onClick = (e) => {
    if (e.key === "default") {
      navigate("/");
    }
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
          key: "default",
          label: "Default",
          icon: <PiChartPieSliceDuotone size={20} />,
        },
        {
          key: "ecommerce",
          label: getItem("shopping-bag", "eCommerce", isOpen("ecommerce")),
          children: [
            {
              key: "category",
              label: "Category",
            },
            {
              key: "tag",
              label: "Tag",
            },
          ],
        },
        {
          key: "projects",
          label: getItem("folder", "Projects", isOpen("projects")),
          children: [
            {
              key: "website-builder",
              label: "Website Builder",
            },
            {
              key: "cta",
              label: "CTA",
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
              key: "gmat",
              label: "GMAT",
            },
            {
              key: "cat",
              label: "CAT",
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
              key: "overview",
              label: "Overview",
            },
            {
              key: "projects",
              label: "Projects",
            },
            {
              key: "campaigns",
              label: "Campaigns",
            },
            {
              key: "documnets",
              label: "Documents",
            },
            {
              key: "followers",
              label: "Followers",
            },
          ],
        },
        {
          key: "account",
          label: getItem("identification-card", "Account", isOpen("account")),
          children: [
            {
              key: "guest",
              label: "Guest",
            },
            {
              key: "user",
              label: "User",
            },
          ],
        },
        {
          key: "corporate",
          label: getItem("users", "Corporate", isOpen("corporate")),
          children: [
            {
              key: "graphy",
              label: "Graphy",
            },
            {
              key: "Physics Wala",
              label: "Physics Wala",
            },
          ],
        },
        {
          key: "blog",
          label: getItem("note", "Blog", isOpen("blog")),
          children: [
            {
              key: "medium",
              label: "Medium",
            },
            {
              key: "reddit",
              label: "Reddit",
            },
          ],
        },
        {
          key: "social",
          label: getItem("chat", "Social", isOpen("social")),
          children: [
            {
              key: "youtube",
              label: "You Tube",
            },
            {
              key: "telegram",
              label: "Telegram",
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
        defaultSelectedKeys={["default"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default Sidebar;
