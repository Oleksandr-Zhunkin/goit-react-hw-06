import s from "../Contact/Contact.module.scss";

const Contact = ({ contact, handleDeleteContact }) => {
  return (
    <li className={s.item}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button
        className={s.btn}
        type="button"
        onClick={() => handleDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
