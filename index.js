function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  if (window.innerWidth > 800) {
    document.getElementById("main").style.marginLeft = "250px";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  if (window.innerWidth > 800) {
    document.getElementById("main").style.marginLeft = "0";
  }
}

document.getElementById("output").style.display = "none";
var R1 = 0,
  R01 = 0,
  Zbr = 0,
  R2 = 0,
  Xbr = 0,
  X2 = 0,
  T = 0;
var Vbr, Ibr, Pbr, Vdc, Idc, f, p;

function calculate() {
  Vbr = document.getElementById("Vbr").value;
  Ibr = document.getElementById("Ibr").value;
  Pbr = document.getElementById("Pbr").value;
  Vdc = document.getElementById("Vdc").value;
  Idc = document.getElementById("Idc").value;
  f = document.getElementById("f").value;
  p = document.getElementById("p").value;
  if (
    Vbr === "" ||
    Ibr === "" ||
    Pbr === "" ||
    Vdc === "" ||
    Idc === "" ||
    f === "" ||
    p === ""
  ) {
    document.getElementById("output").style.display = "block";
    document.getElementById("output").innerHTML =
      "<p style='display:flex; align-items:center;' ><i class='fas fa-exclamation-triangle' style='color: orange; font-size:3rem; padding-right:1rem'></i> Input fields cannot be empty! All the inputs are required</p>";
    return 1;
  }

  Vbr = parseInt(Vbr);
  Ibr = parseInt(Ibr);
  Pbr = parseInt(Pbr);
  Vdc = parseInt(Vdc);
  Idc = parseInt(Idc);
  f = parseInt(f);
  p = parseInt(p);

  R1 = Vdc / Idc;
  R01 = Pbr / (Ibr * Ibr);
  Zbr = Vbr / Ibr;
  R2 = R01 - R1;
  Xbr = Math.sqrt(Zbr * Zbr - R01 * R01);
  X2 = Xbr / 2;
  const ns = (120 * f) / p / 60;

  T = (3 / (2 * Math.PI * ns)) * ((Vbr * Vbr * R2) / (R2 * R2 + X2 * X2));
  T = T.toFixed(2);

  if (T < 0) {
    document.getElementById("output").style.display = "block";
    document.getElementById("output").innerHTML =
      "<p style='display:flex; align-items:center;' ><i class='far fa-times-circle' style='color: red;font-size:3rem; padding-right:1rem;'></i>Invalid Inputs! Calculated torque is negative</p>";
  } else {
    document.getElementById("output").style.display = "block";
    document.getElementById("output").innerHTML =
      "<span style='display:flex; align-items:center;'><i class='far fa-check-circle' style='color: green;font-size:3rem; padding-right:1rem'></i><b>Starting Torque:</b>" +
      " " +
      T +
      " N-m" +
      "</span>";
  }
}

function defaultValues() {
  document.getElementById("Vbr").value = 1500;
  document.getElementById("Ibr").value = 120;
  document.getElementById("Pbr").value = 10000;
  document.getElementById("Vdc").value = 2;
  document.getElementById("Idc").value = 10;
  document.getElementById("f").value = 50;
  document.getElementById("p").value = 6;
}
