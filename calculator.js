$(document).ready(function(){
    $('#one').click(function(){
        document.forms.display.value += 1;
    })
    $('#two').click(function(){
        document.forms.display.value += 2;
    })
    $('#three').click(function(){
        document.forms.display.value += 3;
    })
    $('#four').click(function(){
        document.forms.display.value += 4;
    })
    $('#five').click(function(){
        document.forms.display.value += 5;
    })
    $('#sex').click(function(){
        document.forms.display.value += 6;
    })
    $('#seven').click(function(){
        document.forms.display.value += 7;
    })
    $('#eight').click(function(){
        document.forms.display.value += 8;
    })
    $('#nine').click(function(){
        document.forms.display.value += 9;
    })
    $('#addition').click(function(){
        document.forms.display.value += '+';
    })
    $('#substruction').click(function(){
        document.forms.display.value += '-';
    })
    $('#multiplication').click(function(){
        document.forms.display.value += '*';
    })
    $('#divition').click(function(){
        document.forms.display.value += '/';
    })
    $('#dot').click(function(){
        document.forms.display.value += '.';
    })
    $('#zero').click(function(){
        document.forms.display.value += '0';
    })
    $('#equal').click(function(){
        if(display.value == ""){
            alert ("Iltimos hisoblash uchun biror bir raqam kiriting!");
        }else{
            document.forms.display.value = eval(document.forms.display.value);
        }
    })
    $('#clear').click(function(){
        document.forms.display.value = "";
    })
}) 