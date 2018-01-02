import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Alert} from 'react-bootstrap';

import {companyInfoShort} from './../types';
import { requestCompanyList } from './../actions/companyActions';
import CompanyList from './CompanyList';


const propTypes = {
  companyList: PropTypes.arrayOf(companyInfoShort),
  error: PropTypes.string,
};

const defaultProps = {
};

export class HomePage extends React.Component {

  componentDidMount() {
    this.props.requestCompanyList();
  }

  render() {
    const {companyList, error} = this.props;
    return (
      <div>
        {error ? <Alert bsStyle="danger">{error}</Alert> : null}
        <h1>Overview of all companies</h1>
        <CompanyList companyList={companyList} />
      </div>
    );
  }

}

HomePage.propTypes = propTypes;
HomePage.defaultProps =  defaultProps;

const mapStateToProps = (state) => {
  return {
    companyList: state.company.companyList,
    error: state.company.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    requestCompanyList
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
