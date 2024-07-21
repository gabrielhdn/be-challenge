import React from 'react';

import { ITableProps } from '../../interfaces';
import useTable from './useTable';
import * as S from './styles';

import ArrowDown from '../../assets/images/icons/ArrowDown.svg';
import ArrowUp from '../../assets/images/icons/ArrowUp.svg';

const Table: React.FC<ITableProps> = ({ searchTerm }) => {
  const {
    filteredEmployees,
    handleCardToggle,
    selectedRowId,
  } = useTable(searchTerm);

  return (
    <S.Table>
      <thead>
        <tr>
          <th>FOTO</th>
          <th>NOME</th>
          <th className="mobile-closed">CARGO</th>
          <th className="mobile-closed">DATA DE ADMISSÃO</th>
          <th className="mobile-closed">TELEFONE</th>
          <th className="mobile-open dot">&bull;</th>
        </tr>
      </thead>

      <tbody>
        {filteredEmployees.map((employee) => (
          <React.Fragment key={employee.id}>
            <tr
              className={selectedRowId === employee.id ? 'expanded' : ''}
            >
              <td className="image-data">
                <img src={employee.image} alt="Employee" />
              </td>
              <td>{employee.name}</td>
              <td className="mobile-closed">{employee.job}</td>
              <td className="mobile-closed">{employee.admission_date}</td>
              <td className="mobile-closed">{employee.phone}</td>
              <td className="mobile-open">
                <button onClick={() => handleCardToggle(employee.id)} type="button">
                  <img
                    src={selectedRowId === employee.id ? ArrowUp : ArrowDown}
                    alt="Open Info"
                  />
                </button>
              </td>
            </tr>

            {selectedRowId === employee.id && (
            <tr className="expanded-row">
              <td colSpan={3}>
                <div className="expanded-content">
                  <div>
                    <p><strong>Cargo</strong></p>
                    <p>{employee.job}</p>
                  </div>
                  <div>
                    <p><strong>Data de admissão</strong></p>
                    <p>{employee.admission_date}</p>
                  </div>
                  <div>
                    <p><strong>Telefone</strong></p>
                    <p>{employee.phone}</p>
                  </div>
                </div>
              </td>
            </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </S.Table>
  );
};

export default Table;
