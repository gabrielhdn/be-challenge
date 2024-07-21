class EmployeeService {
  async getEmployees() {
    const response = await fetch('http://localhost:3000/employees');
    const employees = await response.json();
    return employees;
  }
}

export default new EmployeeService();
