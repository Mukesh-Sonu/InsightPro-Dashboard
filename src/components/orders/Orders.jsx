import { useState } from "react";
import { Avatar, Flex, Space, Table } from "antd";
import { userProfile } from "./userProfile";
import { theme } from "antd";

const { useToken } = theme;
const BASE_ORDER_ID = 9800;
const DEFAULT_IMG = "https://avatars.githubusercontent.com/u/28616219?s=40&v=4";
const DEFAULT_NAME = "Mukesh";

const STATUS = {
  1: {
    color: "#8A8CD9",
    text: "In Progress",
  },
  2: {
    color: "#FFC555",
    text: "Approved",
  },
  3: {
    color: "#A4A4A4",
    text: "Rejected",
  },
  4: {
    color: "#4AA785",
    text: "Complete",
  },
  5: {
    color: "#59A8D4",
    text: "Pending",
  },
};

const columns = [
  {
    title: "Order ID",
    dataIndex: "orderId",
  },
  {
    title: "User",
    dataIndex: "user",
    render: (user) => {
      return (
        <Space>
          <Avatar src={user?.url ?? DEFAULT_IMG} />
          <p>{user?.username ?? DEFAULT_NAME}</p>
        </Space>
      );
    },
  },
  {
    title: "Project",
    dataIndex: "project",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => {
      const currentStatus = STATUS[status];
      return (
        <Space>
          <span
            className="dot"
            style={{
              background: currentStatus.color,
            }}
          ></span>
          <p>{currentStatus.text}</p>
        </Space>
      );
    },
  },
];

const dataSource = Array.from({
  length: 46,
}).map((_, i) => {
  const user = userProfile[Math.floor(Math.random() * 100)];

  return {
    key: i,
    orderId: `$CM${BASE_ORDER_ID + i}`,
    user: user,
    project: user.project,
    date: user.date,
    address: `London, Park Lane no. ${i}`,
    status: user.status,
  };
});

const Orders = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Flex vertical>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
        size="small"
        scroll={{ x: "max-content" }}
      />
    </Flex>
  );
};
export default Orders;
