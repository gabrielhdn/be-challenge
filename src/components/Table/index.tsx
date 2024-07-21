import React from 'react';
import useTable from './useTable';
import * as S from './styles';

import ArrowDown from '../../assets/images/icons/ArrowDown.svg';
import ArrowUp from '../../assets/images/icons/ArrowUp.svg';

interface IProps {
  searchTerm: string;
}

const Table: React.FC<IProps> = ({ searchTerm }) => {
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
            <S.ExpandableRow selected={selectedRowId === employee.id}>
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
            </S.ExpandableRow>

            {selectedRowId === employee.id && (
            <S.ExpandedContent>
              <td colSpan={3}>
                <div className="expanded-content">
                  <div>
                    <h2><strong>Cargo</strong></h2>
                    <p>{employee.job}</p>
                  </div>
                  <div>
                    <h2><strong>Data de admissão</strong></h2>
                    <p>{employee.admission_date}</p>
                  </div>
                  <div>
                    <h2><strong>Telefone</strong></h2>
                    <p>{employee.phone}</p>
                  </div>
                </div>
              </td>
            </S.ExpandedContent>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </S.Table>
  );
};

export default Table;
