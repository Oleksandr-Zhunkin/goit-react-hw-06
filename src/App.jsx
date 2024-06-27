import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";
import SearchBox from "./components/SearchBox/SearchBox";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Section>
        <Container>
          <h1 className="title">Phonebook</h1>
          <div className="input_wraps">
            <ContactForm />
            <SearchBox />
          </div>
          <ContactList />
        </Container>
      </Section>
    </>
  );
}

export default App;
