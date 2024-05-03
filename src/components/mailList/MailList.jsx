import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Получайте свежую информацию и обновновления</h1>
      <span className="mailDesc">Оставьте свою почту</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Ваша почта" />
        <button>Отправить</button>
      </div>
    </div>
  )
}

export default MailList