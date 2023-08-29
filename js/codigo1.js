
function cambiar1() {
	document.getElementById("imagen").src="Imagenes/Frente/Imagen Central 1.jpg"
	
}
function restaurar1() {
	document.getElementById("imagen").src="Imagenes/Frente/Imagen Central.jpg"
}

function registrar()
{
	a=document.getElementById("Nombre").value;
	b=document.getElementById("email").value;
	c=document.getElementById("Contraseña").value;
	d=document.getElementById("Repita Contraseña").value;
	if(a=="")
	{	alert("DIGITE SU NOMBRE")}
		var ban1;
		for(i=0;i<a.length;i++)
	{	if(a[i]>='A'&&a[i]<='Z')
		{	ban1=true;}
		else
		{	ban1=false;i=a.length;}
	}
	if(ban1)
	{	alert("CAMPO NOMBRE INCLUIDO CORRECTAMENTE")}
	else
	{	alert("DIGITE SU NOMBRE CORRECTAMENTE")
		document.getElementById("Nombre").value;}
	if(b=="")
	{	alert("DIGITE SU CORREO")}
	else
	{	alert("CAMPO CORREO INCLUIDO CORRECTAMENTE")}
	var z=0;
	for(i=0;i<c.length;i++)
	{	z++;}
	if(z>=8)
	{	var cont = 0;
		var cont2 = 0;
		for(i=0;i<c.length;i++)
		{	if(c[i]>='A'&&c[i]<='Z')
			{	cont++;}
			if(c[i]>='0'&&c[i]<='9')
			{	cont2++;}
		}
		if(cont==0||cont2==0)
		{	alert("DIGITE AL MENOS UNA LETRA MAYUSCULA Y UN NUMERO EN SU CONTRASEÑA")}
		else
		{	alert("CAMPO PASSWORD INCLUIDO CORRECTAMENTE")}
		if(b=="")
		{	alert("REPITA SU CONTRASEÑA");}
		else
		{	if (c != d) 
			{  	alert("LOS PASWORD DEBEN COINCIDIR");}
			else 
			{	alert("TODO ESTA CORRECTO");}
		}
	}
	else
	{	alert("EL PASSWORD DEBE TENER ALMENOS 8 CARACTERES")}
}
