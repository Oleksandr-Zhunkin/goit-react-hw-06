import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  filters: {
    name: "",
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  selectors: { selectContacts: (state) => state.contacts.items },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.items.push(action.payload);
      },
      prepare(values) {
        return {
          payload: {
            id: nanoid(),
            name: values.name,
            number: values.number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.contacts.items.findIndex(
          (item) => item.id === action.payload
        );
        state.contacts.items.splice(index, 1);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const { selectContacts } = contactsSlice.selectors;
