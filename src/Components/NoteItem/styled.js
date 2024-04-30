import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({theme, $isnew}) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.GRAY_300};

  border: ${({theme, $isnew}) => $isnew ? `1px dashed ${theme.COLORS.GRAY_300}` :"none" };

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 12px;

  > button{
    border: none;
    background: none;
  };

  .button-delete{
    color: ${({theme}) => theme.COLORS.RED};
  }
  .button-add{
    color: ${({theme}) => theme.COLORS.ORANGE};
  }


  > input{
    height: 40px;
    width: 100%;

    padding: 12px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder{
      ${({theme}) => theme.COLORS.GRAY_300};
    }
  }
`