$(function(){
	var socket= io.connect(); 
	 
	$('#button').click(function(){//當HTml裡的按鍵按下時的功能
		
		var message = $('#message').val();//設id=input欄位的內容為message
		var name= $('#name').val();//設id=ame欄位的內容為name
		$('.inner').append('<p><h1>'+name+'</h1></p>');//在<div style=inner>添加訊息來顯示
		$('.inner').append('<p>' +message+ '</p>');
		//console.log(message);
		socket.emit('message',{//傳送data物件到伺服端(data物件包含名子和訊息)
			name:name,
			message:message,
		});
	});
	socket.on('message',function(data){//接收從伺服端廣播的訊息和名稱
		
		$('.inner').append('<p><h1>'+data.name+'</h1></p>');//在<div style=inner>添加訊息來顯示
		$('.inner').append('<p>' +data.message+ '</p>');
		
		
	});
		
		
});	

	