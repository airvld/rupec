// Tooltipster. Всплывающая подсказка
function tooltipster(tooltip) {
	if (tooltip) {
		tooltip.tooltipster({
			theme : 'tooltipster-noir', // Тема
			delayTouch: 0, // Задержка при наведении
			trigger: 'click', // Появление при наведении, клике
			maxWidth: 200, // Максимальная ширина
			contentAsHTML: true, // HTML контент
			interactive: true,
			side:  ['right', 'top', 'bottom', 'left'], // Появление по сторонам по порядку
			zIndex: 97, // z-index
		});	
	}
}
tooltipster();

// Отключение подсказки на мобильных
// function tooltipDisable() {
// 	if ($(window).width() <= breakSm) {
// 		$('.tooltip').tooltipster('disable');
// 	}
// 	else if ($(window).width() > breakSm) {
// 		$('.tooltip').tooltipster('enable');
// 	}
// }
// tooltipDisable();