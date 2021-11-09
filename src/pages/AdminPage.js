import React from 'react';
import Amplify from 'aws-amplify';
import { 
    AmplifyAuthContainer, 
    AmplifyAuthenticator,
    AmplifySignIn,
    AmplifySignUp, 
    AmplifySignOut
 } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

const AdminPage = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

  return authState === AuthState.SignedIn && user ? (
      <div className="App">
          <div>Hello, {user.username}</div>
          <AmplifySignOut />
      </div>
    ) : (
    <AmplifyAuthContainer>
      <AmplifyAuthenticator> 
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
            {
                type: "preferred_username",
                label: "Display name",
                placeholder: "Display name",
            },    
            {
                type: "email",
                label: "Email",
                placeholder: "first.last@example.com",
                inputProps: { required: true, autocomplete: "username" },
            },
            {
                type: "password",
                label: "Password",
                placeholder: "Secure password",
                inputProps: { required: true, autocomplete: "new-password" },
            },
            {
                type: "phone_number",
                label: "Phone #",
                placeholder: "(555) 555 5555",
            },
        ]} 
      />
      <AmplifySignIn hideSignUp="true" slot="sign-in" usernameAlias="email" />
      </AmplifyAuthenticator>
    </AmplifyAuthContainer>
  );
}

export default AdminPage;