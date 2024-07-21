export interface IEmployee {
  admission_date: string;
  id: string;
  image: string;
  job: string;
  name: string;
  phone: string;
}

export interface ITableProps {
  searchTerm: string;
}

export interface ISearchInputProps {
  onSearchTermChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
