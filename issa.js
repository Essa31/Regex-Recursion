

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
<<<<<<< HEAD


console.log(ioEmail("ex@ample@example.io"))
=======
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

>>>>>>> b8d0a451a40e9a5ad012e38c69d4372a5a112582
