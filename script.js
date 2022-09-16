const keyboard = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32];


// document.onkeypress = function(event){
//     // console.log(event);
//     keyboard.push(event.charCode);
//     console.log(keyboard);
// }
function init(){
    let out = '';
    for (let i=0; i< keyboard.length; i++){
        if (i==12 || i==24 || i===45 || i===35) {
            out += '<div class="clearfix"></div>';
        }  
        out += `<div class="k-key ${i == 45 && 'space'}" data="${keyboard[i]}">
            ${String.fromCharCode(keyboard[i])} 
            </div>`;
    }
    document.querySelector('#keyboard').innerHTML = out;
}

init();
document.onkeypress = function(event){
    console.log(event.code);
    console.log(event.keyCode);
    document.querySelectorAll('#keyboard .k-key').forEach(function(element){
        element.classList.remove('active');
    });

    document.querySelector('#keyboard .k-key[data="'+event.keyCode+'"]').classList.add('active');
}

document.querySelectorAll('#keyboard .k-key').forEach(function(element){
    element.onclick = function(event){
        document.querySelectorAll('#keyboard .k-key').forEach(function(element){
            element.classList.remove('active');
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
        console.log(code);

        // setTimeout('querySelectorAll()', 300);
    }

});
// document.querySelector('#keyboard .k-key').addEventListener('click', () =>{
//     document.querySelector('#text').innerHTML = data;
// })
// let theTextBox = document.getElementById('enteredText'); 