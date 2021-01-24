import React from "react"

function LandingShowcase() {
  return (
    <section>
      <div className="bg-gray py-12 flex justify-center">
        <div className="max-w-xl mx-auto px-8 sm:px-6 lg:max-w-7xl m-auto">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-24">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
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
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
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
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <dt className="text-lg leading-6  text-indigo-100 uppercase tracking-wide">
                  Cloud Configurartions
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
  )
}

export default LandingShowcase
