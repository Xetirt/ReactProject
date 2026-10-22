import HeaderComponent from "../components/HeaderComponent"
import { UserContext, UserProviderWrapper } from '../contents/user.context.jsx';
import { useContext } from 'react';

function HomePages() {
  const {user, setUser} = useContext(UserContext);
  return (
    <>
    
    <HeaderComponent></HeaderComponent>
    
    <div>HomePages</div>
    <br></br>
    </>
    
  )
}

export default HomePages