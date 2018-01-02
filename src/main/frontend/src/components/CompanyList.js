import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {companyInfoShort} from './../types';

const propTypes = {
  companyList: PropTypes.arrayOf(companyInfoShort).isRequired,
};


const CompanyList = ({companyList}) => (
  <Table striped bordered condensed>
    <thead>
      <tr>
        <th>#</th>
        <th>Company name</th>
        <th/>
      </tr>
    </thead>
    <tbody>
      {companyList.map((company, index) => (
        <tr key={index}>
          <td>{index+1}</td>
          <td>{company.name}</td>
          <td><Link to={`/company/${company.id}`}>See details</Link></td>
        </tr>))}
    </tbody>
  </Table>
);

CompanyList.propTypes = propTypes;
export default CompanyList;
