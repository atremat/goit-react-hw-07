import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

//filtered contacts which contain searchValue
const getVisibleContacts = (contacts, searchValue) => {
  const visibleContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(searchValue.trim().toLowerCase());
  });
  return visibleContacts;
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchValue = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(contacts, searchValue);

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </ul>
  );
};

export default ContactList;
