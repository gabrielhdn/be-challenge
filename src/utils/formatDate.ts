export default (isoDate: string): string => {
  const convertedDate = new Date(isoDate);
  return convertedDate.toLocaleDateString('pt-BR');
};
