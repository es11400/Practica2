// SMOOTH SCROLL
var navbarItems = document.getElementsByClassName('navbar-item');

for (var i = 0; i < navbarItems.length; i++) {
	//console.log(navbarItems[i]);
	navbarItems[i].addEventListener('click', function(evt){
		deleteActiveClass();
		this.classList.add('active');
		//var sectionToGo = this.getElementsByTagName('a')[0].href.split('#')[1];
		var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
		//console.log(sectionToGo);
		if ( sectionToGo.length > 1) {
			evt.preventDefault();
			var goTo = sectionToGo[sectionToGo.length -1]	
			getElementByIdAndScroll(goTo);
		}
		
		//console.log(goTo);
		
	});
};

function getElementByIdAndScroll(name) {
	var elem;
	if (name == '') {
		elem = document.getElementsByClassName('header')[0];
	} else {
		elem = document.getElementById(name);
	}

	scrollToElement(elem);
};

function scrollToElement(element) {
	var jump = parseInt((element.getBoundingClientRect().top - 50) * .3);  //LE QUITAMOS 50 POR LA ALTURA DEL NAVBAR QUE ESTA FIJA EN EL TOP
	document.body.scrollTop += jump;
	document.documentElement.scrollTop += jump;

	if (!element.lastJump || element.lastJump > Math.abs(jump)) {
		element.lastJump = Math.abs(jump);
		setTimeout(function(){
			scrollToElement(element)
		}, "60");
	} else {
		element.lastJump = null;
	}
}

// CHANGE ACTIVE ITEM
var cumulativeOffset = function(element) {
	var top = 0;
	do {
		top += element.offsetTop || 0;
		element = element.offsetParent;
	} while(element);
	
	return top;
}



var offsetQuienSoy = cumulativeOffset(document.getElementById('quien-soy'));
var offsetEstudios = cumulativeOffset(document.getElementById('estudios'));
var offsetExperiencia = cumulativeOffset(document.getElementById('experiencia'));
var offsetSobreMi = cumulativeOffset(document.getElementById('sobre-mi'));
var offsetContacto = cumulativeOffset(document.getElementById('contacto'));
var navbar = document.getElementsByClassName('navbar')[0];
 
window.addEventListener('scroll', changeMenuStyle);

function changeMenuStyle(evt) {
	var previus;
	if(window.pageYOffset >= 0 && window.pageYOffset < offsetQuienSoy-60) {
		if (!previus){
			previus = 1;
		} else if (previus == 1) {
			return false;
		}
		navbar.style.backgroundColor = '#F7F7F7';
		deleteActiveClass();
		document.querySelector('a[href="#"]').parentNode.classList.add("active");
	} else if(window.pageYOffset >= offsetQuienSoy-60 && window.pageYOffset < offsetEstudios-60) {
		if (!previus){
			previus = 2;
		} else if (previus == 2) {
			return false;
		}
		navbar.style.backgroundColor = '#F4F4F4';
		deleteActiveClass();
		document.querySelector('a[href$="quien-soy"]').parentNode.classList.add("active");
	} else if(window.pageYOffset >= offsetEstudios-60 && window.pageYOffset < offsetExperiencia-60) {
		if (!previus){
			previus = 3;
		} else if (previus == 3) {
			return false;
		}
		navbar.style.backgroundColor = '#F7F7F7';
		deleteActiveClass();
		document.querySelector('a[href$="estudios"]').parentNode.classList.add("active");
	} else if(window.pageYOffset >= offsetExperiencia-60 && window.pageYOffset < offsetSobreMi-60) {
		if (!previus){
			previus = 3;
		} else if (previus == 3) {
			return false;
		}
		navbar.style.backgroundColor = '#F7F7F7';
		deleteActiveClass();
		document.querySelector('a[href$="experiencia"]').parentNode.classList.add("active");
	} else if(window.pageYOffset >= offsetSobreMi-60 && window.pageYOffset < offsetContacto-60) {
		if (!previus){
			previus = 3;
		} else if (previus == 3) {
			return false;
		}
		navbar.style.backgroundColor = '#F7F7F7';
		deleteActiveClass();
		document.querySelector('a[href$="sobre-mi"]').parentNode.classList.add("active");
	} else if(window.pageYOffset >= offsetContacto-100 ) {
		if (!previus){
			previus = 3;
		} else if (previus == 3) {
			return false;
		}
		navbar.style.backgroundColor = '#F7F7F7';
		deleteActiveClass();
		document.querySelector('a[href$="contacto"]').parentNode.classList.add("active");
	}
};

function deleteActiveClass() {
	for(var i = 0; i < navbarItems.length; i++){
		navbarItems[i].classList.remove('active');
		navbarItems[i].classList.remove('active-reverse');
	}
};