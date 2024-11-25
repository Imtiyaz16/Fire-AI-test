import React, { useEffect, useState } from "react";
import { useTable, useSortBy } from "react-table";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, filterDataByDays } from "../../redux/dataSlice";
import styles from "./OrderHistory.module.css";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.filteredOrderHistory); // Filtered data
  const [tableData, setTableData] = useState([]);
  const [filterDays, setFilterDays] = useState(30); // Default filter to 30 days

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterDataByDays(filterDays));
  }, [dispatch, filterDays]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleFilterChange = (e) => {
    setFilterDays(parseInt(e.target.value, 10));
  };

  const columns = React.useMemo(
    () => [
      { Header: "Symbol", accessor: "symbol" },
      { Header: "Type", accessor: "type" },
      { Header: "Open Date", accessor: "openDate" },
      { Header: "Open Price", accessor: "openPrice" },
      { Header: "Close Date", accessor: "closeDate" },
      { Header: "Close Price", accessor: "closePrice" },
      { Header: "Lots", accessor: "lots" },
      { Header: "Profit", accessor: "profit" },
      { Header: "Duration", accessor: "duration" },
      { Header: "Gain", accessor: "gain" }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: tableData }, useSortBy);

  return (
    <div className={styles.orderHistory}>
      <div className={styles.header}>
        <h2>Order History</h2>
        <div className={styles.actions}>
          <button className={styles.button}>Open Trades</button>
          <button className={styles.button}>Close Trades</button>
          <select
            value={filterDays}
            onChange={handleFilterChange}
            className={styles.filterSelect}
          >
            <option value={30}>Last 30 Days</option>
            <option value={60}>Last 60 Days</option>
            <option value={90}>Last 90 Days</option>
          </select>
        </div>
      </div>

      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className={styles.headerRow}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={`${styles.headerCell} ${
                    column.isSorted ? (column.isSortedDesc ? styles.desc : styles.asc) : ""
                  }`}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className={styles.body}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={styles.row}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className={styles.cell}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;

