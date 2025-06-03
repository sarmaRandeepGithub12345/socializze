import React, { useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import useCommonItems from "../../utils/useCommonItems";

export const ProfilePage = ({ title }) => {
  const { obj } = useCommonItems();

  const [showModal, setShowModal] = useState(false);
  const [isRequestProcessing, setIsRequestProcessing] = useState(false);
  useEffect(() => {
    document.title = title;
  }, []);
  const handleDeleteConfirm = () => {
    setIsRequestProcessing(true);
    setShowModal(false);

    // Here, you could also send an API request to initiate deletion
    // Example:
    // await axios.post(`${backendUrl}/user/delete-request`, { token: obj.token });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow overflow-auto">
        <div className="flex flex-col mt-[12%] ml-[3%] min-h-[calc(100vh-10vh-50px)]">
          <p className="text-[5vh] font-latoR">Hello,</p>
          <p className="ml-[10%] text-[4vh] text-[#114993] font-exo2">
            {obj.user?.name}
          </p>

          {!isRequestProcessing ? (
            <button
              onClick={() => setShowModal(true)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded w-fit hover:cursor-pointer"
            >
              Request for profile deletion
            </button>
          ) : (
            <p className="mt-4 text-red-600 font-semibold">
              Processing your request…
            </p>
          )}
        </div>
      </main>

      <Footer />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">
              Confirm Profile Deletion
            </h2>
            <p className="mb-6">
              Are you sure you want to delete your profile?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 hover:cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="hover:cursor-pointer px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
