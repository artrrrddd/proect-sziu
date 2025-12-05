import { useSelector, useDispatch } from 'react-redux'
import { incrementAnimals } from './store/shelterSlice'
import { useState, useEffect } from 'react'
import './App.css'

// Иконки
const MenuIcon = () => (
  <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
    <path d="M0 2h28M0 10h28M0 18h28" stroke="#e63946" strokeWidth="3" strokeLinecap="round"/>
  </svg>
)

const HeartLogo = () => (
  <svg width="50" height="45" viewBox="0 0 50 45" fill="none">
    <path d="M25 45l-2.5-2.27C9 31.05 0 22.95 0 13C0 5.82 5.82 0 13 0c4.05 0 7.93 1.88 10.5 4.85L25 6.5l1.5-1.65C29.07 1.88 32.95 0 37 0c7.18 0 13 5.82 13 13 0 9.95-9 18.05-22.5 29.73L25 45z" fill="#e63946"/>
    <ellipse cx="15" cy="8" rx="5" ry="4" fill="#e63946"/>
    <ellipse cx="35" cy="8" rx="5" ry="4" fill="#e63946"/>
  </svg>
)

const PawIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <ellipse cx="12" cy="17" rx="5" ry="4"/>
    <circle cx="6" cy="10" r="2.5"/>
    <circle cx="18" cy="10" r="2.5"/>
    <circle cx="9" cy="6" r="2"/>
    <circle cx="15" cy="6" r="2"/>
  </svg>
)

const ArrowUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19V5M5 12l7-7 7 7"/>
  </svg>
)

const ChatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
    <circle cx="8" cy="10" r="1.5"/>
    <circle cx="12" cy="10" r="1.5"/>
    <circle cx="16" cy="10" r="1.5"/>
  </svg>
)

function App() {
  const animalsHelped = useSelector((state) => state.shelter.animalsHelped)
  const dispatch = useDispatch()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <MenuIcon />
          </button>
          
          <div className="logo">
            <HeartLogo />
          </div>
          
          <button className="btn-primary help-btn">
            <PawIcon />
            <span>ПОМОЧЬ СЕЙЧАС</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="mobile-menu animate-in">
          <a href="#about">О нас</a>
          <a href="#help">Как помочь</a>
          <a href="#contacts">Контакты</a>
          <a href="#news">Новости</a>
        </nav>
      )}

      {/* Main Content */}
      <main className="main">
        {/* About Section */}
        <section className="about-section" id="about">
          <h2 className="section-title animate-in">
            О Нас
            <span className="title-underline"></span>
          </h2>
          
          <div className="about-content animate-in animate-delay-1">
            <p>
              «Преданное сердце» — это самый крупный приют не клеточного типа в России. 
              Мы занимаемся лечением, содержанием, адаптацией, стерилизацией и пристройством 
              животных. В приюте находится более 500 кошек, более 100 из них — со сложными диагнозами.
            </p>
            
            <p>
              Мы заботимся о каждом подопечном, обеспечиваем комфорт, безопасность, 
              качественный уход и ветеринарную помощь. Привлекаем внимание общества 
              к проблемам бездомных животных. Прививаем культуру заботы о них.
            </p>
            
            <p>
              Наша работа возможна благодаря поддержке людей из разных уголков страны. 
              Они помогают нам оплачивать аренду, закупать корма и лекарства, а также 
              проводить благотворительные акции и просветительские мероприятия.
            </p>
            
            <p className="call-to-action">
              <strong>Вы тоже можете помочь!</strong><br/>
              Присоединяйтесь к нам и дарите любовь и заботу тем, кто их так ждёт.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section animate-in animate-delay-2">
          <div className="stats-content">
            <span className="stats-label">Более</span>
            <span className="stats-number">{animalsHelped.toLocaleString('ru-RU').replace(',', ' ')}</span>
            <span className="stats-description">животным оказали помощь</span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>predannoeserdce.ru</p>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <ArrowUpIcon />
        </button>
      )}

      {/* Chat Button */}
      <button className="chat-btn">
        <ChatIcon />
      </button>
    </div>
  )
}

export default App
