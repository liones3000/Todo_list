console.clear();
'use strict';

$('#formAddTask').on('submit', handlersAddtask);
$('#delete').on('click', handlersAlldelete);
$('body').on('click', '.btn-remove', handlersRemovetask);
$('body').on('click', '.btn-edit', handlersEdittask);
$('#formEditTask').on('submit', handlersFormedit);

$('#modalAddTask').on('shown.bs.modal', handlersModaladdTask);

(function(){
for (var key in localStorage) { //restore storage item on page
	if (localStorage.hasOwnProperty(key)){
		var task = JSON.parse(localStorage[key]);
		addTask(task, key);
	}
}
})();
countStatus();
