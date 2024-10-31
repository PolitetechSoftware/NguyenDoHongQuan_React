export const weatherStyles: {
  [key: string]: { day: React.CSSProperties; night: React.CSSProperties };
} = {
  Thunderstorm: {
    day: { background: "#6a82b8", color: "#333" },
    night: { background: "#1f2647", color: "#fff" },
  },
  Drizzle: {
    day: { background: "#67b7dc", color: "#333" },
    night: { background: "#2d4e6b", color: "#fff" },
  },
  Rain: {
    day: { background: "#507da7", color: "#fff" },
    night: { background: "#2a3947", color: "#fff" },
  },
  Snow: {
    day: { background: "#a4d0f0", color: "#333" },
    night: { background: "#5e7b91", color: "#000" },
  },
  Atmosphere: {
    day: { background: "#a2b6c9", color: "#333" },
    night: { background: "#4d5f6e", color: "#fff" },
  },
  Clear: {
    day: { background: "#fbc74d", color: "#333" },
    night: { background: "#6e7a8b", color: "#fff" },
  },
  Clouds: {
    day: { background: "#a6b1c1", color: "#333" },
    night: { background: "#515a64", color: "#fff" },
  },
};
