package eu.evgenysegeda.ebfserver.domain;

import javax.persistence.*;

@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Integer id;
    @Column(name = "surname", length = 255, nullable = false)
    private String surname;
    @Column(name = "email", length = 255, nullable = true)
    private String email;
    @Column(name = "address", length = 255, nullable = true)
    private String address;
    @Column(name = "salary", nullable = true)
    private double salary;
    @JoinColumn(name = "company_id", referencedColumnName = "id")
    @ManyToOne(fetch = FetchType.LAZY)
    private Company fkCompany;


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

    public Company getFkCompany() {
        return fkCompany;
    }

    public void setFkCompany(Company fkCompany) {
        this.fkCompany = fkCompany;
    }

}
