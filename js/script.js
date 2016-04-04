$(document).ready(function(){

    var result;
    var searchValue;
    // console.log(searchValue);
	function search(){
		searchValue=document.getElementById("searchInput").value;
	    $.ajax({
	    	url:"https://en.wikipedia.org/w/api.php",
	    	dataType:"jsonp",
	    	data:{
	    		action:'query',
	    		format:'json',
	    		prop:'extracts',
	    		exchars:'200',
	    		exlimit:'max',
	    		explaintext:'',
	    		exintro:'',
	    		pilimit:'max',
	    		rawcontinue:'',
	    		generator:'search',
	    		gsrsearch:searchValue,
	    		gsrnamespace:'0',
	    		gsrlimit:'10',
	    	},
	    	success:function(data){
	    		console.log(data);
	    		var pages=data.query.pages;
	    		$("#result").empty();
	    		for ( var i in pages){
	    			var html="<a class='res' href='https://en.wikipedia.org/wiki/"+pages[i].title+"' target='_blank'>"+"<h1>"+pages[i].title+"</h1>"+"<p>"+pages[i].extract+"</p"+
	    			"</a>";
	    			$("#result").append(html);$(".res").slideDown();
	    			console.log(html); 	
	    		}
	    	}
	    })
    }

	$("#searchInput").keypress(function(e) {
		/* after input click enter key to search*/
	    if(e.which == 13) {
	    	search();
	    }
	});

	$("#search-btn").on("click",function(){
		search();
	})



	
})
