import Contact from "../Contact/Contact";
import s from "../ContactList/ContactList.module.scss";

export const ContactList = ({ getFilteredData, handleDeleteContact }) => {
  return (
    <div>
      <ul className={s.list}>
        {getFilteredData().map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            handleDeleteContact={handleDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
