$(document).ready(function(){


	$("#menu_drop").mouseover(function(){
        $(".dropdown-menu").show();
    });

    $("#menu_drop").mouseout(function(){
        $(".dropdown-menu").hide();
    });

    $("#opt1").click(function(){
    	$(".historia").show();
        $(".codificador").hide();
        $(".decodificador").hide();
    });

    $("#opt2").click(function(){
        $(".codificador").show();
        $(".decodificador").hide();
        $(".historia").hide();
    });

    $("#opt3").click(function(){
        $(".decodificador").show();
        $(".codificador").hide();
        $(".historia").hide();
    });

	$("#codificar").click(function(){
		var traducao = "";
		var texto = $("#codificador").val().split('');

		for (var i = 0; i <= texto.length; i++){
			var aux = texto[i];
			switch(aux){
				
				//Números
				case '0':  traducao += '3'; break;
				case '1':  traducao += '4'; break;
				case '2':  traducao += '5'; break;
				case '3':  traducao += '6'; break;
				case '4':  traducao += '7'; break;
				case '5':  traducao += '8'; break;
				case '6':  traducao += '9'; break;
				case '7':  traducao += '0'; break;
				case '8':  traducao += '1'; break;
				case '9':  traducao += '2'; break;

				//Caracteres
				case 'a':  traducao += 'd'; break;
				case 'A':  traducao += 'D'; break;
				case 'b':  traducao += 'e'; break;
				case 'B':  traducao += 'E'; break;
				case 'c':  traducao += 'f'; break;
				case 'C':  traducao += 'F'; break;
				case 'd':  traducao += 'g'; break;
				case 'D':  traducao += 'G'; break;				
				case 'e':  traducao += 'h'; break;
				case 'E':  traducao += 'H'; break;				
				case 'f':  traducao += 'i'; break;
				case 'F':  traducao += 'I'; break;				
				case 'g':  traducao += 'j'; break;
				case 'G':  traducao += 'J'; break;				
				case 'h':  traducao += 'k'; break;
				case 'H':  traducao += 'K'; break;				
				case 'i':  traducao += 'l'; break;
				case 'I':  traducao += 'L'; break;				
				case 'j':  traducao += 'm'; break;
				case 'J':  traducao += 'M'; break;				
				case 'k':  traducao += 'n'; break;
				case 'K':  traducao += 'N'; break;				
				case 'l':  traducao += 'o'; break;
				case 'L':  traducao += 'O'; break;				
				case 'm':  traducao += 'p'; break;
				case 'M':  traducao += 'P'; break;				
				case 'n':  traducao += 'q'; break;
				case 'N':  traducao += 'Q'; break;
				case 'o':  traducao += 'r'; break;
				case 'O':  traducao += 'R'; break;
				case 'p':  traducao += 's'; break;
				case 'P':  traducao += 'S'; break;
				case 'q':  traducao += 't'; break;
				case 'Q':  traducao += 'T'; break;
				case 'r':  traducao += 'u'; break;
				case 'R':  traducao += 'U'; break;
				case 's':  traducao += 'v'; break;
				case 'S':  traducao += 'V'; break;
				case 't':  traducao += 'w'; break;
				case 'T':  traducao += 'W'; break;
				case 'u':  traducao += 'y'; break;
				case 'U':  traducao += 'Y'; break;
				case 'v':  traducao += 'x'; break;
				case 'V':  traducao += 'X'; break;
				case 'w':  traducao += 'z'; break;
				case 'W':  traducao += 'Z'; break;
				case 'y':  traducao += 'a'; break;
				case 'Y':  traducao += 'A'; break;
				case 'x':  traducao += 'b'; break;
				case 'X':  traducao += 'B'; break;
				case 'z':  traducao += 'c'; break;
				case 'Z':  traducao += 'C'; break;

				//Caracteres Especiais
				case '"':  traducao += '"'; break;
				case '!':  traducao += '!'; break;
				case '@':  traducao += '@'; break;
				case '#':  traducao += '#'; break;
				case '$':  traducao += '$'; break;
				case '%':  traducao += '%'; break;
				case '¨':  traducao += '¨'; break;
				case '&':  traducao += '&'; break;
				case '*':  traducao += '*'; break;
				case '(':  traducao += '('; break;
				case ')':  traducao += ')'; break;
				case '-':  traducao += '-'; break;
				case '=':  traducao += '='; break;
				case '/':  traducao += '/'; break;
				case '_':  traducao += '_'; break;
				case '´':  traducao += '´'; break;
				case '`':  traducao += '`'; break;
				case '^':  traducao += '^'; break;
				case ':':  traducao += ':'; break;
				case '{':  traducao += '{'; break;
				case '}':  traducao += '}'; break;
				case '[':  traducao += '['; break;
				case ']':  traducao += ']'; break;
				case ';':  traducao += ';'; break;
				case '|':  traducao += '|'; break;
				case '?':  traducao += '?'; break;
				case '<':  traducao += '<'; break;
				case '>':  traducao += '>'; break;
				case 'á':  traducao += 'á'; break;
				case 'é':  traducao += 'é'; break;
				case 'í':  traducao += 'í'; break;
				case 'ó':  traducao += 'ó'; break;
				case 'ú':  traducao += 'ú'; break;
				case 'Á':  traducao += 'Á'; break;
				case 'É':  traducao += 'É'; break;
				case 'Í':  traducao += 'Í'; break;
				case 'Ó':  traducao += 'Ó'; break;
				case 'Ú':  traducao += 'Ú'; break;		
				case 'â':  traducao += 'â'; break;
				case 'ê':  traducao += 'ê'; break;
				case 'î':  traducao += 'î'; break;
				case 'ô':  traducao += 'ô'; break;
				case 'û':  traducao += 'û'; break;
				case 'Â':  traducao += 'Â'; break;
				case 'Ê':  traducao += 'Ê'; break;
				case 'Î':  traducao += 'Î'; break;
				case 'Ô':  traducao += 'Ô'; break;
				case 'Û':  traducao += 'Û'; break;
				case 'ã':  traducao += 'ã'; break;
				case 'Ã':  traducao += 'Ã'; break;		
				case 'õ':  traducao += 'õ'; break;
				case 'Õ':  traducao += 'Õ'; break;

				default:  traducao += " "; break;
			}
		}

		$("#txt_encode").text(traducao);
	});



	$("#decodificar").click(function(){
		var texto = $("#decodificador").val().split('');
		var traducao = "";

		for (var i = 0; i <= texto.length; i++){
			var aux = texto[i];
			switch(aux){
				
				//Números
				case '3':  traducao += '0'; break;
				case '4':  traducao += '1'; break;
				case '5':  traducao += '2'; break;
				case '6':  traducao += '3'; break;
				case '7':  traducao += '4'; break;
				case '8':  traducao += '5'; break;
				case '9':  traducao += '6'; break;
				case '0':  traducao += '7'; break;
				case '1':  traducao += '8'; break;
				case '2':  traducao += '9'; break;

				//Caracteres
				case 'd':  traducao += 'a'; break;
				case 'D':  traducao += 'A'; break;
				case 'e':  traducao += 'b'; break;
				case 'E':  traducao += 'B'; break;
				case 'f':  traducao += 'c'; break;
				case 'F':  traducao += 'C'; break;
				case 'g':  traducao += 'd'; break;
				case 'G':  traducao += 'D'; break;				
				case 'h':  traducao += 'e'; break;
				case 'H':  traducao += 'E'; break;				
				case 'i':  traducao += 'f'; break;
				case 'I':  traducao += 'F'; break;				
				case 'j':  traducao += 'g'; break;
				case 'J':  traducao += 'G'; break;
				case 'k':  traducao += 'h'; break;
				case 'K':  traducao += 'H'; break;				
				case 'l':  traducao += 'i'; break;
				case 'L':  traducao += 'I'; break;				
				case 'm':  traducao += 'j'; break;
				case 'M':  traducao += 'J'; break;				
				case 'n':  traducao += 'k'; break;
				case 'N':  traducao += 'K'; break;				
				case 'o':  traducao += 'l'; break;
				case 'O':  traducao += 'L'; break;				
				case 'p':  traducao += 'm'; break;
				case 'P':  traducao += 'M'; break;				
				case 'q':  traducao += 'n'; break;
				case 'Q':  traducao += 'N'; break;
				case 'r':  traducao += 'o'; break;
				case 'R':  traducao += 'O'; break;
				case 's':  traducao += 'p'; break;
				case 'S':  traducao += 'P'; break;
				case 't':  traducao += 'q'; break;
				case 'T':  traducao += 'Q'; break;
				case 'u':  traducao += 'r'; break;
				case 'U':  traducao += 'R'; break;
				case 'v':  traducao += 's'; break;
				case 'V':  traducao += 'S'; break;
				case 'w':  traducao += 't'; break;
				case 'W':  traducao += 'T'; break;
				case 'y':  traducao += 'u'; break;
				case 'Y':  traducao += 'U'; break;
				case 'x':  traducao += 'v'; break;
				case 'X':  traducao += 'V'; break;
				case 'z':  traducao += 'w'; break;
				case 'Z':  traducao += 'W'; break;
				case 'a':  traducao += 'y'; break;
				case 'A':  traducao += 'Y'; break;
				case 'b':  traducao += 'x'; break;
				case 'B':  traducao += 'X'; break;
				case 'c':  traducao += 'z'; break;
				case 'C':  traducao += 'Z'; break;


				//Caracteres Especiais
				case '"':  traducao += '"'; break;
				case '!':  traducao += '!'; break;
				case '@':  traducao += '@'; break;
				case '#':  traducao += '#'; break;
				case '$':  traducao += '$'; break;
				case '%':  traducao += '%'; break;
				case '¨':  traducao += '¨'; break;
				case '&':  traducao += '&'; break;
				case '*':  traducao += '*'; break;
				case '(':  traducao += '('; break;
				case ')':  traducao += ')'; break;
				case '-':  traducao += '-'; break;
				case '=':  traducao += '='; break;
				case '/':  traducao += '/'; break;
				case '_':  traducao += '_'; break;
				case '´':  traducao += '´'; break;
				case '`':  traducao += '`'; break;
				case '^':  traducao += '^'; break;
				case ':':  traducao += ':'; break;
				case '{':  traducao += '{'; break;
				case '}':  traducao += '}'; break;
				case '[':  traducao += '['; break;
				case ']':  traducao += ']'; break;
				case ';':  traducao += ';'; break;
				case '|':  traducao += '|'; break;
				case '?':  traducao += '?'; break;
				case '<':  traducao += '<'; break;
				case '>':  traducao += '>'; break;
				case 'á':  traducao += 'á'; break;
				case 'é':  traducao += 'é'; break;
				case 'í':  traducao += 'í'; break;
				case 'ó':  traducao += 'ó'; break;
				case 'ú':  traducao += 'ú'; break;
				case 'Á':  traducao += 'Á'; break;
				case 'É':  traducao += 'É'; break;
				case 'Í':  traducao += 'Í'; break;
				case 'Ó':  traducao += 'Ó'; break;
				case 'Ú':  traducao += 'Ú'; break;		
				case 'â':  traducao += 'â'; break;
				case 'ê':  traducao += 'ê'; break;
				case 'î':  traducao += 'î'; break;
				case 'ô':  traducao += 'ô'; break;
				case 'û':  traducao += 'û'; break;
				case 'Â':  traducao += 'Â'; break;
				case 'Ê':  traducao += 'Ê'; break;
				case 'Î':  traducao += 'Î'; break;
				case 'Ô':  traducao += 'Ô'; break;
				case 'Û':  traducao += 'Û'; break;
				case 'ã':  traducao += 'ã'; break;
				case 'Ã':  traducao += 'Ã'; break;		
				case 'õ':  traducao += 'õ'; break;
				case 'Õ':  traducao += 'Õ'; break;

				default:  traducao += " "; break;
			}

			$("#txt_decode").text(traducao);		
		}

	});

	$("#limpar").click(function(){
		$("#codificador").val('');
		$("#txt_encode").empty();

		$("#decodificador").val('');
		$("#txt_decode").empty();	
	});

});