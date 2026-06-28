export interface MemoryEventInput {
  organizationId: string;
  actorId: string;
  eventType: string;
  title: string;
  summary: string;
  confidence: number;
  verified: boolean;
  linkedRepositories: string[];
}

export function createMemoryEvent(input: MemoryEventInput) {
  return {
    id: "mem-" + Date.now(),
    timestamp: new Date().toISOString(),
    relatedEvents: [],
    ...input
  };
}
