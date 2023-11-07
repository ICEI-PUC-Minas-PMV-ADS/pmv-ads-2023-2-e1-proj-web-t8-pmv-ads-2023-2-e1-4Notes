document.addEventListener('DOMContentLoaded', function () {
    const newPasswordInput = document.getElementById('new-password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const submitButton = document.getElementById('btn-submit');
    const form = document.getElementById('reset-password-form');
  
    submitButton.addEventListener('click', function (e) {
      e.preventDefault();
  
      const newPassword = newPasswordInput.value;
      const confirmPassword = confirmPasswordInput.value;
  
      if (newPassword !== confirmPassword) {
        alert('As senhas não coincidem. Por favor, digite senhas iguais.');
      } else {
        // Aqui você pode adicionar o código para enviar o formulário
        form.submit(); // Envie o formulário se as senhas coincidirem
      }
    });
  });
  