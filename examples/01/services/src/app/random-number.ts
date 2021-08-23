import { InjectionToken } from "@angular/core"

export const RANDOM_NUMBER = new InjectionToken<string>('RandomNumber');

export function randomNumberFactory(): (min: number, max: number) => number {
  return (min: number, max: number) => Math.floor(Math.random() * (max - min) + min)
}