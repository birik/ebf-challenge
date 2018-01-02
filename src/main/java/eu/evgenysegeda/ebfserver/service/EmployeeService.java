package eu.evgenysegeda.ebfserver.service;

import eu.evgenysegeda.ebfserver.exception.EntityNotFoundException;
import eu.evgenysegeda.ebfserver.exception.PermissionDeniedException;
import eu.evgenysegeda.ebfserver.repository.CompanyRepository;
import eu.evgenysegeda.ebfserver.repository.EmployeeRepository;
import eu.evgenysegeda.ebfserver.domain.Company;
import eu.evgenysegeda.ebfserver.domain.Employee;
import eu.evgenysegeda.ebfserver.web.dto.EmployeeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private CompanyRepository companyRepository;

    public EmployeeDTO getEmployee(int companyId, int employeeId) throws EntityNotFoundException, PermissionDeniedException {
        Employee employee = employeeRepository.findOne(employeeId);
        if (employee == null ) {
            throw new EntityNotFoundException("Employee was not found.");
        }
        if (!employee.getFkCompany().getId().equals(companyId)) {
            throw new PermissionDeniedException();
        }
        return new EmployeeDTO(employee);
    }

    public List<EmployeeDTO> getEmployees(int companyId) throws EntityNotFoundException {
        List<EmployeeDTO> result = null;
        Company company = companyRepository.findOne(companyId);
        if (company == null) {
            throw new EntityNotFoundException("Check your request. Company was not found.");
        }
        Collection<Employee> employees = company.getEmployees();
        result = employees.stream().map(e -> new EmployeeDTO(e)).collect(Collectors.toList());
        return result;
    }

    public EmployeeDTO createEmployee(int companyId, EmployeeDTO employeeDTO) throws EntityNotFoundException {
        Company company = companyRepository.findOne(companyId);
        if (company == null) {
            throw new EntityNotFoundException("Check your request. Company was not found.");
        }
        Employee employee = EmployeeUtils.assembleEmployee(employeeDTO);
        employee.setFkCompany(company);
        employee = employeeRepository.save(employee);
        return new EmployeeDTO(employee);
    }

    public EmployeeDTO updateEmployee(int companyId, EmployeeDTO employeeDTO) throws EntityNotFoundException, PermissionDeniedException {
        if (employeeDTO.getId() == null) {
            throw new EntityNotFoundException("Employee was not found.");
        }
        Employee employee = employeeRepository.findOne(employeeDTO.getId());
        if (!employee.getFkCompany().getId().equals(companyId)) {
            throw new PermissionDeniedException();
        }
        Employee updatedEmployee = EmployeeUtils.assembleEmployee(employeeDTO);
        updatedEmployee.setId(employee.getId());
        updatedEmployee.setFkCompany(employee.getFkCompany());
        employeeRepository.save(updatedEmployee);
        return new EmployeeDTO(employee);
    }

    public void removeEmployee(int companyId, int employeeId) throws PermissionDeniedException {
        Employee employee = employeeRepository.findOne(employeeId);
        if (employee == null) {
            return;
        }
        if (!employee.getFkCompany().getId().equals(companyId)) {
            throw new PermissionDeniedException();
        }
        employeeRepository.delete(employeeId);
    }
}
