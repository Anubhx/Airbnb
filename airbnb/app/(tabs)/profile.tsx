import { View, Text, Button } from "react-native";
import React from "react";
import { useOAuth } from '@clerk/clerk-expo';
import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";

const explore = () => {
  const { signOut, isSignedIn} = useAuth
  return (
    <View>
      <Button title='Log out' onPress={()  => signOut()}/>
      { !isSignedIn &&
      <Link href={'/(modals)/login'}>
        <Text> Login </Text>
      </Link>
       }
    </View>
  );
};

export default explore;
