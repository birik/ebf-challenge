package eu.evgenysegeda.ebfserver.web.dto;

import eu.evgenysegeda.ebfserver.domain.Employee;

public class EmployeeDTO{
    private Integer id;
    private String surname;
    private String email;
    private String address;
    private double salary;
    private Integer companyId;

    public EmployeeDTO() {

    }

    public EmployeeDTO(Employee employee) {
        this.id = employee.getId();
        this.surname = employee.getSurname();
        this.email = employee.getEmail();
        this.address = employee.getAddress();
        this.salary = employee.getSalary();
        this.companyId = employee.getFkCompany().getId();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public Integer getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }
}
