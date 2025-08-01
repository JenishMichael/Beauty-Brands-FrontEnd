export function FetchingFailedScreen() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff8f8",
        padding: "2rem",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          color: "#cc0000",
          marginBottom: "1rem",
        }}
      >
        Unable to load form data
      </div>
      <p
        style={{
          color: "#555",
          fontSize: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        Try again after a few moments.
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: "10px 24px",
          fontSize: "1rem",
          color: "#fff",
          backgroundColor: "#4b0082",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(75, 0, 130, 0.3)",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#37006b")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4b0082")}
      >
        Retry
      </button>
    </div>
  );
}
