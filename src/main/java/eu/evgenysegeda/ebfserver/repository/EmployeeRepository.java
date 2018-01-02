package eu.evgenysegeda.ebfserver.repository;

import eu.evgenysegeda.ebfserver.domain.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Integer> {
}
