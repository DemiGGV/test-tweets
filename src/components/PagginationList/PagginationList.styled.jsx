import styled from 'styled-components';

export const ButtonList = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 450px;
`;

export const TripletLeft = styled.p`
  margin-left: auto;
  margin-right: auto;
`;

export const TripletRight = styled.p`
  margin-right: auto;
  margin-left: auto;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 25px;
  transition: var(--transition-bgc-global);
  background-color: ${props =>
    props.$current ? 'var(--colors-button-enabled)' : 'transparent'};
  &:hover {
    background-color: ${props =>
      props.disabled
        ? 'var(--colors-text-light);'
        : 'var(--colors-button-enabled)'};
  }
`;
