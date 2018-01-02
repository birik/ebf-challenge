import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Alert, Modal, Button } from 'react-bootstrap';

import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';
import {companyInfo, employee} from './../types';
import { requestCompanyInfo } from './../actions/companyActions';
import { requestEmployeeList, addEmployee, updateEmployee, deleteEmployee } from './../actions/employeeActions';


const propTypes = {
  companyId: PropTypes.number.isRequired,
  companyInfo: companyInfo,
  employeeList: PropTypes.arrayOf(employee),
  error: PropTypes.string,
};

export class CompanyDetailPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      employeeDetail: null,
    };
  }
  
  componentDidMount() {
    this.props.requestCompanyInfo(this.props.companyId);
    this.props.requestEmployeeList(this.props.companyId);
  }
  
  handleCreateEmployee = () => {
    const { companyInfo } = this.props;
    const newEmployee = {
      surname: '',
      email: '',
      address: '',
      salary: 0.0,
      companyId: companyInfo.id,
    };
    this.setState({
      showModal: true,
      employeeDetail: newEmployee
    });
  }
  
  handleEditEmployee = (employeeId) => {
    const {employeeList} = this.props;
    const editEmployee = employeeList.find(emp => emp.id === employeeId);
    this.setState({
      showModal: true,
      employeeDetail: editEmployee
    });
  }
  
  handleDeleteEmployee = (employeeId) => {
    this.props.deleteEmployee(this.props.companyId, employeeId);
  }
  
  handleModalClose = () => {
    this.setState({
      showModal: false,
      employeeDetail: null,
    });
  }
  
  handleEmployeeFormSubmit = (employeeDetail) => {
    const {companyId} = this.props;
    if (employeeDetail.id) {
      this.props.updateEmployee(companyId, employeeDetail);
    } else {
      this.props.addEmployee(companyId, employeeDetail);
    }
    this.setState({
      showModal: false,
      employeeDetail: null,
    });
  }
  
  
  render() {
    const {companyInfo, employeeList, error} = this.props;
    if (companyInfo === null) {
      return null;
    }
    return (
      <div>
        <h1>{companyInfo.name}</h1>
        {error ? <Alert bsStyle="danger">{error}</Alert> : null}
        <h2>Company Details</h2>
        <div>
          <strong>Total employees:</strong>
          <span>{companyInfo.index.totalEmployees}</span>
        </div>
        <div>
          <strong>Salary expenses:</strong>
          <span>{companyInfo.index.salaryExpenses}</span>
        </div>
        <h2>Employees</h2>
        <Button bsStyle="primary" onClick={this.handleCreateEmployee}>
          Add Employee
        </Button>
        <EmployeeList employeeList={employeeList} editEmployee={this.handleEditEmployee} deleteEmployee={this.handleDeleteEmployee} />
        <Modal show={this.state.showModal} onHide={this.handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EmployeeForm onSubmit={this.handleEmployeeFormSubmit} employeeDetail={this.state.employeeDetail}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

CompanyDetailPage.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
  return {
    companyId: ownProps.match.params.companyId,
    companyInfo: state.company.companyInfo,
    employeeList: state.employee.employeeList,
    error: state.company.error || state.employee.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    requestCompanyInfo,
    requestEmployeeList, 
    addEmployee, 
    updateEmployee, 
    deleteEmployee
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyDetailPage);
