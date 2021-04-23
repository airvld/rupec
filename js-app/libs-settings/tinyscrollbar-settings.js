// Tinyscrollbar. Стилизация полосы прокрутки
function tinyscrollbar(block) {
	if (block.length) {
		block.tinyscrollbar({
			axis: "y", // Направление оси
			// trackSize: 100, // Высота дорожки
			thumbSize: 50, // Высота тамба
			// thumbSizeMin: 100, // Минимальная высота тамба
			wheel: true, // Отключить прокрутку
			wheelSpeed: 10, // Прокручивать пикселей
		});
	}
}
tinyscrollbar();