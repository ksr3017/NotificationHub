import React from "react";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";
import { NotificationTopicConfiguration } from "../api/notificationTopicConfiguration/NotificationTopicConfiguration";

type Props = { id: string };

export const NotificationTopicConfigurationTitle = ({ id }: Props) => {
  const { data, isLoading, isError, error } = useQuery<
    NotificationTopicConfiguration,
    AxiosError,
    [string, string]
  >(
    ["get-/api/notification-topic-configurations", id],
    async (key: string, id: string) => {
      const response = await api.get(
        `${"/api/notification-topic-configurations"}/${id}`
      );
      return response.data;
    }
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return (
    <Link
      to={`${"/api/notification-topic-configurations"}/${id}`}
      className="entity-id"
    >
      {data?.displayNameForTopic && data?.displayNameForTopic.length
        ? data.displayNameForTopic
        : data?.id}
    </Link>
  );
};
