let display = document.querySelector( "#display") ;
let regex = /[A-Za-zA-Яа-яЁё]/g;
display.oninput = function(){
    this.value = this.value.replace(regex, '');
}
const zero = document.querySelector( "#zero" );
zero.onclick = function(){
   document.getElementById("value").innerHTML= value;

}
