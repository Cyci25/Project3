
// user interface logic
$(document).ready(function(){
    $("a#button").click(function(event){
        event.preventDefault();
        $("#display").empty();
        var userinput = parseInt($("input#number").val())
        console.log(userinput);
        var range=[...Array(userinput).keys()];
        loopist(range);
        console.log(range);
    });
});
function print(val) {    
    $("#display").append("<li>"+val+"</li>");
    
}



// business interface
function loopist(userinput) {
    var results="";
    userinput.forEach(y => {
        y++
        if (y % 15 === 0) {
            print("pingpong");
        }
        else if (y % 5 === 0) {
            print("pong");
        
        }
        else if (y % 3 === 0) {
            print("ping");
            
        }
        else {
            print (y)
        } 
    });
}

