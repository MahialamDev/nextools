'use client';
import React, { useState } from 'react';
import { Download, Link as LinkIcon, Loader2 } from 'lucide-react';

const VideoDownloader = () => {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleDownload = async () => {
        setLoading(true);
        setResult(null);

        try {
            // Ekhane amra ekta free public API use korchi (Sample)
            // Real project e apni nijer backend ba RapidAPI er endpoint use korben
            const response = await fetch('https://api.cobalt.tools/api/json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    url: url, // User je link diyeche
                })
            });

            const data = await response.json();

            if (data.url) {
                // Video link peye gele sheta open hobe ba state e thakbe
                setResult(data.url);
                window.open(data.url, '_blank'); // Direct download shuru hobe
            } else {
                alert("Video not found or link not supported!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-20 p-8 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">
                All Video <span className="text-blue-600">Downloader</span>
            </h2>
            
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <LinkIcon className="text-gray-400" size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="Paste video link here..."
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
                
                <button
                    onClick={handleDownload}
                    disabled={loading || !url}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
                >
                    {loading ? <Loader2 className="animate-spin" size={20} /> : <Download size={20} />}
                    {loading ? "Fetching..." : "Download"}
                </button>
            </div>

            {result && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-center text-green-700">
                    Video link generated! If download doesn't start, <a href={result} target="_blank" className="underline font-bold">click here</a>.
                </div>
            )}

            <p className="text-center mt-8 text-slate-400 text-sm">
                Supports: YouTube, FB, Insta, TikTok, Twitter and more.
            </p>
        </div>
    );
};

export default VideoDownloader;