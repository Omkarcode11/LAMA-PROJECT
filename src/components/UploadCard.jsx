import React from "react";

function UploadCard({text,svg}) {
  return (
    <div className="flex items-center justify-center p-4 bg-white border rounded-lg shadow-md w-full max-w-sm">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="w-12 h-12"
            src={svg}
            alt="YouTube Icon"
          />
        </div>
        <div className="text-lg font-medium text-gray-800">
          <p>Upload</p>
          <p className="font-bold">{text} </p>
        </div>
      </div>
    </div>
  );
}

export default UploadCard;
