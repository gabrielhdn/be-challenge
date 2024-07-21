import SearchIcon from '../../assets/images/icons/Search.svg';
import { ISearchInputProps } from '../../interfaces';
import * as S from './styles';

const SearchInput: React.FC<ISearchInputProps> = ({ onSearchTermChange }) => (
  <S.Container className="input-container">
    <img src={SearchIcon} alt="Search" />
    <input
      type="text"
      placeholder="Pesquisar"
      onChange={onSearchTermChange}
    />
  </S.Container>
);

export default SearchInput;
