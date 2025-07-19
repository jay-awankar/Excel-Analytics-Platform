import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative pt-32 pb-20 overflow-hidden px-[40px] md:px-[80px] w-full h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 to-black z-0"></div>
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <img
          src="https://readdy.ai/api/search-image?query=Stunning%20data%20visualization%20dashboard%20with%20multiple%20charts%20and%20graphs%20on%20a%20dark%20background%20with%20purple%20gradient%20lighting%2C%20modern%20UI%20design%2C%203D%20perspective%20view%20of%20analytics%20platform%20with%20glowing%20elements%20and%20sleek%20interface&width=1200&height=800&seq=hero-bg-1&orientation=landscape"
          alt="Data visualization dashboard"
          className="w-full h-full object-cover object-top opacity-60"
        />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 mt-10">
            <div>
              <h1 className="text-5xl text-white font-bold leading-tight mb-6">
                Upload Excel, Get Instant Visual Analytics
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Simply drag & drop your Excel files (.xls/.xlsx) to create
                stunning 2D & 3D visualizations in seconds. Smart AI analysis
                automatically detects patterns and suggests the best chart
                types. Map any column to X/Y axes and download publication-ready
                charts with one click.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/Dashboard"
                  data-readdy="true"
                >
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-6 !rounded-button whitespace-nowrap cursor-pointer">
                    Start Creating Now
                  </Button>
                </a>
                <Button
                  variant="outline"
                  className="text-black bg-white border-gray-700 hover:bg-gray-500 !rounded-button whitespace-nowrap cursor-pointer "
                >
                  <i className="fas fa-play-circle mr-2"></i> Watch Demo
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-black bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center text-yellow-400 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <i key={i} className="fas fa-star text-sm"></i>
                  ))}
                </div>
                <p className="text-sm text-gray-300">
                  Trusted by 10,000+ companies worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Dashboard Screenshots */}
      <div className="absolute right-0 top-20 w-3/5 h-full z-0 opacity-90">
        <div className="relative w-full h-full">
          <div className="absolute top-[10%] right-[5%] w-[40%] h-[30%] transform rotate-3 shadow-2xl rounded-lg overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Modern%20data%20visualization%20dashboard%20with%20bar%20charts%20and%20line%20graphs%20on%20dark%20background%2C%20professional%20analytics%20interface%20with%20purple%20and%20blue%20data%20points%2C%20clean%20UI%20design%20with%20data%20tables%20and%20metrics&width=500&height=300&seq=dash-1&orientation=landscape"
              alt="Dashboard 1"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute top-[25%] right-[30%] w-[35%] h-[25%] transform -rotate-2 shadow-2xl rounded-lg overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Data%20analytics%20dashboard%20with%20pie%20charts%20and%20KPI%20metrics%20on%20dark%20theme%2C%20business%20intelligence%20visualization%20with%20purple%20gradient%20accents%2C%20professional%20UI%20with%20data%20comparison%20tables%20and%20filters&width=400&height=250&seq=dash-2&orientation=landscape"
              alt="Dashboard 2"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute top-[45%] right-[10%] w-[30%] h-[28%] transform rotate-6 shadow-2xl rounded-lg overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Interactive%20data%20visualization%20tool%20showing%20geographic%20map%20with%20data%20points%2C%20dark%20mode%20analytics%20dashboard%20with%20heat%20maps%20and%20location%20markers%2C%20professional%20UI%20with%20purple%20and%20blue%20highlights&width=350&height=260&seq=dash-3&orientation=landscape"
              alt="Dashboard 3"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// <section className="flex relative flex-col w-full min-h-[521px] max-md:max-w-full">
