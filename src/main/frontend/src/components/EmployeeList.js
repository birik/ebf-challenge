import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import {employee} from './../types';

const propTypes = {
  employeeList: PropTypes.arrayOf(employee).isRequired,
  editEmployee: PropTypes.func.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};

const EmployeeList = ({employeeList, editEmployee, deleteEmployee}) => (
  <Table striped bordered condensed>
    <thead>
      <tr>
        <th>#</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Address</th>
        <th>Salary</th>
        <th/>
      </tr>
    </thead>
    <tbody>
      {employeeList.map((employee, index) => (
        <tr key={index}>
          <td>{index+1}</td>
          <td>{employee.surname}</td>
          <td>{employee.email}</td>
          <td>{employee.address}</td>
          <td>{employee.salary}</td>
          <td>
            <a role="button" onClick={editEmployee.bind(this, employee.id)}>Edit</a>
            <a role="button" onClick={deleteEmployee.bind(this, employee.id)}>Delete</a>
          </td>
        </tr>))}
    </tbody>
  </Table>
);

EmployeeList.propTypes = propTypes;
export default EmployeeList;
