import React from "react";

const LoadingUi = () => {
  return (
    <div className="flex gap-6 items-end">
      <div className="text-xl">Loading</div>
      <div className="col-3 py-2">
        <div className="snippet" data-title="dot-flashing">
          <div className="stage">
            <div className="dot-flashing"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingUi;
