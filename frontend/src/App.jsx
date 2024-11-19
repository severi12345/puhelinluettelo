//import { useState } from 'react'
import DataFetch from './components/DataFetchingComponent';
import NameList from './components/NameList';
import NameForm from './components/NameForm';
import StyledComp from './components/StyledComponent';
 
const App = () => {
  return (
    <div>
      <h2>React-esimerkki</h2>
        <NameForm />
        <hr />
        <NameList />
        <hr />
        <DataFetch />  
        <hr />
        <StyledComp />
      </div>
  )
}
 
export default App;