// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

// Your code goes here

const singeContact = document.getElementById ("display_single_contact")
const allContact = document.getElementById ("display_all_contacts")

function loadAllcontacts(){
  if (evt.target.localName === "p"){
    const contactsList = evt.target.parentElement.outerHTML
    allContact.insertAdjacentHTML('afterbegin', contactsList)
  }
}

loadAllcontacts()

function displayContact(evt){
  contactsList.addEventListener('click', evt => {
    allContact.innerHTML =''
  }
}

function closeContact(){
  singeContact.innerHTML = ""
}

clearBtn.addEventListener("click", closeContact)

