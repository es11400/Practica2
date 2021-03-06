var form = document.getElementById("form-contact");
var submitInput = document.getElementById("enviar");
var inputNombre = document.getElementById("inputnombre");
var inputEmail  = document.getElementById("email");
var inputComoNosConocio = document.getElementsByName("comonosconocio");
var opcionesComoNosConocio = {
  "prensa": document.getElementById("comonosconocio_prensa"),
  "email": document.getElementById("comonosconocio_email"),
  "internet": document.getElementById("comonosconocio_internet"),
  "otros": document.getElementById("comonosconocio_otros")
};
var inputOtrosComoNosConocio = document.createElement("input");
var inputTelefono = document.getElementById("telefono");
var textareaObservaciones = document.getElementById("observaciones");
var cuantosCaracteres = document.getElementById("cuantosCaracteres");

var loadingButton = document.createElement('i');
if (Modernizr.classList) {
    loadingButton.classList.add("fa", "fa-spinner", "fa-spin");
} else {
    loadingButton.className += ' fa fa-spinner fa-spin';
}


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

textareaObservaciones.addEventListener('keypress', function(evt) {

    var formcontent = this.value;
        formcontent = formcontent.trim();
        formcontent = formcontent.split(" ");
        numPalabras = formcontent.length;

   if (numPalabras > 149) {
       evt.preventDefault();
   } else {
       cuantosCaracteres.innerHTML = (149 - numPalabras) + " Palabras";
   }
});

form.addEventListener("submit", function(evt) {
   
    if (Modernizr.classList) {
        inputNombre.classList.remove("error");
        inputEmail.classList.remove("error");
        document.getElementById("label_comonosconocio").classList.remove("errorlabel");
        inputOtrosComoNosConocio.classList.remove("error");
        inputTelefono.classList.remove("error");
        textareaObservaciones.classList.remove("error");
        if(document.getElementById("otroscomonosconocio")){
            inputOtrosComoNosConocio.classList.remove("error");
        }
    } else {
        inputNombre.className = ' ';
        inputEmail.className = ' ';
        document.getElementById("label_comonosconocio").className = ' ';
        inputTelefono.className = ' ';
        textareaObservaciones.className = ' ';
        if(document.getElementById("otroscomonosconocio")){
            inputOtrosComoNosConocio.className = ' ';
        }
    }
    
    if (!Modernizr.formvalidation) {
       if (inputNombre.value.length == 0) {
             inputNombre.className += ' error';
             inputNombre.focus();
             evt.preventDefault();
             return false;
       }
    } else {
        if ( inputNombre.checkValidity() == false ) {
            if (Modernizr.classList) {
                inputNombre.classList.add("error");
            } else {
                inputNombre.className += ' error';
            }
            inputNombre.focus();
            evt.preventDefault();
            return false;
        };    
    };
    
 
    if (!Modernizr.formvalidation) {
            
       if (inputEmail.value.length == 0 || arroba_pos<1 || punto_pos<arroba_pos+2 || punto_pos+2>=inputEmail.value.length) {
            var arroba_pos = inputEmail.value.indexOf("@");
            var punto_pos = inputEmail.value.lastIndexOf(".");
            inputEmail.className += ' error';
            inputEmail.focus();
            evt.preventDefault();
            return false;
       }
    } else {
        if(inputEmail.checkValidity() == false) {
            if (Modernizr.classList) {
    		  inputEmail.classList.add("error");
    		  inputNombre.classList.remove("error");
            } else {
                inputEmail.className += ' error';
            }
            inputEmail.focus();
    		evt.preventDefault();
    		return false;
    	};
    };

    if (!Modernizr.formvalidation) {
        var chequeado = false;
        for (var i=0; i<inputComoNosConocio.length; i++) {
            if (inputComoNosConocio[i].type == 'radio' && inputComoNosConocio[i].checked) {
                chequeado = true;
            } 
        }   
        
        if (chequeado == false){
            document.getElementById("label_comonosconocio").className += ' error';      
            evt.preventDefault();
            return false;  
        }
    } else {
        if (opcionesComoNosConocio.prensa.checkValidity() == false) {
    		
            if (Modernizr.classList) {
                document.getElementById("label_comonosconocio").classList.add("errorlabel");
            } else {
                document.getElementById("label_comonosconocio").className += ' error';
            }
            
    		evt.preventDefault();
    		return false;

    	};
    };
    
    if(document.getElementById("otroscomonosconocio")){
        if (!Modernizr.formvalidation) {
           if (inputOtrosComoNosConocio.value.length == 0) {
                 inputOtrosComoNosConocio.className += ' error';
                 inputOtrosComoNosConocio.focus();
                 evt.preventDefault();
                 return false;
           }
        } else {
    		if(document.getElementById("otroscomonosconocio").checkValidity() == false) {	
                if (Modernizr.classList) {
                    inputOtrosComoNosConocio.classList.add("error");
                } else {
                    inputOtrosComoNosConocio.className += ' error';
                }
    			document.getElementById("otroscomonosconocio").focus();
    			evt.preventDefault();
    			return false;
    		};
        };
	};

    if (!Modernizr.formvalidation) {
       if (inputTelefono.value.length == 0) {
             inputTelefono.className += ' error';
             inputTelefono.focus();
             evt.preventDefault();
             return false;
       }
    } else {
        if ( inputTelefono.checkValidity() == false) {
            if (Modernizr.classList) {
                inputTelefono.classList.add("error");
            } else {
                inputTelefono.className += ' error';
            }
            inputTelefono.focus();
            evt.preventDefault();
            return false;
        };
    };

    if (!Modernizr.formvalidation) {
       if (textareaObservaciones.value.length == 0) {
             textareaObservaciones.className += ' error';
             textareaObservaciones.focus();
             evt.preventDefault();
             return false;
       }
    } else {
        if ( textareaObservaciones.checkValidity() == false) {
            if (Modernizr.classList) {
                textareaObservaciones.classList.add("error");
            } else {
                textareaObservaciones.className += ' error';
            }
            textareaObservaciones.focus();
            evt.preventDefault();
            return false;
        };
    }
    
    if (!Modernizr.formvalidation) {
        
        submitInput.appendChild(loadingButton);
        
        setTimeout(function(){
            submitInput.removeChild(loadingButton);
            alert("Mensaje Eviado Correctamente.")
        }, 3000);

        
    } else {
        
        submitInput.appendChild(loadingButton);
        evt.preventDefault();
        setTimeout(function(){
            submitInput.removeChild(loadingButton);
            sendNotification("Formulario recibido");
        }, 1000);
    }

	
    
   
});



