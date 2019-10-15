/* eslint-disable no-mixed-spaces-and-tabs */
/* This file contains main script for website
 * Style related scripts is located in style.js
 */
/* global document jQuery Chart Choices qq camelCase */

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

// chart
const chart = document.querySelectorAll('.js-chart');

const chartColor = [
	'#ff4d4f',
	'#ff7a45',
	'#ffa940',
	'#ffc53d',
	'#ffec3d',
	'#bae637',
	'#73d13d',
	'#36cfc9',
	'#40a9ff',
	'#597ef7',
	'#9254de',
	'#f759ab'
];

const barScale = {
	xAxes: [{
		gridLines: {
			display: false
		}
	}],
	yAxes: [{
		ticks: {
			beginAtZero: true
		},
	}]
};

chart.forEach(el => {
	const label = [],
		value = [];

	const elementId = el.id,
		id = camelCase(elementId);

	fetch(`${id}.json`)
		.then(blob => blob.json())
		.then(data => {
			label.push(...data.label);
			value.push(...data.value);

			const $id = document.querySelector(`#${elementId}`),
				type = $id.dataset.chartType || 'doughnut';

			$id.getContext('2d');

			const chartConfig = {
				type: type,
				data: {
					labels: label,
					datasets: [{
						backgroundColor: type === 'line' ? '#ff4d4f' : chartColor,
						borderColor: type === 'line' ? '#ff4d4f' : chartColor,
						borderWidth: 0,
						data: value,
						fill: false
					}]
				},
				options: {
					legend: {
						display: type === 'doughnut' ? true : false,
						position: type === 'doughnut' ? 'right' : 'top',
						labels: {
							boxWidth: 11,
							fontSize: 11
						}
					},
					scales: type === 'bar' ? barScale : 0
				}
			};

			new Chart($id, chartConfig);
		});
});


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
