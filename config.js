const CONFIG = {
    nombreNegocio: "Barbería Elite",
    telefono: "+56926073767",
    colorPrincipal: "#d4af37",
    direccion: "Calle Ficticia 123, Curicó",
    instagram: "https://instagram.com/barberia_elite"
};

// Ejemplo: Cambiar el nombre en toda la web automáticamente
document.querySelectorAll('.logo').forEach(el => el.innerText = CONFIG.nombreNegocio);