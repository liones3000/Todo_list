console.clear();
// jQuery.noConflict();

(function($){
'use strict';

	$('#formAddTask').on('submit', function(event){
		event.preventDefault();

		var task = {
			title: $(this).find('[name=title]').val(),
			description: $(this).find('[name=description]').val(),
			status: 1 //1-todo, 2 - in progress, 3 - done
		};
		addTask(task);

		var id = new Date().getTime();
		localStorage.setItem(id, JSON.stringify(task));

		$('#modalAddTask').modal('hide');

		this.reset();

	})
	function addTask(item){
		var $div = $('<div>')
			.addClass('list-group-item')
			.appendTo('[data-status="' + task.status + '"] .list-group')
			.text(item.title);

		$('<button>').addClass('btn btn-danger btn-xs pull-right').text('delete').appendTo($div).on('click', function(even){
			($div).remove();
		});
}

	for (var key in localStorage) {
		if (localStorage.hasOwnProperty(key)){
		var task = JSON.parse(localStorage[key]);
		addTask(task);
		}
	}

})(jQuery);