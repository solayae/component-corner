
import { Navigate } from 'react-router-dom';
const Profile = () => {
  
  const user =  localStorage.getItem('user')

  if (!user) {
    return <Navigate to="/" />;
  }
  
  return (
    <>
     
    
    <div className="container">
       <header className="jumbotron">
        <h3>
          <strong>{user?.name}</strong> test -  Profile 
        </h3>
      </header>

      
      <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
      <p>
          <strong>Name:</strong> {user.name}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {user?.roles &&
          user.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
    </>
  );
};

export default Profile;