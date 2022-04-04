let display = document.querySelector( "#display") ;
let regex = /[A-Za-zA-Яа-яЁё]/g;
display.oninput = function(){
    this.value = this.value.replace(regex, '');
}
//display.oninput = function(){
    //this.value = this.value.slice(0 , 16);
//}
