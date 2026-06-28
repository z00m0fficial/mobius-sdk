export interface SdkEvent<TPayload = unknown> {
  id: string;
  name: string;
  version: string;
  timestamp: string;
  source: string;
  organizationId: string;
  correlationId: string;
  payload: TPayload;
}

export function createSdkEvent<TPayload>(input: Omit<SdkEvent<TPayload>, "id" | "timestamp" | "version">): SdkEvent<TPayload> {
  return {
    id: "evt-" + Date.now(),
    timestamp: new Date().toISOString(),
    version: "1.0",
    ...input
  };
}
