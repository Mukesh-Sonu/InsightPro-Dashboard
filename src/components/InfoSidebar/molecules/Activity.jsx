import { Avatar, Flex, Steps, Typography } from "antd";
const { Paragraph, Title } = Typography;

const Activity = () => {
  // Define a reusable function for creating step items
  const createStepItem = (text, imgSrc, description) => ({
    title: (
      <Paragraph
        ellipsis={{ tooltip: text }}
        style={{
          marginBottom: 0,
        }}
      >
        {text}
      </Paragraph>
    ),
    description,
    icon: <Avatar size={26} src={imgSrc} />,
  });

  // List of step items for easier reuse and readability
  const activityItems = [
    createStepItem(
      "You have a bug that needs to be fixed.",
      "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
      "Just now"
    ),
    createStepItem(
      "You have a bug that needs to be fixed.",
      "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
      "59 minutes ago"
    ),
    createStepItem(
      "You have a bug that needs to be fixed.",
      "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
      "12 hours ago"
    ),
    createStepItem(
      "You have a bug that needs to be fixed.",
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      "Today, 11.59 AM"
    ),
  ];

  return (
    <Flex gap="small" style={{ flexDirection: "column" }}>
      <Title
        strong
        style={{
          paddingLeft: "8px",
          fontSize: "16px",
          paddingBottom: "8px",
          marginRight: 10,
        }}
      >
        Activities
      </Title>
      <Steps
        className="stepper"
        direction="vertical"
        size="small"
        current={4}
        items={activityItems}
      />
    </Flex>
  );
};

export default Activity;
