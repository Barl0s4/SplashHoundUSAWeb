"use client";

import { useCallback, useEffect, useState } from "react";
import { business, reviews } from "../data/reviews";

function Stars({ rating, size }: { rating: number; size: "sm" | "lg" }) {
  return (
    <div className={`stars stars-${size}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= Math.round(rating) ? "star star-filled" : "star star-empty"}>
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof reviews[number] }) {
  const date = new Date(review.time_created).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="review-card">
      <div className="review-left">
        {review.user.image_url ? (
          <img src={review.user.image_url} alt={review.user.name} className="review-avatar" />
        ) : (
          <div className="review-avatar review-avatar-placeholder">
            {review.user.name.charAt(0)}
          </div>
        )}
        <Stars rating={review.rating} size="sm" />
        <span className="review-name">{review.user.name}</span>
      </div>

      <div className="review-right">
        <p className="review-text">{review.text}</p>
        <div className="review-footer">
          <a href={review.url} target="_blank" rel="noopener noreferrer" className="review-link">
            Read full review →
          </a>
          <span className="review-date">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((i: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(i);
      setFading(false);
    }, 400);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      goTo((current + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(id);
  }, [current, goTo]);

  return (
    <>
      <div className="wave-divider">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,35 C360,70 720,0 1080,35 C1260,52 1380,20 1440,35 L1440,70 L0,70 Z"
            fill="#1a4731"
          />
        </svg>
      </div>

      <section className="reviews-section">
        <h2 className="reviews-title">What Yelpers Say About Us</h2>

        <a href={business.url} target="_blank" rel="noopener noreferrer" className="reviews-summary">
          <span className="reviews-biz-name">{business.name}</span>
          <Stars rating={business.rating} size="lg" />
          <span className="reviews-meta">
            {business.rating} stars &middot; {business.review_count} reviews on Yelp
          </span>
        </a>

        <div className={`review-carousel ${fading ? "carousel-fading" : ""}`}>
          <ReviewCard review={reviews[current]} />
        </div>

        <div className="carousel-dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`dot ${i === current ? "dot-active" : ""}`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
