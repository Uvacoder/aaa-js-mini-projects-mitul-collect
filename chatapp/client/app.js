$(document).ready(function(){
   
   const socket = io();
   
   $('form').submit(function(){
      const text = $('#nickname').val() + ' says: ' + $('#message').val();
      socket.emit('message', text);
      return false;
   });
   
   socket.on('message', function(msg){
      const incomingMessage = $('<li>').text(msg);
      $("#messages").append(incomingMessage);
   });

//node chat example FaisalAl-Tameemi
// return false tells JS not to refresh the page while submitting a form
// python / ruby backend but JS can do some jobs better 
//TJ Holowaychuk - node.js founder
// socket.io for chat apps

});