import { Avatar, List, Flex, Typography, theme } from "antd";
const { Paragraph, Title } = Typography;
const { useToken } = theme;

const data = [
  {
    title: "You have a bug that needs to be fixed.",
    description: "Just now",
  },
  {
    title: "New user registered",
    description: "59 minutes ago",
  },
  {
    title: "You have a bug that needs to be fixed.",
    description: "12 hours ago",
  },
  {
    title: "Andi Lane subscribed to you",
    description: "Today, 11:59 AM",
  },
];

const Notification = () => {
  const { token } = useToken();
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
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={
                <Paragraph
                  ellipsis={{ tooltip: item.title }}
                  style={{
                    marginBottom: 0,
                    fontWeight: "normal",
                  }}
                >
                  {item.title}
                </Paragraph>
              }
              description={
                <Paragraph
                  style={{
                    color: token.colorTextDisabled,
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
