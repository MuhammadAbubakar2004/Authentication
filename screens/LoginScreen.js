import { useState } from 'react';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { logIn } from '../util/auth';
import { Alert } from 'react-native';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function logInHandler({email, password}){
    setIsAuthenticating(true);
    try {

      await logIn(email, password);
    } catch(error) {
      Alert.alert(
        'Authentication failed',
        'Could not log you in. Please check your credentials or try again later!'
      )
    };
    setIsAuthenticating(false);
  }
  
  if(isAuthenticating){
    return <LoadingOverlay message='Logging in !!..'/>
  }

  return <AuthContent isLogin onAuthenticate={logInHandler}/>;
}

export default LoginScreen;