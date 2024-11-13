//import { useState } from 'react'
import DataFetch from './components/DataFetchingComponent';
import NameList from './components/NameList';
import NameForm from './components/NameForm';
//import StyledComp from './components/StyledComponent';

const App = () => {
  return (
    <div>
      <h2>Puhelinluettelo</h2>
        <NameForm />
        <NameList />
        <DataFetch />   
      </div>
  )
}

export default App
