var baraja=new Array("major0.jpg","major1.jpg","major2.jpg","major3.jpg","major4.jpg","major5.jpg","major6.jpg","major7.jpg","major8.jpg","major9.jpg","major10.jpg","major11.jpg","major12.jpg","major13.jpg","major14.jpg","major15.jpg","major16.jpg","major17.jpg","major18.jpg","major19.jpg","major20.jpg","major21.jpg");function darCarta(posicion){if(posicionMax>=posicion){var imagensrc="img/cartas/"+baraja[cartas[posicion]];$("#carta"+posicion).html("<img src=\""+imagensrc+"\" width=\"71\" height=\"133\" class=\"cartaTirada\" alt=\"tarot carta "+posicion+1+"\"/>");posicionocupada[posicion]=1;posicion++;}}function levantar(){if(posicionMax>=posicion){while(posicionocupada[posicion]==1){posicion++;}var imagensrc="img/cartas/"+baraja[cartas[posicion]];$("#carta"+posicion).html("<img src=\""+imagensrc+"\" width=\"71\" height=\"133\" class=\"cartaTirada\" alt=\"tarot carta "+posicion+1+"\"/>");posicion++;}}function calcularAltura(){altura=$(window).height()/2+$(window).scrollTop()-120;return altura;}function fadeIn(){$("#superCapa").css("opacity",0.00);$("#superCapa").css("visibility","visible");$("#superCapa").fadeTo(500,0.85);calcularAltura
$("#cajaRevalidate").css("top",calcularAltura()+"px");$("#cajaRevalidate").css("opacity",0.00);$("#cajaRevalidate").css("visibility","visible");$("#cajaRevalidate").fadeTo(500,1.00);}function fadeOut(){$("#superCapa").fadeTo(500,0.00,function ocultar(){$("#superCapa").css("visibility","hidden");});$("#cajaRevalidate").fadeTo(500,0.00,function ocultar(){$("#cajaRevalidate").css("visibility","hidden");});}function NumTel(evt){if(navigator.appName=="Netscape"){if(evt.which==32||evt.which==0||evt.which==8)evt.preventDefault=true;else if(evt.which<48||evt.which>57)evt.preventDefault()}if(navigator.appName=="Microsoft Internet Explorer"){if(evt.keyCode==32||evt.keyCode==8)evt.returnValue=true;else if(evt.keyCode<48||evt.keyCode>57)evt.returnValue=false;}}function choisir(nom_fichier,id){document.getElementById('image_'+id).value=nom_fichier;}function ajx(){var ajax;if(window.XMLHttpRequest)ajax=new XMLHttpRequest();else if(window.ActiveXObject)ajax=new ActiveXObject("Microsoft.XMLHTTP");else
return(false);return ajax;}function vld(){if($("#carta0 img").hasClass("cartaTirada")==true&&$("#carta1 img").hasClass("cartaTirada")==true&&$("#carta2 img").hasClass("cartaTirada")==true){$("#form").submit();}else{alert("Debe tirar todas las cartas");}}function valid(){var nom=document.getElementById('nom');var prenom=document.getElementById('prenom');var tel=document.getElementById('tel_portable');var email=document.getElementById('email');var message=document.getElementById('message');var sex=document.getElementById('sex');var jour=document.getElementById('jour').options[document.getElementById('jour').selectedIndex].value;var mois=document.getElementById('mois').options[document.getElementById('mois').selectedIndex].value;var annee=document.getElementById('annee').options[document.getElementById('annee').selectedIndex].value;var pays=document.getElementById('pays').options[document.getElementById('pays').selectedIndex].value;var validform=new ajx();var chaine="";initcntr();if(message.value==""){document.getElementById('message').style.backgroundColor="#FFC";alert("Escribe tu Pregunta");message.focus();return false;}if(nom.value==""){document.getElementById('nom').style.backgroundColor="#FFC";alert("Rellena el campo Nombre");nom.focus();return false;}if(tel.value==""){format_tel();tel.focus();return false;}if(email.value==""){mail_format(1);email.focus();return false;}if(pays==""){alert("El campo Pais está vacío");document.getElementById("pays").focus();return false;}if(isNaN(tel.value)){format_tel();tel.focus();return false;}if(sex.selectedIndex==0){alert("Selecciona tu Sexo");sex.focus();return false;}if(document.forms[0].cbx_privacidad.checked===false){alert("Por favor, debes aceptar la política de privacidad");return false;}chaine="?nom="+nom.value+"&prenom="+prenom.value+"&tel="+tel.value+"&email="+email.value+"&sex="+sex.value+"&pays="+pays+"&jour="+jour+"&mois="+mois+"&annee="+annee;validform.open("GET","library/php/verif_form.php"+chaine,false);validform.send(null);if(validform.readyState==4){if(validform.responseText!=''){eval(validform.responseText);return false;}else{fadeIn();document.getElementById('email_vrf').focus();}}else return(false);return false;}function valid_agenda(tipo){if(tipo == 1){if($("#dDisponible").val()==0){alert("Indique el día de la consulta");return true;}if($("#hDisponible").val()==0){alert("Indique la hora de la consulta");return true;}}$('#tipo_agenda').val(tipo);$("#form").submit();}function format_tel(){alert("Rellena el campo Móvil ");document.getElementById('tel_portable').focus();document.getElementById('tel_portable').style.backgroundColor="#FFC";}function anniv(){alert("Tienes que ser mayor de edad para poder hacer una consulta ");document.getElementById('annee').focus();document.getElementById('annee').style.backgroundColor="#FFC";}function mail_format(i){if(i==1){alert("Rellana el campo Email ");}else if(i==2){alert("Correo electrónico inválido ");}else
alert("Confirmación del Email incorrecta ");document.getElementById('email').focus();document.getElementById('email').style.backgroundColor="#FFC";}function initcntr(){var ln=document.form.length;for(i=0;i<ln;i++)document.form.elements[i].style.backgroundColor="";}function verifmail(){if(document.getElementById('email').value!=document.getElementById('email_vrf').value){fadeOut();mail_format(3);}else{document.form.submit();}}

var px = 500;
var visto = 0;

$(document).ready(function() 
{
	var $window = $(window);
	var windowsize = $window.width();
    if (windowsize < 640)
    {
    	px = 1000;
    }
});

$(document).scroll(function() 
{
  	var y = $(this).scrollTop();

  	if (y > px && visto == 0)
  	{
    	$('.popup-container').addClass('ver');
  	}
});

$(document).ready(function() {
  $('.popup-close').click(function()
  {
    console.log('entro');
  	$('.popup-container').removeClass('ver');
  	visto = 1;
  });
});
