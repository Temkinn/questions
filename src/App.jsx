import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const tg = window.Telegram.WebApp
  useEffect(() => {tg.ready()},[])
  const [out, setOut] = useState("")

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


    tg.sendData({
      // chat_id: '1768792009',
      text: `Имя: ${name}\nКонтакт: ${contact}\nВопрос: ${question}`
    })


    if(done == 3){
      document.querySelector('.name').value = ''
      document.querySelector('.contact').value = ''
      document.querySelector('.question').value = ''
      setOut("Ваши данные отправлены!")

      tg.close()
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