import { DEFAULT_ICON_SIZE } from "../common/constants";
import { theme } from "antd";
const { useToken } = theme;

const IconWithColor = ({ icon: Icon, onClick, ...props }) => {
  const { token } = useToken();
  return (
    <Icon
      size={DEFAULT_ICON_SIZE}
      style={{
        color: token.colorTextHeading,
        cursor: onClick ? "pointer" : "default",
        ...props,
      }}
      onClick={onClick}
    />
  );
};

export default IconWithColor;
