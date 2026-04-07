import PhoneFrame from "../components/PhoneFrame";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";


export default function Scan() {
  return (
    <PhoneFrame>
      <StatusBar />
      <section className="scan-container">
        <p className = "camera-label">Align barcode or ingredient label here</p>
        <div className = "camera-frame">
          <div className = "camera-viewfinder">
            <div className = "hex-icon">◆</div>
          </div>
        </div>

        {/* Instructions for users */}
        <p className="instructions">
          Point your camera at a product's barcode or ingredient label to scan it. 
          Make sure the entire code or label is visible within the viewfinder for best results.
        </p>

        {/* Camera button */}
        <div className = "camera-button-container">
          <button className = "camera-button"></button>
        </div>
      </section>
      <BottomNav />
    </PhoneFrame>
  );
}
