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

function contactCardTemplate(contactObj) {
  const cardTemplate = `
    <div class="contact_card" id="${contactObj.ID}">
      <img src="img/${contactObj.image}" alt="${contactObj.name}'s photo">
      <p>${contactObj.name}</p>
    </div>
  `;
  return cardTemplate;
}

function createContactcards(contactsArray) {
  const contactCardssection = document.querySelector("#display_all_contacts");
  for (const contact of contactsArray) {
    const newCard = contactCardTemplate(contact);
    contactCardssection.insertAdjacentHTML("afterbegin", newCard);
  }

  const contactCards = document.querySelectorAll(".contact_card");
  for (const card of contactCards) {
    card.addEventListener("click", displayContact);
  }
}

function singleContactTemplate(contactObj){
  const singleContact = `
    <div id="individual_contact">
      <img class="large_image" src="img/${contactObj.image}" alt="${contactObj.name}'s photo">
      <div class="contact_info">
        <h1>${contactObj.name}</h1>
        <p>${contactObj.phone}</p>
        <p>${contactObj.email}</p>  
      </div> 
    </div>
    <span id="close_contact" class="fa-solid fa-circle-xmark"></span>
  `;
  return singleContact;
}

function displayContact(event) {
  const displayArea = document.querySelector('#display_single_contact');
  const id = event.target.closest('.contact_card').id;
  const contact = singleContactTemplate(contactsList[id]);
  toggleContactList();
  displayArea.innerHTML = contact;
  
  const closeButton = document.querySelector('#close_contact');
  closeButton.addEventListener('click', toggleContactList);
}


function toggleContactList(){
  const contactCardssection = document.querySelector("#display_all_contacts")
  if (contactCardssection.style.display === 'none'){
    contactCardssection.style.display = 'flex'
  } else {
    contactCardssection.style.display = 'none'
  }
}

createContactcards(contactsList)

