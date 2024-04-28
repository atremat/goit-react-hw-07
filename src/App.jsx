import "modern-normalize";
import "./App.css";
import { PiUserSquareFill } from "react-icons/pi";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchTours());
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="main">
      <h1 className="phonebook-header">
        <PiUserSquareFill className="phonebook-icon" />
        Phonebook
      </h1>

      <ContactForm />

      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
