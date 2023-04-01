(function(){
  
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-red');
    let equal = document.querySelector('.btn-green');
    let percent = document.querySelector('.btn-blue');
    let backspace= document.querySelector('.btn-back');
    

    buttons.forEach(function(button){
        button.addEventListener('click', function(e) {
            let value= e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener("click", function(e){
        if (screen.value === "") {
           screen.value = "";
         } else{
            var answer = eval(screen.value);
             screen.value = answer;     
         } 
     })
 
     clear.addEventListener('click', function(e){
        screen.value= " ";
     })

     backspace.addEventListener('click',function(e){
            
            //   screen.value=screen.value.toString().slice(0,-1);
           var calcvalue=screen.value ;
           screen.value=calcvalue.toString().slice(0,-1);
          
     })

})();
