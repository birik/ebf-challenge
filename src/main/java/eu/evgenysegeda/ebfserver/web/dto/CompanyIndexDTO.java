package eu.evgenysegeda.ebfserver.web.dto;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class CompanyIndexDTO {

    private int totalEmployees;
    private double salaryExpenses;

    public CompanyIndexDTO(int totalEmployees, double salaryExpenses) {
        this.totalEmployees = totalEmployees;
        this.salaryExpenses = salaryExpenses;
    }

    public int getTotalEmployees() {
        return totalEmployees;
    }

    public void setTotalEmployees(int totalEmployees) {
        this.totalEmployees = totalEmployees;
    }

    public double getSalaryExpenses() {
        return salaryExpenses;
    }

    public void setSalaryExpenses(double salaryExpenses) {
        this.salaryExpenses = salaryExpenses;
    }
}
