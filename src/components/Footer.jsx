import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-16 p-3 px-[40px] md:px-[80px]">
        <div className="container mx-auto px-4">
          <div className="flex">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <i className="fas fa-chart-bar text-3xl mr-2 text-indigo-400"></i>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                  dataviz
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                The leading platform for creating beautiful data visualizations
                and interactive dashboards powered by AI.
              </p>
              <div className="flex space-x-4">
                {[
                  "fab fa-twitter",
                  "fab fa-linkedin",
                  "fab fa-github",
                  "fab fa-youtube",
                ].map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer"
                  >
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              © 2025 DataViz Inc. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-500">
                <i className="fab fa-cc-visa text-xl mr-2"></i>
                <i className="fab fa-cc-mastercard text-xl mr-2"></i>
                <i className="fab fa-cc-amex text-xl mr-2"></i>
                <i className="fab fa-cc-paypal text-xl"></i>
              </div>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;

    // <footer className="bg-black bg-opacity-0 max-md:max-w-full">
    //   <div className="flex relative flex-col pt-10 w-full min-h-[453px] max-md:max-w-full">
    //     <img
    //       src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1188f944858436f55e4cb0ff8ebe1db76ae56d5?placeholderIfAbsent=true&apiKey=b8e0317e302d4d7c8d561389c5d9ddbf"
    //       alt="Footer background"
    //       className="object-cover absolute inset-0 size-full"
    //     />
    //     <div className="relative pr-1 pl-11 w-full max-md:pl-5 max-md:max-w-full">
    //       <div className="flex flex-wrap gap-5 justify-between py-3.5 pr-20 pl-8 w-full whitespace-nowrap bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
    //         <div className="flex gap-1.5 text-xl font-medium text-violet-700">
    //           <img
    //             src="https://cdn.builder.io/api/v1/image/assets/TEMP/4039f1343a58885e774cf308e7494e84b200030d?placeholderIfAbsent=true&apiKey=b8e0317e302d4d7c8d561389c5d9ddbf"
    //             alt="Logo"
    //             className="object-contain shrink-0 aspect-[1.13] w-[26px]"
    //           />
    //           <span>dataviz</span>
    //         </div>
    //         <nav className="flex gap-10 my-auto text-sm max-md:max-w-full">
    //           <a href="#product" className="text-zinc-400">
    //             Product
    //           </a>
    //           <a href="#resources" className="text-stone-300">
    //             Resources
    //           </a>
    //           <a href="#company" className="text-base text-stone-300">
    //             Company
    //           </a>
    //         </nav>
    //       </div>

    //       <div className="flex z-10 flex-wrap gap-5 justify-between items-start mt-2.5 ml-8 w-full max-w-[922px] max-md:max-w-full">
    //         <div className="flex gap-10">
    //           <p className="flex-auto text-sm leading-5 text-gray-500">
    //             The leading platform for creating beautiful data visualizations
    //             and
    //             <br />
    //             interactive dashboards powered by Al.
    //           </p>
    //           <a href="#features" className="self-start text-xs text-gray-500">
    //             Features
    //           </a>
    //         </div>
    //         <div className="flex gap-10 text-xs">
    //           <a href="#docs" className="text-gray-500">
    //             Documentation
    //           </a>
    //           <a href="#about" className="font-light text-gray-500">
    //             About Us
    //           </a>
    //         </div>
    //       </div>

    //       <nav className="flex flex-wrap gap-5 justify-between py-px px-16 max-md:px-5">
    //         <div className="flex gap-3.5 self-start">
    //           {[...Array(4)].map((_, i) => (
    //             <img
    //               key={i}
    //               src={`https://cdn.builder.io/api/v1/image/assets/TEMP/057203506d9be1da9c385924e01faa397a8aee0a?placeholderIfAbsent=true&apiKey=b8e0317e302d4d7c8d561389c5d9ddbf${i}`}
    //               alt={`Social icon ${i + 1}`}
    //               className="object-contain shrink-0 aspect-square rounded-[67px] w-[34px]"
    //             />
    //           ))}
    //         </div>
    //       </nav>

    //       <div className="flex relative z-10 shrink-0 self-center mt-14 max-w-full bg-gray-950 h-[3px] w-[1056px] max-md:mt-10" />

    //       <div className="flex flex-col justify-center items-center px-20 py-11 bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
    //         <div className="flex flex-col max-w-full w-[278px]">
    //           <div className="flex gap-1 self-center max-w-full text-xs text-gray-600 w-[225px]">
    //             <img
    //               src="https://cdn.builder.io/api/v1/image/assets/TEMP/be091119ea2ecf1f3df32db0302c62d610226b7c?placeholderIfAbsent=true&apiKey=b8e0317e302d4d7c8d561389c5d9ddbf"
    //               alt="Copyright"
    //               className="object-contain shrink-0 self-start aspect-[1.1] w-[11px]"
    //             />
    //             <p className="grow shrink w-[209px]">
    //               2025 DataViz Inc. All rights reserved.
    //             </p>
    //           </div>

    //           <div className="flex gap-4 mt-1.5 whitespace-nowrap">
    //             <div className="flex gap-1 text-xs font-semibold text-center text-gray-800">
    //               <span className="flex flex-col justify-center p-0.5 bg-black bg-opacity-0">
    //                 <span className="px-0.5 py-1.5 bg-gray-500 rounded-sm border border-solid border-zinc-500">
    //                   VISA
    //                 </span>
    //               </span>
    //               {[231, 232, 233].map((num) => (
    //                 <img
    //                   key={num}
    //                   src={`URL_${num}`}
    //                   alt="Payment method"
    //                   className="object-contain shrink-0 self-start w-5 aspect-[1.33]"
    //                 />
    //               ))}
    //             </div>
    //             <nav className="flex gap-5 self-start mt-1.5 text-xs font-light">
    //               <a href="#terms" className="text-xs text-gray-600">
    //                 Terms
    //               </a>
    //               <a href="#privacy" className="text-gray-600">
    //                 Privacy
    //               </a>
    //               <a href="#cookies" className="text-zinc-600">
    //                 Cookies
    //               </a>
    //             </nav>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>