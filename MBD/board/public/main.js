$(function(){
	var socket= io.connect(); 
	 
	$('#button').click(function(){//��HTml�̪�������U�ɪ��\��
		
		var message = $('#message').val();//�]id=input��쪺���e��message
		var name= $('#name').val();//�]id=ame��쪺���e��name
		$('.inner').append('<p><h1>'+name+'</h1></p>');//�b<div style=inner>�K�[�T�������
		$('.inner').append('<p>' +message+ '</p>');
		//console.log(message);
		socket.emit('message',{//�ǰedata�������A��(data����]�t�W�l�M�T��)
			name:name,
			message:message,
		});
	});
	socket.on('message',function(data){//�����q���A�ݼs�����T���M�W��
		
		$('.inner').append('<p><h1>'+data.name+'</h1></p>');//�b<div style=inner>�K�[�T�������
		$('.inner').append('<p>' +data.message+ '</p>');
		
		
	});
		
		
});	

	