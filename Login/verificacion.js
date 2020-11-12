function obtener(){
    email = document.querySelector('#correo').value;
    contraseña = document.querySelector('#contraseña').value;

     if (email=="user@mail.com" && contraseña=="user123"){
        alert("Welcome");
    }else{
        alert("Incorrect Information\n Email: user@mail.com\n Password: user123");
    }
}