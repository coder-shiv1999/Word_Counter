let textbox = document.getElementById("tarea");
textbox.addEventListener('input', function(){
    var text = this.value;
    document.getElementById("char").innerHTML = text.length; 
    if(text.length>1){
        document.getElementById("chr").innerHTML = "characters";
    }

    text = text.trim();
    let words = text.split(" ");
    if(text.length == 0){
      document.getElementById("word").innerHTML = 0;
      document.getElementById("wr").innerHTML = "word";
      return;
    }
   console.log(text);
    let cleantext = words.filter(function(elm){
        return elm!=(" ");
    }) 
  
    document.getElementById("word").innerHTML = words.length;
    // console.log(words);
    if(words.length>1){
        document.getElementById("wr").innerHTML = "words";
    } 
    
});