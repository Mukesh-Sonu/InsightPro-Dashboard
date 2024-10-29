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
    <div
      className="sidebar-container"
      style={{
        backgroundColor: token.colorBgBase,
      }}
    >
      <Menu
        onClick={onClick}
        onOpenChange={handleOpenChange}
        openKeys={openKeys}
        defaultSelectedKeys={["default"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default Sidebar;
