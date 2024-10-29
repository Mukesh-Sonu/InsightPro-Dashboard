import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import useMenuItemHooks from "../hooks/useMenuItemHooks";

const Sidebar = () => {
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
    <div className="sidebar-container">
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
