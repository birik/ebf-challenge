import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, FormControl, ControlLabel, Col, Button, Alert } from 'react-bootstrap';

import { isValidEmail } from './../utils/validator';
import {employee} from './../types';

const propTypes = {
  employeeDetail: employee.isRequired,
  onSubmit: PropTypes.func.isRequired
};

class EmployeeForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const {employeeDetail} = this.props;
    const surname = this.surname.value.trim();
    if (surname.length === 0) {
      this.setState({
        error: 'Please enter the surname'
      });
      return;
    }
    const email = this.email.value.trim();
    if (email.length === 0 || !isValidEmail(email)) {
      this.setState({
        error: 'Please enter the valid email'
      });
      return;
    }
    const address = this.address.value.trim();
    const salary = this.salary.value;
    
    this.setState({
      error: null
    });
    
    this.props.onSubmit({
      ...employeeDetail,
      surname,
      email,
      address,
      salary
    });
  }
  
  render() {
    const {employeeDetail} = this.props;
    if (employeeDetail === null) {
      return null;
    }
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        {this.state.error ? <Alert bsStyle="danger">{this.state.error}</Alert> : null }
        <FormGroup controlId="surname">
          <Col componentClass={ControlLabel} sm={2}>
            Surname*
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Surname" defaultValue={employeeDetail.surname} inputRef={ref => {this.surname = ref;}}/>
          </Col>
        </FormGroup>
        <FormGroup controlId="email">
          <Col componentClass={ControlLabel} sm={2}>
            Email*
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="email@test.de" defaultValue={employeeDetail.email} inputRef={ref => {this.email = ref;}}/>
          </Col>
        </FormGroup>
        <FormGroup controlId="address">
          <Col componentClass={ControlLabel} sm={2}>
            Address
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Berlinstr. 12, 37377 Koeln" defaultValue={employeeDetail.address} inputRef={ref => {this.address = ref;}}/>
          </Col>
        </FormGroup>
        <FormGroup controlId="salary">
          <Col componentClass={ControlLabel} sm={2}>
            Salary
          </Col>
          <Col sm={10}>
            <FormControl type="number" placeholder="10000" defaultValue={employeeDetail.salary}inputRef={ref => {this.salary = ref;}}/>
          </Col>
        </FormGroup>
    
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              {employeeDetail.id ? 'Edit Employee' : 'Add Employee'}
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

EmployeeForm.propTypes = propTypes;
export default EmployeeForm;