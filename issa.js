

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
=======
function pow(x,n){
    if(n==0){return 1}
    else if (n%2 ==0){
        return pow(x,(n/2))*pow(x,(n/2))
    }else{
         return x*pow(x,(n/2))*pow(x,(n/2))
    }
    
}
console.log(pow(10,2)) 

