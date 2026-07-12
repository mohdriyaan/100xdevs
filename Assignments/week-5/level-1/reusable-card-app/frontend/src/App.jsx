import { useEffect, useState } from 'react'
import './App.css'
import { Cards } from './components/Cards.jsx'
import { CardForm } from './CreateCard.jsx'

const API_BASE = 'http://localhost:3000/admin'
const TOKEN_KEY = 'card_admin_token'

function App() {
  const [cards, setCards] = useState([])
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY) || '')
  const [authMode, setAuthMode] = useState('signin')
  const [authDetails, setAuthDetails] = useState({ username: '', password: '' })
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('info')
  const [editingCard, setEditingCard] = useState(null)
  const [loading, setLoading] = useState(false)

  const isAdmin = Boolean(token)

  useEffect(() => {
    fetchCards()
  }, [])

  const fetchJson = async (url, options) => {
    const res = await fetch(url, options)
    const json = await res.json().catch(() => ({}))
    return { res, json }
  }

  const authHeaders = () => ({
    ...(isAdmin ? { Authorization: `Bearer ${token}` } : {})
  })

  const showMessage = (text, type = 'info') => {
    setMessage(text)
    setMessageType(type)
  }

  const fetchCards = async () => {
    setLoading(true)

    try {
      const { json } = await fetchJson(`${API_BASE}/cards`)
      setCards(json.cards || [])
    } catch (err) {
      console.error(err)
      showMessage('Unable to load cards', 'error')
    } finally {
      setLoading(false)
    }
  }

  const handleAuthSubmit = async (event) => {
    event.preventDefault()
    showMessage('', 'info')

    const { res, json } = await fetchJson(`${API_BASE}/${authMode}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(authDetails)
    })

    if (!res.ok) {
      showMessage(json.message || 'Authentication failed', 'error')
      return
    }

    if (authMode === 'signin') {
      setToken(json.token)
      localStorage.setItem(TOKEN_KEY, json.token)
      setAuthDetails({ username: '', password: '' })
      showMessage('Signed in successfully', 'success')
      fetchCards()
      return
    }

    setAuthMode('signin')
    setAuthDetails({ username: '', password: '' })
    showMessage('Account created. Sign in to continue.', 'success')
  }

  const handleLogout = () => {
    setToken('')
    localStorage.removeItem(TOKEN_KEY)
    setEditingCard(null)
    showMessage('Logged out', 'info')
  }

  const handleCardSubmit = async (cardPayload) => {
    if (!isAdmin) {
      showMessage('Please sign in as an admin to perform this action.', 'error')
      return
    }

    const url = editingCard ? `${API_BASE}/card/${editingCard._id}` : `${API_BASE}/card`
    const method = editingCard ? 'PUT' : 'POST'
    const { res, json } = await fetchJson(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...authHeaders()
      },
      body: JSON.stringify(cardPayload)
    })

    if (!res.ok) {
      showMessage(json.message || 'Card save failed', 'error')
      return
    }

    setEditingCard(null)
    showMessage(json.message || 'Card saved successfully', 'success')
    fetchCards()
  }

  const handleDelete = async (cardId) => {
    if (!isAdmin) {
      showMessage('Please sign in as an admin to delete cards.', 'error')
      return
    }

    const { res, json } = await fetchJson(`${API_BASE}/card/${cardId}`, {
      method: 'DELETE',
      headers: authHeaders()
    })

    if (!res.ok) {
      showMessage(json.message || 'Delete failed', 'error')
      return
    }

    showMessage(json.message || 'Card deleted successfully', 'success')
    fetchCards()
  }

  const handleEdit = (card) => {
    setEditingCard(card)
    showMessage('Editing card. Submit the form to update.', 'info')
  }

  const authButtonText = authMode === 'signin' ? 'Sign In' : 'Sign Up'
  const toggleAuthText = authMode === 'signin' ? 'Create new admin account' : 'Already have an account? Sign in'

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <section className="panel auth-panel">
          <h2>Admin {authMode === 'signin' ? 'Sign In' : 'Sign Up'}</h2>
          <form onSubmit={handleAuthSubmit} className="auth-form">
            <label>
              Username
              <input
                value={authDetails.username}
                onChange={(e) => setAuthDetails({ ...authDetails, username: e.target.value })}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={authDetails.password}
                onChange={(e) => setAuthDetails({ ...authDetails, password: e.target.value })}
                required
              />
            </label>
            <button type="submit">{authButtonText}</button>
          </form>
          <button className="link-button" onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}>
            {toggleAuthText}
          </button>
          {isAdmin && (
            <button className="link-button secondary" onClick={handleLogout}>
              Log out
            </button>
          )}
          {message && <p className={`message ${messageType}`}>{message}</p>}
        </section>

        <section className="panel card-panel">
          <h2>{editingCard ? 'Edit Card' : 'Create Card'}</h2>
          <CardForm
            initialCard={editingCard}
            onSubmit={handleCardSubmit}
            onCancel={() => setEditingCard(null)}
            isAdmin={isAdmin}
          />
        </section>
      </div>

      <section className="panel cards-list-panel">
        <h2>All Card Components</h2>
        {loading ? (
          <p>Loading cards…</p>
        ) : (
          <Cards cards={cards} onEdit={handleEdit} onDelete={handleDelete} isAdmin={isAdmin} />
        )}
      </section>
    </div>
  )
}

export default App
