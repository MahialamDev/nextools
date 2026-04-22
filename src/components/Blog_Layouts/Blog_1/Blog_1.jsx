'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const metadata = {
  title: "Live Election Poll 2026 | Cast Your Vote",
  description: "আপনার পছন্দের দলকে ভোট দিন এবং লাইভ রেজাল্ট দেখুন। সম্পূর্ণ নিরাপদ এবং স্বচ্ছ ভোটিং সিস্টেম।",
  openGraph: {
    title: "Live Election Poll 2026 | Cast Your Vote",
    description: "আপনার পছন্দের দলকে ভোট দিন এবং লাইভ রেজাল্ট দেখুন।",
    url: "https://nextools-pro.vercel.app/", // আপনার সাইটের লিঙ্ক
    siteName: "Poll Bangladesh",
    images: [
      {
        url: "https://i.fbcd.co/products/original/4b935f547c95574ad356c4469dcc8c4e9ccbe79a6e3af24ba1e7b4017fe13aec.jpg", // ইমেজের লিঙ্ক (১২০০x৬৩০ পিক্সেল হলে ভালো)
        width: 1200,
        height: 630,
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
};

const Blog_1 = () => {
  const [myIp, setMyIp] = useState("");
  const [location, setLocation] = useState(null);
  const [selectedParty, setSelectedParty] = useState("");
  const [allPartyVote, setAllPartyVote] = useState({});
  const [loading, setLoading] = useState(false);

  const parties = [
    {
      id: 1,
      name: "Awami League",
      value: "awami_league",
      img: "https://i.ibb.co.com/NnVvRxz2/nowka-logo-png-seeklogo-423923.png",
      vote: allPartyVote?.awami_league_vote || 0,
    },
    {
      id: 2,
      name: "BNP",
      value: "bnp",
      img: "https://i.ibb.co.com/F4f1jRS0/1280px-Flag-of-the-Bangladesh-Nationalist-Party-svg.png",
      vote: allPartyVote?.bnp_vote || 0,
    },
    {
      id: 3,
      name: "Jamaat",
      value: "jamaat",
      img: "https://i.ibb.co.com/PGdwCLLR/Bangladesh-Jamaat-e-Islami-Logo-cropped.png",
      vote: allPartyVote?.jamaat_vote || 0,
    },
    {
      id: 4,
      name: "NCP",
      value: "ncp",
      img: "https://i.ibb.co.com/fzYMbfc6/ncp-logo-png-seeklogo-624787.png",
      vote: allPartyVote?.ncp_vote || 0,
    },
  ];
  // ok 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const ipRes = await fetch("https://pagenation-server.vercel.app/my-ip");
        const ipData = await ipRes.json();
        const ip = ipData.ip;
        setMyIp(ip);
        const locRes = await fetch(`https://ipapi.co/${ip}/json/`);
        const locData = await locRes.json();
        setLocation(locData);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    const fetchVotes = () => {
      fetch("https://pagenation-server.vercel.app/font-vote")
        .then((res) => res.json())
        .then((data) => setAllPartyVote(data));
    };

    fetchUserData();
    fetchVotes();

    const savedVote = localStorage.getItem("vuted");
    if (savedVote) {
      const decodedVote = JSON.parse(savedVote).split("&")[1];
      setSelectedParty(decodedVote);
    }
  }, []);

  const handleSubmitVote = async () => {
    const isVoted = localStorage.getItem("vuted");

    if (!selectedParty) {
      toast.error("Please select a party first!");
      return;
    }

    if (isVoted) {
      toast.error("You have already voted!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`https://pagenation-server.vercel.app/vote?selectedParty=${selectedParty}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          selectedParty,
          ip: myIp,
          region: location?.region,
        }),
      });

      const data = await res.json();
      setAllPartyVote(data.sendFont);
      localStorage.setItem("vuted", JSON.stringify(`true&${selectedParty}`));
      toast.success("Your vote has been submitted successfully");
    } catch (err) {
      alert("Failed to submit vote. Try again.");
    } finally {
      setLoading(false);
    }
  };

  console.log(allPartyVote)

  return (
    <div className="max-w-6xl mx-auto mt-6 md:mt-12 px-4 pb-20 font-sans antialiased text-gray-900">
     {/* --- Animated Minimal Footer --- */}
<div className="mt-20 py-10 border-t border-gray-100 text-center">
  <p className="text-gray-400 text-sm font-medium tracking-tight">
    Voting System — By Dev{" "}
    <a 
      href="https://dev-mahialam.vercel.app/" 
      target="_blank" 
      className="group relative inline-block font-bold text-gray-900 transition-colors hover:text-blue-600"
    >
      Mahialam Rahat
      {/* নিচে এই লাইনটি এনিমেটেড আন্ডারলাইন হিসেবে কাজ করবে */}
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </p>
  
  {/* একটা ছোট পালসিং এনিমেশন ডট */}
  <div className="mt-4 flex justify-center items-center gap-1.5">
    <span className="w-1 h-1 rounded-full bg-blue-600 animate-ping"></span>
    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">Live Status</span>
  </div>
</div>
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
  <span className="text-center">Choose Your Political Party</span>
  <span className="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-1 rounded-full text-lg md:text-2xl shadow-lg shadow-blue-100 min-w-[50px]">
    {allPartyVote?.selectedParty || 0}
  </span>
</h2>
        <p className="text-sm md:text-base text-gray-500">
          Your IP: <span className="font-mono text-blue-600 font-semibold">{myIp || "Detecting..."}</span>
        </p>
      </div>

      {/* Party Cards Container */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
  {parties.map((party) => (
    <div
      key={party.id}
      onClick={() => {
        const isVoted = localStorage.getItem("vuted");
        if (isVoted) {
          toast.error("You have already voted!");
          return;
        }
        setSelectedParty(party.value)
      }}
      className={`relative group border-2 rounded-2xl p-3 md:p-6 cursor-pointer transition-all duration-300 transform active:scale-95 flex flex-row sm:flex-col items-center sm:text-center
        ${
          selectedParty === party.value
            ? "border-blue-600 bg-blue-50 ring-4 ring-blue-100 shadow-lg"
            : "border-gray-100 bg-white hover:border-blue-200 hover:shadow-md"
        }`}
    >
      {/* Selection Checkmark - Positioned for both mobile & desktop */}
      {selectedParty === party.value && (
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-blue-600 text-white rounded-full p-1 shadow-md z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}

      {/* Image Container */}
      <div className="bg-gray-50 rounded-lg p-2 flex-shrink-0 shadow-sm overflow-hidden sm:mb-4">
        <Image
          src={party.img}
          alt={party.name}
          className="w-12 h-12 md:w-20 md:h-20 object-contain mx-auto"
          height={80}
          width={80}
        />
      </div>
      
      {/* Content Area */}
      <div className="ml-4 sm:ml-0 text-left sm:text-center flex-grow">
        <h3 className="text-base md:text-lg font-bold text-gray-800 leading-tight">
          {party.name}
        </h3>
        <div className="mt-1 inline-block px-2 py-0.5 bg-blue-100/50 rounded-full text-xs md:text-sm font-semibold text-blue-700 border border-blue-200">
          Votes: {party.vote}
        </div>
      </div>
    </div>
  ))}
</div>

      {/* Submit Button */}
      <div className="sticky bottom-6 md:static text-center z-10">
        <button
          onClick={handleSubmitVote}
          disabled={loading}
          className={`w-full md:w-auto px-12 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300
            ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 active:scale-95 text-white shadow-blue-200"}
          `}
        >
          {loading ? "Processing..." : "Confirm My Vote"}
        </button>
      </div>

      {/* --- Location Insights Card --- */}
      {location && (
        <div className="mt-16 max-w-2xl mx-auto border border-gray-100 rounded-[2rem] overflow-hidden bg-white shadow-xl shadow-gray-100">
          <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-5 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-gray-800 font-bold flex items-center gap-2">
              <span className="text-xl">📍</span> Network Insights
            </h3>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-black rounded-lg uppercase tracking-widest">
              {location.version}
            </span>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-2 gap-y-6 gap-x-4">
            <InfoItem label="City / Region" value={`${location.city}, ${location.region}`} />
            <InfoItem label="Country" value={`${location.country_name} (${location.country_code})`} />
            <InfoItem label="ISP" value={location.org} full />
            <InfoItem label="Timezone" value={location.timezone} />
            <InfoItem label="Currency" value={`${location.currency_name} (${location.currency})`} />
          </div>
          
          <div className="bg-gray-900 px-6 py-3 text-center">
            <p className="text-gray-400 text-[11px] font-medium tracking-wide">
              Secure Connection via: <span className="text-blue-400">{location.network}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// ছোট হেল্পার কম্পোনেন্ট টেক্সট সাজানোর জন্য
const InfoItem = ({ label, value, full = false }) => (
  <div className={`space-y-1 ${full ? "col-span-2" : "col-span-1"}`}>
    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{label}</p>
    <p className="text-sm md:text-base text-gray-700 font-semibold truncate">{value || "N/A"}</p>
  </div>
);

export default Blog_1;