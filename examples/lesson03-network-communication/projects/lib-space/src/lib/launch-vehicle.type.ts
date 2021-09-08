export interface LaunchVehicles {
  name: string;
  country: string;
  height: number;
  status: string;
  mass: number;
  launch_history: {
    first: number;
    total: number;
  } 
}