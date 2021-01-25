import React from 'react';
import UpdateSharpIcon from "@material-ui/icons/UpdateSharp";
import OfflineBoltTwoToneIcon from "@material-ui/icons/OfflineBoltTwoTone";
import CloudUploadTwoToneIcon from "@material-ui/icons/CloudUploadTwoTone";
function LandingShowcase() {
  return (
    <section>
      <div className="bg-gray py-12 flex justify-center">
        <div className="max-w-xl mx-auto px-8 sm:px-6 lg:max-w-7xl m-auto">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-24">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <UpdateSharpIcon />
              </div>
              <div className="mt-5">
                <dt className="text-lg leading-6 text-indigo-100 uppercase tracking-wide">
                  Firmware Updates
                </dt>
                <p className="mt-2 text-light text-gray-200 font-light tracking-wide">
                  Zero driver installations. Only requires Chrome and an
                  internet connection.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-indigo-100">
               <OfflineBoltTwoToneIcon/>
              </div>
              <div className="mt-5">
                <dt className="text-lg leading-6 text-indigo-100 uppercase tracking-wide">
                  Offline Support
                </dt>
                <p className="mt-2 text-base text-gray-200 font-light tracking-wide">
                  Built as a PWA with the latest WebUSB and WebBluetooth
                  technologies enable device connectivity on any device.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <CloudUploadTwoToneIcon />
              </div>
              <div className="mt-5">
                <dt className="text-lg leading-6  text-indigo-100 uppercase tracking-wide">
                  Cloud Configurations
                </dt>
                <p className="mt-2 text-base text-gray-200 font-light tracking-wide">
                  Take your saved profiles anywhere. Your configurations are
                  compatible with every device.
                </p>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default LandingShowcase;
