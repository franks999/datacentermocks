$( document ).ready(function() {

		
		
		$( ".mobile-menu" ).click(function( event ) {
		 
		       $( ".site-menu" ).slideToggle();
		 
		    });
		
		 
		$('.group').addClass('off');
		$('#option1').removeClass('off').addClass('on');
		$('#menu').change(function () {
		        $('.group').removeClass('on').addClass('off');
		        $('#'+$(this).val()).removeClass('off').addClass('on');
		    })
		
		
				
		if ($.cookie('alert_bar') != 'hidden'){
			  $('#sitewide-message').addClass('on');
			};   
			
		   
		   $( "#sitewide-message .close" ).click(function( event ) {
		
		       $( "#sitewide-message" ).slideToggle();
		       
		       $.cookie('alert_bar','hidden', {path: '/' });
		
		   });
		
		
		
		 $( "a[href*='http://www.datacenterresearch.org/pre-katrina']" ).addClass('ss-action ss-standard').attr('target','_blank');
		
		
		$("a[href*='neighborhood-data/definitions']").click( function() {
			window.open( $(this).attr('href'), "definitions", "height=700,width=400,menubar=no,location=no,resizable=yes,scrollbars=yes,left=100" );
			return false;
		});
		
		$("a[href*='neighborhood-data/margin-of-error']").click( function() {
			window.open( $(this).attr('href'), "MOE", "height=900,width=700,menubar=no,location=no,resizable=yes,scrollbars=yes,left=100" );
			return false;
		});
		
		$("a[href*='neighborhood-data/combining-data-points']").click( function() {
			window.open( $(this).attr('href'), "combining", "height=900,width=700,menubar=no,location=no,resizable=yes,scrollbars=yes,left=100" );
			return false;
		});
		
		$("a[href*='neighborhood-data/2008-2012']").click( function() {
			window.open( $(this).attr('href'), "2008-2012", "height=400,width=700,menubar=no,location=no,resizable=yes,scrollbars=yes,left=100" );
			return false;
		});
		
		$("a[href*='neighborhood-data/2004']").click( function() {
			window.open( $(this).attr('href'), "2004", "height=400,width=700,menubar=no,location=no,resizable=yes,scrollbars=yes,left=100" );
			return false;
		});
		
		$("a[href*='neighborhood-data/what-is-a-neighborhood']").click( function() {
			window.open( $(this).attr('href'), "neighborhood", "height=900,width=700,menubar=no,location=no,resizable=yes,scrollbars=yes,left=100" );
			return false;
		});
		
		
		
		 
		$( "#menu-main-nav > li" ).wrapInner( "<div></div>");
		
		$( "#menu-main-nav > li" ).hover(function( event ) {
		
		       $(this).toggleClass('on');
		       
		      
		
		   });
		
		 $(".bio-extras .email").html($(".bio-extras .email").html().replace(/@/g, "@&#8203;"));   
		
		
		
		
	
	
	
		
		

});

