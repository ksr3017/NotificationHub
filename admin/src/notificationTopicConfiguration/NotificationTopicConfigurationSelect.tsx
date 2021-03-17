import React, { useMemo } from "react";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";
import { SelectField, SelectFieldProps } from "@amplication/design-system";
import { NotificationTopicConfiguration } from "../api/notificationTopicConfiguration/NotificationTopicConfiguration";

type Data = NotificationTopicConfiguration[];

type Props = Omit<SelectFieldProps, "options">;

export const NotificationTopicConfigurationSelect = (props: Props) => {
  const { data } = useQuery<Data, AxiosError>(
    "select-/api/notification-topic-configurations",
    async () => {
      const response = await api.get("/api/notification-topic-configurations");
      return response.data;
    }
  );

  const options = useMemo(() => {
    return data
      ? data.map((item) => ({
          value: item.id,
          label:
            item.displayNameForTopic && item.displayNameForTopic.length
              ? item.displayNameForTopic
              : item.id,
        }))
      : [];
  }, [data]);

  return <SelectField {...props} options={options} />;
};
