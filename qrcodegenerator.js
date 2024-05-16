let qrimage=document.getElementById("qrimage");
let imgbox=document.getElementById("imgbox");
let qrinput=document.getElementById("qrinput");

function QRGenerate(){
    if(qrinput.value.length>0)
        {
            qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrinput.value;
        }
}