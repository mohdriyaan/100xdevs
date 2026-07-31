import { useState } from "react"

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  const prevHandler = () => {
    setCurrentIndex((currentIndex + testimonials.length-1) % testimonials.length)
  }

  const nextHandler = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length)
  }
  
  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex]["quote"]}
      </div>
      <div className="testimonials-author">
        - {testimonials[currentIndex]["author"]}
      </div>
      <div className="testimonials-nav">
        <button onClick={prevHandler}>Prev</button>
        <button onClick={nextHandler}>Next</button>
      </div>
    </div>
  )
}