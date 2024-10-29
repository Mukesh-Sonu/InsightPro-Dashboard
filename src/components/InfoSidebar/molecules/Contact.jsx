import { Avatar, List, Flex, Typography } from "antd";
const { Paragraph, Title } = Typography;

const ContactsData = [
  {
    title: "Natali Craig",
  },
  {
    title: "Drew Cano",
  },
  {
    title: "Orlando Diggs",
  },
  {
    title: "Andi Lane",
  },
  {
    title: "Kate Morrison",
  },
  {
    title: "Koray Okumus",
  },
];

const Contact = () => {
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
          paddingBottom: "8px",
          fontSize: "16px",
        }}
      >
        Contacts
      </Title>

      <List
        itemLayout="horizontal"
        dataSource={ContactsData}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              style={{
                alignItems: "center",
              }}
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
            />
          </List.Item>
        )}
      />
    </Flex>
  );
};

export default Contact;
