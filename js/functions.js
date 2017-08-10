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
	var $edit = $('<button>').addClass('btn btn-warning btn-xs pull-right btn-edit').append('<span class="glyphicon glyphicon-pencil">');
// debugger;
	var $a = $('<a>')
	.attr({'data-toogle':'collapse', 'data-parent': '#accordion', 'href':'#'+id})
	.text(item.title);

	var $panelTitle = $('<h4>')
	.addClass('panel-title')
	.append($a)
	.append($remove)
	.append($edit);

	var $panelHeading = $('<div>')
	.addClass('panel-heading')
	// .attr('role','tab')
	.append($panelTitle);

	var $panelBody = $('<div>')
	.addClass('panel-body')
	.text(item.description);

	var $collapse = $('<div>')
	// .attr({'id':id, 'role':'tabepanel'})
	.attr('id', id)
	.addClass('panel-collapse collapse in')
	.append($panelBody);


	var $div = $('<div>')
	.addClass('panel panel-default')
	.appendTo('[data-status="' + item.status + '"] .panel-group')
	.attr('data-id', id)
	.append($panelHeading)
	.append($collapse)

} //end addTask