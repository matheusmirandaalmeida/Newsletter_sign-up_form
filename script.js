// const Database = require("@replit/database");
// const db = new Database();
// const form = document.querySelector('form');
// const emailInput = document.getElementById('email')
// const response = document.getElementById('response')

// form.addEventListener('submit', async function(event) {
//   event.preventDefault(); // Impedir o envio padrão do formulário

//   const email = emailInput.value;
//   response = emailInput.value;
//   try {
    
//     // Aguarde o db.set concluir
//     await db.set("email", email);
    
//     // Opcionalmente, você pode realizar ações após a conclusão do db.set
//     response.innerHTML = "Email foi salvo com sucesso." + email;
    
//   } catch (error) {
//     response.innerHTML = "Erro ao salvar email:" + error;
//   }
// });

document.getElementById("formulario").addEventListener("keydown", function(event) {
    if(event.key === "Enter"){
        event.preventDefault();
    }
});