// Простая проверка форм на заполненность и отправка аяксом
function formSubmit() {
  $("[type=submit]").on('click', function (e){ 
    e.preventDefault();
    // Заводим переменные
    // Ищем родительскую фору для того чтобы манипулировать элементами находящимися только внутри неё
    var form = $(this).closest('.form');
    // Запоминаем путь к php обработчику формы
    var url = form.attr('action');
    // Собираем все данные с полей формы для отправки
    var form_data = form.serialize();
    // Выбираем все обязательные поля по атрибуту required
    var field = form.find('[required]');

    // Задаем количество пустых полей по умолчанию
    empty = 0;

    // Перебираем каждое обязательное поле
    field.each(function() {
      // Если поля пустые
      if ($(this).val() == "") {
        // Добавляем класс invalid
        $(this).addClass('invalid');
        // Увеличиваем счеткик пустых полей
        empty++;
      // Если поля не пустые
      } else {
        // Убираем класс invalid
        $(this).removeClass('invalid');
        // Добавляем класс valid если необходимо для стилизации
        $(this).addClass('valid');
      }  
    });

    // Можно проверить пересчет пустых полей в консоли
    // console.log(empty);

    // Если пустых полей больше 0
    if (empty > 0) {
      // Останавливаем работу скрипта запрещая отправку формы
      return false;
    // Если пустых полей нет
    } else {        
      // Запускаем отправку формы без перезагрузки страницы
      $.ajax({
        // Используем переменные в параметрах для отправки формы
        url: url,
        type: "POST",
        dataType: "html",
        data: form_data,
        // При успешной отправке
        // В аргумент response(произвольное название) можно записать и видеть результат ответа сервера
        success: function (response) {
          console.log(response);
          // Дальше несколько вариантов
          // Открываем окно с сообщением
          // modalShow($('#success'));
          // Открываем какую то страницу. как правило так называемую "страницу спасибо"
          // document.location.href = "success.html";
        },
        // При ошибке отправки
        error: function (response) {
          console.log(response);
          // Тоже что нибудь делаем
          // modalShow($('#error'));
          // Выводим в заготовленный блок какое то сообщение
          // $('#rezult').text('Проверте корректность заполнения полей формы.');
        }
      });
    }
  });
  // Убираем класс invalid при снятии фокуса если поле не пустое
  $('[required]').on('blur', function() {
    if ($(this).val() != '') {
      $(this).removeClass('invalid');
    }
  });
  // Если есть чекбокс с политикой можно отключать кнопку при снятом чекбоксе добавляя к кнопке атрибут disabled 
  $('.form__privacy input').on('change', function(event) {
    event.preventDefault();
    var btn = $(this).closest('.form').find('.btn');
    if ($(this).prop('checked')) {
      btn.removeAttr('disabled');
      // console.log('checked');
    } else {
      btn.attr('disabled', true);
    }
  });
}
formSubmit();