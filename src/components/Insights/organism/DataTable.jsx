import { Table } from "antd";
import Text from "../../common/Text";
import { getTableStyles } from "./DataTableStyles";
import { theme } from "antd";
import { useAppContext } from "../../../context/appContext";
const { useToken } = theme;
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
];
const data = [
  {
    key: "1",
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: "82",
    amount: "$6,518.18",
  },
  {
    key: "2",
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: "37",
    amount: "$4,754.50",
  },
  {
    key: "3",
    name: "Half Sleeve  Shirts",
    price: "$39.99",
    quantity: "64",
    amount: "$2,559.36",
  },
  {
    key: "4",
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: "184",
    amount: "$3,680.00",
  },
  {
    key: "5",
    name: "Marco Shoes",
    price: "$79.49",
    quantity: "64",
    amount: "$1,965.81",
  },
];
const DataTable = () => {
  const { token } = useToken();
  return (
    <div className="insight-table">
      <Text
        text="Top Selling Products"
        fontWeight="bold"
        textAlign="left"
        padding="14px"
        paddingTop="18px"
        background={token.colorInfoBg}
      />

      <style>{getTableStyles(token)}</style>
      <Table
        columns={columns}
        dataSource={data}
        size="middle"
        pagination={false}
        rowHoverable={false}
      />
    </div>
  );
};
export default DataTable;
