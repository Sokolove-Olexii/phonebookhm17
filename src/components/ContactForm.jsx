import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 18px;
  transition: 0.45s;

  &:focus {
    border-color: #0077ff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 119, 255, 0.3);
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #0077ff;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #005fcc;
  }
`;

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name: fieldName, value } = e.target;

    if (fieldName === "name") {
      setName(value);
    } else if (fieldName === "number") {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number });
    setName("");
    setNumber("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Enter name..."
        required
      />
      <Input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        placeholder="Enter number..."
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
