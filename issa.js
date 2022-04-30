
function imagesSearcher(text){
    let arr=[]
    let regex =/(.jpg)$/g;
    let regex1 =/(.jpeg)$/g;
    let regex2 =/(.png)$/g;
    let textArr=text.split(" ")
    console.log(textArr)
    console.log(textArr[2])
    for (let i =0 ;i<textArr.length ;i++){

        let item =textArr[i]
        console.log(textArr[i])
        console.log(item)
        if(true==regex.test(item)||true==regex1.test(item)||true==regex2.test(item)){
            arr.push(item)



        }
    }
    
   
    // Add your logic.
    return arr
}

let text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, cat.png sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dog.jpg Ut enim ad minim veniam, quis nostrud exercitation ullamco cow.jpeg laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
console.log(imagesSearcher(text))