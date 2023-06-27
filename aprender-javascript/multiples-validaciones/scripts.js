const myForm = document.getElementById("myForm");
const nameField = document.getElementById("nameField");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Eliminar mensajes de validación anteriores, si los hay
  const validationMessage = document.querySelectorAll(".validation-message");
  validationMessage.forEach(function (elemento) {
    elemento.remove();
  });

  const validations = [
    {
      condition: nameField.value === "",
      message: "Please enter your name",
    },
    {
      condition: nameField.value.length < 3,
      message: "Name must be at least 3 characters long",
    },
    {
      condition: /\d/.test(nameField.value),
      message: "Name cannot contain numbers",
    },
    {
      condition: /[!@#$%^&*(),.?":{}|<>]/.test(nameField.value),
      message: "Name cannot contain special characters",
    },
    {
      condition: nameField.value.trim() !== nameField.value,
      message: "Name cannot have leading or trailing white spaces",
    },
    {
      condition: !nameField.value.includes(" "),
      message: "Please enter your full name",
    },
  ];

  let hasValidationErrors = false;

  validations.forEach((validation) => {
    if (validation.condition) {
      mostrarMensajeValidacion(validation.message);
      nameField.focus();
      hasValidationErrors = true;
      return;
    }
  });

  if (!hasValidationErrors) {
    myForm.submit();
  }
});

function mostrarMensajeValidacion(mensaje) {
  const mensajeElemento = document.createElement("p");
  mensajeElemento.classList.add("validation-message");
  mensajeElemento.textContent = mensaje;
  myForm.appendChild(mensajeElemento);
}
