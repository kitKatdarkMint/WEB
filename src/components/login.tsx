import { useState } from "react";

export default function LoginPopup() {
  const [open, setOpen] = useState(false); //ouvrir la popup
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
        <button className="btn" onClick = {() => setOpen(true)}>Acceder a votre compte</button> //ouvre la fenetre quand on appuie sur ce bouton
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Nom d'utilisateur"/>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe"/>
        <button className="btn" onClick = {() => setOpen(false)}>Submit</button> //ferme la fenetre
    </>
  );
}

/* 
fonction qui verifie en focntion de ce qui est rentré si le compte existe deja et le crée sinon:

import { useState } from "react";

export default function LoginForm() {
  const [DB, setDB] = useState([
    ["u1", "mdp1"],
    ["u2", "mdp2"],
  ]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    let found = false;
    for (let i = 0; i < DB.length; i++) {
      if (DB[i][0] === username) {
        found = true;
        if (DB[i][1] !== password) {
          setMessage("Wrong password");
          return;
        } else {
          setMessage("OK");
          return;
        }
      }
    }
    if (!found) {
      setDB([...DB, [username, password]]);
      setMessage("Votre compte a été créé");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Submit</button>
      <p>{message}</p>
    </div>
  );
}

CODE GENERE PAR CHATGPT

import { useState } from "react";
import axios from "axios";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPopup() {
  const [open, setOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleAuth = async () => {
    try {
      if (isRegister) {
        // Création de compte
        const response = await axios.post("/api/register", { username, password });
        setMessage(response.data.message);
      } else {
        // Connexion
        const response = await axios.post("/api/login", { username, password });
        setMessage(response.data.message);
      }
    } catch (error: any) {
      setMessage(error.response?.data?.message || "Erreur lors de l'authentification");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Button onClick={() => setOpen(true)}>Se connecter</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>{isRegister ? "Créer un compte" : "Connexion"}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col space-y-4">
            <Input 
              type="text" 
              placeholder="Nom d'utilisateur" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
            <Input 
              type="password" 
              placeholder="Mot de passe" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <Button onClick={handleAuth}>
              {isRegister ? "Créer un compte" : "Se connecter"}
            </Button>
            <p className="text-center text-sm cursor-pointer text-blue-500" onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? "Déjà un compte ? Connectez-vous" : "Pas de compte ? Inscrivez-vous"}
            </p>
            {message && <p className="text-center text-red-500">{message}</p>}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}


 */

