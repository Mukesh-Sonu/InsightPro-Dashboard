import { Avatar, List, Flex, Typography } from "antd";
const { Paragraph, Title } = Typography;

const ContactsData = [
  {
    title: "Natali Craig",
    img: "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
  },
  {
    title: "Drew Cano",
    img: "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
  },
  {
    title: "Orlando Diggs",
    img: "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
  },
  {
    title: "Andi Lane",
    img: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    title: "Kate Morrison",
    img: "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
  },
  {
    title: "Koray Okumus",
    img: "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
  },
];

const Contact = () => {
  return (
    <Flex gap="small" vertical justify="center">
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
                marginBottom: 8,
              }}
              avatar={<Avatar src={item.img} size={25} />}
              title={
                <Paragraph
                  ellipsis={{ tooltip: item.title }}
                  style={{
                    marginBottom: 1,
                    marginLeft: 4,
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
