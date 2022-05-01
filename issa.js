
function ioEmail(email){
    let regex1=/(io)$/g;
    let rest1=regex1.test(email)
    
    
    if(rest1==true){
        let arremail1=email.split(".")
        console.log(arremail1)
        let arremail2=email.split("@")
        console.log(arremail2)
        if(arremail1.length==2 && arremail2.length==2){
        return true;
    
        }else{
         return false 

        }
       /*
       }*/
    // Add your logic.
   
}
}
console.log( ioEmail("example@example.gmail"))