import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const tg = window.Telegram.WebApp
  useEffect(() => {
    tg.ready()

  },[])
  const [out, setOut] = useState("")

  tg.expand();

  function send(){
    const name = document.querySelector('.name').value
    const contact = document.querySelector('.contact').value
    const question = document.querySelector('.question').value

    let done = 0
    if(name != ""){
      done++
    }
    if(contact != ""){
      done++
    }
    if(question != ""){
      done++
    }

    if(done == 3){
      // tg.sendData(JSON.stringify({
      //   // chat_id: '1768792009',
      //   text: `Имя: ${name}\nКонтакт: ${contact}\nВопрос: ${question}`
      // }))
      tg.sendData(JSON.stringify({
        name: name,
        contact: contact,
        question: question,
      }))
    } else {
      setOut("Все поля должны быть заполнены!")
    }
  }



  return (
    <div className='main'>
        <h1 className='title'>Хотите задать вопрос?</h1>
        <div className="fields">
        <p className='out'>{out}</p>
          <input type="text" placeholder='Имя' className='name'/>
          <input type="text" placeholder='Телефон/e-mail' className='contact'/>
          <textarea name="question" id="questionDesc" placeholder='Ваш вопрос' className='question' rows={4}></textarea>
        <button type="submit" className='send' onClick={send}>Отправить</button>
        </div>
    </div>
  )
}

export default App
