import {
  useState, useEffect, useMemo, useCallback,
} from 'react';

import EmployeeService from '../../services/EmployeeService';
import formatDate from '../../utils/formatDate';
import formatPhone from '../../utils/formatPhone';
import { IEmployee } from '../../interfaces';

const useTable = (searchTerm: string) => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [selectedRowId, setSelectedRowId] = useState<string | null>();

  useEffect(() => {
    async function fetchEmployees() {
      const employeesList = await EmployeeService.getEmployees();
      const convertedEmployeesList = employeesList.map((employee: IEmployee) => ({
        ...employee,
        admission_date: formatDate(employee.admission_date),
        phone: formatPhone(employee.phone),
      }));
      setEmployees(convertedEmployeesList);
    }
    fetchEmployees();
  }, []);

  const filteredEmployees = useMemo(() => employees.filter((employee) => (
    [employee.job, employee.name, employee.phone].some((field) => (
      field.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  )), [employees, searchTerm]);

  const handleCardToggle = useCallback((id: string) => {
    setSelectedRowId((prevState) => (prevState === id ? null : id));
  }, []);

  return {
    selectedRowId,
    filteredEmployees,
    handleCardToggle,
  };
};

export default useTable;
