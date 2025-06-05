import React, { useState } from "react";
import { toast } from "react-toastify";
import { getAIRecommendation } from "../../utils/fakeAPI";
import TextInput from "../ui/TextInput";
import PrimaryButton from "../ui/PrimaryButton";

export const KPIInputForm = () => {
  const [kpi, setKpi] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!kpi.trim()) {
      toast.warn("Please enter a KPI name.");
      return;
    }

    setLoading(true);
    setResponse("");

    try {
      toast.info("Requesting recommendation...");
      const result = await getAIRecommendation(kpi);
      setResponse(result);
      toast.success("AI recommendation received!");
    } catch (error) {
      toast.error(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Enter KPI name
        </label>
        <TextInput
          value={kpi}
          onChange={(e) => setKpi(e.target.value)}
          placeholder="e.g., Time to Fill"
        />

        <PrimaryButton type="submit" loading={loading}>
          Get Recommendation
        </PrimaryButton>
      </form>

      {response && (
        <div className="mt-4 p-3 bg-blue-50 text-blue-900 rounded-md text-sm border border-blue-200">
          {response}
        </div>
      )}
    </div>
  );
}; 