import React, { useEffect } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import { useState } from "react";

function Qrcode() {

  const [scanResult, setScanResult] = useState(null);

useEffect(() => {
  const scanner = new Html5QrcodeScanner('reader' , {
    qrbox: {
    width: 50,
    height: 50,
  },
  fps: 5,
})

scanner.render(success, error);

function success(result){
  scanner.clear();
  setScanResult(result);
} 

function error(err) {
  console.warn(err);
}
}, []);


  return (
    <div className="Qrcode">
      <h1>Scan card to add</h1>
      { scanResult
      ? <div>Success: <a href={+scanResult}>{scanResult} </a> </div>
      : <div id="reader"></div>
      }
    </div>
  );
}

export default Qrcode
