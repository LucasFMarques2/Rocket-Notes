import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto; 
  grid-template-areas: 
  'header'
  "content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;


export const Content = styled.div`
  grid-area: content;
  padding: 32px 64px; 
  overflow-y: auto;
  width: 50%;

  margin: 0 auto;
 
`;

export const UserList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const UserItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > span {
    color: ${({ theme }) => theme.COLORS.WHITE}; /* Cor do texto */
  }

  > div {
    display: flex;
    gap: 8px; /* Espaçamento entre os botões */
  }
`;

export const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.COLORS.RED}; /* Cor do botão de deletar */
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
