import { AccessLogEntry } from "../access-log.service";
import { Host } from "../hosts.service";

export interface AppState {
  accessLog: ReadonlyArray<AccessLogEntry>
  hosts: ReadonlyArray<Host>
}