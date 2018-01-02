package eu.evgenysegeda.ebfserver.web.dto;

import eu.evgenysegeda.ebfserver.domain.Company;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class CompanyDTO {

    private Integer id;
    private String name;

    public CompanyDTO(Company company) {
        this.id = company.getId();
        this.name = company.getName();
    }

    public long getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
