'use client'
import { useState, FormEvent } from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: integrate with mailing list service
    setShowSuccess(true);
    setEmail("");
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col theme-bg-light p-6 relative overflow-hidden">


      {/* Main content: full-center */}
      <div className="flex-grow flex flex-col xs:justify-center items-center text-center space-y-5 sm:space-y-5">
            {/* Logo */}
            <Image
              src="/logo.png"
              alt="Kitamu Organics Logo"
              width={180}
              height={100}
              className=""
            />
        {/*<div className='w-full relative'>*/}
        {/*<Image*/}
        {/*    src='/bee.svg'*/}
        {/*    alt='Floating bee'*/}
        {/*    width={160}*/}
        {/*    height={160}*/}
        {/*    className="bob absolute top-0 left-0"*/}
        {/*/>*/}
        {/*</div>*/}
        <h1 className="text-4xl sm:text-7xl font-extrabold text-green-950">
          COMING SOON
        </h1>
        <p className=" text-lg sm:text-xl text-green-900 max-w-md">
          Our online shop is under construction. Enter your email and we&#39;ll let you know when we launch.
        </p>

        {/* Email input & button inline */}
        <form onSubmit={handleSubmit} className="flex flex-col w-full sm:w-fit sm:flex-row sm:items-center gap-4">
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="sm:w-64 p-3 rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
          >
            Notify Me
          </button>
        </form>

        {/* Success popup */}
        {showSuccess && (
          <div className="absolute bottom-10 bg-white text-gray-800 px-6 py-3 rounded-lg shadow-lg">
            <p>Thanks! We&#39;ll notify you at your email soon.</p>
          </div>
        )}

        <div className="sm:hidden">
          <Image
            src='/bee.svg'
            alt='Floating bee'
            width={100}
            height={100}
            className="bob absolute top-[70%] left-[34%] z-1"
          />
          <Image
              src='/jar.png'
              alt='Jar of honey'
              height={200}
              width={350}
              className='absolute top-[75%] left-[25%] z-0'
          />
        </div>
      </div>

      {/* Socials & contact footer */}
      <footer className="z-10 mt-auto pt-12 w-full flex flex-col sm:items-center gap-4">
        <div className="flex gap-6 text-green-800">
          <a href="https://facebook.com/kitamunaturalorganics" target="_blank" rel="noopener noreferrer"
             className="hover:text-orange-100 text-2xl">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/kitamunaturalorganics" target="_blank" rel="noopener noreferrer"
             className="hover:text-orange-100 text-2xl">
            <FaTwitter />
          </a>
          <a href="https://youtube.com/kitamunaturalorganics" target="_blank" rel="noopener noreferrer"
             className="hover:text-orange-100 text-2xl">
            <FaYoutube />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-green-800">
          <a href="tel:+256782976755" className="hover:text-gray-200">
            +256 782 976 755
          </a>
          <a href="mailto:info@kitamunaturalorganics.com" className="hover:text-gray-200">
            info@kitamunaturalorganics.com
          </a>
        </div>
      </footer>
    </div>
  );
}


// 'use client'
// import {useState, FormEvent} from "react";
// import Image from "next/image";
// import {FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa";
//
// export default function ComingSoon() {
//     const [email, setEmail] = useState("");
//     const [showForm, setShowForm] = useState(false);
//
//     const handleSubmit = (e: FormEvent) => {
//         e.preventDefault();
//         // TODO: integrate with mailing list service
//         alert(`Thanks! We'll notify you at ${email}`);
//         setEmail("");
//         setShowForm(false);
//     };
//
//     return (
//         <div
//             className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-100 via-yellow-50 to-green-100 p-6">
//             {/* Logo */}
//             {/*<Image*/}
//             {/*  src="/logo.png"*/}
//             {/*  alt="Kitamu Organics Logo"*/}
//             {/*  width={150}*/}
//             {/*  height={150}*/}
//             {/*  className="mb-8"*/}
//             {/*/>*/}
//
//             {/* Title & subtitle */}
//             <div className="h-full w-full flex flex-col items-center ">
//                 <h1 className="text-6xl sm:text-7xl font-extrabold text-gray-800 mb-4 text-center">
//                     Kitamu Natural Organics
//                 </h1>
//
//                 <p className="text-xl text-gray-700 mb-8 text-center max-w-md">
//                     Our online shop is under construction. Enter your email and we&#39;ll let you
//                     know when we launch.
//                 </p>
//
//                 {/* Call to action */}
//                 <button
//                     onClick={() => setShowForm(true)}
//                     className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
//                 >
//                     Notify Me
//                 </button>
//
//             </div>
//
//             {/* Email form modal */}
//             {showForm && (
//                 // <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
//                   bg-white rounded-xl p-6 w-full max-w-sm
//                   shadow-2xl ring-1 ring-black/10 z-10">
//                     <div className="bg-white rounded-xl p-6 w-full max-w-sm">
//                         <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//                             Stay Updated
//                         </h2>
//                         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                             <input
//                                 type="email"
//                                 required
//                                 placeholder="Your email address"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                             />
//                             <div className="flex justify-end gap-2">
//                                 <button
//                                     type="button"
//                                     onClick={() => setShowForm(false)}
//                                     className="px-4 py-2 text-gray-600 hover:text-gray-800"
//                                 >
//                                     Cancel
//                                 </button>
//                                 <button
//                                     type="submit"
//                                     className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition"
//                                 >
//                                     Submit
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//
//             {/* Footer with socials & contact */}
//             <footer className="mt-auto pt-12 w-full flex flex-col items-center gap-4">
//                 <div className="flex gap-6 text-gray-700">
//                     <a
//                         href="https://facebook.com/kitamunaturalorganics"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:text-gray-900 text-2xl"
//                     >
//                         <FaFacebook/>
//                     </a>
//                     <a
//                         href="https://twitter.com/kitamunaturalorganics"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:text-gray-900 text-2xl"
//                     >
//                         <FaTwitter/>
//                     </a>
//                     <a
//                         href="https://youtube.com/kitamunaturalorganics"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:text-gray-900 text-2xl"
//                     >
//                         <FaYoutube/>
//                     </a>
//                 </div>
//                 <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-600">
//                     <a href="tel:+256782976755" className="hover:text-gray-800">
//                         +256 782 976 755
//                     </a>
//                     <a
//                         href="mailto:info@kitamunaturalorganics.com"
//                         className="hover:text-gray-800"
//                     >
//                         info@kitamunaturalorganics.com
//                     </a>
//                 </div>
//             </footer>
//         </div>
//     );
// }
