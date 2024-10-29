import { theme } from "antd";
const { useToken } = theme;

const Text = ({ text, ...props }) => {
  const { token } = useToken();
  return (
    <p
      style={{
        color: token.colorTextHeading,
        ...props,
      }}
    >
      {text}
    </p>
  );
};

export default Text;
