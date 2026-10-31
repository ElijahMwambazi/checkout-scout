type ConfidenceInput = {
  confirmations: number;
  changedReports: number;
  daysSinceConfirmed: number;
};

export function calculatePriceConfidence(input: ConfidenceInput) {
  const freshnessScore = Math.max(0, 30 - input.daysSinceConfirmed);
  const confirmationScore = input.confirmations * 5;
  const penalty = input.changedReports * 8;

  return Math.max(0, Math.min(100, freshnessScore + confirmationScore - penalty));
}
