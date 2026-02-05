// import { useState } from "react";
// import { nanoid } from "nanoid";
// import toastr from "toastr";
import "toastr/build/toastr.min.css";
import styled from "styled-components";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

const MainAppSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  min-height: 100vh;
  padding: 40px 0;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;

const SubTitle = styled.h2`
  margin-top: 40px;
  font-size: 30px;
  color: #444;
  border-bottom: 2px solid #444;
  padding-bottom: 5px;
`;

const Card = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 320px;
  text-align: center;
  margin: 20px;
`;

const App = () => {
  // const [contacts, setContacts] = useState([
  //   { id: "id-1", name: "Rosie", number: "459-12-56" },
  //   { id: "id-2", name: "Mike", number: "443-89-12" },
  //   { id: "id-3", name: "Eden", number: "645-17-79" },
  //   { id: "id-4", name: "Annie", number: "227-91" },
  // ]);

  // const [filter, setFilter] = useState("");

  // const addContact = ({ name, number }) => {
  //   if (
  //     contacts.find(
  //       (contact) => contact.name.toLowerCase() === name.toLowerCase(),
  //     )
  //   ) {
  //     //   alert(`${name} Вже в контактах!`);
  //     toastr.error(`${name} Вже є в контактах!`);
  //     return;
  //   }
  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
  //   setContacts((prevContacts) => [...prevContacts, newContact]);
  //   toastr.success(`${name} додано!`);
  // };

  // const deleteContact = (id) => {
  //   // const contactToDelete = contacts.find((contact) => contact.id !== id);
  //   // if (contactToDelete) {
  //   //   toastr.info(`${contactToDelete.name} видалено`);
  //   // }
  //   toastr.info(`Контакт Видалено`);
  //   setContacts((prevContacts) =>
  //     prevContacts.filter((contact) => contact.id !== id),
  //   );
  // };

  // const changeFilter = (e) => {
  //   setFilter(e.target.value);
  // };

  // const getFilteredContacts = () => {
  //   const normalized = filter.toLowerCase();
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalized),
  //   );
  // };

  // const filteredContacts = getFilteredContacts();

  return (
    <MainAppSection>
      <Card>
        <Title>Phonebook</Title>
        <ContactForm />
        {/* onSubmit={addContact} */}
      </Card>

      <Card>
        <SubTitle>Contacts</SubTitle>
        <Filter />
        {/* value={filter} onChange={changeFilter} */}
        <ContactList />
        {/* contacts={filteredContacts} onDelete={deleteContact} */}
      </Card>
    </MainAppSection>
  );
};

export default App;
