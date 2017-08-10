	function handlersAddTask(event){
		event.preventDefault();

		var id = new Date().getTime();

		var task = {
			title: $(this).find('[name=title]').val(),
			date: $(this).find('[name=date]').val(),
			description: $(this).find('[name=description]').val(),
			status: $(this).find('input:checked').val(), // status: 2 //1-todo, 2 - in progress, 3 - done
		};

		addTask(task, id);
		localStorage.setItem(id, JSON.stringify(task)); //add task for storage
		countStatus();
		$('#modalAddTask').modal('hide');
		this.reset();
	}
	function handlersRemoveTask(){
		var $parent = $(this).parents('[data-id]');
		var id = $parent.data('id');
		
		$('#modalConfirm').modal('show').on('click', '#ok', function(){

			localStorage.removeItem(id);
			countStatus();
			$parent.remove();
			$('#modalConfirm').modal('hide').off('click');
		})
	}
	function handlersEditTask(){
		var $parent = $(this).parents('[data-id]');
		var id = $parent.data('id');
		var task = JSON.parse(localStorage.getItem(id));

		for(var key in task) {
			$('#modalEditTask').find('[name='+ key +']').val(task[key]);
		}
		$('#modalEditTask').find('[name=id]').val(id);

		$('#modalEditTask').modal('show');

	}
function handlersFormEdit(event){ //form
	event.preventDefault();

	var task = {
		title: $(this).find('[name=title]').val(),
		description: $(this).find('[name=description]').val(),
		status: $(this).find('[name=status]').val(),
	};
	var id = $(this).find('[name=id]').val();


	localStorage.setItem(id, JSON.stringify(task)); //add task for storage

	$('#task-list [data-id="'+id+'"]').remove();

	addTask(task, id);
	countStatus();

	$('#modalEditTask').modal('hide');
}
function handlersAllDelete(){ //Button delete all
	$('#modalConfirm').modal('show').on('click', '#ok', function(){
		var obj = $('div').filter('.panel-default').remove();
		localStorage.clear();
		countStatus();

		$('#modalConfirm').modal('hide').off('click');
	});
}
function handlersModalAddTask(event){
	// console.log(this);
	$('#formAddTask').find('input[name=title]').focus();
}