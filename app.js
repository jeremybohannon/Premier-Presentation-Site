$(function () {
  var dbMiddle = document.getElementById("middle");
  var left = document.getElementById("left");
  var right = document.getElementById("right");

  var maven = document.getElementById("mavenLogo");
  var mavenD = document.getElementById("mavenDesc");

  var jenkins = document.getElementById("jenkins");
  var jenkins_mad = document.getElementById("jenkins_mad");

  var mavenT = document.getElementById("mavenT");
  var mavenTH = document.getElementById("mavenTH");

  var nexus = document.getElementById("nexus");

  var docker = document.getElementById("docker");
  var container = document.getElementById("container");

  var hadoop = document.getElementById("hadoop");
  var spark = document.getElementById("spark");

  var O1 = document.getElementById("O1");
  var O2 = document.getElementById("O2");
  var O3 = document.getElementById("O3");
  var O4 = document.getElementById("O4");
  var O5 = document.getElementById("O5");

  var diff5 = document.getElementById("diff5");
  var diff6 = document.getElementById("diff6");
  var diff7 = document.getElementById("diff7");
  var diff8 = document.getElementById("diff8");

  var dbGolden1 = document.getElementById("dbGolden1");
  var dbGolden1 = document.getElementById("dbGolden2");
  var dbGolden1 = document.getElementById("dbGolden3");
  var dbGolden1 = document.getElementById("dbGolden4");

  var dbGreen5 = document.getElementById("dbGreen5");
  var dbGreen6 = document.getElementById("dbGreen6");
  var dbGreen7 = document.getElementById("dbGreen7");
  var dbGreen8 = document.getElementById("dbGreen8");

  var dbRed5 = document.getElementById("dbRed5");
  var dbRed6 = document.getElementById("dbRed6");
  var dbRed7 = document.getElementById("dbRed7");
  var dbRed8 = document.getElementById("dbRed8");

  var dagH2 = document.getElementById("dagH2");

  $(window).on('scroll', master);
    function master(){
      //IF dbMiddle IS BELOW JENKINS
      if(getPosition(dbMiddle).y > getPosition(jenkins).y && getPosition(jenkins).y != 0 || getPosition(dbMiddle).y > getPosition(jenkins_mad)) {
        jenkins.style.display = "none"
        jenkins_mad.style.display = "inline"

        dbMiddle.style.opacity = "1";
        dbMiddle.style.marginLeft = "-75px";
      } else if(getPosition(dbMiddle).y < getPosition(jenkins_mad).y){
        jenkins_mad.style.display = "none"
        jenkins.style.display = "inline"

        dbMiddle.style.opacity = "0"
      }

      //IF dbMiddle IS BELOW JENKINS ALREADY
      else if(jenkins.style.display == "none")
      {
        //IF dbMiddle IS BELOW NEXUS
        if(getPosition(dbMiddle).y > getPosition(nexus).y) {
          dbMiddle.style.width = "250px";
          dbMiddle.style.marginLeft = "-125px";
        } else {
          dbMiddle.style.width = "150px";
          dbMiddle.style.marginLeft = "-75px";
        }

        if (dbMiddle.style.width == "250px") {
          //IF dbMiddle IS BELOW DOCKER CONTAINER
          if(getPosition(dbMiddle).y > (getPosition(docker).y + 95)) {
            dbMiddle.src="/icons/dbOnDocker.png"
          } else {
            dbMiddle.src="/icons/dbMiddle.png"
          }

          if(dbMiddle.src == "http://localhost:2000/icons/dbOnDocker.png"){
            if(getPosition(dbMiddle).y > getPosition(hadoop).y){
              left.style.opacity = "1";
              right.style.opacity = "1";

              if(getPosition(left).x <= getPosition(dbMiddle).x + 35){
                left.style.left = (getPosition(dbMiddle).y - getPosition(hadoop).y + getPosition(hadoop).x * 2)  + "px"
              } else {
                left.style.opacity = "0";
              }

              if(getPosition(right).x >= getPosition(dbMiddle).x + 40){
                right.style.right = (getPosition(dbMiddle).y - getPosition(spark).y + getPosition(hadoop).x * 2 ) + "px"
              } else {
                right.style.opacity = "0";
              }


            } else if (getPosition(dbMiddle).y < getPosition(hadoop).y){
              left.style.opacity = "0";
              right.style.opacity = "0";
            }

            if(getPosition(dbMiddle).y + 30 >= getPosition(O1).y && getPosition(dbMiddle).y <= getPosition(O2).y){
              O1.style.opacity = "1";
              dagH2.style.opacity = "0";
            } else {
              O1.style.opacity = "0";
            }
            if(getPosition(dbMiddle).y + 30 >= getPosition(O2).y && getPosition(dbMiddle).y <= getPosition(O3).y){
              O2.style.opacity = "1";
              dagH2.style.opacity = "1";
            } else {
              O2.style.opacity = "0";
            }
            if(getPosition(dbMiddle).y + 30 >= getPosition(O3).y && getPosition(dbMiddle).y <= getPosition(O4).y){
              O3.style.opacity = "1";
            } else {
              O3.style.opacity = "0";
            }
            if(getPosition(dbMiddle).y + 30 >= getPosition(O4).y && getPosition(dbMiddle).y <= getPosition(O5).y){
              O4.style.opacity = "1";
            } else {
              O4.style.opacity = "0";
            }
            if(getPosition(dbMiddle).y + 30 >= getPosition(O5).y ){
              O5.style.opacity = "1";
            } else {
              O5.style.opacity = "0";
            }

            if(getPosition(dbMiddle).y >= getPosition(diff5).y ){
              diff5.style.display = "none";
              dbGreen5.style.display = "inline";
            } else {

            }
            if(getPosition(dbMiddle).y >= getPosition(diff6).y ){
              diff6.style.display = "none";
              dbGreen6.style.display = "inline";
            } else {

            }
            if(getPosition(dbMiddle).y >= getPosition(diff7).y ){
              diff7.style.display = "none";
              dbRed7.style.display = "inline";
            } else {

            }
            if(getPosition(dbMiddle).y >= getPosition(diff8).y ){
              diff8.style.display = "none";
              dbGreen8.style.display = "inline";
            } else {

            }


          }
        }
      }
      if(getPosition(dbMiddle).y > getPosition(mavenT).y && getPosition(dbMiddle).y < getPosition(mavenTH).y){
        maven.style.opacity = "1";
        mavenD.style.opacity = "1";
      } else {
        maven.style.opacity = "0";
        mavenD.style.opacity = "0";
      }
    }


  function getPosition(el) {
    var xPos = 0;
    var yPos = 0;

    while (el) {
      if (el.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        var yScroll = el.scrollTop || document.documentElement.scrollTop;

        xPos += (el.offsetLeft - xScroll + el.clientLeft);
        yPos += (el.offsetTop - yScroll + el.clientTop);
      } else {
        // for all other non-BODY elements
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
      }

      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
  }

});
