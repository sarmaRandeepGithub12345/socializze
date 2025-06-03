import React, { useEffect, useState } from "react";
import logo from "../../media/images/handshake.svg";

const PrivacyPolicy = ({ title }) => {
  const [ageConfirmed, setAgeConfirmed] = useState(null);
  useEffect(() => {
    document.title = title;
  }, []);
  const points = [
    {
      heading: "1. Information We Collect",
      points: [
        "Name, email, and username",
        "Device and browser information",
        "Usage data (e.g. pages visited, time spent)",
        // "Location (if permission is granted)",
      ],
    },
    {
      heading: "2. How We Use Your Information",
      points: [
        "To provide and improve our services",
        "To personalize your experience",
        "To send notifications or important updates",
        "For analytics and usage tracking",
      ],
    },
    {
      heading: "3. How We Share Information",
      points: [
        "We do not sell your personal data",
        "Shared only with trusted third-party services (e.g., cloud hosting, analytics) to operate our app",
        "Shared when legally required (e.g., court order)",
      ],
    },
    {
      heading: "4. User Rights",
      points: [
        "You can view, edit, or delete your account",
        "You can request a copy of your data",
        "You can opt out of non-essential communications",
      ],
    },
    {
      heading: "5. Cookies and Tracking",
      points: [
        "We use cookies and similar technologies for analytics and performance",
        "You can control cookie settings in your browser",
      ],
    },
    {
      heading: "6. Data Security",
      points: [
        "Data is encrypted in transit and at rest",
        "We implement safeguards against unauthorized access",
      ],
    },
    {
      heading: "7. Children’s Privacy",
      points: [
        "We do not knowingly collect personal information from children under 13 without parental consent",
        "Features requiring personal information may be disabled or restricted",
        "Parental approval is required for account creation (if applicable)",
      ],
    },
    {
      heading: "8. Parental Rights",
      points: [
        "Parents can review and delete their child’s data",
        "Contact us to manage your child’s account or request data removal",
      ],
    },
    {
      heading: "9. Deletion policy",
      points: [
        "As of now we only allow temporary deactivation of account",
        // "Location (if permission is granted)",
        // "Device and browser information",
        // "Usage data (e.g. pages visited, time spent)",
      ],
    },
  ];
  return (
    <div className="h-[100vh] w-[100%]">
      <div className="flex flex-row h-[10%] items-center justify-center shadow-[-1px_-1px_5px_3px_rgba(0,0,0,0.3)] ">
        <div className="h-full bg-white flex items-center ml-[2%] mb-[2%] mt-[2%]">
          {/* Circular logo wrapper */}
          <div className="rounded-full overflow-hidden w-[70%] h-[50%] border-[0.3vh] border-[#999999] flex items-center justify-center">
            <img src={logo} alt="Logo" className="h-full w-full object-cover" />
          </div>
        </div>
        <p className="font-cursive1 text-[170%]">Socializze</p>
      </div>
      <div className="p-6 max-w-3xl mx-auto">
        {/* <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1> */}

        {ageConfirmed === null && (
          <div className="mb-6">
            <p className="mb-2">Are you 13 years old or older?</p>
            <button
              onClick={() => setAgeConfirmed(true)}
              className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
            >
              Yes
            </button>
            <button
              onClick={() => setAgeConfirmed(false)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              No
            </button>
          </div>
        )}

        {ageConfirmed === true && (
          <div className="p-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>

            <div className="space-y-4 list-decimal list-inside">
              {points.map((section, index) => (
                <div key={index}>
                  <p className="text-lg font-semibold">{section.heading}</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-700">
                    {section.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {ageConfirmed === false && (
          <div>
            <h2 className="text-xl font-semibold mb-2">For Users Under 13</h2>
            <p>
              Your privacy is important to us. We do not collect personally
              identifiable information from users under 13. Our platform is
              compliant with COPPA regulations. Parental consent may be required
              for some features.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
