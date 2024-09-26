import React, {useState} from 'react'
import './styles.css'

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
  ])

  const [tempskills, setTempSkills] = useState(skills.join(' ,'))

  const [person, setPerson] = useState({
    name: 'Евгений',
    surname: 'Салоников',
    group: 'CS-302(c)',
    about: 'Люблю искать фисташки и открывать их',
  })

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

  return (
    <div className="container">
      <h3 className="headname">
        {edit ? (
          <input
            type="text"
            name="name"
            value={person.name}
            onChange={handleChange}
          />
        ) : (
          person.name + ' '
        )}
        {edit ? (
          <input
            type="text"
            name="surname"
            value={person.surname}
            onChange={handleChange}
          />
        ) : (
          person.surname
        )}
      </h3>
      <img
        className="imga"
        src="https://upload.wikimedia.org/wikipedia/en/d/d2/Rexy-_the_Jurassic_Park_Tyrannosaurus_rex.png"
      />
      <div>
        <li>
          <strong>Группа</strong>:{' '}
          {edit ? (
            <input
              type="text"
              name="group"
              value={person.group}
              onChange={handleChange}
            />
          ) : (
            person.group
          )}
        </li>
        <strong>Навыки</strong>:
        {edit ? (
          <input type="text" value={tempskills} onChange={handleInputChange} />
        ) : (
          skills.join(', ')
        )}
        <li>
          <strong>О себе</strong>:{' '}
          {edit ? (
            <input
              type="text"
              name="about"
              value={person.about}
              onChange={handleChange}
            />
          ) : (
            person.about
          )}
        </li>
      </div>
      <button name="state" onClick={switchEdit}>
        {edit ? 'Сохраниить?' : 'Редактировать'}
      </button>
    </div>
  )
}

export function App() {
  return <Avatar showSkills={true} />
}

// Log to console
console.log('Hello console')
