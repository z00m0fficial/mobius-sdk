export interface PulseMetricInput {
  organizationId: string;
  metric: string;
  value: number;
  unit: "score" | "percent" | "milliseconds" | "seconds" | "count";
  source: string;
  confidence: number;
}

export function createPulseMetric(input: PulseMetricInput) {
  return {
    id: "pulse-" + Date.now(),
    timestamp: new Date().toISOString(),
    ...input
  };
}
