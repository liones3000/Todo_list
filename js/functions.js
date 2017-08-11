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
	var $remove = $('<button>').addClass('btn btn-danger btn-xs pull-right btn-remove mar5').append('<span class="glyphicon glyphicon-remove">');
	var $edit = $('<button>').addClass('btn btn-warning btn-xs pull-right btn-edit mar5').append('<span class="glyphicon glyphicon-pencil">');
	var $view = $('<button>').addClass('btn btn-info btn-xs pull-right btn-view').append('<span class="glyphicon glyphicon-eye-open">')
	.on('click', function(){
		var $id = $(this).parents('[data-id]').attr('data-id');
		$('#'+$id).collapse('toggle');
	});
		// Additional method
	var $a = $('<a>')
	.attr({'data-toogle':'collapse', 'href':'#'+id})
	.text(item.title)
	.on('click', function(){
		var $id = $(this).attr('href');
		$($id).collapse('toggle');
	});
		// Additional method end
		
	var $panelTitle = $('<h4>')
	.addClass('panel-title')
	.append($a)
	.append($remove)
	.append($edit)
	.append($view);

	var $panelHeading = $('<div>')
	.addClass('panel-heading')
	.append($panelTitle);

	var $date = $('<p>').addClass('small').html('<i class="glyphicon glyphicon-calendar"><strong>'+item.date+'</strong></i>');
	var $description = $('<div>').text(item.description);

	var $panelBody = $('<div>')
	.addClass('panel-body')
	.append($date)
	.append($description);

	var $collapse = $('<div>')
	.attr('id', ''+id)
	.addClass('panel-collapse collapse')
	.append($panelBody);

	var $div = $('<div>')
	.addClass('panel panel-default')
	.appendTo('[data-status="' + item.status + '"] .panel-group')
	.attr('data-id', id)
	.append($panelHeading)
	.append($collapse);

} //end addTask