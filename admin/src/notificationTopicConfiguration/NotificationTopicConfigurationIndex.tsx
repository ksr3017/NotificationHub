import * as React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { NotificationTopicConfigurationList } from "./NotificationTopicConfigurationList";
import { CreateNotificationTopicConfiguration } from "./CreateNotificationTopicConfiguration";
import { NotificationTopicConfiguration } from "./NotificationTopicConfiguration";

export const NotificationTopicConfigurationIndex = (): React.ReactElement => {
  useBreadcrumbs(
    "/notification-topic-configurations/",
    "NotificationTopicConfigurations"
  );

  return (
    <Switch>
      <PrivateRoute
        exact
        path={"/notification-topic-configurations/"}
        component={NotificationTopicConfigurationList}
      />
      <PrivateRoute
        path={"/notification-topic-configurations/new"}
        component={CreateNotificationTopicConfiguration}
      />
      <PrivateRoute
        path={"/notification-topic-configurations/:id"}
        component={NotificationTopicConfiguration}
      />
    </Switch>
  );
};
