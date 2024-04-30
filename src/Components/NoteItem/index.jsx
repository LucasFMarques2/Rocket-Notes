import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styled";

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container $isnew={isNew}>
      <input 
        type="text"
        defaultValue={value}
        readOnly={!isNew}
        {...rest}
      />
      <button type="button" onClick={onClick} className={isNew ? 'button-add' : 'button-delete'}>
        { isNew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  );
}
