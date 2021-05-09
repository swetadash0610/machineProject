document.getElementById("output").style.display = "none"
var R1=0,R01=0,Zbr=0,R2=0,Xbr=0,X2=0,T=0,f=50,p=4
function calculate() {
    const Vbr = parseInt(document.getElementById("Vbr").value);
    const Ibr = parseInt(document.getElementById("Ibr").value);
    const Pbr = parseInt(document.getElementById("Pbr").value);
    const Vdc = parseInt(document.getElementById("Vdc").value);
    const Idc = parseInt(document.getElementById("Idc").value);

    if (Vbr===""||Ibr===""||Pbr===""||Vdc===""||Idc==="") {
        alert("Fields can't be empty!")
        return 1
    }
    R1= Vdc/Idc;
    R01=Pbr/(Ibr*Ibr)
    Zbr=Vbr/Ibr;
    R2=R01-R1;
    Xbr=Math.sqrt(Zbr*Zbr-R01*R01);
    X2=Xbr/2
    const ns=120*f/p
    
    T=(3/2*Math.PI*ns)*(Vbr*Vbr*R2/(R2*R2+X2*X2))

    document.getElementById("output").style.display = "block"
    document.getElementById("T").innerHTML = T
}