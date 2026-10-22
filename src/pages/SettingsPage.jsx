import React from 'react';
import HeaderComponent from '../components/HeaderComponent';

function SettingsPage() {
  const [hasAccess, setAccess] = useState(true);

  if (!hasAccess) return <Navigate to={"/error"} />


  return (
    <>
    <HeaderComponent></HeaderComponent>

    <div>SettingPage</div>
    </>
  );
}

export default SettingsPage;