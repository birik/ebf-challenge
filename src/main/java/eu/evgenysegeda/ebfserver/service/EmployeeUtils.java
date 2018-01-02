package eu.evgenysegeda.ebfserver.service;

import eu.evgenysegeda.ebfserver.domain.Employee;
import eu.evgenysegeda.ebfserver.web.dto.EmployeeDTO;

public class EmployeeUtils {

    public static Employee assembleEmployee(EmployeeDTO employeeDTO) {
        Employee employee = new Employee();
        employee.setSurname(employeeDTO.getSurname());
        employee.setEmail(employeeDTO.getEmail());
        employee.setAddress(employeeDTO.getAddress());
        employee.setSalary(employeeDTO.getSalary());
        return employee;
    }
}
