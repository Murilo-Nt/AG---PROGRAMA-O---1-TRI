import { useState } from 'react'
import logoRock from './assets/rock-content-icon.png'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState(null);

  const produtos = {
    cursos: [
      { id: 1, nome: "Marketing Digital", preco: "Gratuito" },
      { id: 2, nome: "SEO Avançado", preco: "R$ 49,90" }
    ],
    servicos: [
      { id: 3, nome: "Consultoria Blog", preco: "R$ 150,00" },
      { id: 4, nome: "Redação de Artigos", preco: "R$ 80,00" }
    ]
  };

  return (
    <div className="container">
      <section className="login-container">
        <img src={logoRock} alt="Logo" className="logo-icon" />
        <h2>{usuario ? `Bem-vindo, ${usuario}` : 'Login'}</h2>

        <form>
          <input type="text" placeholder="Seu nome" onChange={(e) => setUsuario(e.target.value)} />
          <input type="password" placeholder="Senha" />
          <button type="button" className="trial-bt">ENTRAR</button>
        </form>

        <hr className="divisor" />

        <h3>Categorias</h3>
        <div className="categoria-botoes">
          <button className="btn-categoria" onClick={() => setCategoriaAtiva('cursos')}>Cursos</button>
          <button className="btn-categoria" onClick={() => setCategoriaAtiva('servicos')}>Serviços</button>
        </div>

        <div className="lista-produtos">
          {categoriaAtiva && (
            <ul>
              {produtos[categoriaAtiva].map(item => (
                <li key={item.id} className="item-produto">
                  <strong>{item.nome}</strong> - {item.preco}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  )
}

export default App