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
      <div className="container2">
        <img
          src="https://lh3.googleusercontent.com/proxy/cnt7a22d1ktcUeE82JrEEVv4h10nlpnCqC2nF63ycuuxiC1XufAV_XeH1kJo6gRQsxv2mVmfe93ctqrXO6IY1-bLWVNW9lgTJsjDWj4fKqb1Qa8P9p6xGcINuylKuTZL-dwU0uvAseV1Te7CSatyvWiODNwgVAA=s680-w680-h510"
          alt="link-url"
        />
      </div>
    </div>
  );
};

export default Index;
