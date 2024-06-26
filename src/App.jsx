import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";
import SearchBox from "./components/SearchBox/SearchBox";
import Section from "./components/Section/Section";
import { nanoid } from "nanoid";

const initualValue = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(window.localStorage.getItem("key_contacts"));

    if (contacts?.length) {
      return contacts;
    }

    return initualValue;
  });

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("key_contacts", JSON.stringify(contacts));
  }, [contacts]);

  const getFilteredData = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const handleSubmit = (values, actions) => {
    updateContacts(values);
    actions.resetForm();
  };

  const updateContacts = (values) => {
    setContacts((prev) => [
      ...prev,
      { id: nanoid(), name: values.name, number: values.number },
    ]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <Section>
        <Container>
          <h1 className="title">Phonebook</h1>
          <div className="input_wraps">
            <ContactForm handleSubmit={handleSubmit} contacts={contacts} />
            <SearchBox
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
          <ContactList
            getFilteredData={getFilteredData}
            handleDeleteContact={handleDeleteContact}
          />
        </Container>
      </Section>
    </>
  );
}

export default App;
