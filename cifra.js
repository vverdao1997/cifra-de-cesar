//##############################################################
//EXIBE A OPÇÃO DESEJADA
//##############################################################
function view(tela){

	switch(tela){
		case "history":
			$(".historia").show();
			$(".codificador, .decodificador").hide();
		break;

		case "encode":
			$(".codificador").show();
			$(".decodificador, .historia").hide();
		break;

		case "decode":
			$(".decodificador").show();
			$(".codificador, .historia").hide();
		break;
	}
	
	limpeza();
}


//##############################################################
//CODIFICA O TEXTO EM CIFRA DE CESAR
//##############################################################
function codificador(){
	let texto = $("#codificador").val().split(''),
		traducao = "";

	for (let i = 0; i <= texto.length; i++){

		let aux = texto[i],
			entrada = ['0','1','2','3','4','5','6','7','8','9','a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z','"','!','@','#','$','%','¨','&','*','(',')','-','=','/','_','´','`','^',':','{','}','[',']',';','|','?','<','>','á','é','í','ó','ú','ç','Ç','Á','É','Í','Ó','Ú','â','ê','î','ô','û','Â','Ê','Î','Ô','Û','ã','Ã','õ','Õ'," "],
			saida = ['3','4','5','6','7','8','9','0','1','2','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T','u','U','v','V','w','W','y','Y','x','X','z','Z','a','A','b','B','c','C','"','!','@','#','$','%','¨','&','*','(',')','-','=','/','_','´','`','^',':','{','}','[',']',';','|','?','<','>','á','é','í','ó','ú','ç','Ç','Á','É','Í','Ó','Ú','â','ê','î','ô','û','Â','Ê','Î','Ô','Û','ã','Ã','õ','Õ'," "],
			posicao = entrada.indexOf(aux),
			conversao = saida[posicao];

		traducao += conversao == undefined ? "" : conversao;
		$("#txt_encode").val(traducao);		
	}
}


//##############################################################
//DECODIFICA O TEXTO CIFRADO
//##############################################################
function decodificador(){
	let texto = $("#decodificador").val().split(''),
		traducao = "";

	for (let i = 0; i <= texto.length; i++){

		let aux = texto[i],
			entrada = ['3','4','5','6','7','8','9','0','1','2','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T','u','U','v','V','w','W','y','Y','x','X','z','Z','a','A','b','B','c','C','"','!','@','#','$','%','¨','&','*','(',')','-','=','/','_','´','`','^',':','{','}','[',']',';','|','?','<','>','á','é','í','ó','ú','ç','Ç','Á','É','Í','Ó','Ú','â','ê','î','ô','û','Â','Ê','Î','Ô','Û','ã','Ã','õ','Õ', " "],
			saida = ['0','1','2','3','4','5','6','7','8','9','a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z', '"','!','@','#','$','%','¨','&','*','(',')','-','=','/','_','´','`','^',':','{','}','[',']',';','|','?','<','>','á','é','í','ó','ú','ç','Ç','Á','É','Í','Ó','Ú','â','ê','î','ô','û','Â','Ê','Î','Ô','Û','ã','Ã','õ','Õ', " "],
			posicao = entrada.indexOf(aux),
			conversao = saida[posicao];

		traducao += conversao == undefined ? "" : conversao;
		$("#txt_decode").val(traducao);		
	}
}


//##############################################################
//COPIA TEXTO PARA A AREA DE TRANSFERÊNCIA
//##############################################################
function copiar(modo){

	if(($(".codificador").is(":visible") && $("#txt_encode").val() == "") || ($(".decodificador").is(":visible") && $("#txt_decode").val() == "")){	
		swal("Atenção!", " ", "warning", {timer: 5000});
		$(".swal-text").html(`
			<p>Your text has not yet been <b>Encoded/Decoded</b><br><br>Select one of the options: <b>Encoder or Decoder.</b></p>
		`);
		return;
	}

	switch(modo){
		case "codificar": $("#txt_encode").select(); break;
		case "decodificar": $("#txt_decode").select(); break;
	}
	
	document.execCommand('copy');
	swal("Copied!", "", "success", {timer: 1000});
}


//##############################################################
//REALIZA A LIMPEZA DE TODOS OS CAMPOS
//##############################################################
function limpeza(){
	$("#codificador, #decodificador, #txt_encode, #txt_decode").val('');
}


//##############################################################
//EVENTOS DA TELA
//##############################################################
$(document).ready(function(){
	view('history');
	$("#menu_drop").mouseover(function(){ $(".dropdown-menu").show(); });
    $("#menu_drop").mouseout(function(){ $(".dropdown-menu").hide(); });	
});