export interface Astronaut {
  name: string;
  nationality: string;
  organization: string;
  status?: string;
  born: number;
  died?: number;
  time_in_space?: number;
}