import { Avatar, List, Flex, Typography, theme } from "antd";
const { Paragraph, Title } = Typography;
const { useToken } = theme;
import { PiUser } from "react-icons/pi";
import { PiBugBeetle } from "react-icons/pi";
import { FiRadio } from "react-icons/fi";

const ICON_SIZE = 16;

const Notification = () => {
  const { token } = useToken();

  const data = [
    {
      title: "You have a bug that needs to be fixed.",
      description: "Just now",
      icon: <PiBugBeetle size={ICON_SIZE} />,
      color: token?.avatarColors?.primary,
    },
    {
      title: "New user registered",
      description: "59 minutes ago",
      icon: <PiUser size={ICON_SIZE} />,
      color: token?.avatarColors?.secondary,
    },
    {
      title: "You have a bug that needs to be fixed.",
      description: "12 hours ago",
      icon: <PiBugBeetle size={ICON_SIZE} />,
      color: token?.avatarColors?.primary,
    },
    {
      title: "Andi Lane subscribed to you",
      description: "Today, 11:59 AM",
      icon: <FiRadio size={ICON_SIZE} />,
      color: token?.avatarColors?.secondary,
    },
  ];

  return (
    <Flex
      gap="small"
      style={{
        flexDirection: "column",
      }}
    >
      <Title
        strong
        style={{
          paddingLeft: "8px",
          fontSize: "16px",
          paddingBottom: "8px",
        }}
      >
        Notifications
      </Title>

      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  shape="square"
                  size="small"
                  icon={item.icon}
                  style={{
                    backgroundColor: item.color,
                    color: token.defaultPrimaryTextHeading,
                    borderRadius: 8,
                  }}
                />
              }
              title={
                <Paragraph
                  ellipsis={{ tooltip: item.title }}
                  style={{
                    marginBottom: -3,
                    fontWeight: "normal",
                  }}
                >
                  {item.title}
                </Paragraph>
              }
              description={
                <Paragraph
                  style={{
                    color: token.colorSecondary,
                    marginBottom: 8,
                    marginLeft: 2,
                  }}
                >
                  {item?.description}
                </Paragraph>
              }
            />
          </List.Item>
        )}
      />
    </Flex>
  );
};

export default Notification;
