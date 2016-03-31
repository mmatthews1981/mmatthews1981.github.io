var temp = '';
var nums = [];
var total = '';
var tempdisplay;

$("button").on('click', function() {

  var val = $(this).text();
  if (!isNaN(val) || val === '.') {
    temp += val;
    $("#total").val(temp);
  } else if (val === 'del') {
    temp = temp.slice(0, -1);
    $("#total").val(temp);
  } else if (val === "clear") {
    temp = '';
    nums = [];
    $("#total").val(temp);
  } else if (val === "ce") {
    temp = '';
    $("#total").val(temp);
  }else if (val === "+" || val === "-" || val === "*" || val === "/") {
    nums.push(temp);
    nums.push(val);
    temp = '';
    tempdisplay = nums.join('');
    $("#total").val(tempdisplay);
  } else if (val === "=") {
    nums.push(temp);
    nums.push(val);
    temp = '';
    total = nums.shift()*1;
    for (var i = 0; i < nums.length; i++) {
      if(nums[i] == "+"){
        total += nums[i + 1]*1;
      } else if(nums[i] == "-"){
        total -= nums[i + 1]*1;
      } else if(nums[i] == "*"){
        total *= nums[i + 1]*1;
      } else if(nums[i] == "/"){
        total /= nums[i + 1]*1;
      }
    }
    nums = [+total.toFixed(10)];  
      
    $("#total").val(+total.toFixed(10));
  }

});