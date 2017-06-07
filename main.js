function Exception(message) {
  this.message = message
}

/**
* Helper functions
*/
function Helper() {
  this.getUniqueNumber = function() {
    return new Date().getTime()
  }

  this.isObjectEmpty = function(object) {
    return Object.keys(object).length === 0 && object.constructor === Object
  }

  this.hasSameContact = function(addressBook, newContact) {
    Object.keys(addressBook).forEach(function(key) {
      addressBook[key].forEach(function(contact) {
        return JSON.stringify(contact) === JSON.stringify(newContact)
      })
    })
  }

  this.getArray = function(array) {
    if (array.constructor !== Array) {
      throw new Exception('You must pass an array as a parameter.')
    }
    return Object.assign({}, array)
  }
}

function Contact(name, phone, email) {
  const helper = new Helper()
  this.id = helper.getUniqueNumber()
  this.name = name
  this.phone = phone
  this.email = email
}

/**
* Main App
*/
function App() {
  var helper = new Helper()
  var addressBook = {}

  this.addContact = function (name, phone, email, bookName = 'untitled') {
    const contact = new Contact(name, phone, email);

    if (!addressBook.hasOwnProperty(bookName)) {
      addressBook[bookName] = []
    }

    if (helper.hasSameContact(addressBook, contact)) {
      console.log('Already have the same contact in the book.')
      return
    }

    addressBook[bookName].push(contact)
    console.log(`${contact.name} ${contact.phone} ${contact.email} has been added to "${bookName}" address book.`)
    console.log(addressBook);
  }

  this.getContactFromABook = function(bookName) {
    const addressBookCopy = Object.assign({}, addressBook)

    if (!bookName) {
      console.log('Please pass address book name as a param.')
      return
    }

    if (!addressBook[bookName]) {
      console.log(`Sorry, you don\'t have such "${bookName}" address book.`)
      return
    }

    console.log(`You have ${addressBook[bookName].length} contacts in "${bookName}" address book.`)
    console.log(addressBook[bookName])
  }

  this.getAllContacts = function() {
    if (!Object.keys(addressBook).length) {
      console.log('Sorry, You don\'t have any contacts.')
      return
    }

    Object.keys(addressBook).forEach(function(key) {
      if (addressBook[key].length) {
        console.log(`You have ${addressBook[key].length} contacts from "${key}" address book.`)
        console.log(addressBook[key]);
      }
    })
  }

  this.getAllAddressBookNames = function() {
    if (!Object.keys(addressBook).length) {
      console.log(`You dont't have any address book.`);
      return
    }

    return Object.keys(addressBook)
  }

  this.removeContact = function(id) {
    const index = addressBook.findIndex(function(contact) {
      return contact.id === id
    })

    if (index === -1) {
      console.log(`No such id(${id}) exist in your address book.`);
    }

    const removedContact = addressBook.slice(index, 1)
    console.log(`${removeContact.name} ${removeContact.phone} ${removeContact.email} has been removed from "${removeContact.book}" address book.`);
  }
}


/**
* App instance
*/
var app = new App();
