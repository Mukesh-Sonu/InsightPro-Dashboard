import { useAppContext } from "../../context/appContext";
import { DEFAULT_ICON_SIZE, DEFAULT_ICON_SIZE_SM } from "../common/constants";
import { theme } from "antd";
const { useToken } = theme;

const IconWithColor = ({ icon: Icon, onClick, ...props }) => {
  const { isLgScreen } = useAppContext();
  const { token } = useToken();
  return (
    <Icon
      size={!isLgScreen ? DEFAULT_ICON_SIZE_SM : DEFAULT_ICON_SIZE}
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
