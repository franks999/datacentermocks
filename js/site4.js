$( document ).ready(function() {

// setup the dropdown
	$('.dropdown-toggle').dropdown();

// setup the dropdown hover
	$('.dropdown').hover(function(){ 
  		$('.dropdown-toggle', this).trigger('click'); 
	});

// load the default view
	$('#main_all').load('views/lakeview.html');
	$('#lakeview-intro').addClass('pan-select');

	$('li > a').click(function() {
		$('li > a').removeClass('pan-select');
		$('#lakeview-intro').removeClass('pan-select');
		$(this).addClass('pan-select');
	});
});