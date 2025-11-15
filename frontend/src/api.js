const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

export async function fetchReviews() {
  const res = await fetch(`${API_URL}/reviews`);
  return res.json();
}

export async function postReview(text) {
  const res = await fetch(`${API_URL}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  return res.json();
}
