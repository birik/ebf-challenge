package eu.evgenysegeda.ebfserver.service;

import eu.evgenysegeda.ebfserver.exception.EntityNotFoundException;
import eu.evgenysegeda.ebfserver.repository.CompanyRepository;
import eu.evgenysegeda.ebfserver.domain.Company;
import eu.evgenysegeda.ebfserver.domain.Employee;
import eu.evgenysegeda.ebfserver.web.dto.CompanyDTO;
import eu.evgenysegeda.ebfserver.web.dto.CompanyDetailDTO;
import eu.evgenysegeda.ebfserver.web.dto.CompanyIndexDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    public List<CompanyDTO> getCompanyList() {
        List<Company> companies = companyRepository.findAll();
        List<CompanyDTO> companyDtos = companies.stream().map(c -> new CompanyDTO(c)).collect(Collectors.toList());
        return companyDtos;
    }

    public CompanyDetailDTO getCompanyDetail(int id) throws EntityNotFoundException {
        CompanyDetailDTO result = null;
        Company company = companyRepository.findOne(id);
        if (company == null) {
            throw new EntityNotFoundException("Company was not found.");
        }
        Collection<Employee> employees = company.getEmployees();
        double salaryExpenses = 0.0;
        int totalEmployees = 0;
        for (Employee employee: employees) {
            totalEmployees++;
            salaryExpenses += employee.getSalary();
        }
        result = new CompanyDetailDTO(company);
        result.setIndex(new CompanyIndexDTO(totalEmployees, salaryExpenses));
        return result;
    }
}
