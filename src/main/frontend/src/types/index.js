import PropTypes from 'prop-types';

export const companyInfoShort = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

export const companyIndex = PropTypes.shape({
  salaryExpenses: PropTypes.number,
  totalEmployees: PropTypes.number,
});

export const companyInfo = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  index: companyIndex.isRequired
});

export const employee = PropTypes.shape({
  id: PropTypes.number,
  surname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string,
  salary: PropTypes.number,
  companyId: PropTypes.number
});
