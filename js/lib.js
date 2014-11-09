$(document).ready(function(){
	$('.clickeable').attr('style', function()
	{
		$(this).css('background-color', $(this).val() );
	});

	$('.clickeable').on('click', function()
	{
		$(this).select();
	});
});