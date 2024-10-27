import { Avatar, List, Flex, Steps, Typography, theme } from "antd";
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
const description = "This is a description.";

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

const UtilityPanel = () => {
  const { token } = useToken();
  return (
    <Flex
      className="utility-panel"
      gap="middle"
      style={{
        width: "262px",
        flexDirection: "column",
        paddingTop: "20px",
        padding: 10,
        height: "100vh",
        overflow: "scroll",
      }}
    >
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
            fontSize: "14px",
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
            fontSize: "14px",
          }}
        >
          Activities
        </Title>
        <Steps
          direction="vertical"
          current={4}
          items={[
            {
              title: (
                <Paragraph
                  style={{
                    marginBottom: 0,
                  }}
                >
                  You have a bug that needs to be fixed.
                </Paragraph>
              ),
              description,
              icon: (
                <Avatar
                  size={26}
                  src={`https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp`}
                />
              ),
            },
            {
              title: (
                <Paragraph
                  style={{
                    marginBottom: 0,
                  }}
                >
                  You have a bug that needs to be fixed.
                </Paragraph>
              ),
              description,
              icon: (
                <Avatar
                  size={26}
                  src={`https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp`}
                />
              ),
            },
            {
              title: (
                <Paragraph
                  style={{
                    marginBottom: 0,
                  }}
                >
                  You have a bug that needs to be fixed.
                </Paragraph>
              ),
              description,
              icon: (
                <Avatar
                  size={26}
                  src={`https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp`}
                />
              ),
            },
            {
              title: (
                <Paragraph
                  style={{
                    marginBottom: 0,
                  }}
                >
                  You have a bug that needs to be fixed.
                </Paragraph>
              ),
              description,
              icon: (
                <Avatar
                  size={26}
                  src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png`}
                />
              ),
            },
          ]}
        />
      </Flex>
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
            fontSize: "14px",
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
    </Flex>
  );
};

export default UtilityPanel;
