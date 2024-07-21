import SearchIcon from '../../assets/images/icons/Search.svg';
import * as S from './styles';

interface IProps {
  onSearchTermChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<IProps> = ({ onSearchTermChange }) => (
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
