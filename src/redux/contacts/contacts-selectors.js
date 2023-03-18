export const selectContacts = store => store.contacts.items;

export const selectIsLoading = store => store.contacts.isLoading;
export const selectError = store => store.contacts.error;
export const selectOperation = store => store.contacts.operation;

export const selectFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return filteredContacts;
};
