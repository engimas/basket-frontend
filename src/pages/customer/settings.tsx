import React, { useState, useEffect } from "react";

const ConfirmTr: React.FC = () => {
  return (
    <div className="wrapper">
      <svg
        className="checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />
        <path
          className="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
    </div>
  );
};

const SettingsPage: React.FC = () => {
  const [vacationStart, setVacationStart] = useState("");
  const [vacationEnd, setVacationEnd] = useState("");
  const [initialVacationStart, setInitialVacationStart] = useState("");
  const [initialVacationEnd, setInitialVacationEnd] = useState("");
  const [subscriptionContinuation, setSubscriptionContinuation] = useState<
    "ask" | "auto"
  >("auto");
  const [initialSubscriptionContinuation, setInitialSubscriptionContinuation] = useState<
    "ask" | "auto"
  >("auto");
  const [saveChanges, setSaveChanges] = useState(false);

  useEffect(() => {
    if (saveChanges) {
      const timer = setTimeout(() => {
        setSaveChanges(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [saveChanges]);

  const handleSaveChanges = () => {
    // Update initial states to current values
    setInitialVacationStart(vacationStart);
    setInitialVacationEnd(vacationEnd);
    setInitialSubscriptionContinuation(subscriptionContinuation);
    setSaveChanges(true);
  };

  const handleCancel = () => {
    setVacationStart(initialVacationStart);
    setVacationEnd(initialVacationEnd);
    setSubscriptionContinuation(initialSubscriptionContinuation);
  };

  const isSaveEnabled =
    vacationStart !== initialVacationStart ||
    vacationEnd !== initialVacationEnd ||
    subscriptionContinuation !== initialSubscriptionContinuation;

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>
      <div className="mb-10">
        <h2 className="text-lg font-medium">Vacation time</h2>
        <p className="text-sm text-gray-600">Pause subscription during these days.</p>
        <div className="flex space-x-2 mt-5">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Start Date:</label>
            <input
              type="date"
              className="border p-2 rounded"
              value={vacationStart}
              onChange={(e) => setVacationStart(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">End Date:</label>
            <input
              type="date"
              className="border p-2 rounded"
              value={vacationEnd}
              onChange={(e) => setVacationEnd(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-medium">Continuation of subscription</h2>
        <div className="mt-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              className="form-radio"
              value="ask"
              checked={subscriptionContinuation === "ask"}
              onChange={() => setSubscriptionContinuation("ask")}
            />
            <span>Ask for confirmation at the end of each month</span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input
              type="radio"
              className="form-radio"
              value="auto"
              checked={subscriptionContinuation === "auto"}
              onChange={() => setSubscriptionContinuation("auto")}
            />
            <span>Auto deduct from wallet</span>
          </label>
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          className="py-2 px-4 bg-gray-400 text-white rounded"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className={`py-2 px-4 text-white rounded ${
            isSaveEnabled ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={handleSaveChanges}
          disabled={!isSaveEnabled}
        >
          Save Changes
        </button>
      </div>
      {saveChanges && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-medium">
              Your settings have been saved! <ConfirmTr />
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
