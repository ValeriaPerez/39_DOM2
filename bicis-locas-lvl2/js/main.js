function validateForm(){

//VARIABLES
	var nom = document.getElementById("name").value;//VALOR DE NOMBRE
	var ape = document.getElementById("lastname").value;// VALOR DE APELLIDO
	var mail = document.getElementById("input-email").value;// VALOR DE EMAIL
	var pass = document.getElementById("input-password").value;// VALOR DE PASSWORD
	var borraSpan = document.getElementsByTagName("span");//BORRAR SPAN

// LA MAGIA QUE VA A BORRAR MIS SPANS
	while(borraSpan.length > 0 )
		{
			borraSpan[0].parentElement.removeChild(borraSpan[0]);
		}
	var alertNombre = document.createElement("span");//CREANDO SPAN NOMBRE
	var alertApellido = document.createElement("span");//CREANDO SPAN APELLIDO
	var alertMail = document.createElement("span");//CREANDO SPAN MAIL

// NOMBRE Y CONDICIONES

	if( nom.length <= 0 ) 
		{
			alertNombre.innerHTML = " Ingresa tu Nombre porfi";
			document.getElementById("name").parentNode.appendChild(alertNombre);
		} 

	else if (!(/^[A-Z\s]*$/.test(nom[0]))) 
		{
			alertNombre.innerHTML = " Oye tu primer letra debe ser Mayuscula";
			document.getElementById("name").parentNode.appendChild(alertNombre);
		}

	else if (!(/^[a-zA-Z\s]*$/.test(nom)))
		{
			alertNombre.innerHTML = " Nombre no valido";
			document.getElementById("name").parentNode.appendChild(alertNombre);
		}

// APELLIDO Y CONDICIONES

	if( ape.length <= 0 ) 
		{
			alertApellido.innerHTML = " Ingresa tu Apellido porfi";
			document.getElementById("lastname").parentNode.appendChild(alertApellido);
		} 

	else if (!(/^[A-Z\s]*$/.test(ape[0]))) 
		{
			alertApellido.innerHTML = " Oye tu primer letra debe ser Mayuscula";
			document.getElementById("lastname").parentNode.appendChild(alertApellido);
		}

	else if (!(/^[a-zA-Z\s]*$/.test(ape)))
		{
			alertApellido.innerHTML = " Apellido no valido";
			document.getElementById("lastname").parentNode.appendChild(alertApellido);
		}

// MAIL Y CONDICIONES
	
	if( mail.length <= 0 ) 
		{
			alertMail.innerHTML = " Ingresa tu correo porfi";
			document.getElementById("input-email").parentNode.appendChild(alertMail);
		} 

	else if (!(/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/).test(mail)) 
		{
			alertMail.innerHTML = " Correo no valido";
			document.getElementById("input-email").parentNode.appendChild(alertApellido);
		}
	

}
