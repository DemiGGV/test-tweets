import {
  Button,
  ButtonList,
  TripletLeft,
  TripletRight,
} from './PagginationList.styled.jsx';

export const PagginationList = ({
  currentPage,
  lastPage,
  setPage,
  incrementPage,
  decrementPage,
}) => {
  return (
    <ButtonList>
      <Button onClick={() => setPage(1)} disabled={currentPage === 1}>
        &laquo;
      </Button>
      <Button
        onClick={() => decrementPage(currentPage)}
        disabled={currentPage === 1}
      >
        &lsaquo;
      </Button>
      {currentPage > 2 && <TripletLeft>...</TripletLeft>}
      {currentPage >= 2 && (
        <Button onClick={() => setPage(currentPage - 1)}>
          {currentPage - 1}
        </Button>
      )}
      <Button $current onClick={() => setPage(currentPage)}>
        {currentPage}
      </Button>
      {currentPage <= lastPage - 1 && (
        <Button onClick={() => setPage(currentPage + 1)}>
          {currentPage + 1}
        </Button>
      )}
      {currentPage < lastPage - 1 && <TripletRight>...</TripletRight>}
      <Button
        onClick={() => incrementPage(currentPage)}
        disabled={currentPage === lastPage}
      >
        &rsaquo;
      </Button>
      <Button
        onClick={() => setPage(lastPage)}
        disabled={currentPage === lastPage}
      >
        &raquo;
      </Button>
    </ButtonList>
  );
};
