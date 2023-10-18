import { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  return (
    <div className="container">
      <h1>
        Página de Login
      </h1>
      <form> 
        <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Senha</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </form>
    </div>
  )
}

export default Login