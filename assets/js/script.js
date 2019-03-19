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

jQuery(document).ready(function($) {

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
		}
	});

});
