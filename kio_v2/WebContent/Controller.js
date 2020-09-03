var menu;


function CallServer(text,obj){
    $.get("127.0.0.1:1337")
}
function Order_Info(){
	var table = document.getElementById("shopping-cart");
	var row = table.rows;
	menu = new Array(row.length);
	for(var i = 1; i < row.length; i++){
		menu[i-1] = new Array(3);
		menu[i-1][0] = row[i].cells[0].innerHTML;
		menu[i-1][1] = row[i].cells[2].innerHTML;
		menu[i-1][2] = row[i].cells[4].innerHTML;
	
	}
	return menu;
}
function Check(obj){
	var url = window.location.href;
	url = url.split('#')
	var thisfilefullname = url[0].substring(url[0].lastIndexOf("/") + 1, url[0].length);
	if(thisfilefullname == 'NewMenu.html' ){
		var table = document.getElementById("shopping-cart");
		var row = table.rows;
		if(row.length == 1) {
			alert('장바구니가 비었습니다.');
		}
		else{
			window.location.href = 'takeoutornot.html'+'#'+Order_Info();
		}
	}
	if(thisfilefullname == 'takeoutornot.html'){
		window.location.href = 'payment.html'+'#'+url[1]+'#'+'&'+obj.id;
	}

	if(thisfilefullname == 'payment.html'){
		
	}

}

function SetTotalPrice(){
   var table = document.getElementById("shopping-cart");
   var row = table.rows;
   var total = parseInt(0);
   
   for(i = 1; i < row.length; i++){
      total += parseInt(row[i].cells[4].innerHTML);
   }
   var p = 'Total Price  '+ total;
   var caption = document.getElementById("total");
   caption.innerHTML = p;

   
}

function SetShoppingCart(obj){
	var id = obj.id;
	var name = obj.name;
	var table = document.getElementById('shopping-cart');
	var row = table.rows;  
	for(i = 1; i < row.length; i++){
	   var str = row[i].cells[0].innerHTML;
	   if(str == id){
		   var c3 =  parseInt(row[i].cells[2].innerHTML)+1;
		   row[i].cells[2].innerHTML = c3;
		   var c5 = parseInt(name) *parseInt(c3);
		   row[i].cells[4].innerHTML =c5;
		   SetTotalPrice();
		   return 0;
	      }
	   }
	   
	   var x=document.getElementById('shopping-cart').insertRow(1);
	   var c1=x.insertCell(0); // 이름
	   var c2=x.insertCell(1); // 마이너스 버튼
	   var c3=x.insertCell(2); // 수량
	   var c4=x.insertCell(3); // 플러스버튼
	   var c5=x.insertCell(4); // 총가격
	   var c6=x.insertCell(5); // 삭제 버튼
	   c1.innerHTML=id;
	   c3.innerHTML=1;
	   c5.innerHTML=name;   
	    var button = document.createElement("button")
	    button. innerHTML = "-";
	    var td = document. getElementsByTagName("td")[1];
	    td.appendChild(button);
	    var button_2 = document.createElement("button")
	    button_2.innerHTML = "+";
	    var td = document. getElementsByTagName("td")[3];
	    td.appendChild(button_2);
	   var button_3 = document.createElement("button");
	   button_3.innerHTML="X";
	   var td = document.getElementsByTagName("td")[5];
	   td.appendChild(button_3);
	    button.id= id;
	   button.className= c5.innerHTML;
	   button_2.id = id;
	   button_2.className='plus';
	   button_3.id = id;
	   
	   button.onclick = function(){
	      var click = $(this).closest('tr').prevAll().length;
	      var c3 = parseInt(row[click].cells[2].innerHTML)-1;
	      if(c3 == 0){
	         row[click].remove();
	         SetTotalPrice();
	         return 0;
	      }
	      row[click].cells[2].innerHTML = c3;
	      var c5 = parseInt(name) * parseInt(c3);
	      row[click].cells[4].innerHTML= c5;
	      SetTotalPrice();
	      
	   }
	   button_2.onclick = function(){
	      var click = $(this).closest('tr').prevAll().length;
	      var c3 = parseInt(row[click].cells[2].innerHTML)+1;
	      row[click].cells[2].innerHTML = c3;
	      var c5 = parseInt(name) * parseInt(c3);
	      row[click].cells[4].innerHTML= c5;
	      SetTotalPrice();
	   }
	   button_3.onclick = function(){
	      var click = $(this).closest('tr').prevAll().length;
	      row[click].remove();
	      SetTotalPrice();
	      return 0;
	      
	   }
	   SetTotalPrice();
	
}

function show(obj){
	var Info = window.location.href;
	Info = decodeURIComponent(Info);
	Info = Info.split('#');
	/*url에서 정보 빼오는 코드 써야함 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
    setTimeout('go_url()',5000) 
   


}
function go_url(){
   window.location.href = "Main.html";
}