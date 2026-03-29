$(document).on('pagebeforeshow', '#two', function(){      
    $('#mydata').empty();
    
            $('#mydata').append('<img src="res/'+myInfo.id+'.jpg" width="100%" height="100%">');  
document.getElementById(myInfo.id).play();
       
});

$(document).on('vclick', '#mylist li a', function(){  
    myInfo.id = $(this).attr('data-id');
    $.mobile.changePage( "#two", { transition: "slide", changeHash: false });
});

var myInfo = {
    id : null
}