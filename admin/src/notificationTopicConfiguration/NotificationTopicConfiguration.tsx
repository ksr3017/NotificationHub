import * as React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { AxiosError } from "axios";
import { useQuery, useMutation } from "react-query";
import { Formik } from "formik";
import pick from "lodash.pick";

import {
  Form,
  EnumFormStyle,
  Button,
  FormHeader,
  Snackbar,
  EnumButtonStyle,
  TextField,
  SelectField,
} from "@amplication/design-system";

import { api } from "../api";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { NotificationTopicConfiguration as TNotificationTopicConfiguration } from "../api/notificationTopicConfiguration/NotificationTopicConfiguration";
import { NotificationTopicConfigurationUpdateInput } from "../api/notificationTopicConfiguration/NotificationTopicConfigurationUpdateInput";

export const NotificationTopicConfiguration = (): React.ReactElement => {
  const match = useRouteMatch<{ id: string }>(
    "/notification-topic-configurations/:id/"
  );
  const id = match?.params?.id;
  const history = useHistory();

  const { data, isLoading, isError, error } = useQuery<
    TNotificationTopicConfiguration,
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

  const [deleteEntity] = useMutation<
    TNotificationTopicConfiguration,
    AxiosError
  >(
    async (data) => {
      const response = await api.delete(
        `${"/api/notification-topic-configurations"}/${id}`,
        data
      );
      return response.data;
    },
    {
      onSuccess: (data, variables) => {
        history.push("//notification-topic-configurations");
      },
    }
  );

  const [
    update,
    { error: updateError, isError: updateIsError, isLoading: updateIsLoading },
  ] = useMutation<
    TNotificationTopicConfiguration,
    AxiosError,
    NotificationTopicConfigurationUpdateInput
  >(async (data) => {
    const response = await api.patch(
      `${"/api/notification-topic-configurations"}/${id}`,
      data
    );
    return response.data;
  });

  const handleSubmit = React.useCallback(
    (values: NotificationTopicConfigurationUpdateInput) => {
      void update(values);
    },
    [update]
  );

  useBreadcrumbs(match?.url, data?.displayNameForTopic);

  const handleDelete = React.useCallback(() => {
    void deleteEntity();
  }, [deleteEntity]);

  const errorMessage =
    updateError?.response?.data?.message || error?.response?.data?.message;

  const initialValues = React.useMemo(
    () =>
      pick(data, [
        "displayNameForTopic",
        "encryption",
        "topicName",
        "topicType",
      ]),
    [data]
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      {data && (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form
            formStyle={EnumFormStyle.Horizontal}
            formHeaderContent={
              <FormHeader
                title={`${"NotificationTopicConfiguration"} ${
                  data?.displayNameForTopic && data?.displayNameForTopic.length
                    ? data.displayNameForTopic
                    : data?.id
                }`}
              >
                <Button
                  type="button"
                  disabled={updateIsLoading}
                  buttonStyle={EnumButtonStyle.Secondary}
                  icon="trash_2"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
                <Button type="submit" disabled={updateIsLoading}>
                  Save
                </Button>
              </FormHeader>
            }
          >
            <div>
              <TextField
                label="Display Name for Topic"
                name="displayNameForTopic"
              />
            </div>
            <div>
              <SelectField
                label="Encryption"
                name="encryption"
                options={[
                  { label: "Enable Encryption", value: "EnableEncryption" },
                  { label: "Disable Encryption", value: "DisableEncryption" },
                ]}
              />
            </div>
            <div>
              <TextField label="Topic Name" name="topicName" />
            </div>
            <div>
              <SelectField
                label="Topic Type"
                name="topicType"
                options={[
                  { label: "FIFO", value: "Fifo" },
                  { label: "Standard", value: "Standard" },
                ]}
              />
            </div>
          </Form>
        </Formik>
      )}
      <Snackbar open={isError || updateIsError} message={errorMessage} />
    </>
  );
};
