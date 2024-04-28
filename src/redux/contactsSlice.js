import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact } from "./contactsOps";

const contactsInitialState = { items: [], loading: false, error: null };

const isPending = (state) => {
  console.log("pending");
  state.loading = true;
  state.error = null;
};

const isRejected = (state) => {
  console.log("rejected");
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, isPending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        console.log("fulfilled fetch");
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, isRejected)
      .addCase(addContact.pending, isPending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(addContact.rejected, isRejected);
  },
});

export const { deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
