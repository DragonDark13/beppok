$(document).ready(function() {
	

	var myWidth = 0;
        myWidth = window.innerWidth;
        jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:999;color:#fff;">Width = '+myWidth+'</div>');
        jQuery(window).resize(function(){
            var myWidth = 0;
            myWidth = window.innerWidth;
            jQuery('#size').remove();
            jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:999;color:#fff;">Width = '+myWidth+'</div>');
        });

        
	var mainMenu = jQuery('.main_meni');
	mainMenu.find('ul').parent("li").addClass('parent')
	mainMenu.find('li.parent > a').append('<span class="arrow"></span>');
	mainMenu.find(' > li').last().addClass('lastChild');


  $('.bxslider').bxSlider({
  	slideWidth: 620
  });



});