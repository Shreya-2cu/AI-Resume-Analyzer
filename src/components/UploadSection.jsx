import React, { useState } from "react";

const UploadSection = ({ setShowResult, loading, setLoading, }) => {

    const [resume, setResume] = useState(null);
    const [message, setMessage] = useState("");

    const handleFileChange = (event) => {
        setResume(event.target.files[0]);
    };

    const handleAnalyze = () => {

        if (!resume) {
            setMessage("Please upload a PDF.");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setMessage(<p className="success-message">
                ✅ Resume uploaded successfully!
            </p>);
            setShowResult(true);
        }, 2000);

    };

    return (
        <div className="upload-section">

            <label htmlFor="resume-upload" className="upload-box">
                <h3>📄 Upload Resume</h3>
                <p>Only PDF files are allowed</p>
            </label>


            <input
                id="resume-upload"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                hidden
            />
            {resume && <p>Selected File: {resume.name}</p>}

            <br /><br />

            <button onClick={handleAnalyze} disabled={!resume || loading}>
                {loading ? (
                    <>
                        <span className="spinner"></span>
                        Analyzing...
                    </>
                ) : (
                    "Analyze Resume"
                )}
            </button>
            {message && <p>{message}</p>}

        </div>
    );
};

export default UploadSection;