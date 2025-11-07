import styled from "styled-components";
const InputForm = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 18px;
  transition: 0.3s;

  &:focus {
    border-color: #ff4d4d;
    outline: none;
    box-shadow: 0 0 7px #d93636;
  }
`;

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <InputForm
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Filter by name..."
      />
    </div>
  );
};

export default Filter;
