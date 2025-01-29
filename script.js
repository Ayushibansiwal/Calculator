const buttonField = document.querySelectorAll("button");
const inputField = document.querySelector("input");
let expression = "";
const btns = (button) => {
    button.addEventListener("click",()=>{
        if(button.innerText === "="){
            try{
                let result =  eval(expression);
                expression = result ;
                inputField.value = expression ;
                expression.toString();
            }catch(error){
                expression = "Error";
                inputField.value = expression ;
            }
        }else if(button.innerText === "C"){
            expression = "";
            inputField.value = expression;
        }else{
            expression += button.innerText ;
            inputField.value = expression;
        }
    });
}
buttonField.forEach(btns);