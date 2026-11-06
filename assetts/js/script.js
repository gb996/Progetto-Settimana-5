// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.


const overlay = document.querySelector('.overlay');
const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('.closeModal');
const myForm = document.querySelector('form');
const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#userEmail');
const enrollDate = document.querySelector('#enrollDate');


const registeredUser = {
  userName: '',
  userEmail: '',
  enrollDate: ''
};


openModal.addEventListener('click', (e) => {
  e.preventDefault();
  overlay.style.display = 'block';
});


closeModal.addEventListener('click', (e) => {
  e.preventDefault();
  overlay.style.display = 'none';
});


myForm.addEventListener('submit', (e) => {
  e.preventDefault();

 
  registeredUser.userName = userName.value;
  registeredUser.userEmail = userEmail.value;
  registeredUser.enrollDate = enrollDate.value;

  

  
  overlay.style.display = 'none';
});

/*scroll*/
