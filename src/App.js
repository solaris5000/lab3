import React, {useState, useRef, useEffect} from 'react'
import './tailstyles.css'

function Skills(params) {
  return (
    <li>
      <strong>Навыки</strong>:
    </li>
  )
}

function Avatar(props) {
  const showSkills = props.showSkills

  const [edit, setEdit] = useState(false)

  const [skills, setSkils] = useState([
    'Поиск фисташек',
    ' отькрытие фисташек',
    ' закрытие фисташек',
  ]);

  const [tempskills, setTempSkills] = useState(skills.join(' ,'));

  const [currpage, setCurrpage] = useState('main');

  const [person, setPerson] = useState({
    name: 'Евгений',
    surname: 'Салоников',
    group: 'CS-302(c)',
    about: 'Люблю искать фисташки и открывать их',
  });

  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const groupRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    if (nameRef.current)
    {
      nameRef.current.focus();
    }
  }, [person.name])

  useEffect(() => {
    if (surnameRef.current)
    {
      surnameRef.current.focus();
    }
  }, [person.surname])

  useEffect(() => {
    if (groupRef.current)
    {
      groupRef.current.focus();
    }
  }, [person.group])

  useEffect(() => {
    if (aboutRef.current)
    {
      aboutRef.current.focus();
    }
  }, [person.about])

  useEffect(() => {
    if (skillsRef.current)
    {
      skillsRef.current.focus();
    }
  }, [tempskills])

  const handleInputChange = (e) => {
    setTempSkills(e.target.value) // Обновляем значение input
  }

  const updateArray = () => {
    // Разделяем строку по запятой и убираем лишние пробелы
    const newItems = tempskills
      .split(',')
      .map((item) => item.trim())
      .filter((item) => item) // Убираем пустые значения
    setSkils(newItems) // Обновляем состояние массива
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setPerson({...person, [name]: value}) // Обновляем поле на основе имени
  }

  const updateSkills = (e) => {
    const {name, value} = e.target
    setSkils(() => value.split(',')) // Обновляем поле на основе имени
  }

  const switchEdit = () => {
    setEdit(!edit)
    if (edit) {
      updateArray()
    }
  }

  function EditForm()
  {
    return (
	    <div>
      <h3 className="headname">
          <input
            ref={nameRef}
            type="text"
            name="name"
            value={person.name}
            onChange={handleChange}
          />
          <input
            ref={surnameRef}
            type="text"
            name="surname"
            value={person.surname}
            onChange={handleChange}
          />
      </h3>
      <img
        className="imga"
        src="https://upload.wikimedia.org/wikipedia/en/d/d2/Rexy-_the_Jurassic_Park_Tyrannosaurus_rex.png"
      />
      <div>
        <li>
          <strong>Группа</strong>:{' '}
            <input
              ref={groupRef}
              type="text"
              name="group"
              value={person.group}
              onChange={handleChange}
            />
        </li>
        <strong>Навыки</strong>:
          <input ref={skillsRef} type="text" value={tempskills} onChange={handleInputChange} />
        <li>
          <strong>О себе</strong>:{' '}
            <input
              ref={aboutRef}
              type="text"
              name="about"
              value={person.about}
              onChange={handleChange}
            />
        </li>
      </div>
      <button name="state" onClick={switchEdit}>
        {edit ? 'Сохраниить?' : 'Редактировать'}
      </button>
	    </div>
    )
  }

  function ViewForm()
  {
    return (
	    <div>
      <h3 className="headname">

	    {person.name}  {person.surname}
      </h3>
      <img
        className="imga"
        src="https://upload.wikimedia.org/wikipedia/en/d/d2/Rexy-_the_Jurassic_Park_Tyrannosaurus_rex.png"
      />
      <div>
        <li>
          <strong>Группа</strong>:
	    {person.group}
        </li>
        <strong>Навыки</strong>:
	    {skills.join(', ')}
        <li>
          <strong>О себе</strong>:
	    {person.about}
        </li>
      </div>
      <button name="state" onClick={switchEdit}>
        {edit ? 'Сохраниить?' : 'Редактировать'}
      </button>
	    </div>
    )
  }

  function renderSwitch(param)
  {
    switch(param)
    {
      case 'main': return (edit ? <EditForm/> : <ViewForm/>);
      case 'about': return ("about");
      case 'contacts': return("contats");
    }
  }

  return (
    <div className="pageRoot">
    <div className="header"></div>
    <div className="container">
      {renderSwitch(currpage)}
    </div>
    </div>
  )
}

export function App() {
  return <Avatar showSkills={true} />
}

// Log to console
console.log('Hello console')
