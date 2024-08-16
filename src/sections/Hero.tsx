// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import ArrowIcon from "@/assets/icons/arrow-w.svg";
// import CursorImage from "@/assets/images/w1-removebg-preview.png";
// import MessageImage from "@/assets/images/imagesss-removebg-preview.png";

// export const Hero = () => {
//   return (
//     <section className="relative bg-black text-white py-[72px] sm:py-24 bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] overflow-clip">
//       <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
//       <div className="container relative">
//         <div className="flex items-center justify-center">
//           <Link
//             href="#"
//             className="inline-flex gap-3 border border-white/30 py-1 px-2 rounded-lg"
//           >
//             <motion.span
//               className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0_25%,#FFDD99_50%,#C3F0B2_75%,#2FD8FE,#F87AFF,#FB93D0_25%,#FFDD99_50%,#C3F0B2_75%,#2FD8FE)] [background-size:200%] text-transparent bg-clip-text [-webkit-background-clip:text]"
//               animate={{
//                 backgroundPositionX: "-100%",
//               }}
//               transition={{
//                 duration: 1,
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 ease: "linear",
//               }}
//             >
//               Version 2.0 is here
//             </motion.span>
//             <span className="inline-flex items-center gap-1">
//               <span>Read More</span>
//               <ArrowIcon />
//             </span>
//           </Link>
//         </div>
//         <div className="flex justify-center mt-8">
//           <div className="relative inline-flex">
//             <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
//               One Taskk
//               <br /> at a Time
//             </h1>
//             <motion.div
//               className="absolute right-[476px] top-[108px] hidden sm:inline cursor-grabbing"
//               drag
//               dragSnapToOrigin
//             >
//               <Image
//                 src={CursorImage}
//                 alt="Cursor Image"
//                 height="200"
//                 width="200"
//                 className="max-w-none"
//                 draggable="false"
//               />
//             </motion.div>
//             <motion.div
//               className="absolute left-[498px] top-[56px] hidden sm:inline cursor-grabbing"
//               drag
//               dragSnapToOrigin
//             >
//               <Image
//                 src={MessageImage}
//                 alt="Message Image"
//                 height="200"
//                 width="200"
//                 className="max-w-none"
//                 draggable="false"
//               />
//             </motion.div>
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <p className="text-xl text-center mt-8 max-w-md">
//             Celebrate the joy of accomplishment with an app designed to track
//             your progress, motivate your efforts, and celebrate your successes.
//           </p>
//         </div>
//         <div className="flex justify-center mt-8">
//           <button
//             type="button"
//             className="bg-white text-black py-3 px-5 rounded-lg font-medium"
//           >
//             Get for free
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };
"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowIcon from "@/assets/icons/arrow-w.svg";
// import CursorImage from "@/assets/images/w1-removebg-preview.png";
import MessageImage from "@/assets/images/imagesss-removebg-preview.png";

export const Hero = () => {
  return (
    <div className=" ">
    <section className="relative bg-white text-white  sm:py-48 bg-[linear-gradient(to_bottom,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="containe relative">
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="inline-flex gap-3 border border-white/30 py-1 px-2 rounded-lg"
          >
            <motion.span
              className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0_25%,#FFDD99_50%,#C3F0B2_75%,#2FD8FE,#F87AFF,#FB93D0_25%,#FFDD99_50%,#C3F0B2_75%,#2FD8FE)] [background-size:200%] text-transparent bg-clip-text [-webkit-background-clip:text]"
              animate={{
                backgroundPositionX: "-100%",
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            >
              Version 2.0 is here
            </motion.span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowIcon />
            </span>
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <div className="relative inline-flex">
            <h1 className="text-3xl pr-16  pt-12 sm:text-7xl font-bold  text-center ">
              Landing Page for
              Startup/SaaS
            </h1>
            <motion.div
              className="absolute left-0 bottom-0 hidden sm:inline cursor-grabbing"
              drag
              dragSnapToOrigin
              style={{ width: 300, height: 300 }} // Adjust size
            >
              {/* <Image
                src={CursorImage}
                alt="Cursor Image"
                height={600} // Adjust size
                width={700} // Adjust size
                className="max-w-none pl-10 size-96 pr-48"
                draggable="false"
              /> */}
            </motion.div>

            <div className="pl-40 pr-1">
            <motion.div
              className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden sm:inline cursor-grabbing"
              drag
              dragSnapToOrigin
              style={{ width: 300, height: 300 }} // Adjust size
            >
              <Image
                src={MessageImage}
                alt="Message Image"
                height={500} // Adjust size
                width={300} // Adjust size
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-xl text-center mt-8 pr-5 pt-12">
          A flexible Next.js landing page template tailored for SaaS startups, <br/> designed for easy customization and quick deployment. <br/>Perfect for showcasing features, pricing, and testimonials with a modern, responsive design.</p>
        </div>
        <div className="flex justify-center mt-8 pt-12">
          <button
            type="button"
            className="bg-white text-black py-3 px-5  rounded-lg font-medium"
          >
            Start Now
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};
