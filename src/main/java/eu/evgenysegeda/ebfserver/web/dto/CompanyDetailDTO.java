package eu.evgenysegeda.ebfserver.web.dto;

import eu.evgenysegeda.ebfserver.domain.Company;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class CompanyDetailDTO {

    private Integer id;
    private String name;
    private CompanyIndexDTO index;

    public CompanyDetailDTO(Company company) {
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

    public CompanyIndexDTO getIndex() {
        return index;
    }

    public void setIndex(CompanyIndexDTO index) {
        this.index = index;
    }
}
