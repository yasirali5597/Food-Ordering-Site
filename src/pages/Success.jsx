   // first time code 
// import React, { useEffect, useState } from "react";
// import { PropagateLoader } from "react-spinners";

// const Success = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 9000); // Simulate a 3-second delay before showing the success message
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       {loading ? (
//         <PropagateLoader color="#36d7b7" />
//       ) : (
//         <div className="text-center">
//           <h2 className="text-4xl font-semibold mb-4 text-center">Order successful!</h2>
//           <p>
//             Your order has been placed successfully.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Success;



    // second time code 
// import React, { useEffect, useState } from "react";
// import { PropagateLoader } from "react-spinners";
// // import { CheckCircle } from "lucide-react"; // lightweight icon package
// import { CheckCircle } from "lucide-react";


// const Success = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000); // Use a shorter wait time for better UX
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-100 via-white to-blue-100">
//       {loading ? (
//         <PropagateLoader color="#10b981" size={20} />
//       ) : (
//         <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center animate-fade-in-up">
//           <CheckCircle className="mx-auto text-green-500" size={64} />
//           <h2 className="text-3xl font-bold mt-4 text-gray-800">Order Successful!</h2>
//           <p className="text-gray-600 mt-2">
//             Thank you for your purchase. Your order has been placed and is being processed.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Success;



    // third time code
// import React, { useEffect, useState } from "react";
// import { PropagateLoader } from "react-spinners";
// import { CheckCircle } from "lucide-react";
// import Confetti from "react-confetti";
// import { useNavigate } from "react-router-dom"; // assuming React Router for navigation

// const Success = ({
//   waitTime = 3000,
//   redirectTo = "/",
//   title = "Order Successful!",
//   message = "Thank you for your purchase. Your order has been placed and is being processed.",
// }) => {
//   const [loading, setLoading] = useState(true);
//   const [countdown, setCountdown] = useState(Math.floor(waitTime / 1000));
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Loader timer
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, waitTime);

//     return () => clearTimeout(timer);
//   }, [waitTime]);

//   useEffect(() => {
//     // Countdown timer for redirect
//     if (!loading && countdown > 0) {
//       const countdownInterval = setInterval(() => {
//         setCountdown((c) => c - 1);
//       }, 1000);

//       return () => clearInterval(countdownInterval);
//     }
//   }, [loading, countdown]);

//   useEffect(() => {
//     // Redirect after countdown hits zero
//     if (!loading && countdown === 0) {
//       navigate(redirectTo);
//     }
//   }, [countdown, loading, navigate, redirectTo]);

//   return (
//     <div
//       className="flex items-center justify-center h-screen bg-gradient-to-br from-green-100 via-white to-blue-100"
//       role="alert"
//       aria-live="assertive"
//     >
//       {loading ? (
//         <PropagateLoader color="#10b981" size={20} aria-label="Loading" />
//       ) : (
//         <>
//           <Confetti
//             width={window.innerWidth}
//             height={window.innerHeight}
//             numberOfPieces={150}
//             recycle={false}
//           />
//           <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center animate-fade-in-up">
//             <CheckCircle className="mx-auto text-green-500" size={64} aria-hidden="true" />
//             <h2 className="text-3xl font-bold mt-4 text-gray-800">{title}</h2>
//             <p className="text-gray-600 mt-2">{message}</p>
//             <p className="text-sm text-gray-500 mt-4">
//               Redirecting in {countdown} second{countdown !== 1 ? "s" : ""}...
//             </p>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Success;



     // fourth time code 
import React, { useEffect, useState, useRef } from "react";
import { PropagateLoader } from "react-spinners";
import { CheckCircle } from "lucide-react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

const Success = ({
  waitTime = 3000, // Time spinner shows before success message (ms)
  redirectTo = "/", // Redirect path after countdown
  title = "Order Successful!",
  message = "Thank you for your purchase. Your order has been placed and is being processed.",
  countdownStart = 5, // Countdown seconds before redirect
}) => {
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(countdownStart);
  const [confettiDimensions, setConfettiDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isPaused, setIsPaused] = useState(false);

  const navigate = useNavigate();
  const countdownIntervalRef = useRef(null);

  // 1. Show spinner for waitTime, then show success message
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      console.log("Success: Order placed - event logged"); // Simulate event tracking
    }, waitTime);
    return () => clearTimeout(timer);
  }, [waitTime]);

  // 2. Handle countdown timer logic
  useEffect(() => {
    // Start countdown only when loading is false and not paused
    if (!loading && countdown > 0 && !isPaused) {
      countdownIntervalRef.current = setInterval(() => {
        setCountdown((c) => c - 1);
      }, 1000);
    }

    // Clear interval if loading changes, countdown finishes, or paused
    return () => clearInterval(countdownIntervalRef.current);
  }, [loading, countdown, isPaused]);

  // 3. Redirect after countdown hits zero
  useEffect(() => {
    if (!loading && countdown === 0) {
      navigate(redirectTo);
    }
  }, [countdown, loading, navigate, redirectTo]);

  // 4. Update confetti size on window resize
  useEffect(() => {
    const handleResize = () => {
      setConfettiDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="flex items-center justify-center h-screen bg-gradient-to-br from-green-100 via-white to-blue-100"
      role="alert"
      aria-live="assertive"
    >
      {loading ? (
        <PropagateLoader color="#10b981" size={20} aria-label="Loading spinner" />
      ) : (
        <>
          <Confetti
            width={confettiDimensions.width}
            height={confettiDimensions.height}
            numberOfPieces={150}
            recycle={false}
            run={!isPaused}
          />
          <div
            className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center animate-fade-in-up"
            onMouseEnter={() => setIsPaused(true)} // Pause countdown when user hovers
            onMouseLeave={() => setIsPaused(false)} // Resume countdown on leave
            tabIndex={0} // make focusable for keyboard users
            aria-label="Order success message. Countdown paused on focus or hover."
          >
            <CheckCircle className="mx-auto text-green-500" size={64} aria-hidden="true" />
            <h2 className="text-3xl font-bold mt-4 text-gray-800">{title}</h2>
            <p className="text-gray-600 mt-2">{message}</p>
            <p className="text-sm text-gray-500 mt-4">
              Redirecting in {countdown} second{countdown !== 1 ? "s" : ""}...
              <br />
              (Hover here to pause)
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Success;
