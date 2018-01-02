package eu.evgenysegeda.ebfserver.web;

import eu.evgenysegeda.ebfserver.exception.EntityNotFoundException;
import eu.evgenysegeda.ebfserver.service.CompanyService;
import eu.evgenysegeda.ebfserver.web.dto.CompanyDTO;
import eu.evgenysegeda.ebfserver.web.dto.CompanyDetailDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/company")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @GetMapping
    public List<CompanyDTO> getCompanyList() throws EntityNotFoundException {
        return companyService.getCompanyList();
    }

    @GetMapping("/{id}")
    public CompanyDetailDTO getCompany(@PathVariable("id") int companyId) throws EntityNotFoundException {
        return companyService.getCompanyDetail(companyId);
    }

}
