import { useState } from "react";

interface LoginProps {
  onSubmit: () => void; // Fonction de callback qui sera appelée lors du clic sur le bouton
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Empêche la soumission du formulaire pour éviter un rechargement
    onSubmit(); // Appelle la fonction de callback passée en props
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 flex flex-col items-center justify-center h-screen text-center">
        <label htmlFor="exampleInputEmail1" className="form-label">Username</label><br/>
        <input 
          type="email" 
          className="flex flex-col gap-4"
          id="exampleInputEmail1" 
          aria-describedby="emailHelp"
          style={{ width: "70%", padding: "8px", border: "1.5px solid #999", borderRadius: "20px" }}
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        />
      </div>
      
      <div className="mb-3 flex flex-col items-center justify-center h-screen text-center">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label><br/>
        <input 
          type="password" 
          className="flex flex-col gap-4"
          id="exampleInputPassword1"
          style={{ width: "70%", padding: "8px", border: "1.5px solid #999", borderRadius: "20px" }}
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid gap-2 col-1 mx-auto">
        <button type="submit" className="btn btn-outline-success">Submit</button>
      </div>  

    </form>
  );
}

export default Login;
