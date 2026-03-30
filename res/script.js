$(document).on('pagebeforeshow', '#two', function () {
    $('#mydata').empty();

    $('#mydata').append('<img src="res/' + myInfo.id + '.jpg" width="100%" height="100%">');
    musicelements = document.getElementsByTagName("audio");
    for (i = 0; i < musicelements.length; i++) musicelements[i].pause();
    document.getElementById(myInfo.id).play();

});

$(document).on('vclick', '#mylist li a', function () {
    myInfo.id = $(this).attr('data-id');
    $.mobile.changePage("#two", { transition: "slide", changeHash: false });
});

var myInfo = {
    id: null
}