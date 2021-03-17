import * as React from "react";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";

import {
  DataGrid,
  DataField,
  SortData,
  DataGridRow,
  DataGridCell,
  EnumTitleType,
  Button,
  Snackbar,
  TimeSince,
} from "@amplication/design-system";

import { NotificationTopicConfiguration } from "../api/notificationTopicConfiguration/NotificationTopicConfiguration";

type Data = NotificationTopicConfiguration[];

const SORT_DATA: SortData = {
  field: null,
  order: null,
};

const FIELDS: DataField[] = [
  {
    name: "id",
    title: "ID",
    sortable: false,
  },
  {
    name: "createdAt",
    title: "Created At",
    sortable: false,
  },
  {
    name: "displayNameForTopic",
    title: "Display Name for Topic",
    sortable: false,
  },
  {
    name: "encryption",
    title: "Encryption",
    sortable: false,
  },
  {
    name: "topicName",
    title: "Topic Name",
    sortable: false,
  },
  {
    name: "topicType",
    title: "Topic Type",
    sortable: false,
  },
  {
    name: "updatedAt",
    title: "Updated At",
    sortable: false,
  },
];

export const NotificationTopicConfigurationList = (): React.ReactElement => {
  const { data, error, isError } = useQuery<Data, AxiosError>(
    "list-/api/notification-topic-configurations",
    async () => {
      const response = await api.get("/api/notification-topic-configurations");
      return response.data;
    }
  );

  return (
    <>
      <DataGrid
        fields={FIELDS}
        titleType={EnumTitleType.PageTitle}
        title={"NotificationTopicConfigurations"}
        loading={false}
        sortDir={SORT_DATA}
        toolbarContentEnd={
          <Link to={"/notification-topic-configurations/new"}>
            <Button>Create NotificationTopicConfiguration </Button>
          </Link>
        }
      >
        {data &&
          data.map((item: NotificationTopicConfiguration) => {
            return (
              <DataGridRow key={item.id} clickData={item}>
                <DataGridCell>
                  <Link
                    className="entity-id"
                    to={`${"/notification-topic-configurations"}/${item.id}`}
                  >
                    {item.id}
                  </Link>
                </DataGridCell>
                <DataGridCell>
                  <TimeSince time={item.createdAt} />
                </DataGridCell>
                <DataGridCell>
                  <>{item.displayNameForTopic}</>
                </DataGridCell>
                <DataGridCell>
                  <>{item.encryption}</>
                </DataGridCell>
                <DataGridCell>
                  <>{item.topicName}</>
                </DataGridCell>
                <DataGridCell>
                  <>{item.topicType}</>
                </DataGridCell>
                <DataGridCell>
                  <TimeSince time={item.updatedAt} />
                </DataGridCell>
              </DataGridRow>
            );
          })}
      </DataGrid>
      <Snackbar open={isError} message={error?.response?.data?.message} />
    </>
  );
};
