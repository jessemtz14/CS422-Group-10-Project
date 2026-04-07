import PhoneFrame from "../components/PhoneFrame";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";
<<<<<<< HEAD

=======
>>>>>>> fec9ecbb727a2cc36febdf1cdbd7b806575c4143

export default function Scan() {
  return (
    <PhoneFrame>
      <StatusBar />
      <section className="scan-container">
<<<<<<< HEAD
        <p className = "camera-label">Align barcode or ingredient label here</p>
        <div className = "camera-frame">
          <div className = "camera-viewfinder">
            <div className = "hex-icon">◆</div>
=======
        <p className="camera-label">Align barcode or ingredient label here</p>
        <div className="camera-frame">
          <div className="camera-viewfinder">
            <div className="hex-icon">◆</div>
>>>>>>> fec9ecbb727a2cc36febdf1cdbd7b806575c4143
          </div>
        </div>

        {/* Instructions for users */}
        <p className="instructions">
<<<<<<< HEAD
          Point your camera at a product's barcode or ingredient label to scan it. 
          Make sure the entire code or label is visible within the viewfinder for best results.
        </p>

        {/* Camera button */}
        <div className = "camera-button-container">
          <button className = "camera-button"></button>
=======
          Point your camera at a product's barcode or ingredient label to scan
          it. Make sure the entire code or label is visible within the
          viewfinder for best results.
        </p>

        {/* Camera button */}
        <div className="camera-button-container">
          <button className="camera-button"></button>
>>>>>>> fec9ecbb727a2cc36febdf1cdbd7b806575c4143
        </div>
      </section>
      <BottomNav />
    </PhoneFrame>
  );
}
