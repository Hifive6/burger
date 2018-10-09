$(function(){
    $(".eaten").on("click", function(event){
        const id = $(this).data("id");

        const newDevouredBurger = {
            devoured: true
        };
        console.log("call to api" + id);
        console.log("newly eaten" + newDevouredBurger.devoured);

        $.ajax("/api/burgers" + id,
        {
            type: "PUT",
            data: newDevouredBurger
        }).then(
            function(){
                console.log("changed to", newDevouredBurger);
                location.reload();
            }
        )
    })



$(".insert-burger").on("submit", function(event){
    event.preventDefault();

    const newAddBurger = {
        name: $("#addburger").val().trim(),
        // devoured: false
    };
    
    $.ajax("/api/burgers", {
        type: "POST",
        data: newAddBurger
    }).then(
        function(){
        console.log("created new burger" + newAddBurger);
        location.reload();
    }
    )
})
})