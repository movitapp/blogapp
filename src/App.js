import './App.css';
// import { useState, useEffect } from 'react'
// import { Auth, Hub } from 'aws-amplify'
// import { Authenticator } from 'aws-amplify-react'
// import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import { AuthStateApp } from './Components'

//import {DisplayPosts} from './Pages'

const App = () => (
  <div className="App">
    <AuthStateApp/>
    <h1>My App</h1>
  </div>
)


export default App;
