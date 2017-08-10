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
	.addClass('glyphicon glyphicon-remove mar5')
	.appendTo($div)

	$('<button>').addClass('btn btn-warning btn-xs pull-right btn-edit mar5') //add button delete
	.addClass('glyphicon glyphicon-pencil')
	.appendTo($div)

	$('<button>').addClass('btn btn-default btn-xs pull-right btn-view') //add button view
	.addClass('glyphicon glyphicon-eye-open')
	.appendTo($div)

} //end addTask