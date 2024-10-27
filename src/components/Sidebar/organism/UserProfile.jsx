import { Avatar, Space, theme } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { useToken } = theme;

const UserProfile = () => {
  const { token } = useToken();

  return (
    <div>
      <Space
        size="small"
        style={{
          marginTop: "20px",
        }}
      >
        <Avatar icon={<UserOutlined />} size={24} />
        <p
          style={{
            color: token.colorTextHeading,
          }}
        >
          Mukesh
        </p>
      </Space>
    </div>
  );
};

export default UserProfile;
