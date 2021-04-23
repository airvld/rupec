//  Ivan Eremeev - 2020
//  Skype: ivan.eremeev_1
//  Telegram: IvanMessage
//  Email: ivan.frontcoder@gmail.com

$(document).ready(function () {

	// Брэйкпоинты js
	var	breakXl = 1400,
			breakLg = 1200,
			breakMd = 1025,
			breakSm = 769,
			breakXs = 500;
	
	// Подключение настроек плагинов. Использовать "//=" перед строкой пути
	// libs-settings/fancybox_settings.js
	// libs-settings/slick_settings.js
	// libs-settings/fullpage_settings.js
	// libs-settings/tinyscrollbar-settings.js
	// libs-settings/tooltipster-settings.js
	// libs-settings/yandex-map-settings.js
	// libs-settings/google-map-settings.js
	// mailto-ajax.js

	// Запрет перехода по ссылкам с хэшем
	$('a[href="#"]').click(function(e) {
		e.preventDefault();
	});

	// Выпадайка при клике
	function dropClick(btn) {
		if (btn.length) {
			btn.each(function () {
				var $this = $(this),
					id = $this.data('id'),
					dropBlock = $(id),
					close = dropBlock.find('.menu__close');
				$this.on('click', function () {
					$this.toggleClass('active');
					dropBlock.toggleClass('open');
				});
				$(document).mouseup(function (e) {
					if (!dropBlock.is(e.target) && dropBlock.has(e.target).length === 0 && !$this.is(e.target) && $this.has(e.target).length === 0) {
						$this.removeClass('active');
						dropBlock.removeClass('open');
					}
				});
				close.on('click', function () {
					$this.removeClass('active');
					dropBlock.removeClass('open');
				})
			});
		}
	}
	dropClick($('.js-drop-click'));

	// // Блок с высотой окна браузера
	// function screenHeight(fullHeight) {
	// 	fullHeight.css({
	// 			minHeight: $(window).height() + 'px'
	// 	});
	// };
	// screenHeight($('.js-fullHeight'));

	// // Scroll to ID // Плавный скролл к элементу при нажатии на ссылку.
	// function menuScroll(menuItem) {
	// 	menuItem.find('a[href^="#"]').click( function(){
	// 		var scroll_el = $(this).attr('href'),
	// 				time = 500;
	// 		if ($(scroll_el).length != 0) {
	// 		$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, time);
	// 			$(this).addClass('active');
	// 		}
	// 		return false;
	// 	});
	// };
	// menuScroll();

	// // Stiky menu // Липкое меню.
	// function stikyMenu(header) {
	// 	headerTop = header.offset().top;
	// 	$(window).scroll(function(){
	// 		if( $(window).scrollTop() > headerTop ) {
	// 			header.addClass('stiky');
	// 		} else {
	// 			header.removeClass('stiky');
	// 		}
	// 	});
	// };
	// stikyMenu();

	// // Изменяет размер шрифта у тэга html взависимости от размера экрана (для резиновых страниц)(размеры должны быть в em)
	// function fontResize() {
	// 	var windowWidth = $(window).width();
	// 		if (windowWidth >= breakSm) {
	// 			var fontSize = windowWidth/19.05;
	// 		} else if (windowWidth < breakSm) {
	// 			// Без резины на мобилке
	// 			var fontSize = 60;
	// 			// С резиной на мобилке
	// 			var fontSize = windowWidth/4.8;
	// 	}
	// 	$('body').css('fontSize', fontSize + '%');
	// };
	// fontResize();

	// // Табы
	// function tabs(tabs) {
	// 	if (tabs.length) {
	// 		tabs.each(function() {
	// 			var trigger = $(this).find('#tabs_triggers').children(),
	// 					content = $(this).find('#tabs_content').children(),
	// 					time = 300;
	// 			trigger.click(function () {
	// 				var $this = $(this),
	// 						index = $this.index();
	// 				if (!$this.hasClass('active')) {
	// 					trigger.removeClass('active');
	// 					$this.addClass('active');
	// 					content.hide();
	// 					content.eq(index).fadeIn(time);
	// 				}else {
	// 					return false;
	// 				}
	// 			});
	// 		});
	// 	}
	// }
	// tabs($('.js_tabs'));

	// // Аккордеон
	// function accordeon(accordeon, mobile) {
	// 	var trigger = accordeon.find('.accordeon_trigger'),
	// 			content = accordeon.find('.accordeon_content'),
	// 			time = 300;
	// 	if (!mobile) {
	// 		mobile = false;
	// 	};
	// 	function contentDisplayNone() {
	// 		if (mobile == true && $(window).width() < breakMd) {
	// 			content.css({
	// 				display: 'none'
	// 			});
	// 		}
	// 		if (mobile == false) {
	// 			content.css({
	// 				display: 'none'
	// 			});
	// 		}
	// 	};
	// 	contentDisplayNone();
	// 	$(window).resize(function() {
	// 		contentDisplayNone();
	// 	});
	// 	trigger.on('click', function() {
	// 		$this = $(this);
	// 		if (mobile == true && $(window).width() < breakMd) {
	// 			if (!$this.hasClass('active')) {
	// 				trigger.removeClass('active');
	// 				$this.addClass('active');
	// 				content.stop().slideUp(time);
	// 				$this.next('.accordeon_content').stop().slideDown(time).removeClass('hide');
	// 			}else {
	// 				$this.removeClass('active');
	// 				$this.next('.accordeon_content').stop().slideUp(time).addClass('hide');
	// 			}
	// 		}
	// 	});
	// 	$(window).resize(function() {
	// 		if (mobile == true && $(window).width() > breakMd) {
	// 			trigger.removeClass('active');
	// 			content.removeClass('hide')
	// 				.attr('style', '');
	// 		}
	// 		else {
	// 			content.addClass('hide')
	// 		}
	// 	});
	// };
	// accordeon();

	// // Модальное окно
	// function modal(modal) {
	// 	$('.modal-trigger').on('click', function() {
	// 		var $this = $(this),
	// 				data = $this.data('modal'),
	// 				thisModal = $(data);
	// 		modalShow(thisModal);
	// 	});
	// };
	// // Открытие модального окна
	// function modalShow(thisModal) {
	// 	var html = $('html'),
	// 			modalClose = thisModal.find($('.modal_close')),
	// 			documentWidth = parseInt(document.documentElement.clientWidth),
	// 			windowsWidth = parseInt(window.innerWidth),
	// 			scrollbarWidth = windowsWidth - documentWidth;
	// 	thisModal.show(0, function() {
	// 		setTimeout(thisModal.addClass('open'),500);
	// 	});
	// 	html.addClass('lock').css('padding-right',scrollbarWidth);
	// 	modalClose.on('click', function() {
	// 		modalHide(thisModal);
	// 	});
	// 	thisModal.on('click', function(e) {
	// 		if (thisModal.has(e.target).length === 0) {
	// 			modalHide(thisModal);
	// 		}
	// 	});
	// };
	// // Закрытие модального окна
	// function modalHide(thisModal) {
	// 	var html = $('html');
	// 	thisModal.removeClass('open');
	// 	thisModal.hide();
	// 	html.removeClass('lock').css('padding-right',0);
	// };
	// modal();

	// // Текст печатная машинка
	// function textPrint(block) {
	// 	var textPrint = block,
	// 		a = textPrint.text(),
	// 		j = 0,
	// 		c = a.length,
	// 		time = 50;
	// 	textPrint.text('');
	// 	setInterval(function () {
	// 		if (j<c) {
	// 			textPrint.text(textPrint.text() + a[j]);
	// 			j++;
	// 		}
	// 	},time);
	// };
	// textPrint();

	// // Анимация увеличения значения числа
	// function countNumber(block) {
	// 	block.each(function () {
	// 		var scrollTop = false,
	// 			countNumberStatus = true,
	// 			$this = $(this),
	// 			blockPosition = $this.position().top,
	// 			valUp = $this.data('val-up'),
	// 			valTo = $this.data('val-to'),
	// 			valDuration = $this.data('duration');
	// 		$this.html(0);
	// 		$(window).scroll(function () {
	// 			scrollTop = $(window).scrollTop() + $(window).height();
	// 			if (scrollTop > blockPosition && countNumberStatus) {
	// 				$({ numberValue: valUp }).animate({ numberValue: valTo }, {
	// 					duration: valDuration,
	// 					easing: "swing",
	// 					step: function (val) {
	// 						$this.html(Math.ceil(val));
	// 					}
	// 				});
	// 				countNumberStatus = false;
	// 			}
	// 		});
	// 	});
	// };
	// countNumber($(".count-number"));

	// // Делает активным пункт меню при скролле до блока
	// function menuItemActive(menu) {
	// 	var lastId,
	// 	topMenu = menu,
	// 	topMenuHeight = topMenu.outerHeight(),
	// 	menuItems = topMenu.find("a"),
	// 	scrollItems = menuItems.map(function(){
	// 		var item = $($(this).attr("href"));
	// 		if (item.length) { return item; }
	// 	});
	// 	menuItems.click(function(e){
	// 		var href = $(this).attr("href"),
	// 				offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	// 		$('html, body').stop().animate({ 
	// 				scrollTop: offsetTop
	// 		}, 300);
	// 		e.preventDefault();
	// 	});
	// 	$(window).scroll(function(){
	// 		var fromTop = $(this).scrollTop()+topMenuHeight;
	// 		var cur = scrollItems.map(function(){
	// 			if ($(this).offset().top < fromTop)
	// 				return this;
	// 		});
	// 		cur = cur[cur.length-1];
	// 		var id = cur && cur.length ? cur[0].id : "";
	// 		if (lastId !== id) {
	// 				lastId = id;
	// 				menuItems
	// 					.parent().removeClass("active")
	// 					.end().filter("[href='#"+id+"']").parent().addClass("active");
	// 		}                   
	// 	});
	// };
	// menuItemActive();

	// // Изменение textarea при получении фокуса
	// function focusTextarea(texarea) {
	// 	texarea
	// 	.focus(function() {
	// 		$(this).addClass('class_name');
	// 	})
	// 	.blur(function() {
	// 		if ($(this)[0].value == '') {
	// 			$(this).removeClass('active');
	// 		}
	// 	});
	// };
	// focusTextarea();

	// // Изменение поля ввода при клике по его контейнеру
	// function focusInput(conteinerInput) {
	// 	conteinerInput.click(function() {
	// 		input = conteinerInput.find('input');
	// 		div.addClass('active');
	// 		$(document).mouseup(function (e){
	// 			if (!conteinerInput.is(e.target)
	// 					&& conteinerInput.has(e.target).length === 0 && input.val() == '') {
	// 				conteinerInput.removeClass('active');
	// 			}
	// 		});
	// 	});
	// };
	// focusInput();

	// // Запуск и остановка видео html5
	// var playing = false;
	// function videoControll(videoConteiner) {
	// 	videoConteiner.click(function() {
	// 		var video = videoConteiner.find('video'),
	// 				img = videoConteiner.find('img');
	// 		img.css({
	// 			display: 'none'});
	// 		if (playing == false) {
	// 			video.trigger('play');
	// 			playing = true;
	// 		}
	// 		else {
	// 			video.trigger('pause');
	// 			playing = false;
	// 		}
	// 	});
	// };
	// videoControll();

	// // 3d эффект вращения элемента при наведении
	// function rotate(element) {
	// 	var card = element,
	// 			cardItem = card.find('.card3d_item');
	// 	card.css({
	// 		perspective: '1000px',
	// 		'transform-style': 'preserve-3d'
	// 	});
	// 	cardItem.mousemove(function(event) {
	// 		var $this = $(this),
	// 				coordinateX = event.offsetX,
	// 				coordinateY = event.offsetY,
	// 				halfHeight = ($this.outerHeight()/2),
	// 				halfWidth = $this.outerWidth()/2;
	// 				console.log(halfWidth);
	// 		$this.css({
	// 			transition: '0.2s',
	// 			transform: 'rotateX('+((coordinateY-halfHeight)/10)*-1+'deg) rotateY('+(coordinateX-halfWidth)/10+'deg)'
	// 		});
	// 	});
	// 	cardItem.mouseout(function() {
	// 		cardItem.css({
	// 			transform: 'rotate(0)'});
	// 	});
	// };
	// rotate();

	// // Паралакс относительно курсора мыши
	// function parallaxMove(parallax) {
	// 	if (parallax.length) {
	// 		parallax.each(function () {
	// 			var $window = $(window),
	// 				$this = $(this),
	// 				direction = $this.data('direction'),
	// 				intensity = $this.data('intensity'),
	// 				speed = $this.data('speed'),
	// 				revers = $this.data('revers');
	// 			if (!direction) {
	// 				direction = 'xy';
	// 			}
	// 			if (!intensity) {
	// 				intensity = 3;
	// 			}
	// 			if (!speed) {
	// 				speed = 100;
	// 			}
	// 			if (!revers) {
	// 				revers = false;
	// 			}
	// 			$this.css({ transition: (speed / 1000) + 's' });
	// 			$window.mousemove(function (event) {
	// 				var left = event.clientX,
	// 					top = event.clientY,
	// 					windowWidth = $window.width(),
	// 					windowHeight = $window.height();
	// 				if (revers) {
	// 					moveX = ((left - windowWidth / 2) * intensity / 100 * -1).toFixed(),
	// 						moveY = ((top - windowHeight / 2) * intensity / 100 * -1).toFixed();
	// 				} else {
	// 					moveX = ((left - windowWidth / 2) * intensity / 100).toFixed(),
	// 						moveY = ((top - windowHeight / 2) * intensity / 100).toFixed();
	// 				}
	// 				inVisible($this);
	// 				function inVisible(element) {
	// 					var topScroll = $(document).scrollTop(),
	// 						screenHeight = $(window).height(),
	// 						bottomScroll = topScroll + screenHeight,
	// 						elementHeight = element.height(),
	// 						elementTop = element.offset().top,
	// 						elementBottom = elementTop + elementHeight;
	// 					if (elementTop < bottomScroll && elementBottom > topScroll) {
	// 						if (direction == 'xy') {
	// 							$this.css({ transform: 'translateX(' + moveX + 'px) translateY(' + moveY + 'px)' });
	// 						}
	// 						else if (direction == 'x') {
	// 							$this.css({ transform: 'translateX(' + moveX + 'px)' });
	// 						}
	// 						else if (direction == 'y') {
	// 							$this.css({ transform: 'translateY(' + moveY + 'px)' });
	// 						}
	// 					}
	// 				};
	// 			});
	// 		});
	// 	}
	// };
	// parallaxMove($('.js-parallaxMouse'));

	// // Показать еще новости
	// function limitBlock(wrap, newsNum) {
	// 	if (!newsNum) {
	// 		newsNum = 3
	// 	}
	// 	var news = wrap.find('.limit-block'),
	// 			parent = news.parent(),
	// 			newsLimit = news.slice(0, newsNum),
	// 			btn = wrap.find('.show-btn'),
	// 			btnShow = btn.text(),
	// 			btnHide = 'Скрыть',
	// 			heightResized = false;
	// 	width();
	// 	$(window).resize(function() {
	// 		var windowWidth = $(window).width();
	// 		if (heightResized == windowWidth) {
	// 			return;
	// 		}
	// 		heightResized = windowWidth;
	// 		width();
	// 	});
	// 	function width() {
	// 		if ($(window).width() <= breakSm) {
	// 			news.remove();
	// 			parent.append(newsLimit);
	// 			btn.text(btnShow)
	// 				.removeClass('active');
	// 		}else {
	// 			parent.append(news);
	// 			btn.text(btnHide)
	// 				.addClass('active');
	// 		}
	// 	};
	// 	btn.click(function() {
	// 		if (!btn.hasClass('active')) {
	// 			parent.append(news);
	// 			btn.text(btnHide)
	// 				.addClass('active');
	// 		}else {
	// 			news.remove();
	// 			parent.append(newsLimit);
	// 			btn.text(btnShow)
	// 				.removeClass('active');
	// 		}
	// 	});
	// };
	// limitBlock();

	// // Ограничение выводимых символов в блоке текста
	// function textLimit(blockText) {
	// 	var size = 47,
	// 			textButton = 'читать',
	// 			arr = new Array();
	// 	blockText.each(function(index){
	// 		var $el = $(this),
	// 				html = $el.html();
	// 		arr.push(html);
	// 		if( html.length > size) {
	// 			$el.html(html.slice(0,size) + '...<a href="#" class="read-more-button" data-index="'+index+'">'+textButton+'</a>');
	// 		}
	// 	});
	// 	$('.read-more-button').click(function() {
	// 		var index = $(this).data('index');
	// 		$(this).parent().text(arr[index]);
	// 	});
	// };
	// textLimit();

	// // Вставляет svg в html, позволяет управлять svg через css 
	$('img[src$=".svg"]').each(function(){
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		$.get(imgURL, function(data) {
			var $svg = $(data).find('svg');
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}
			$svg = $svg.removeAttr('xmlns:a');
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}
			$img.replaceWith($svg);
		}, 'xml');
	});

	// // Присваивание класса при клике
	// function clickToggle(block) {
	// 	if (block.length) {
	// 		block.on('click', function () {
	// 			$(this).toggleClass('active');
	// 		});
	// 	}
	// }
	// clickToggle($('.click'));

	// // AOS | Анимация при скролле
	// AOS.init();

	// // Присваивание класса при скролле
	// function addClassForScroll(block) {
	// 	if (block.length) {
	// 		block.each(function () {
	// 			var $this = $(this),
	// 					scrollTop = false,
	// 					countNumberStatus = true,
	// 					blockPosition = $this.offset().top;
	// 			addClass();
	// 			$(window).scroll(function () {
	// 				addClass();
	// 			})
	// 			function addClass() {
	// 				scrollTop = $(window).scrollTop() + $(window).height();
	// 				if (scrollTop > blockPosition && countNumberStatus) {
	// 					$this.addClass('active');
	// 					countNumberStatus = false;
	// 				}
	// 			}
	// 		})
	// 	}
	// }
	// addClassForScroll($('.js-addClassForScroll'));

	// // Circles | Круговой счетчик
	// // data-value="" Значение до которого крутится счетчик
	// // data-size="" Размер счетчика. Для адаптива в css - canvas width 100% height 100% и родительским блоком ограничивать
	// // data-color="" Цвет пустого
	// // data-fill="" Цвет заливки
	// // data-duration="" Длительность анимации. По умолчанию значение data-value соответствует секундам
	// // data-border="" Ширина линии
	// function circleTimer(timer) {
	// 	if (timer.length) {
	// 		timer.each(function () {
	// 			var $this = $(this),
	// 					val = $this.data('value'),
	// 					$size = $this.data('size'),
	// 					$color = $this.data('color'),
	// 					$fill = $this.data('fill'),
	// 					$duration = $this.data('duration'),
	// 					borderWidth = $this.data('border');
	// 					if (!val) val = 10;
	// 					if (!$size) $size = 50;
	// 					if (!$color) $color = '#e5e5e5';
	// 					if (!$fill) $fill = '#4ce54c';
	// 					if (!$duration) $duration = val * 1000;
	// 					if (!borderWidth) borderWidth = 2;
	// 			$this.circleProgress({
	// 				// animationStartValue: 1, // Старт анимации с 1 и значение value 0 запускает анимацию в обратном направлении
	// 				// startAngle: 2, // Старт анимации с данного угла
	// 				value: 1, // Заполнение счетчика. 1 - полностью, 0.5 - половина
	// 				size: $size,
	// 				emptyFill: $color,
	// 				fill: $fill,
	// 				thickness: borderWidth,
	// 				animation: { duration: $duration },
	// 				// reverse: true,
	// 			// Добавляет цифры в span в счетчике
	// 			}).on('circle-animation-progress', function (event, progress, stepValue) {
	// 				$(this).find('span').html(Math.round(val * stepValue));
	// 			});
	// 		})
	// 	}
	// }
	// circleTimer($('.js-circle'));
	
});