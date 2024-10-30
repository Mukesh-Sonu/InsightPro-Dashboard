import { Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import useMenuItemHooks from "../hooks/useMenuItemHooks";
const { useToken } = theme;

const Sidebar = () => {
  const { token } = useToken();
  const { items, openKeys, setOpenKeys } = useMenuItemHooks();
  const navigate = useNavigate();
  const onClick = (e) => {
    if (e.key === "default") {
      navigate("/");
    }
  };
  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <Menu
      style={{
        height: "100vh",
        overflowY: "scroll",
      }}
      onClick={onClick}
      onOpenChange={handleOpenChange}
      openKeys={openKeys}
      defaultSelectedKeys={["default"]}
      mode="inline"
      items={items}
    />
  );
};

export default Sidebar;
