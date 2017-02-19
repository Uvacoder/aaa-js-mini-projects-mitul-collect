//Delete specific Todos with a click 
$("ul").on('click', 'li', function(){
    $(this).toggleClass('strike');
});

//Click X to remove todo
$("ul").on('click', 'span', function(event){
    $(this).parent().fadeOut(300, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Add a new todo
$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
     // grabbing input text
        var todoText = $(this).val();
     // create new li
        $('ul').append("<li><span><i class='fa fa-trash'></i></span>"+todoText+"</li>");
        $(this).val("");
    }
    
  /*  else if(event.which === 13 && oninput === ""){
           
    }*/
});

//toggle form 
$('.fa-plus').click(function(){
    $('input').fadeToggle(200);
});