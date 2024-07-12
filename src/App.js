import logo from './logo.svg';
import './App.css';
import "./style.css"
import {useState} from "react";
function Chat(id) {
  const [groupList0, setGroupList0] = useState([]);
  const [groupList1, setGroupList1] = useState([]);

  const [messages, setMessages] = useState([]);
  document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    const messageList = document.getElementById('messageList');
    const themeToggleButton = document.getElementById('themeToggleButton');
    const newGroupButton = document.getElementById('newGroupButton');



    // Function to append a message to the chat
    const appendMessage = (text, isUserMessage = true, status = 'Отправлено') => {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.classList.add(isUserMessage ? 'user-message' : 'other-message');

      const messageContent = document.createElement('div');
      messageContent.classList.add('message-content');

      const messageText = document.createElement('span');
      messageText.textContent = text;

      const messageTime = document.createElement('span');
      messageTime.classList.add('message-time');
      messageTime.textContent = new Date().toLocaleTimeString();

      const messageStatus = document.createElement('span');
      messageStatus.classList.add('message-status');
      messageStatus.textContent = status;

      messageContent.appendChild(messageText);
      messageContent.appendChild(messageTime);
      messageContent.appendChild(messageStatus);
      messageElement.appendChild(messageContent);

      messageList.appendChild(messageElement);
      messageList.scrollTop = messageList.scrollHeight;
    };

    // Event listener for message form submission
    messageForm.addEventListener('submit', (e) => {
      //e.preventDefault();
      const text = messageInput.value.trim();
      if (text) {
        appendMessage(text);
        messageInput.value = '';
      }
    });

  });
  return (
      <div className="main">
        <div className="a">
            <div className="chat-container">
              <div className="header">
                <h1>Внутренний чат</h1>
                <input type="text" id={"searchInput-0"} placeholder="Поиск по сообщениям..."/>
                <button id="themeToggleButton-0" onClick={()=>{
                  document.body.classList.toggle('dark-theme');
                  var themeToggleButton = document.getElementById('themeToggleButton-0');
                  themeToggleButton.textContent = document.body.classList.contains('dark-theme') ? 'Светлая тема' : 'Темная тема';
                }}>Темная тема</button>
                <button id="newGroupButton-0" onClick={()=>{
                  const groupName = prompt('Введите название группы:');
                  if (groupName) {
                    setGroupList0([...groupList0, groupName]);
                    document.getElementById('groupList-0').innerHTML += `<div class="group">${groupName}</div>`
                  }
                }}>Новая группа</button>
              </div>
              <div className="group-list" id="groupList-0">
                {groupList0.map((groupName) => <div className="group" key={groupName}>{groupName}</div>)}
              </div>
              <div className="message-list" id="messageList-0">
                {messages.map((message, index) => (
                  <div className="message user-message" key={index}>
                    <div className="message-content">
                      <span className="message-text">{message.text}</span>
                      <span className="message-time">{message.time}</span>
                      <span className="message-status">{message.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <form id="messageForm-0">
                <textarea id="messageInput-0" placeholder="Введите сообщение..." rows="3" onInput={() =>{
                  const textarea = document.getElementById('messageInput-0');
                  const feedbackIndicator = document.getElementById('feedbackIndicator-0');
                  feedbackIndicator.textContent = textarea.value ? 'Печатает...' : '';
                }}></textarea>
                <input type="file" id="fileInput-0" onChange={()=>{
                  const file = document.getElementById('fileInput-0').files[0];
                  if (file) {
                    //appendMessage(`Файл ${file.name} загружен`, true, 'Файл');
                    setMessages([...messages, {text: `Файл ${file.name} загружен`, time: new Date().toLocaleTimeString(), status: 'Файл'}]);
                    document.getElementById('fileInput-0').value = '';
                  }
                }} hidden/>
                <button type="button" id="fileButton-0" onClick={()=>{ document.getElementById('fileInput-0').click()}}>📎</button>
                <button type="button" onClick={() => {
                  const textarea = document.getElementById('messageInput-0');
                  const feedbackIndicator = document.getElementById('feedbackIndicator-0');
                  if (textarea.value) {
                      setMessages([...messages, {text: textarea.value, time: new Date().toLocaleTimeString(), status: 'Отправлено'}]);
                      textarea.value = '';
                      feedbackIndicator.textContent = 'Отправлено';
                  }
                }}>Отправить</button>
                <button type="button" id="emojiButton-0" onClick={()=>{
                  const textarea = document.getElementById('messageInput-0');
                  textarea.value += '😊';
                  textarea.focus();
                }}>😊</button>
              </form>
              <div id="feedbackIndicator-0"></div>
              <div className="call-buttons">
                <button id="callButton-0" onClick={()=>{
                  const feedbackIndicator = document.getElementById('feedbackIndicator-0');
                  feedbackIndicator.textContent = 'Звонок...';
                }}>Позвонить</button>
                <button id="videoCallButton-0" onClick={ () =>{
                  const feedbackIndicator = document.getElementById('feedbackIndicator-0');
                  feedbackIndicator.textContent = 'Видеозвонок...';
                }}>Видеозвонок</button>
              </div>
            </div>
          </div>

        <div className="a">
          <div className="chat-container">
            <div className="header">
              <h1>Внутренний чат</h1>
              <input type="text" id={"searchInput-1"} placeholder="Поиск по сообщениям..."/>
              <button id="themeToggleButton-1" onClick={()=>{
                document.body.classList.toggle('dark-theme');
                var themeToggleButton = document.getElementById('themeToggleButton-1');
                themeToggleButton.textContent = document.body.classList.contains('dark-theme') ? 'Светлая тема' : 'Темная тема';
              }}>Темная тема</button>
              <button id="newGroupButton-1" onClick={()=>{
                const groupName = prompt('Введите название группы:');
                if (groupName) {
                  setGroupList1([...groupList1, groupName]);
                  document.getElementById('groupList-1').innerHTML += `<div class="group">${groupName}</div>`
                }
              }}>Новая группа</button>
            </div>
            <div className="group-list" id="groupList-1">
              {groupList1.map((groupName) => <div className="group" key={groupName}>{groupName}</div>)}
            </div>
            <div className="message-list" id="messageList-1">
              {messages.map((message, index) => (
                <div className="message user-message" key={index}>
                  <div className="message-content">
                    <span className="message-text">{message.text}</span>
                    <span className="message-time">{message.time}</span>
                    <span className="message-status">{message.status}</span>
                  </div>
                </div>
              ))}
            </div>
            <form id="messageForm-1">
                <textarea id="messageInput-1" placeholder="Введите сообщение..." rows="3" onInput={() =>{
                  const textarea = document.getElementById('messageInput-1');
                  const feedbackIndicator = document.getElementById('feedbackIndicator-1');
                  feedbackIndicator.textContent = textarea.value ? 'Печатает...' : '';
                }}></textarea>
              <input type="file" id="fileInput-1" onChange={()=>{
                const file = document.getElementById('fileInput-1').files[0];
                if (file) {
                  setMessages([...messages, {text: `Файл ${file.name} загружен`, time: new Date().toLocaleTimeString(), status: 'Файл'}]);
                  document.getElementById('fileInput-1').value = '';
                }
              }} hidden/>
              <button type="button" id="fileButton-1" onClick={()=>{ document.getElementById('fileInput-1').click()}}>📎</button>
              <button type="button" onClick={() => {
                const textarea = document.getElementById('messageInput-1');
                const feedbackIndicator = document.getElementById('feedbackIndicator-1');
                if (textarea.value) {
                    setMessages([...messages, {text: textarea.value, time: new Date().toLocaleTimeString(), status: 'Отправлено'}]);
                    textarea.value = '';
                    feedbackIndicator.textContent = 'Отправлено';
                }
              }}>Отправить</button>
              <button type="button" id="emojiButton-1" onClick={()=>{
                const textarea = document.getElementById('messageInput-1');
                textarea.value += '😊';
                textarea.focus();
              }}>😊</button>
            </form>
            <div id="feedbackIndicator-1"></div>
            <div className="call-buttons">
              <button id="callButton-1" onClick={()=>{
                const feedbackIndicator = document.getElementById('feedbackIndicator-1');
                feedbackIndicator.textContent = 'Звонок...';
              }}>Позвонить</button>
              <button id="videoCallButton-1" onClick={ () =>{
                const feedbackIndicator = document.getElementById('feedbackIndicator-1');
                feedbackIndicator.textContent = 'Видеозвонок...';
              }}>Видеозвонок</button>
            </div>
          </div>
        </div>
      </div>
  )
}
function App() {

  return (
    <div className="app">
      <Chat />
    </div>
  );
}

export default App;
