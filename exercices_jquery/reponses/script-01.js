

$("#ce div:first").css("color","red")
$("#ce div:first").clone().insertAfter("#ce div:last");

$("#ce div:last").prependTo("#ce");

var number =0;

$("#ce div").each(function (index, value) {
number++;
});

$("<div>Number : "+number+"</div>").appendTo("#ce");

$("#ce div").each(function (index, value) {
    this.innerHTML=(index+1)+"    "+value.innerHTML
    console.log(this);
});
