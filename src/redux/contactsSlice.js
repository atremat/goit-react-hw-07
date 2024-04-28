import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";

const contactsInitialState = { items: [], loading: false, error: null };

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  // reducers: {
  //   addContact(state, action) {
  //     state.items.push(action.payload);
  //   },
  //   deleteContact(state, action) {
  //     const filtered = state.items.filter(
  //       (contact) => contact.id !== action.payload
  //     );
  //     return { items: filtered };
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        console.log("pending");
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        console.log("fulfilled");
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        console.log("error");
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
