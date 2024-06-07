window.onload = function () {
  document.getElementById('recall-form').addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('service_68lq5jy', 'template_dkc6htq', this)
    .then(() => {
      alert('Успешно!');
    }, (error) => {
      alert('Произошла ошибка');
    });
    emailjs.sendForm('service_68lq5jy', '4234322', this)
    .then(() => {
      console.log('SUCCESS!');
    }, (error) => {
      console.log('FAILED...', error);
    });

  });
}