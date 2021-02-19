import React, { Component } from 'react';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes
} from '@react-native-community/google-signin';
import { View, Text } from 'react-native';

class SignIn extends Component { //top level, will be in app
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      isSigningIn: false,
      userInfo: null
    };
  }

  async componentDidMount() {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
    
    try {
      this.setState({ userInfo: await GoogleSignin.signInSilently(), isSigningIn: true, signedIn: true});
    } catch ({code}) {
      console.log(code);
      if (code === statusCodes.SIGN_IN_REQUIRED) {
        this.setState({signedIn: false});
      }
    } finally {
      this.setState({isSigningIn: false});
    }
  }

  signIn = async () => {
    try {
      this.setState({ userInfo: await GoogleSignin.signIn(), isSigningIn: true, signedIn: true});
    } catch (e) {
      console.log(e);
      this.setState({signedIn: false})
    } finally {
      this.setState({isSigningIn: false})
    }
  }

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (e) {
      console.error(e);
    } finally {
      this.setState({isSigningIn: false, signedIn: false});
    }
  };
  
  render() { return(
    <View>
      {!this.state.signedIn ? <GoogleSigninButton 
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={this.signIn}
        disabled={this.state.isSigningIn}
      /> : <Text>Welcome</Text>}
    </View>
  )};
}

export default SignIn