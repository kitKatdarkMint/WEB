import { useState } from "react";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Définition explicite du type de l'événement
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
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
          style={{ width: "500px", padding: "8px", border: "1.5px solid #999", borderRadius: "20px" }}
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
      </div>
      
      <div className="mb-3 flex flex-col items-center justify-center h-screen text-center">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label><br/>
        <input 
          type="password" 
          className="flex flex-col gap-4"
          id="exampleInputPassword1"
          style={{ width: "500px", padding: "8px", border: "1.5px solid #999", borderRadius: "20px" }}
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
