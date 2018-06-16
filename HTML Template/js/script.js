/**
 * The script is encapsulated in an self-executing anonymous function,
 * to avoid conflicts with other libraries
 */
(function($) {
	/**
	 * Declare 'use strict' to the more restrictive code and a bit safer,
	 * sparing future problems
	 */
	"use strict";

	/***********************************************************************/
	/*****************************  $Content  ******************************/
	/**
	* + Content
	* + SliderRevolution
	* + Parallax
	* + Form
	* + Owl Carousel - Partners
	* + Owl Carousel - Testimonials
	* + Video YT
	* + Fancybox
	* + Isotope
	* + Tooltips
	* + GMaps
	* + Flickr Feed
	* + Go to top
	*/

	/***********************  $SliderRevolution  **************************/
	jQuery('.tp-banner2').show().revolution(
          {
            delay:11000,
            startwidth:1170,
            startheight:700,
            hideThumbs:1,

            thumbWidth:100,
            thumbHeight:50,
            thumbAmount:5,

            navigationType:"bullet",
            navigationArrows:"solo",
            navigationStyle:"preview4",

            touchenabled:"on",
            onHoverStop:"on",

            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,

            parallax:"mouse",
            parallaxBgFreeze:"on",
            parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

            keyboardNavigation:"off",

            navigationHAlign:"center",
            navigationVAlign:"bottom",
            navigationHOffset:0,
            navigationVOffset:20,

            soloArrowLeftHalign:"left",
            soloArrowLeftValign:"center",
            soloArrowLeftHOffset:20,
            soloArrowLeftVOffset:0,

            soloArrowRightHalign:"right",
            soloArrowRightValign:"center",
            soloArrowRightHOffset:20,
            soloArrowRightVOffset:0,

            shadow:0,
            fullWidth:"on",
            fullScreen:"off",

            spinner:"spinner4",

            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,

            shuffle:"off",

            autoHeight:"off",
            forceFullWidth:"off",

            hideThumbsOnMobile:"off",
            hideNavDelayOnMobile:1500,
            hideBulletsOnMobile:"off",
            hideArrowsOnMobile:"off",
            hideThumbsUnderResolution:0

          });

	/*****************************  $Parallax  *****************************/
	$('.parallax').each(function(){
		var $obj = $(this);
		$(window).scroll(function() {
			if($(document).width() > 500) {
				var yPos = ( $obj.offset().top - $(window).scrollTop() ) / $obj.data('speed');
				var bgpos = '50% '+ yPos + 'px';
				$obj.css('background-position', bgpos );
			} else{
				$obj.css('background-position', '50% 0px' );
			}
		});
	});

	/**************************  $Send Forms  ******************************/
	var $form = $('form');

	$form.on( 'submit' , function(e){
		if ( $(this).data('ajax') == 1 ) {
			e.preventDefault();
			sendForm( $(this) );
		}
	})

	function sendForm($form){
		var fieldsData = getFieldsData($form),
			url = $form.attr('action'),
			method = $form.attr('method');

		sendData(url, method, fieldsData, $form, showResults)
	}


	function getFieldsData($form) {
		var $fields = $form.find('input, button, textarea, select'),
			fieldsData = {};

		$fields.each( function(){
			var name = $(this).attr('name'),
				val  = $(this).val(),
				type = $(this).attr('type');

			if ( typeof name !== 'undefined' ){

				if 	( type == 'checkbox' || type == 'radio' ){

					if ( $(this).is(':checked') ){
						fieldsData[name] = val;
					}
				} else {
					fieldsData[name] = val;
				}

			}
		});

		return fieldsData
	}

	function sendData(url, method, data, $form, callback){
		var $btn = $form.find('[type=submit]'),
			$response = $form.find('.form-response');

		$.ajax({
			beforeSend: function(objeto){
				$response.html('');
				$btn.button('loading');
			},
			complete: function(objeto, exito){ $btn.button('reset'); },
			data: data,
			success: function(dat){  callback(dat, $response); },
			type: method,
			url: url,
		});
	}

	function showResults(data, $response){
		 $response.html(data);
		 $response.find('.alert').slideDown('slow');
	}
	/*********************  $Owl Carousel - Partners  **********************/
	var owl = $("#owl-patners");

	owl.owlCarousel({
		items : 5,
		itemsCustom: [
			[0,1], 		//1 items between 0px and 379px
			[380,2],	//2 items between 380px and 549px
			[550,3],	//3 items between 550px and 991px
			[992,5],	//5 items higher 992px
			[1200,5]
		],

		autoPlay: false,
		stopOnHover: true,
		navigation: true,
		pagination: false,
		navigationText: ["",""]
	});

	/*******************  $Owl Carousel - Testimonials  ********************/
	$("#owl-testimonials").owlCarousel({
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true
	});
	$("#owl-testimonials-2").owlCarousel({
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true
	});
	$("#owl-testimonials-3").owlCarousel({
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true
	});
	$("#owl-testimonials-4").owlCarousel({
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true
	});
	$("#owl-testimonials-5").owlCarousel({
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true
	});
	$("#owl-testimonials-6").owlCarousel({
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true
	});

	/****************************  FancyBox  *******************************/
	if ($('.fancybox').length) {
		$('a[data-rel]').each(function() {
			$(this).attr('rel', $(this).data('rel'));
		});

		$(".fancybox").fancybox({
			openEffect	: 'none',
			closeEffect	: 'none'
		});
	}

	/*****************************  $Isotope  ******************************/
	function startIsotope(){
			// cache container
			var $container = $('.gallery-grid');

			// initialize isotope
			if(jQuery().isotope) {
	 			$container.isotope();
			}

			// filter items when filter link is clicked
			$('.filters a').on( 'click', function(e){
				e.preventDefault();

				if($(this).data('filter') == '*'){
					$('.filters a').removeClass('active');
					$(this).addClass('active');
				} else {
					$('.filters a[data-filter="*"]').removeClass('active');
					$(this).addClass('active');
				}
				if($(this).data('filter') == '.hosting'){
					$('.filters a').removeClass('active');
					$(this).addClass('active');
				} else {
					$('.filters a[data-filter=".hosting"]').removeClass('active');
					$(this).addClass('active');
				}
				if($(this).data('filter') == '.domains'){
					$('.filters a').removeClass('active');
					$(this).addClass('active');
				} else {
					$('.filters a[data-filter=".domains"]').removeClass('active');
					$(this).addClass('active');
				}
				if($(this).data('filter') == '.vps'){
					$('.filters a').removeClass('active');
					$(this).addClass('active');
				} else {
					$('.filters a[data-filter=".vps"]').removeClass('active');
					$(this).addClass('active');
				}
				if($(this).data('filter') == '.support'){
					$('.filters a').removeClass('active');
					$(this).addClass('active');
				} else {
					$('.filters a[data-filter=".support"]').removeClass('active');
					$(this).addClass('active');
				}
				refreshIsotope();
			});

			$('.filters a .close').on( 'click', function(e){
				e.preventDefault();
				e.stopPropagation();

				$(this).parent().removeClass('active');

				refreshIsotope();
			});


			function refreshIsotope() {
				var $filters = $('.filters a.active'),
					selectors = '';

				$filters.each(function( index ) {
					if (selectors != ''){selectors += ', '}
					selectors += $( this ).attr('data-filter');
				});

				$container.isotope({ filter: selectors });
			}
		}


		$(window).load( startIsotope() );

	/*****************************  $Tootips  ******************************/
	function changeTooltipColorTo(color) {
		$('.tooltip-inner').css('background-color', color)
		$('.tooltip.top .tooltip-arrow').css('border-top-color', color);
		$('.tooltip.right .tooltip-arrow').css('border-right-color', color);
		$('.tooltip.left .tooltip-arrow').css('border-left-color', color);
		$('.tooltip.bottom .tooltip-arrow').css('border-bottom-color', color);
	}

	$('.social-links a').tooltip({placement: 'top'})
	$('.social-links a').hover(function() {changeTooltipColorTo('#FFBC00')});

	/*****************************  $GMaps  ********************************/
	var map;
	if ($('#map').length) {
		map = new GMaps({
			div: '#map',
			lat: 48.858093,
			lng: 2.294694,
			scrollwheel: false
		});
		map.addMarker({
			lat: 48.858093,
			lng: 2.294694
		});
	}
	if ($('#map2').length) {
		var map2 = new GMaps({
			div: '#map2',
			scrollwheel: false,
			lat: 48.860093,
			lng: 2.294694,
			disableDefaultUI: true
		});

		map2.addMarker({
			lat: 48.858093,
			lng: 2.294694
		});
		map2.addMarker({
			lat: 48.857700,
			lng: 2.293400
		});
	}

	/******************************* $Flickr Feed *******************************/
		if ($('.flickr-feed').length) {
		    $('.flickr-feed').jflickrfeed({
	    	    limit: 9,
	        	qstrings: {
	            	user_id: '5083772252'
	        	},
	        	itemTemplate: '	<li class="item-thumbnail"><img src="{{image_s}}" alt="{{title}}" /><span class="overthumb"></span><div class="icons"><a href="{{link}}" class="postlink"><i class="icon-search"></i></a></div></li>'
	    	});
		}

	/******************************* $Go to top ***********************************/
	$(document).ready(function() {'use strict';
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});

		$('.scrollup').on( 'click', function() {
			$("html, body").animate( {scrollTop : 0}, 600);
			return false;
		});
	});

	/*************************  $Background Video  *************************/
	$('#video-bg').click(function(e){
		e.preventDefault();

		var $container = $(this).parent().parent();
		var $over = $container.find('.over');
		var overInitLeft = $over.css('left');
		var $stop = $container.find('.stop');
		var $video = $container.find('.yt-video iframe');
		var video_src = $video.attr('src');

		if ( video_src.indexOf('?') == '-1'){
			var separator = '?';
		}else{
			var separator = '&amp;';
		}

		$video.attr('src',video_src+separator+'autoplay=1')

		$over.animate({
			left: '-150%',
		}, 500);

		$stop.click(function(e){
			e.preventDefault();
			$video.attr('src',video_src);

			$over.animate({
				left: overInitLeft,
			}, 500);

			setTimeout(function(){
				$stop.animate({
					opacity: 0
				}, 1000, function(){
					$stop.hide();
				})
			}, 1000)
		})


		$stop.show(0, function(){
			setTimeout(function(){
				$stop.animate({
					opacity: 1
				}, 1000)
			}, 3000)
		})

	});


})(jQuery);
