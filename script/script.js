document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById('newslatter-email-input');
    const errorMessage = document.getElementById('newslatter-email-error-message');
    const submitButton = document.querySelector('.newslatter-email-submit-button');
    const successModal = document.querySelector('.newslatter-success-modal-container');
    const successModalEmail = document.querySelector('.newslatter-success-modal-subscription span');
    const newslatterContainer = document.querySelector('.newslatter-container')

    emailInput.addEventListener('input', function () {
        const email = emailInput.value.trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)) {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
        }
    });

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !regex.test(email)) {
            errorMessage.style.display = 'block';
        } else {
            successModalEmail.textContent = email;
            successModal.style.display = 'block';
            errorMessage.style.display = 'none';
            newslatterContainer.style.display = 'none';
            emailInput.value = '';
        }
    });

    document.querySelector('.newslatter-success-modal-dismiss-button button').addEventListener('click', function () {
        successModal.style.display = 'none';
        newslatterContainer.style.display = '';
    });
});
