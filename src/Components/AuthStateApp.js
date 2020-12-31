import {useState, useEffect } from 'react';
//import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

export const AuthStateApp = () => {
    const [authState, setAuthState] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

  return authState === AuthState.SignedIn && user ? (
            <div className="App">
                <div>Hello, {user.username}</div>
                <AmplifySignOut />
            </div>
        ) : 
        (
            <AmplifyAuthenticator>
                <AmplifySignIn headerText="Sign In to MoveIT" slot="sign-in" usernameAlias="email" hideSignUp />
            </AmplifyAuthenticator>
        
  );
}