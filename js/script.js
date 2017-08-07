console.clear();
// jQuery.noConflict();

(function($){
	'use strict';


	$('#formAddTask').on('submit', function(event){ //form
		event.preventDefault();

		var id = new Date().getTime();

		var task = {
			title: $(this).find('[name=title]').val(),
			description: $(this).find('[name=description]').val(),
			// status: 2 //1-todo, 2 - in progress, 3 - done
			status: $(this).find('input:checked').val(),
			uid: id
		};

		addTask(task);
		localStorage.setItem(id, JSON.stringify(task)); //add task for storage
		countStatus();
		$('#modalAddTask').modal('hide');
		this.reset();
	})

	function countStatus(){
		var $span = $('.badge');
		for(var i =0; i<$span.length;i++){
			var count = 0;
			var status = $span[i].dataset.count;
		for (key in localStorage) {
			var obj = JSON.parse(localStorage[key]);
			if (obj.status == status) count++;
			}
		$('[data-count='+status+']').text(count);
		}
	} //end countStatus

	function addTask(item){ //add task to page
		var $div = $('<div>')
		.addClass('list-group-item')
		.appendTo('[data-status="' + item.status + '"] .list-group')
		.text(item.title+' ['+item.description+']');

		$('<button>').addClass('btn btn-danger btn-xs pull-right') //add button delete
		.text('delete')
		.appendTo($div)
		.on('click', function(even){
			($div).remove();
			localStorage.removeItem(item.uid);
			countStatus();
		});
	} //end addTask

	for (var key in localStorage) { //restore storage item on page
		if (localStorage.hasOwnProperty(key)){
			var task = JSON.parse(localStorage[key]);
			addTask(task);
		}
	}
		$('#delete').on('click', function(){ //Button delete all
			var obj = $('div').filter('.list-group-item');
			for (var i=0; i<obj.length;i++){
				obj[i].remove();
			}
			localStorage.clear();
			countStatus();
		})
	countStatus();
})(jQuery);

