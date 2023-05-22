/* 1 If QR code scanner have read it , it will close automatically */

							/* FOR MOBILE*/
              
/* 2 By clicking only one button you can start and stop scan.  */
 
 
let html5QrCode = null;

const button = document.querySelector("button");
      function openScanQR(){
           if(!html5QrCode){
               html5QrCode = new Html5Qrcode("reader");
               const qrCodeSuccessCallback = (decodedText, decodedResult) => {
                    document.getElementById("result").value = decodedText;
                    closeScanQR()
                   
               };
               const config = { fps: 10, qrbox: { width: 250, height: 250 } };
              html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
           }else{
              closeScanQR()
           }
       };
       function closeScanQR(){
           if(!!html5QrCode){
               html5QrCode.stop().then((ignore) => {
                   html5QrCode = null
               }).catch((err) => {
               });
           }
       } 
       
       button.addEventListener("click",openScanQR);
       
       
       
       

       
       