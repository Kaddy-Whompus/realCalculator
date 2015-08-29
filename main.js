'use strict';
$(document).ready(function(){

  var storedNumber = 0;
  var operator = '';

  function init(){
    $('.numberButton').click(clickNumber);
    $('#decimal').click(clickDecimal);
    $('#screen').click(clear);
    $('.functionButton').click(clickOperator);
    $('#equal').click(performCalculation);
    console.log("turning on");
  }

  function clickNumber(){
    var number = $(this).text();
    var screen = $('#screen').text();
    var output = (screen === '0') ? number : screen + number;
    $('#screen').text(output);
    console.log(output);
  }


  function clickDecimal(){
    var screen = $('#screen').text();
    var output = screen.indexOf('.') !=== -1 ? screen : screen += '.';
    $('#screen').text(output);
    console.log(output);
  }

  function clear(){
    $('#screen').text('0');
    console.log("clear working");
  }

  function clickFunction(){
    storedNumber = parseFloat($('#screen').text());
    operator = $(this).text();
    clear();
    console.log("storing number")
  }

  function performCalculation() {
    var newNumber = parseFloat($('#screen').text());
    var result;
    switch (operator) {
      case '+':
        result = storedNumber + newNumber;
        break;
      case '-':
        result = storedNumber - newNumber;
        break;
      case '×':
        result = storedNumber * newNumber;
        break;
      case '÷':
        result = storedNumber / newNumber;
    }
    $('#screen').text(result);
    console.log("operator working")
  }
});
