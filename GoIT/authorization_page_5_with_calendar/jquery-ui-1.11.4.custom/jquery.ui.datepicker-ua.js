jQuery(function($){
	$.datepicker.regional['ua'] = {
		//closeText: 'Закрыть',
		//prevText: '&#x3c;Пред',
		//nextText: 'След&#x3e;',
		//currentText: 'Сегодня',
		monthNames: ['Січень','Лютий','Березень','Квітень','Травень','Червень',
		'Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
		monthNamesShort: ['Січ','Лют','Бер','Квіт','Трав','Чер',
		'Лип','Сер','Вер','Жов','Лис','Груд'],
		dayNames: ['неділя','понеділок','вівторок','середа','четвер',"п'ятниця",'субота'],
		dayNamesShort: ['нд','пн','вт','ср','чт','пт','сб'],
		dayNamesMin: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'],
		weekHeader: 'Тижд',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ua']);
});