import { IEmployee } from '../../interfaces/models/Employee';
import formatDate from '../../utils/formatDate';
import formatPhone from '../../utils/formatPhone';

class EmployeeMapper {
  toDomain(employee: IEmployee) {
    return {
      ...employee,
      admission_date: formatDate(employee.admission_date),
      phone: formatPhone(employee.phone),
    };
  }
}

export default new EmployeeMapper();
