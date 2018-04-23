$(document).on('submit','#form', function(e){
	e.preventDefault();

	$.ajax({
		type: 'POST',
		url: '/add/',
		data: {
			name: document.getElementById("songName").value,
			url: document.getElementById("url").value,
			csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
		},
		success: function(){

			console.log('Item Agregado');
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
	e.parentNode.id= 'remove'
    var item = document.getElementById('remove');
    item.parentNode.removeChild(item);
}