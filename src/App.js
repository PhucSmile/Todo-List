import React from 'react';
import Footer from './Component/Footer';
import FormContainer from './Component/FormContainer';
import HomeScreen from './Screen/HomeScreen';
function App(props) {


  return (
    <FormContainer>
      <HomeScreen />
      <Footer />
    </FormContainer>
  );
}

export default App;
