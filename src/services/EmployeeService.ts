const BASE_URL = import.meta.env.VITE_API_BASE;
const PORT = import.meta.env.VITE_API_PORT;

class EmployeeService {
  async getAll() {
    const response = await fetch(`${BASE_URL}:${PORT}/employees`);
    const employees = await response.json();
    return employees;
  }
}

export default new EmployeeService();
