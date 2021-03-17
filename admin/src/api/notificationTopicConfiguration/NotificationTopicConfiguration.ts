export type NotificationTopicConfiguration = {
  createdAt: Date;
  displayNameForTopic: string | null;
  encryption?: "EnableEncryption" | "DisableEncryption" | null;
  id: string;
  topicName: string;
  topicType: "Fifo" | "Standard";
  updatedAt: Date;
};
