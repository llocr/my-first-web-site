var Body = {
  setColor : function(color) {
    document.querySelector('body').style.color = color;
  } ,
  setBGColor : function(color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}

var Links = {
  setColor : function(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}

function nightDayHandler(self){
    if(self.value == 'night') {
      Body.setBGColor('black');
      Body.setColor('white');
      self.value = 'day';
      document.querySelector('#night_day2').value='day';
  
      Links.setColor('pink');
      }
      else {
      Body.setBGColor('white');
      Body.setColor('black')
      self.value = 'night';
      document.querySelector('#night_day2').value='night';
  
      Links.setColor('hotpink');
      } 
  }
  