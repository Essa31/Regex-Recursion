
function ioEmail(email){
    let regex1=/(.io)$/g;
    let rest1=regex1.test(email)

    
    
    if(rest1==true){
        let arremail1=email.split(".")
        console.log("gfutfg",arremail1)
        let arremail2=email.split("@")
        console.log("esrg",arremail2)
       if((arremail1.length ==2) && (arremail2.length==2)){
        return true;
    
        }else{
         return false 

        }
      
       }
    // Add your logic.
    return false
}


console.log(ioEmail("ex@ample@example.io"))