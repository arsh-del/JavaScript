var interval = setInterval(size,100);
let flag = 0;
var cl= "#8A2BE2";
var x = Math.floor(Math.random() * 1000);
var y = Math.floor(Math.random() * 1000);


function color() {
   cl = Math.floor(Math.random()*16777215).toString(16);
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    cl += letters[Math.floor(Math.random() * 16)];
  }


}



function ss() {
  sz=sz+10;
}

function sd() {
  sz=sz-10;
}

var sz=125;
var c;
function size() {


  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));
  var s;
  if (flag == 0) {

    var s = Math.floor(Math.random() * 1000);
    var r = Math.floor(Math.random() * 1000);



    if (x < 1000 && y < 500) {
      s = x++;
      r = y++;
      c = Shape.Rectangle(s, r, sz, sz);
      c.fillColor = cl;
      paper.view.draw(c);

    } else {
      flag = 1;

    }
  }
  }
    if (flag==1){

      if(x>=1000 && y>=500){
        s = x++;
        r = y++;
        c = Shape.Rectangle(s, r, 125, 125);
        c.fillColor = 'green';
        paper.view.draw(c);
      } else {
        flag = 0;

      }



      function pause() {
        console.log('====================');
        sleep(9000);
      }

    }



