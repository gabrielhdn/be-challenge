import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import Logo from '../../assets/images/icons/Logo.svg';

import Table from '../Table';
import SearchInput from '../SearchInput';
import useSearch from '../../hooks/useSearch';
import * as S from './styles';

const App: React.FC = () => {
  const { searchTerm, handleSearchTermChange } = useSearch();

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <S.Container>
        <header>
          <img src={Logo} alt="BeTalent Logo" />
        </header>

        <S.MainContent>
          <section>
            <h4>Funcionários</h4>
            <SearchInput onSearchTermChange={handleSearchTermChange} />
          </section>

          <Table searchTerm={searchTerm} />
        </S.MainContent>
      </S.Container>
    </ThemeProvider>
  );
};
export default App;
