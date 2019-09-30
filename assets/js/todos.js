// Check off specific Todos by clicking
$('ul').on('click', 'li', function(){
	$(this).toggleClass('completed');
});

// Click on X to delete Todo
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
}); 

$('input[type="text"]').keypress(function(event){
	if(event.which === 13){
		
		// storing the input to todoText
		var todoText = $(this).val();
		$(this).val("");
		
		// create a new li and add to ul
		$('ul').append('<li><span><i class="fa fa-trash"></i></span> '+ todoText +'</li>');
	}
});

$('#plusIcon').click(function(){
	$('input[type="text"]').fadeToggle();
});