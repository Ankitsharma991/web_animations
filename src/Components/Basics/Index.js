import React from "react";
import "./index.css";

const Index = () => {
  return (
    <div>
      <div className="btnDiv">
        <button className="button1">css transition</button>
        <button className="button2">multilevel transition</button>
      </div>
      <div className="container">
        <div id="ease" className="move">
          Ease (Default)
        </div>
        <div id="linear" className="move">
          Linear
        </div>
        <div id="ease-in" className="move">
          Ease-In
        </div>
        <div id="ease-out" className="move">
          Ease-Out
        </div>
        <div id="ease-in-out" className="move">
          Ease-In-Out
        </div>
      </div>

      {/* 2D transform */}
      <p className="dTitle">2D transform</p>
      <div className="container2">
        <div className="transformXY">
          <img
            src="https://lh3.googleusercontent.com/proxy/cnt7a22d1ktcUeE82JrEEVv4h10nlpnCqC2nF63ycuuxiC1XufAV_XeH1kJo6gRQsxv2mVmfe93ctqrXO6IY1-bLWVNW9lgTJsjDWj4fKqb1Qa8P9p6xGcINuylKuTZL-dwU0uvAseV1Te7CSatyvWiODNwgVAA=s680-w680-h510"
            alt="link-url"
          />
          <p>2D transform</p>
        </div>

        <div className="scale">
          <img
            src="https://lh3.googleusercontent.com/proxy/cnt7a22d1ktcUeE82JrEEVv4h10nlpnCqC2nF63ycuuxiC1XufAV_XeH1kJo6gRQsxv2mVmfe93ctqrXO6IY1-bLWVNW9lgTJsjDWj4fKqb1Qa8P9p6xGcINuylKuTZL-dwU0uvAseV1Te7CSatyvWiODNwgVAA=s680-w680-h510"
            alt="link-url"
          />
          <p>Scale</p>
        </div>

        <div className="rotate">
          <img
            src="https://lh3.googleusercontent.com/proxy/cnt7a22d1ktcUeE82JrEEVv4h10nlpnCqC2nF63ycuuxiC1XufAV_XeH1kJo6gRQsxv2mVmfe93ctqrXO6IY1-bLWVNW9lgTJsjDWj4fKqb1Qa8P9p6xGcINuylKuTZL-dwU0uvAseV1Te7CSatyvWiODNwgVAA=s680-w680-h510"
            alt="link-url"
          />
          <p>Rotate 360</p>
        </div>

        <div className="skew">
          <img
            src="https://lh3.googleusercontent.com/proxy/cnt7a22d1ktcUeE82JrEEVv4h10nlpnCqC2nF63ycuuxiC1XufAV_XeH1kJo6gRQsxv2mVmfe93ctqrXO6IY1-bLWVNW9lgTJsjDWj4fKqb1Qa8P9p6xGcINuylKuTZL-dwU0uvAseV1Te7CSatyvWiODNwgVAA=s680-w680-h510"
            alt="link-url"
          />
          <p>Skew</p>
        </div>

        <div className="transformOrigin">
          <img
            src="https://lh3.googleusercontent.com/proxy/cnt7a22d1ktcUeE82JrEEVv4h10nlpnCqC2nF63ycuuxiC1XufAV_XeH1kJo6gRQsxv2mVmfe93ctqrXO6IY1-bLWVNW9lgTJsjDWj4fKqb1Qa8P9p6xGcINuylKuTZL-dwU0uvAseV1Te7CSatyvWiODNwgVAA=s680-w680-h510"
            alt="link-url"
          />
          <p>Transform Origin</p>
        </div>
      </div>

      <div className="dddTrans">
        <p className="dTitle">3D transform</p>
        <div className="threeD">
          <div className="translateZ">
            <img
              src="https://lh3.googleusercontent.com/proxy/cnt7a22d1ktcUeE82JrEEVv4h10nlpnCqC2nF63ycuuxiC1XufAV_XeH1kJo6gRQsxv2mVmfe93ctqrXO6IY1-bLWVNW9lgTJsjDWj4fKqb1Qa8P9p6xGcINuylKuTZL-dwU0uvAseV1Te7CSatyvWiODNwgVAA=s680-w680-h510"
              alt="link-url"
            />
            <p>3D Translate</p>
          </div>

          <div className="rotateD">
            <img
              src="https://lh3.googleusercontent.com/proxy/cnt7a22d1ktcUeE82JrEEVv4h10nlpnCqC2nF63ycuuxiC1XufAV_XeH1kJo6gRQsxv2mVmfe93ctqrXO6IY1-bLWVNW9lgTJsjDWj4fKqb1Qa8P9p6xGcINuylKuTZL-dwU0uvAseV1Te7CSatyvWiODNwgVAA=s680-w680-h510"
              alt="link-url"
            />
            <p>3D Rotate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
