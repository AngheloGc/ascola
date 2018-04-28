$(document).on('submit','#form', function(e){
	e.preventDefault();

	let name = document.getElementById("songName").value;
		url = document.getElementById("url").value;

	$.ajax({
		type: 'POST',
		url: '/add/',
		data: {
			name: name,
			url: url,
			csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
		},
		success: function(){

			let item = document.createElement("div");

			item.className = 'item';

			item.innerHTML =
				"<img src="+url+"><p class='SongName'>"+name+"</p><span onclick='DeleteItem(this)' class='deleteItem'>X</span>";

			document.getElementById('main').appendChild(item);
		}
	});
})

/*window.addEventListener('load', function() {

	for (var i = 0; i < lista.items.length; i++) {

		var item = document.createElement("div");

		item.className = 'item';

    	item.innerHTML = "<img src="+lista.items[i].url+"><p class='SongName'>"+lista.items[i].song+"</p><span onclick='DeleteItem(this)' class='deleteItem'>X</span>";

   		 document.getElementById('main').appendChild(item);
	}
  
})*/


/*function AddItem() {

	var url = document.getElementById("url").value;
	var song = document.getElementById("songName").value;
	var item = document.createElement("div");

	item.className = 'item';

    item.innerHTML =
        "<img src="+url+"><p class='SongName'>"+song+"</p><span onclick='DeleteItem(this)' class='deleteItem'>X</span>";

    document.getElementById('main').appendChild(item);

}*/

function DeleteItem(e) {
	
	$.ajax({
		type: 'POST',
		url: '/delete/',
		data: {
			id: e.parentNode.id,
			csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
		},
		success: function(){

			console.log('Item Eliminado');
		}
	});

	e.parentNode.id= 'remove'
    var item = document.getElementById('remove');
	item.parentNode.removeChild(item);
}