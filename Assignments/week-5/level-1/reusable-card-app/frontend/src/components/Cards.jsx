import './Card.css'

export function Cards({ cards = [], onEdit, onDelete, isAdmin }) {
  if (!Array.isArray(cards) || cards.length === 0) {
    return <p>No cards available yet.</p>
  }

  return (
    <div className="cards-grid">
      {cards.map((card) => {
        const socials = card.socials || {}
        const cardId = card._id ?? card.id

        return (
          <div key={cardId} className="card">
            <h1 className="card-name">{card.name}</h1>
            <p className="card-description">{card.description}</p>

            <h2 className="card-interests-heading">Interests</h2>
            <div className="card-interests-list">
              {Array.isArray(card.interests) && card.interests.length > 0 ? (
                card.interests.map((interest) => (
                  <p key={interest} className="card-interest">
                    {interest}
                  </p>
                ))
              ) : (
                <p className="card-interest">No interests listed</p>
              )}
            </div>

            <div className="card-links">
              {socials.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="card-link">
                  <svg className="card-link-icon" viewBox="0 0 24 24">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                  LinkedIn
                </a>
              )}
              {socials.twitter && (
                <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="card-link">
                  <svg className="card-link-icon" viewBox="0 0 24 24">
                    <path d="M22 5.9c-.66.3-1.36.5-2.1.6a3.6 3.6 0 0 0 1.6-2 7.2 7.2 0 0 1-2.3.87 3.6 3.6 0 0 0-6.2 3.3A10.2 10.2 0 0 1 3.15 4.9a3.6 3.6 0 0 0 1.12 4.8c-.6-.02-1.15-.18-1.64-.46v.05a3.6 3.6 0 0 0 2.88 3.53c-.53.14-1.1.17-1.66.06a3.6 3.6 0 0 0 3.36 2.5A7.24 7.24 0 0 1 2 16.9a10.2 10.2 0 0 0 5.53 1.62c6.64 0 10.27-5.5 10.27-10.27l-.01-.47A7.3 7.3 0 0 0 22 5.9z" />
                  </svg>
                  Twitter
                </a>
              )}
            </div>

            {isAdmin && (
              <div className="card-actions">
                <button type="button" className="secondary" onClick={() => onEdit?.(card)}>
                  Edit
                </button>
                <button type="button" className="danger" onClick={() => onDelete?.(cardId)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
