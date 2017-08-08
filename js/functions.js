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

function addTask(item, id){ //add task to page
	var $div = $('<div>')
	.addClass('list-group-item')
	.appendTo('[data-status="' + item.status + '"] .list-group')
	.attr('data-id', id)
	.text(item.title+' ['+item.description+']');

	$('<button>').addClass('btn btn-danger btn-xs pull-right btn-remove') //add button delete
	.text('delete')
	.appendTo($div)

	$('<button>').addClass('btn btn-warning btn-xs pull-right btn-edit') //add button delete
	.text('edit')
	.appendTo($div)

} //end addTask