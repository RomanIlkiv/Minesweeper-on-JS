$(document).ready(function() {
	document.oncontextmenu = function() {return false;};
    
    /*Створення таблиці №1*/
    var table_1 = "<table id='back_net'>";
    
    k=1;
    for(i = 0; i < 9; i++ ) {
        table_1 += "<tr>";
        for (j = 0; j < 9; j++) {
            
            table_1 += "<td id='"+k+++"' class='back_td "+(k-1)+"'></td>";
        }
        table_1 += "</tr>";
    }
    
    table_1 += "</table>";
    
    /*Створення таблиці №2*/
    var table_2 = "<table id='net'>";
    
    k=1;
    for(i = 0; i < 9; i++ ) {
        table_2 += "<tr>";
        for (j = 0; j < 9; j++) {
            
            table_2 += "<td class='td "+k+++"'></td>";
        }
        table_2 += "</tr>";
    }
    
    table_2 += "</table>";    
    
    $("#table_container").html(table_1+table_2);
    
    
    
    
    
    
//    $(".td").click(function() {
//        $(this).css({"opacity":"0", "transition": "0.5s ease"});
//    });
    
    
    var arr, max_number, i, unic;
        arr = [];
        max_number = 81;
    
    /*Функція генерації масива з 10-ма елементами*/
    function Generete() {    

            while (arr.length < 10) {
              do {
                unic = true;
                a = Math.ceil(Math.random() * 81);
                for (i = 0; i < arr.length; i++) {
                  if (a == arr[i]) {
                    // таке число вже було
                    unic = false;
                    break;
                  }
                }
              } while (!unic) // повторити генерацію числа
              arr.push(a);
            }
        }
    
    Generete(); //Генерація бомб при обновленні
    
    /*Розставлення бомб при обовленні сторінки*/
    for (i = 0; i <= 9; i++) {
        $("#"+arr[i]).html("<img src='img/bomb.png' width='25' height='20' style='padding-top: 3px; padding-right: 2px;'>");
    }
	
	$("#head_img").click(function() {
		alert(box);
	});
	
	
	var box = 1;
	var n = 1;
	$(".td").mousedown(function(event){
    	event.preventDefault();
		if(event.button == 0){
			if ($(this).hasClass("disabled")) {
				return false;	
			} else {
				$(this).css({"opacity":"0", "transition": "0.5s ease"}).addClass("disabled");
				box++;
			}
			if (box == 72) {
				$(".over").html("You win!!!");	
			}
		} else if(event.button == 2){
			if (n <= 10) {
				console.log(event);
				if (event.target.tagName === "IMG") {
					$(this).html("");
					n--;
				}
				else {
					if ($(this).hasClass("disabled")) {
						return false;	
					} else {
						$(this).html("<img src='img/flag.png' width='25' height='20' style='padding-top: 6px; padding-left: 0px;'>");
						n++;	
					}
				
				}
			}
		}
	});
    
    
    /*Генерація бомб при кліку на кнопку*/
    $("#new_game").click(function() {
        
        $(".back_td").html("");
        
        arr = [];
        Generete();
        
        for (i = 0; i <= 9; i++) {
        $("#"+arr[i]).html("<img src='img/bomb.png' width='25' height='20' style='padding-top: 3px; padding-right: 2px;'>");   
        }          
    });
    
    /*Роставлення чисел для комірок, які мають по 8 сусідів*/
    for (i = 11; i <= 71; i++) {
        if ($('td#'+i+' img').length == 0) {
            k=1;  
            if ($('td#'+(i-10)+' img').length > 0) {
                 $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            
            if ($('td#'+(i-9)+' img').length > 0) {
                 $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i-8)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i-1)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i+1)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i+8)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i+9)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i+10)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
   
        }
        
    }
    
    /*Роставлення чисел для комірок, які мають по 5 сусідів для нижньої горизонталі*/
    for (i = 2; i <= 8; i++) {
        if ($('td#'+i+' img').length == 0) {
            k=1;  
            if ($('td#'+(i-1)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i+1)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i+8)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i+9)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i+10)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
   
        }
        
    }
    
    /*Роставлення чисел для комірок, які мають по 5 сусідів для верхньої горизонталі*/
    for (i = 74; i <= 80; i++) {
        if ($('td#'+i+' img').length == 0) {
            k=1;  
            if ($('td#'+(i-10)+' img').length > 0) {
                 $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            
            if ($('td#'+(i-9)+' img').length > 0) {
                 $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i-8)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i-1)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i+1)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
   
        }
        
    }
    
    
    /*Роставлення чисел для комірок, які мають по 5 сусідів для лівої вертикалі*/
    for (i = 10; i <= 64; i+=9) {
        if ($('td#'+i+' img').length == 0) {
            $('td#'+i).html("");
            k=1;              
            if ($('td#'+(i-9)+' img').length > 0) {
                 $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i-8)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i+1)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i+9)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i+10)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
        }   
    }
    
    
    /*Роставлення чисел для комірок, які мають по 5 сусідів для правої вертикалі*/
    for (i = 18; i <= 72; i+=9) {
        if ($('td#'+i+' img').length == 0) {
            $('td#'+i).html("");
            k=1;              
            if ($('td#'+(i-10)+' img').length > 0) {
                 $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            
            if ($('td#'+(i-9)+' img').length > 0) {
                 $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i-1)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i+8)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
            if ($('td#'+(i+9)+' img').length > 0) {
                $('td#'+i).html("<span class='number'>"+k+++"</span>");
            }
        }   
    }
    
    /*Роставлення чисел для комірок, які мають по 3 сусіда для лівого верхнього кута*/
    if ($("td#1 img").length == 0) {
        k=1;
        if ($('td#2 img').length > 0) {
            $('td#1').html("<span class='number'>"+k+++"</span>");
        }
        if ($('td#10 img').length > 0) {
            $('td#1').html("<span class='number'>"+k+++"</span>");
        }
        if ($('td#11 img').length > 0) {
            $('td#1').html("<span class='number'>"+k+++"</span>");
        }
    }
    
    /*Роставлення чисел для комірок, які мають по 3 сусіда для правого верхнього кута*/
    if ($("td#9 img").length == 0) {
        k=1;
        if ($('td#8 img').length > 0) {
            $('td#9').html("<span class='number'>"+k+++"</span>");
        }
        if ($('td#17 img').length > 0) {
            $('td#9').html("<span class='number'>"+k+++"</span>");
        }
        if ($('td#18 img').length > 0) {
            $('td#9').html("<span class='number'>"+k+++"</span>");
        }
    }
    
    /*Роставлення чисел для комірок, які мають по 3 сусіда для лівого нижнього кута*/
    if ($("td#1 img").length == 0) {
        k=1;
        if ($('td#64 img').length > 0) {
            $('td#73').html("<span class='number'>"+k+++"</span>");
        }
        if ($('td#65 img').length > 0) {
            $('td#73').html("<span class='number'>"+k+++"</span>");
        }
        if ($('td#74 img').length > 0) {
            $('td#73').html("<span class='number'>"+k+++"</span>");
        }
    }
    
    /*Роставлення чисел для комірок, які мають по 3 сусіда для правого нижнього кута*/
    if ($("td#1 img").length == 0) {
        k=1;
        if ($('td#71 img').length > 0) {
            $('td#81').html("<span class='number'>"+k+++"</span>");
        }
        if ($('td#72 img').length > 0) {
            $('td#81').html("<span class='number'>"+k+++"</span>");
        }
        if ($('td#80 img').length > 0) {
            $('td#81').html("<span class='number'>"+k+++"</span>");
        }
    }
    


    
    
    
/*____________Дії при програші______________*/
    for(j=0; j<=9; j++) {
		$("."+arr[j]).click(function() {
			$(".over").html("Game Over");
			for (i = 0; i <= 9; i++) {
				$("#net ."+arr[i]).css({"opacity":"0", "transition":"1.5s ease"});
			}
			 //$(".td").css({"opacity":"0", "transition":"1.5s ease"}); НОРМ ВАРIАНТ ПРОГРАШУ
		});
	}
});