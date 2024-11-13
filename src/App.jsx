import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const tg = window.Telegram.WebApp
  useEffect(() => {
    tg.ready()

  },[])
  const [out, setOut] = useState("")

  tg.expand();
  tg.MainButton.show()

  tg.MainButton.text = "Отправить"; //изменяем текст кнопки 
  tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
  tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
  tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки

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
      tg.MainButton.show()
    } else {
      setOut("Все поля должны быть заполнены!")
    }
  }

  Telegram.WebApp.onEvent('mainButtonClicked', function(){
    tg.sendData("some string that we need to send"); 
    //при клике на основную кнопку отправляем данные в строковом виде
  });


  return (
    <div className='main'>
        <h1 className='title'>Хотите задать вопрос?</h1>
        <div className="fields">
        <p className='out'>{out}</p>
          <input type="text" placeholder='Имя' className='name'/>
          <input type="text" placeholder='Телефон/e-mail' className='contact'/>
          <textarea name="question" id="questionDesc" placeholder='Ваш вопрос' className='question' rows={4}></textarea>
        <button type="submit" className='send' onClick={send}>Готово</button>
        </div>
    </div>
  )
}

export default App
