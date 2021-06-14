import React from "react";
import { Alert, Keyboard } from "react-native";
import * as Notifications from 'expo-notifications'
import * as Yup from "yup";

import AppFormField from './AppFormField'
import AppForm from './AppForm'
import SubmitButton from './SubmitButton'
import messagesApi from "../../api/messages";

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    await messagesApi.send(message, listing.id);

    // if (!result.ok) {
    //   console.log("Error", result);
    //   return Alert.alert("Error", "Could not send the message to the seller.");
    // }

    resetForm();

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
            title: 'Somebody messages:',
            body: message,
        },
        trigger: null
  })};

  return (
    <AppForm
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="Contact Seller" />
    </AppForm>
  );
}

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(0).label("Message"),
});

export default ContactSellerForm;
