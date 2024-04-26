import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = { items: [] };

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      const filtered = state.items.filter(
        (contact) => contact.id !== action.payload
      );
      return { items: filtered };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
