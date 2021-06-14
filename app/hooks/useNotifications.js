import { useEffect } from "react";
import * as Notifications from 'expo-notifications'
import * as Permissions from "expo-permissions";

import expoPushTokensApi from "../api/expoPushTokens";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: true,
        }),
    });
    
    // Second, call the method
    
    Notifications.scheduleNotificationAsync({
        content: {
            title: 'Maxym says:',
            body: "It's working properly",
        },
        trigger: null,
    });
    
    registerForPushNotifications();

    if (notificationListener) Notifications.addPushTokenListener(notificationListener);
}, []);

  const registerForPushNotifications = async () => {
      try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};








