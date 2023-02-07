let form = document.querySelector('form')
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Envoi du form détecté !')
    let email = document.querySelector("#email")
    console.log(email)
    if (email.value == ""){
        email.classList.add("pasok")
       if(email.classList.contains("ok")) email.classList.remove("ok")
    }
    else {
        email.classList.add("ok")
      if(email.classList.contains("pasok"))  email.classList.remove("pasok")
    }

    console.log(nom)
    if (nom.value == ""){
        nom.classList.add("pasok")
       if(nom.classList.contains("ok")) nom.classList.remove("ok")
    }
    else {
        nom.classList.add("ok")
      if(nom.classList.contains("pasok"))  nom.classList.remove("pasok")
    }

    console.log(prénom)
    if (prénom.value == ""){
        prénom.classList.add("pasok")
       if(prénom.classList.contains("ok")) prénom.classList.remove("ok")
    }
    else {
        prénom.classList.add("ok")
      if(prénom.classList.contains("pasok"))  prénom.classList.remove("pasok")
    }
})