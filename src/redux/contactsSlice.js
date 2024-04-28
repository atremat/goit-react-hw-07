import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";

const contactsInitialState = { items: [], loading: false, error: null };

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        console.log("pending");
        state.loading = true;
        state.error = null;
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
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
