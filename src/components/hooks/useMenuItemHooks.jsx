import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Flex, theme } from "antd";
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
import UserProfile from "../sidebar/organism/UserProfile";
import ActivityList from "../sidebar/organism/ActivityList";
import ThemeIcon from "../common/IconWrapper";
import Text from "../common/Text";
const { useToken } = theme;

const icons = {
  "shopping-bag": (props) => <ThemeIcon icon={PiShoppingBagOpen} {...props} />,
  "book-open": (props) => <ThemeIcon icon={PiBookOpen} {...props} />,
  "arrow-right": (props) => (
    <ThemeIcon icon={MdKeyboardArrowRight} {...props} />
  ),
  user: (props) => <ThemeIcon icon={PiUserSquareDuotone} {...props} />,
  folder: (props) => <ThemeIcon icon={PiFolder} {...props} />,
  "identification-card": (props) => (
    <ThemeIcon icon={PiIdentificationCardDuotone} {...props} />
  ),
  note: (props) => <ThemeIcon icon={PiNotebook} {...props} />,
  users: (props) => <ThemeIcon icon={PiUsersThree} {...props} />,
  chat: (props) => <ThemeIcon icon={PiChatsTeardrop} {...props} />,
};

const useMenuItemHooks = () => {
  const { token } = useToken();
  const [openKeys, setOpenKeys] = useState([]);
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
        {icons[icon] && icons[icon]()}
        <Text text={text} />
      </Flex>
    );
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
          label: <Text text="Default" />,
          icon: (
            <PiChartPieSliceDuotone size={20} color={token.colorTextHeading} />
          ),
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
              key: "projects-pages",
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

  return {
    items,
    openKeys,
    setOpenKeys,
  };
};

export default useMenuItemHooks;
