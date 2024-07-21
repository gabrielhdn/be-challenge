import {
  useState, useEffect, useMemo, useCallback,
} from 'react';

import EmployeeService from '../../services/EmployeeService';
import EmployeeMapper from '../../services/mappers/EmployeeMapper';
import { IEmployee } from '../../interfaces/models/Employee';

const useTable = (searchTerm: string) => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [selectedRowId, setSelectedRowId] = useState<string | null>();

  useEffect(() => {
    async function fetchEmployees() {
      const employeesList = await EmployeeService.getAll();
      const convertedEmployeesList = employeesList.map(EmployeeMapper.toDomain);
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
