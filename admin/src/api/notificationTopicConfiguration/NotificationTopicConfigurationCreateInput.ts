export type NotificationTopicConfigurationCreateInput = {
  displayNameForTopic?: string | null;
  encryption?: "EnableEncryption" | "DisableEncryption" | null;
  topicName: string;
  topicType: "Fifo" | "Standard";
};
