let image = document.getElementById("image");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");
let button = document.querySelector("button");
let errorMsg = document.getElementById("errorMsg");


function generateQR(){
    if (qrText.value.length > 0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150×150&data=" + qrText.value;
        image.classList.add("show-img");
    }
    else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000)
    }
}
button.addEventListener("click",()=>{
    generateQR();
})