//   <img
//     src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e17d06b9b751e5d582c55f92439671e9c88e924?placeholderIfAbsent=true&apiKey=b8e0317e302d4d7c8d561389c5d9ddbf"
//     alt="Hero background"
//     className="object-cover absolute inset-0 size-full"
//   />
//   <div className="flex relative z-10 flex-col items-start px-16 py-20 mb-0 w-full bg-black bg-opacity-0 max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
//     <h2 className="text-4xl font-semibold leading-10 text-zinc-100 max-md:max-w-full">
//       Upload Excel, Get Instant
//       <br />
//       Visual Analytics
//     </h2>
//     <div className="flex gap-1.5 mt-9 text-sm text-white">
//       <p className="grow">Simply drag & drop your Excel files</p>
//       <p className="basis-auto">(xls/ xIsx) to create stunning 2D & 3D</p>
//     </div>
//     <p className="text-sm leading-6 text-white w-[537px] max-md:max-w-full">
//       visualizations in seconds. Smart Al analysis automatically detects
//       patterns and
//       <br />
//       suggests the best chart types. Map any column to X/Y axes and download
//       <br />
//       publication-ready charts with one click.
//     </p>
//     <div className="flex gap-2.5 items-start mt-6">
//       <button className="flex flex-col justify-center p-1 text-sm text-white bg-black bg-opacity-0">
//         <span className="px-7 py-3.5 bg-indigo-600 max-md:px-5">
//           Start Creating Now
//         </span>
//       </button>
//       <button className="flex flex-col justify-center px-1.5 py-0.5 mt-1 text-base text-center text-black bg-black bg-opacity-0">
//         <span className="px-8 py-4 bg-white border border-gray-400 border-solid max-md:px-5">
//           Watch a Demo
//         </span>
//       </button>
//     </div>
//     <div className="flex gap-4 mt-6">
//       <div className="flex items-center">
//         <img
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/35d32e05d124aa518e82fae6d8452e32f12bdfe6?placeholderIfAbsent=true&apiKey=b8e0317e302d4d7c8d561389c5d9ddbf"
//           alt="User 1"
//           className="object-contain z-10 shrink-0 self-stretch my-auto aspect-[0.86] w-[30px] max-md:-mr-0.5"
//         />
//         <img
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/3668c0a187f8335415061e53bd03f0934d8c4f88?placeholderIfAbsent=true&apiKey=b8e0317e302d4d7c8d561389c5d9ddbf"
//           alt="User 2"
//           className="object-contain z-10 shrink-0 self-stretch my-auto aspect-[0.83] w-[29px]"
//         />
//         <img
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/5167f91237d1460f425f47ad5e706f8d1388fce9?placeholderIfAbsent=true&apiKey=b8e0317e302d4d7c8d561389c5d9ddbf"
//           alt="User 3"
//           className="object-contain z-10 shrink-0 self-stretch my-auto w-7 aspect-[0.8] max-md:-mr-0.5"
//         />
//         <img
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/b076efd80a963b391b586bb6b68bc1438a9cc68a?placeholderIfAbsent=true&apiKey=b8e0317e302d4d7c8d561389c5d9ddbf"
//           alt="User 4"
//           className="object-contain shrink-0 self-stretch aspect-[0.9] w-[35px]"
//         />
//       </div>
//       <div className="flex flex-col my-auto">
//         <div className="flex self-start">
//           <img
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/368d3aea083913a8acc455a7e814a15077cdb982?placeholderIfAbsent=true&apiKey=b8e0317e302d4d7c8d561389c5d9ddbf"
//             alt="Rating 1"
//             className="object-contain shrink-0 aspect-[2.08] w-[27px]"
//           />
//           <img
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/9020276ec1e445c81d9b72f5957b645be6d797e4?placeholderIfAbsent=true&apiKey=b8e0317e302d4d7c8d561389c5d9ddbf"
//             alt="Rating 2"
//             className="object-contain shrink-0 w-6 aspect-[1.85]"
//           />
//           <img
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/057203506d9be1da9c385924e01faa397a8aee0a?placeholderIfAbsent=true&apiKey=b8e0317e302d4d7c8d561389c5d9ddbf"
//             alt="Rating 3"
//             className="object-contain shrink-0 w-4 aspect-[1.23]"
//           />
//         </div>
//         <p className="mt-3 text-xs text-zinc-400">
//           Trusted by 10,000+ companies worldwide
//         </p>
//       </div>
//     </div>
//   </div>
// </section>
