export const getAIRecommendation = (kpi) => {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 2000 + 1000; // 1–3s delay
    const fail = Math.random() < 0.2; // 20% chance of failure

    setTimeout(() => {
      if (fail) {
        reject(new Error("AI service unavailable. Please try again."));
      } else {
        resolve(`Recommendation for "${kpi}": Optimize your hiring stages to reduce time-to-fill.`);
      }
    }, delay);
  });
}; 