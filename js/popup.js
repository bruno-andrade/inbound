function modalStart(id){
  const modal = document.getElementById(id);
  if (modal) {        
    modal.classList.add('show-up');
    modal.addEventListener('click', (e) => {
      console.log(e);
      if (e.target.id == id || e.target.className == 'fa fa-2x fa-times') {
        console.log(e.target);
        modal.classList.remove('show-up');
      }
    });
  }
}

const submit = document.querySelector('.btn-submit');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  modalStart('modal');
})