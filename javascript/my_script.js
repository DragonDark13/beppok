$(document).ready(function() {
	

	// var myWidth = 0;
 //        myWidth = window.innerWidth;
 //        $('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:999;color:#fff;">Width = '+myWidth+'</div>');
 //        $(window).resize(function(){
 //            var myWidth = 0;
 //            myWidth = window.innerWidth;
 //            $('#size').remove();
 //            $('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:999;color:#fff;">Width = '+myWidth+'</div>');
 //        });

        
	var mainMenu = $('.main_meni');
	mainMenu.find('ul').parent("li").addClass('parent')
	mainMenu.find('li.parent > a').append('<span class="arrow"></span>');
	mainMenu.find(' > li').last().addClass('lastChild');


  $('.bxslider').bxSlider({
  	slideWidth: 620,
    responsive: true
  });

  $('.main_meni_header>i').click(function(event) {
    /* Act on the event */
    $(this).parent().toggleClass('open_meni');
  });





});