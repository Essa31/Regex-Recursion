function imagesSearcher(text){
    let regex =/(.jpg)(\w)\b*/g;
    let regex1 =/(.jpeg)(\w)\b*/g;
    let regex2 =/(.png)(\w)\b*/g;
    
    let re=text.match(regex)
    let r=re[0]
    let re1=text.match(regex1)
    let r1=re1[0] 
    let re2=text.match(regex2) 
    let r2=re2[0] 
    let arr = [];
    arr.push(r1)
    arr.push(r1)
    arr.push(r2)
   
    // Add your logic.
    return arr
}
let text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, cat.png sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dog.jpg Ut enim ad minim veniam, quis nostrud exercitation ullamco cow.jpeg laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
console.log(imagesSearcher(text))