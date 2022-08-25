import type { Controller } from "@peacockproject/core/controller"
import { log, LogLevel } from "@peacockproject/core/loggingInterop"

export default function myPlugin(controller: Controller): void {
    log(LogLevel.INFO, "Loaded my cool plugin!")

    // enjoy coding
}
