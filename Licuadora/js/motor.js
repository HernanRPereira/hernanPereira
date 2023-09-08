var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");



function controlarLicuadora(){
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        hacerBrrBrr();
        licuadora.classList.add("active");
        /* console.log("Encendido");  */               
    } else {
        estadoLicuadora = "apagada";
        hacerBrrBrr();
        licuadora.classList.remove("active");
        /* console.log("Apagado"); */
    };
};

function hacerBrrBrr(){
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0; 
    }
}