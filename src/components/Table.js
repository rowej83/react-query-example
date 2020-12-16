import React from "react";
import axios from "axios";
import { useTable, useSortBy } from "react-table";
/**
 * Table function that uses the react-table component
 * and produces it's desired layout
 * @param {props object being deconstructed to columns, data etc..}
 */
const Table = ({ columns, data, setIsOpen, setSelectedUserID }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

  return (
    <>
      <small className={"sortNotice"}>
        Select a column header to sort by that column.
      </small>
      <table className="minimalistBlack" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔻 "
                        : " 🔺 "
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      onClick={() => {
                        //sets the ID of the selected user which then will trigger the fetching and populating of the users details in the modal
                        setSelectedUserID(row.cells[0].value);
                        //opens the modal.
                        setIsOpen(true);
                      }}
                      {...cell.getCellProps()}
                    >
                      <a className={"linkStyle"}>{cell.render("Cell")}</a>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
