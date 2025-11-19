import React, { useEffect, useState } from "react";

const LoadingPage: React.FC = () => {
  const [progress, setProgress] = useState(0);

  // Animate loading bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // speed of loading
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      {/* Profile photo */}
      <div style={styles.photoContainer}>
        <img
          src="src\attached_assets\generated_images\loadingImg.jpg"
          alt="Kawshani"
          style={styles.photo}
        />
      </div>

      {/* Portfolio title */}
      <h1 style={styles.title}>Oshadi Kawshani</h1>

      {/* Loading bar */}
      <div style={styles.loadingBarBackground}>
        <div
          style={{
            ...styles.loadingBarFill,
            width: `${progress}%`,
          }}
        />
      </div>

      <p style={styles.text}>Loading... {progress}%</p>
    </div>
  );
};

export default LoadingPage;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#0f172a",
    color: "#fff",
    fontFamily: "monospace",
  },
  photoContainer: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "4px solid #2563eb",
    marginBottom: "20px",
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "40px",
    background: "linear-gradient(90deg, #2563eb, #9333ea, #ec4899)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    textAlign: "center",
  },
  loadingBarBackground: {
    width: "300px",
    height: "10px",
    backgroundColor: "#1e293b",
    borderRadius: "5px",
    overflow: "hidden",
    marginBottom: "15px",
  },
  loadingBarFill: {
    height: "100%",
    background: "linear-gradient(90deg, #2563eb, #9333ea, #ec4899)",
    borderRadius: "5px",
    transition: "width 0.1s linear",
  },
  text: {
    fontSize: "16px",
    marginTop: "10px",
  },
};
