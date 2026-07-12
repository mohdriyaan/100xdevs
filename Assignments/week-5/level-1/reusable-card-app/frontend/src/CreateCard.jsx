import { useEffect, useMemo, useState } from 'react'

const initialFormState = {
  name: '',
  description: '',
  interests: '',
  linkedin: '',
  twitter: ''
}

export function CardForm({ initialCard, onSubmit, onCancel, isAdmin }) {
  const [formState, setFormState] = useState(initialFormState)

  const resetForm = () => setFormState(initialFormState)

  const initialState = useMemo(() => {
    if (!initialCard) {
      return initialFormState
    }

    return {
      name: initialCard.name || '',
      description: initialCard.description || '',
      interests: Array.isArray(initialCard.interests) ? initialCard.interests.join(', ') : '',
      linkedin: initialCard.socials?.linkedin || '',
      twitter: initialCard.socials?.twitter || ''
    }
  }, [initialCard])

  useEffect(() => {
    setFormState(initialState)
  }, [initialState])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      name: formState.name,
      description: formState.description,
      interests: formState.interests
        .split(',')
        .map((value) => value.trim())
        .filter(Boolean),
      socials: {
        linkedin: formState.linkedin,
        twitter: formState.twitter
      }
    })
    if (!initialCard) {
      resetForm()
    }
  }

  const submitLabel = initialCard ? 'Update Card' : 'Create Card'

  return (
    <form className="card-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" value={formState.name} onChange={handleChange} required />
      </label>

      <label>
        Description
        <textarea name="description" value={formState.description} onChange={handleChange} required />
      </label>

      <label>
        Interests (comma separated)
        <input name="interests" value={formState.interests} onChange={handleChange} />
      </label>

      <label>
        LinkedIn URL
        <input name="linkedin" value={formState.linkedin} onChange={handleChange} />
      </label>

      <label>
        Twitter URL
        <input name="twitter" value={formState.twitter} onChange={handleChange} />
      </label>

      <div className="card-form-actions">
        <button type="submit" disabled={!isAdmin}>
          {submitLabel}
        </button>
        {initialCard && (
          <button type="button" className="secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
      {!isAdmin && <p className="help-text">Sign in as admin to create or edit cards.</p>}
    </form>
  )
}
