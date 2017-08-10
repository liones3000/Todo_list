console.clear();
'use strict';

$('#formAddTask').on('submit', handlersAddTask);
$('#delete').on('click', handlersAllDelete);
$('body').on('click', '.btn-remove', handlersRemoveTask);
$('body').on('click', '.btn-edit', handlersEditTask);
$('#formEditTask').on('submit', handlersFormEdit);
$('#modalAddTask').on('shown.bs.modal', handlersModalAddTask);

(function(){
for (var key in localStorage) { //restore storage item on page
	if (localStorage.hasOwnProperty(key)){
		var task = JSON.parse(localStorage[key]);
		addTask(task, key);
	}
}
})();
countStatus();
