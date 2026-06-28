export interface RepositoryDnaSummary {
  repository: string;
  capability: string;
  department: string;
  maturity: string;
  syncStatus: string;
}

export function summarizeRepositoryDna(input: RepositoryDnaSummary): string {
  return `${input.repository}: ${input.capability} / ${input.department} / ${input.maturity} / ${input.syncStatus}`;
}
