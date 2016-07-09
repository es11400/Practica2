var form = document.getElementById("form-contact");
var inputNombre = document.getElementById("nombre");
var inputEmail  = document.getElementById("email");
var inputComoNosConocio = document.getElementsByName("comonosconocio");
var opcionesComoNosConocio = {
  "prensa": document.getElementById("prensa"),
  "email": document.getElementById("email"),
  "internet": document.getElementById("internet"),
  "otros": document.getElementById("otros")
};
var inputOtrosComoNosConocio = document.createElement("input");
var inputTelefono = document.getElementById("telefono");
var textareaObservaciones = document.getElementById("observaciones");
var cuantosCaracteres = document.getElementById("cuantosCaracteres");


inputOtrosComoNosConocio.setAttribute("id", "otroscomonosconocio");
inputOtrosComoNosConocio.setAttribute("type", "text");
inputOtrosComoNosConocio.setAttribute("name", "otroscomonosconocio");
inputOtrosComoNosConocio.setAttribute("placeholder", "Otros");
inputOtrosComoNosConocio.setAttribute("required", "");

for (var i = 0; i < inputComoNosConocio.length; i++) {
	inputComoNosConocio[i].addEventListener("click", function(){
		if (this.value == 'otros'){
			this.parentNode.appendChild(inputOtrosComoNosConocio);
            inputOtrosComoNosConocio.focus();
		} else {
			if(document.getElementById("otroscomonosconocio")) {
				this.parentNode.removeChild(inputOtrosComoNosConocio);
			}	
		}
	})
};

inputTelefono.addEventListener('keypress', function(evt) {
   if (evt.keyCode > 47 && evt.keyCode < 58) {

   } else {
       evt.preventDefault();
   }
});

textareaObservaciones.addEventListener('keyup', function(evt) {
    //alert(textareaObservaciones.value.length);
   if (this.value.length >= 150) {
       evt.preventDefault();
   } else {
       cuantosCaracteres.innerHTML = (150 - this.value.length) + " caracteres";
   }
});

form.addEventListener("submit", function(evt) {
   var submitInput = document.getElementById("enviar");
    if (inputNombre.checkValidity() == false) {
        inputNombre.classList.add("error");
        inputNombre.focus();
        evt.preventDefault();
        return false;
    };
    
    if(inputEmail.checkValidity() == false) {
		inputEmail.classList.add("error");
		inputEmail.focus();
		evt.preventDefault();
		return false;
	};
    
    if (opcionesComoNosConocio.prensa.checkValidity() == false) {
		inputComoNosConocio.classList.add("error");
		evt.preventDefault();
		return false;

	};
    
    if(document.getElementById("otroscomonosconocio")){
		if(document.getElementById("otroscomonosconocio").checkValidity() == false) {	
            inputOtrosComoNosConocio.classList.add("error");
			document.getElementById("otroscomonosconocio").focus();
			evt.preventDefault();
			return false;
		}
	};
    
    submitInput.appendChild(loadingButton);
	evt.preventDefault();

	setTimeout(function(){
		submitInput.removeChild(loadingButton);
		sendNotification("Formulario recibido");
	}, 1000);
    
    
});