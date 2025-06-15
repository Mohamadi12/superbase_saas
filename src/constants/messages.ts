export const CLIENT_MESSAGES = [
  "conversation-update",
  "function-call",
  "hang",
  "model-output",
  "speech-update",
  "status-update",
  "transfer-update",
  "transcript",
  "tool-calls",
  "user-interrupted",
  "voice-silence-detected",
] as const;

export const SERVER_MESSAGES = [
  "conversation-update",
  "end-of-call-report",
  "function-call",
  "hang",
  "speech-update",
  "status-update",
  "tool-calls",
  "transfer-destination-request",
  "user-interrupted",
] as const;
