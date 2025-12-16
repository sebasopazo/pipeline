"use client";

/**
 * Siempre que tu componente use interactividad, estado o efectos,
 * pon "use client" al inicio.
 *
 * Los componentes que solo renderizan HTML estático no necesitan
 * "use client" y pueden quedarse como Server Components (mejor rendimiento).
 */

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const fetchMessage = () => {
    fetch("http://localhost:8000/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Frontend React + Next.js</h1>
      <button
        onClick={fetchMessage}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      >
        Obtener mensaje del backend
      </button>
      <p>Mensaje del backend: {message}</p>
    </div>
  );
}
