package eu.evgenysegeda.ebfserver.web;

import eu.evgenysegeda.ebfserver.exception.EntityNotFoundException;
import eu.evgenysegeda.ebfserver.exception.PermissionDeniedException;
import eu.evgenysegeda.ebfserver.service.EmployeeService;
import eu.evgenysegeda.ebfserver.web.dto.EmployeeDTO;
import eu.evgenysegeda.ebfserver.web.dto.ResponseEnvelopeDTO;
import eu.evgenysegeda.ebfserver.config.ResponseStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * TODO Use authentication and get companyId from Principal after login
 *
 */

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/{companyId}")
    public List<EmployeeDTO> getEmployees(@PathVariable("companyId") int companyId) throws EntityNotFoundException {
        return employeeService.getEmployees(companyId);
    }

    @GetMapping("/{companyId}/{employeeId}")
    public EmployeeDTO getEmployee(@PathVariable("companyId") int companyId, @PathVariable("employeeId") int employeeId) throws PermissionDeniedException, EntityNotFoundException {
        return employeeService.getEmployee(companyId, employeeId);
    }

    @PutMapping("/{companyId}")
    public EmployeeDTO createEmployee(@PathVariable("companyId") int companyId, @RequestBody EmployeeDTO employeeDTO) throws EntityNotFoundException {
        return employeeService.createEmployee(companyId, employeeDTO);
    }

    @PostMapping("/{companyId}")
    public EmployeeDTO updateEmployee(@PathVariable("companyId") int companyId, @RequestBody EmployeeDTO employeeDTO) throws PermissionDeniedException, EntityNotFoundException {
        return employeeService.updateEmployee(companyId, employeeDTO);
    }

    @DeleteMapping("/{companyId}/{employeeId}")
    public ResponseEnvelopeDTO deleteEmployee(@PathVariable("companyId") int companyId, @PathVariable("employeeId") int employeeId) throws PermissionDeniedException {
        employeeService.removeEmployee(companyId, employeeId);
        return new ResponseEnvelopeDTO(ResponseStatus.DONE);
    }


}
