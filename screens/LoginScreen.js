import { useState } from 'react';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { logIn } from '../util/auth';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function logInHandler({email, password}){
    setIsAuthenticating(true);
    await logIn(email, password);
    setIsAuthenticating(false);
  }
  
  if(isAuthenticating){
    return <LoadingOverlay message='Logging in !!..'/>
  }

  return <AuthContent isLogin onAuthenticate={logInHandler}/>;
}

export default LoginScreen;
