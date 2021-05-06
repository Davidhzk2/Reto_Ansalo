// Reto Ansalo
console.log("Works it!");

// Inputs 
let inputChars = document.getElementById("inputChars");
let inputNumbers= document.getElementById("inputNumbers");
let span= document.getElementById('span');

// Numbers
let btnA1 = document.getElementById('btnA1');
let btnB2 = document.getElementById('btnB2');
let btnC3 = document.getElementById('btnC3');
let btnD4 = document.getElementById('btnD4');
let btnE5 = document.getElementById('btnE5');
let btnF6 = document.getElementById('btnF6');
let btnG7 = document.getElementById('btnG7');
let btnH8 = document.getElementById('btnH8');
let btnI9 = document.getElementById('btnI9');
let btnJ0 = document.getElementById('btnJ0');

// Buttons
let btnClean = document.getElementById('btnClean');
let btnVerify = document.getElementById('btnVerify');

const patternChar = "ABCDEFGHI";
const patternNumber = "1234567890";
let patter = "";


// Funtions
const cleanInputs = () =>{
    inputChars.value =  "";
    inputNumbers.value =  "";
    span.innerHTML = "";
};
const verifyInputs = () =>{
    if(inputChars.value != "" ){
        alert("el campo tiene datos");
    }else{
        // span.innerHTML = " Campos requeridos";
        alert("Por Favor Llene el campo de las letras");
    }
};

const writeA1 = () =>{
    inputChars.value = inputChars.value + "A";
    inputNumbers.value = inputNumbers.value + 1;
    
};
const writeB2 = () =>{
    inputChars.value = inputChars.value + "B";
    inputNumbers.value = inputNumbers.value + 2;
};
const writeC3 = () =>{
    inputChars.value = inputChars.value + "C";
    inputNumbers.value = inputNumbers.value + 3;
};
const writeD4 = () =>{
    inputChars.value = inputChars.value + "D";
    inputNumbers.value = inputNumbers.value + 4;
};
const writeE5 = () =>{
    inputChars.value = inputChars.value + "E";
    inputNumbers.value = inputNumbers.value + 5;
};
const writeF6 = () =>{
    inputChars.value = inputChars.value + "F";
    inputNumbers.value = inputNumbers.value + 6;
};
const writeG7 = () =>{
    inputChars.value = inputChars.value + "G";
    inputNumbers.value = inputNumbers.value + 7;
};
const writeH8 = () =>{
    inputChars.value = inputChars.value + "H";
    inputNumbers.value = inputNumbers.value + 8;
};
const writeI9 = () =>{
    inputChars.value = inputChars.value + "I";
    inputNumbers.value = inputNumbers.value + 9;
};
const writeJ0 = () =>{
   inputChars.value = inputChars.value + "J";
   inputNumbers.value = inputNumbers.value + 0;
}



// Onclick
btnClean.onclick = () =>{
    cleanInputs();
}
btnVerify.onclick = () =>{
    verifyInputs();
}
btnA1.onclick = () =>{
    writeA1();
}
btnB2.onclick = () =>{
    writeB2();
}
btnC3.onclick = () =>{
    writeC3();
}
btnD4.onclick = () =>{
    writeD4();
}
btnE5.onclick = () =>{
    writeE5();
}
btnF6.onclick = () =>{
    writeF6();
}
btnG7.onclick = () =>{
    writeG7();
}
btnH8.onclick = () =>{
    writeH8();
}
btnI9.onclick = () =>{
    writeI9();
}
btnJ0.onclick = () =>{
    writeJ0();
}
inputChars.addEventListener("keypress", llenarInput());
