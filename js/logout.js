import { app, auth, logout } from './config.js';

document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById('logout');
    console.log(logoutButton); //Verificación del que botón logout esta cargado en el DOM
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        logout() //Llamando la función 'logout' importada desde 'config.js'
            .then(() => {
                console.log('Cierre de sesión exitoso');
                // Redirigiendo a la página de login
                window.location.href = "login.html";
            })
            .catch((error) => {
                console.log('Error al cerrar sesión:', error.message);
            });
    });
});