import { Avatar, Flex, Steps, Typography } from "antd";
const { Paragraph, Title } = Typography;

const Activity = () => {
  const description = "This is a description.";

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
  );
};

export default Activity;
