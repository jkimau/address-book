# How to run
- Copy whole code of `main.js` and paste into Chrome browser's inspector console
- Run API methods

# API

#### addContact(name, phone, email, bookName = 'untitled')
Pass name, phone, email and bookName. bookName will fall back to `untitled` if not passed.

#### removeContact(id)
Removes selected contact from Address Book.

#### getAllContactsFromABook(bookName)
Shows contact list in selected Address Book.

#### getAllContacts()
Shows all contact list from every Address Books.

#### getAllAddressBookNames()
Shows all Address Book names in an array.

# Example
```
> app.addContact('JIM', '03 1111 2222', 'jim@test.com', 'Friends')
// JIM 03 1111 2222 jim@test.com has been added to "Friends" address book.

> app.getAllContacts()
// You have 1 contacts in "Friends" address book.
// [Object]

> app.addContact('Lucy', '03 2222 3333', 'lucy@test.com', 'Work')
// Lucy 03 2222 3333 lucy@test.com has been added to "Work" address book.

> app.getAllContacts()
// You have 1 contacts in "Friends" address book.
// [Object]
// You have 1 contacts in "Work" address book.
// [Object]

> app.getAllAddressBookNames()
// ['Friends', 'Work']

> app.removeContact(id) // id is created on the fly, let's assume it's for Lucy
// Lucy 03 2222 3333 lucy@test.com has been removed from 'Work' address book.

> app.getAllAddressBookNames()
// ['Friends']
```
