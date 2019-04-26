var tmp = 1;
var sum = 0;
var size = $(".r").length - 1
$(".r").each(function (index, value) {

    if (value.innerHTML === "?" && index != size) {
        sum += tmp
        this.innerHTML = tmp
        tmp = 1
    }
    else if (index == size)
        this.innerHTML = sum
    else
        tmp *= value.innerHTML;
    console.log(index, sum)
})

