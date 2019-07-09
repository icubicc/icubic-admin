/* eslint-disable no-mixed-spaces-and-tabs */
/* This file contains main script for website
 * Style related scripts is located in style.js
 */
/* global document jQuery Choices */

// init Choices
const $choice = document.querySelectorAll('.js-choice');
if ($choice.length) {
	$choice.forEach(element => {
		if (!(element.offsetHeight === 0 && element.offsetWidth === 0)) {
			new Choices(element, {
				shouldSort: false,
				itemSelectText: ''
			});
		}
	});
}

// initialize Fine Uploader
var $uploader = document.querySelectorAll('.js-uploader');

if ($uploader.length) {
	$uploader.forEach(el => {
		new qq.FineUploader({
			element: el
		});
	});
}

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

jQuery(document).ready(function($) {
	// var url = window.location.href+'chart.json';
	// var request = $.ajax({
	//   url: url,
	//   method: "GET",
	//   dataType: "json"
	// });

	// request.done(function( msg ) {
	// 	var ctx = document.getElementById('myChart');
	// 	var myChart = new Chart(ctx, {
	// 	    type: 'bar',
	// 	    data: {
	// 	        labels: msg.label,
	// 	        datasets: [{
	// 	            label: '# of Color',
	// 				backgroundColor: getRandomColor(),
	// 	            data: msg.value,
	// 	        }]
	// 	    },
	// 	});
	// });

	// request.fail(function( jqXHR, textStatus ) {
	//   alert( "Request failed: " + textStatus );
	// });

	// initialize magnificPopup
	var $popupInline = $('.js-popup-inline').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-animation',
		removalDelay: 200
	});

	var $popupModal = $('.js-popup-modal').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-animation',
		modal: true,
		removalDelay: 200
	});

	var $popupImage = $('.js-popup-image').magnificPopup({
		type: 'image',
		mainClass: 'mfp-animation',
		removalDelay: 200,
		image: {
			verticalFit: true
		}
	});

	$(document).on('click', '.js-popup-close', function (event) {
		event.preventDefault();
		$.magnificPopup.close();
	});

	// magnific on repeater
	$('.js-form-repeater').on('click', function(event) {
		if (event.target && event.target.matches('.js-popup-inline')) {
			$popupInline.magnificPopup('open');
		} else if (event.target && event.target.matches('.js-popup-modal')) {
			$popupModal.magnificPopup('open');
		} else if (event.target && event.target.matches('.js-popup-image')) {
			$popupImage.magnificPopup('open');
		}
	});

});
