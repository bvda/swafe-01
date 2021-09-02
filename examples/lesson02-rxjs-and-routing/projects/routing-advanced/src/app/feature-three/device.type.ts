import { InjectionToken } from "@angular/core"

export interface Device {
  manufacturer: string,
  model: string
}


export const DEVICE_LIST: Device[] = [{
  manufacturer: "Apple",
  model: "iPhone 12 Pro Max"
}, {
  manufacturer: "Apple",
  model: "iPhone 12 Mini",
}, {
  manufacturer: "Google",
  model: "Pixel 5"
}, {
  manufacturer: "Google",
  model: "Pixel 4"
}]

export const DEVICES = new InjectionToken<Device[]>('Devices', {
  factory: () => DEVICE_LIST
})
