import React from "react";
import { NavLink } from "react-router-dom";
import { useTable } from "react-table";
import { useSelector } from "react-redux"; 
import '../employees.css';

const EmployeeList = () => {
    const employees = useSelector((state) => state.employees);
    const formattedEmployees = employees.map(emp => {
        const dateOfBirth = emp.dateOfBirth ? new Date(emp.dateOfBirth) : '';
        const startDate = emp.startDate ? new Date(emp.startDate) : '';

        
        const dateOfBirthFormatted = dateOfBirth 
            ? new Date(dateOfBirth).toISOString().split('T')[0] // 'YYYY-MM-DD'
            : '';

        const startDateFormatted = startDate 
            ? new Date(startDate).toISOString().split('T')[0] // 'YYYY-MM-DD'
            : '';

        return {
            ...emp,
            dateOfBirth: dateOfBirthFormatted,
            startDate: startDateFormatted,
        };
    });

    const data = React.useMemo(() => formattedEmployees, [formattedEmployees]);

    const columns = React.useMemo(
        () => [
            { Header: "First Name", accessor: "firstName" },
            { Header: "Last Name", accessor: "lastName" },
            { Header: "Start Date", accessor: "startDate" },
            { Header: "Department", accessor: "department" },
            { Header: "Date of Birth", accessor: "dateOfBirth" },
            { Header: "Street", accessor: "street" },
            { Header: "City", accessor: "city" },
            { Header: "State", accessor: "state" },
            { Header: "Zip Code", accessor: "zipCode" },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <div className="employee-list-container">
            <h1 className="employee-list-title">Current Employees</h1>

            <div className="table-container">
                <table
                    {...getTableProps()}
                    className="employee-table"
                    role="table"
                    aria-label="Employee List"
                >
                    <thead className="table-header">
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id} role="row">
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps()}
                                        key={column.id}
                                        className="header-cell"
                                        role="columnheader"
                                        scope="col"
                                    >
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody {...getTableBodyProps()}>
                        {rows.length > 0 ? (
                            rows.map((row, index) => {
                                prepareRow(row);
                                return (
                                    <tr
                                        {...row.getRowProps()}
                                        key={row.original.firstName + row.original.lastName + row.original.startDate}
                                        className={`table-row ${index % 2 === 0 ? "" : "bg-gray-50"}`}
                                        role="row"
                                    >
                                        {row.cells.map(cell => (
                                            <td
                                                {...cell.getCellProps()}
                                                key={cell.column.id}
                                                className="body-cell"
                                                role="cell"
                                            >
                                                {cell.render("Cell")}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="empty-state"
                                >
                                    No employees found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div>
                <NavLink
                    to="/"
                    className="back-link"
                >
                    Go back to Home
                </NavLink>
            </div>
        </div>
    );
};

export default EmployeeList;
