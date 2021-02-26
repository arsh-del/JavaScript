var interval = setInterval(size,1);
var m=100;
var n=0;
let flag = 0;
function size() {
  let c;
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));
  var s=0;
  if (flag == 0) {
    if (m < 1000 && n < 600) {
      // s = m++;
      r = n++
      c = Shape.Rectangle(s, r,100,100);
      c.fillColor = 'Blue';
      paper.view.draw(c);
    } else {
      flag = 1;
    }

  } else if (flag == 1) {
    if (m >= 100 && n >= 0) {
      s = m;
      r = n--;
      c = Shape.Rectangle(s, r, 100, 100);
      c.fillColor = 'Brown';
      paper.view.draw(c);
    //  console.log('m='+ m +'n='+ n+"flag="+ flag);
    } else {
      flag = 3;
      m=300;
     // console.log('m='+ m +'n='+ n+"flag2="+ flag);
    }
  } else if (flag == 3) {
    if (m < 1000 && n < 600) {
      //  s = m++;
      s = 200;
      r = n++;
      c = Shape.Rectangle(s, r, 100, 100);
      c.fillColor = 'Orange';
      paper.view.draw(c);
      console.log('m=' + m + 'n=' + n + "flag=3"+flag);
    }
    else{
      flag = 5;
      console.log("flag=5  "+flag);
    }
  }

   else if(flag==4){
    if (m < 100 && n < 500) {
      s = 20;
      r = n--;
      c = Shape.Rectangle(s, r, 150, 90);
      c.fillColor = 'Gold';
      paper.view.draw(c);

    }
    else{
      flag=0;
    }
  }

  else if (flag == 5) {
    console.log("5 activeate");
    if (m >= 100 && n >= 0) {
      s = 300;
      // s = m;
      r = n--;
      c = Shape.Rectangle(s, r, 100, 100);
      c.fillColor = 'Olive';
      paper.view.draw(c);
      console.log('m=' + m + 'n=' + n + "flag=" + flag);
    } else {
      flag = 6;
      console.log('m=' + m + 'n=' + n + "flag2=" + flag);
    }

  }

  else if (flag == 6) {
    if (m < 1000 && n < 600) {
      //  s = m++;
      s = 400;
      r = n++;
      c = Shape.Rectangle(s, r, 100, 100);
      c.fillColor = 'Lime';
      paper.view.draw(c);
      console.log('m=' + m + 'n=' + n + "flag=3"+flag);
    }
    else{
      flag = 7;
      console.log("flag=5  "+flag);
    }
  }

  else if (flag == 7) {
    if (m >= 100 && n >= 0) {
      s = 500;
      // s = m;
      r = n--;
      c = Shape.Rectangle(s, r, 100, 100);
      c.fillColor = 'Linen';
      paper.view.draw(c);
      console.log('m=' + m + 'n=' + n + "flag=" + flag);
    } else {
      flag = 8;
      console.log('m=' + m + 'n=' + n + "flag2=" + flag);
    }

  }

  else if (flag == 8) {
    if (m < 1000 && n < 600) {
      //  s = m++;
      s = 600;
      r = n++;
      c = Shape.Rectangle(s, r, 100, 100);
      c.fillColor = 'Khaki';
      paper.view.draw(c);
      console.log('m=' + m + 'n=' + n + "flag=3"+flag);
    }
    else{
      flag = 8;
      console.log("flag=5  "+flag);
    }
  }

  else if (flag == 8) {
    if (m >= 100 && n >= 0) {
      s = 600;

      r = n--;
      c = Shape.Rectangle(s, r, 100, 100);
      c.fillColor = 'Pink';
      paper.view.draw(c);
      console.log('m=' + m + 'n=' + n + "flag=" + flag);
    } else {
      flag = 9;
      console.log('m=' + m + 'n=' + n + "flag2=" + flag);
    }

  }

  else if (flag == 9) {
    if (m < 1000 && n < 600) {
      //  s = m++;
      s = 700;
      r = n++;
      c = Shape.Rectangle(s, r, 100, 100);
      c.fillColor = 'Grey';
      paper.view.draw(c);
      console.log('m=' + m + 'n=' + n + "flag=3"+flag);
    }
    else{
      flag = 10;
    }
  }
  else if (flag == 10) {
    if (m < 1000 && n < 600) {
      //  s = m++;
      s = 700;
      r = n--;
      c = Shape.Rectangle(s, r, 100, 100);
      c.fillColor = 'Grey';
      paper.view.draw(c);
      console.log('m=' + m + 'n=' + n + "flag=3"+flag);
    }
    else{
      flag = 0;
    }
  }

}
