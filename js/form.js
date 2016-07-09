var form = document.getElementById("form-contact");
var submitInput = document.getElementById("enviar");
var inputNombre = document.getElementById("inputnombre");
var inputEmail  = document.getElementById("email");
var inputComoNosConocio = document.getElementsByName("comonosconocio");
var opcionesComoNosConocio = {
  "prensa": document.getElementById("comonosconocio_prensa"),
  "email": document.getElementById("comonosconocio_email"),
  "internet": document.getElementById("comonosconocio_internet"),
  "otros": document.getElementById("comonosconocio_otros"),
};
var inputOtrosComoNosConocio = document.createElement("input");
var inputTelefono = document.getElementById("telefono");
var textareaObservaciones = document.getElementById("observaciones");
var cuantosCaracteres = document.getElementById("cuantosCaracteres");

var loadingButton = document.createElement('i');
loadingButton.classList.add("fa", "fa-spinner", "fa-spin");

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
    inputNombre.classList.remove("error");
    inputEmail.classList.remove("error");
    document.getElementById("label_comonosconocio").classList.remove("errorlabel");
    inputOtrosComoNosConocio.classList.remove("error");
    inputTelefono.classList.remove("error");
    textareaObservaciones.classList.remove("error");
    
    
    if ( inputNombre.checkValidity() == false) {
        inputNombre.classList.add("error");
        
        evt.preventDefault();
        return false;
    };
 
    
    if(inputEmail.checkValidity() == false) {
		inputEmail.classList.add("error");
		inputNombre.classList.remove("error");
		evt.preventDefault();
		return false;
	};
    
    if (opcionesComoNosConocio.prensa.checkValidity() == false) {
		//inputComoNosConocio.classList.add("error");
        document.getElementById("label_comonosconocio").classList.add("errorlabel");
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
    
    if ( inputTelefono.checkValidity() == false) {
        inputTelefono.classList.add("error");
        evt.preventDefault();
        return false;
    };
    
    if ( textareaObservaciones.checkValidity() == false) {
        textareaObservaciones.classList.add("error");
        evt.preventDefault();
        return false;
    };
    
    submitInput.appendChild(loadingButton);
	evt.preventDefault();

	setTimeout(function(){
		submitInput.removeChild(loadingButton);
		//sendNotification("Formulario recibido");
	}, 1000);
    
   
});