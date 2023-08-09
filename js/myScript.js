function myFunction(){
    alert("HelloJAvaScript");

    console.log("HelloWorld")

    console.log(document.getElementById("header1").innerText);

    document.getElementById("header1").innerHTML = "Change....";
    document.getElementById("header1").style.color = "#FF0000";

    var x = 8;
    var y = 20;
    var z = 3;

    //หาค่าเฉลี่ย --> header2
    document.getElementById("header2").innerHTML =
        ((x+y+z)/3).toFixed(2);
}

function LikeFunction(){
    var counter =
parseInt(document.getElementById("result").innerText);
    //เพิ่ม counter 1
    counter++;
    document.getElementById("result").innerText = counter;
    //ปรับขนาดตัวอักษรเพิ่มขึ้น 1
    document.getElementById("result").style.fontSize=10+counter+"px";
}

function LoveFunction(){
    var counter =
parseInt(document.getElementById("result").innerText);
    //เพิ่ม counter 10
    counter+=10;
    document.getElementById("result").innerText = counter;
    //ปรับขนาดตัวอักษรเพิ่มขึ้น 5
    document.getElementById("result").style.fontSize=50+counter+"px";
}
