import React, { useState, useEffect } from 'react'; //useEffects => dispara uma function toda vez que uma info for alterada ou 1 vez só
import api from './services/api';

import './global.css';
import './App.css';
import './sidebar.css';
import './main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

//3 conceitos do React:

/*Componente => Function que retorna algum conteúdo HTML pode ser CSS or JS (SIMPLESMENTE);
Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
Criar um componente novo quando a gente repete um mesmo trecho de código muitas vezes ou
quando a gente consegue isolar um pedaço da aplicação dentro de algo que não inflinja em nenhum funcionamento dos restantes de nenhum componente */
/*Propiedade => Sempre que passar um atributo para um componente no react
Informaçoes que um componente PAI(app) passa para o componente FILHO*/
/*Estado => Informaação que o Componente vai manipular
Informações mantidas pelo Componente (lembrar imutabilidade)*/

//Desestruturação => Pegar um objeto ou vetor e dividir ele em variáveis
//Imutabilidade => Nunca alterar um dado, vou criar um novo dado a partir do valor anterior que tinha

const App = () => {
  const [devs, setDevs] = useState([]);

//function que vai ser disparada quando o user enviar

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('./devs');

      setDevs(response.data);
    }
      loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data]);

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit= {handleAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>

          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
