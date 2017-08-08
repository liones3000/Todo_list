	function handlersAddtask(event){
		event.preventDefault();

		var id = new Date().getTime();

		var task = {
			title: $(this).find('[name=title]').val(),
			description: $(this).find('[name=description]').val(),
	// status: 2 //1-todo, 2 - in progress, 3 - done
			status: $(this).find('input:checked').val(),
		};

		addTask(task, id);
		localStorage.setItem(id, JSON.stringify(task)); //add task for storage
		countStatus();
		$('#modalAddTask').modal('hide');
		this.reset();
}
function handlersRemovetask(){
		var $parent = $(this).parents('[data-id]');
		var id = $parent.data('id');
		
		$('#modalConfirm').modal('show').on('click', '#ok', function(){

		localStorage.removeItem(id);
		countStatus();
		$parent.remove();
		$('#modalConfirm').modal('hide').off('click');
		})
	}
function handlersEdittask(){
	var $parent = $(this).parents('[data-id]');
	var id = $parent.data('id');
	var task = JSON.parse(localStorage.getItem(id));
	
	// console.log(id);

	for(var key in task) {
		$('#modalEditTask').find('[name='+ key +']').val(task[key]);
	}
		$('#modalEditTask').find('[name=id]').val(id);

	$('#modalEditTask').modal('show');
	
}
function handlersFormedit(event){ //form
	event.preventDefault();

	var task = {
		title: $(this).find('[name=title]').val(),
		description: $(this).find('[name=description]').val(),
		status: $(this).find('[name=status]').val(),
	};
	// console.log('task', task);
	var id = $(this).find('[name=id]').val();


	localStorage.setItem(id, JSON.stringify(task)); //add task for storage
	
	$('#task-list [data-id="'+id+'"]').remove();

	addTask(task, id);
	countStatus();

	$('#modalEditTask').modal('hide');
}
function handlersAlldelete(){ //Button delete all
	var obj = $('div').filter('.list-group-item');
	for (var i=0; i<obj.length;i++){
		obj[i].remove();
	}
	localStorage.clear();
	countStatus();
}
function handlersModaladdTask(event){
	console.log(this);
	$('#formAddTask').find('input[name=title]').focus();
}