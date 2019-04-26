$(document).keydown(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    console.log(keycode)
    switch(keycode)
    {
        case 37:$(".box").animate({left:'-=10px'},"fast");break;
        case 38:$(".box").animate({top:'-=10px',},"fast");break;
        case 39:$(".box").animate({left:'+=10px',},"fast");break;
        case 40:$(".box").animate({top:'+=10px',},"fast");break;
    }
    }
    )
    /*
    we can use a map of keys to track pressed keys using keyDown and keyUp 
    code example : 
    var arr = {37: false, 38: false, 39: false,40: false};
    $(document).keydown(function(e) {
        if (e.keyCode in map) {
            arr[e.keyCode] = true;   
        }
    }).keyup(function(e) {
        if (e.keyCode in map) {
            map[e.keyCode] = false;
        }
    });
    */