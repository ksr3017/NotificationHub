import * as React from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { AxiosError } from "axios";
import { Formik } from "formik";
import {
  Form,
  EnumFormStyle,
  Button,
  FormHeader,
  Snackbar,
  TextField,
  SelectField,
} from "@amplication/design-system";
import { api } from "../api";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { NotificationTopicConfiguration } from "../api/notificationTopicConfiguration/NotificationTopicConfiguration";
import { NotificationTopicConfigurationCreateInput } from "../api/notificationTopicConfiguration/NotificationTopicConfigurationCreateInput";

const INITIAL_VALUES = {} as NotificationTopicConfigurationCreateInput;

export const CreateNotificationTopicConfiguration = (): React.ReactElement => {
  useBreadcrumbs(
    "/notification-topic-configurations/new",
    "Create NotificationTopicConfiguration"
  );
  const history = useHistory();

  const [create, { error, isError, isLoading }] = useMutation<
    NotificationTopicConfiguration,
    AxiosError,
    NotificationTopicConfigurationCreateInput
  >(
    async (data) => {
      const response = await api.post(
        "/api/notification-topic-configurations",
        data
      );
      return response.data;
    },
    {
      onSuccess: (data, variables) => {
        history.push(`${"/notification-topic-configurations"}/${data.id}`);
      },
    }
  );
  const handleSubmit = React.useCallback(
    (values: NotificationTopicConfigurationCreateInput) => {
      void create(values);
    },
    [create]
  );
  return (
    <>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form
          formStyle={EnumFormStyle.Horizontal}
          formHeaderContent={
            <FormHeader title={"Create NotificationTopicConfiguration"}>
              <Button type="submit" disabled={isLoading}>
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
      <Snackbar open={isError} message={error?.response?.data?.message} />
    </>
  );
};
