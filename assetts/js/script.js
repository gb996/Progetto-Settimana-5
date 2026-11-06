// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.

// Selezione elementi dal DOM
const overlay = document.querySelector('.overlay');
const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('.closeModal');
const myForm = document.querySelector('form');
const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#userEmail');
const enrollDate = document.querySelector('#enrollDate');

// Oggetto per salvare i dati dell'utente
const registeredUser = {
  userName: '',
  userEmail: '',
  enrollDate: ''
};

// Apertura della modale
openModal.addEventListener('click', (e) => {
  e.preventDefault();
  overlay.style.display = 'block';
});

// Chiusura della modale
closeModal.addEventListener('click', (e) => {
  e.preventDefault();
  overlay.style.display = 'none';
});

// Gestione invio del form
myForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Salva i valori nell'oggetto
  registeredUser.userName = userName.value;
  registeredUser.userEmail = userEmail.value;
  registeredUser.enrollDate = enrollDate.value;

  console.log('Dati salvati:', registeredUser);

  // Resetta il form e chiude la modale
  myForm.reset();
  overlay.style.display = 'none';
});