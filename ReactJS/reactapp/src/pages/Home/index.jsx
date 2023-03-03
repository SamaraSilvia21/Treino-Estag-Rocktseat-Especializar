import React, {useState, useEffect} from 'react';
import './styles.css'

// Importanto Componentes

import { Card } from '../../components/Card'

export function Home() {

  const [studentName, setStudentName] = useState();
  const [students, setStudent] = useState([]); 

  function handleAddStudent(){

    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br",{
        hour: '2-digit',
        minute: '2-digit', 
        second: '2-digit'
      })
    };

    setStudent(prevState => [...prevState, newStudent]);

  }

  useEffect(() => {
    console.log("useEffect foi chamado")
  },[students]);

  return (
  <div className='container'>

    <header>
      <h1>Lista de Presenças</h1>
      <div>
        <strong>Samara</strong>
        <img src="https://github.com/samarasilvia21.png" alt="Foto de Perfil" />
      </div>
    </header>
    
    <input 
      type="text" 
      placeholder="Digite o nome..."
      onChange={e => setStudentName(e.target.value)} 
    />

    <button type="button" onClick={handleAddStudent}>
      Adicionar
    </button>
    {
      students.map(student => (
        <Card 
          key={student.time}
          name={student.name} 
          time={student.time}
        />)
      )
    }
  </div>
  )
}