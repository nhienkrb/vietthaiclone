export default function Loading() {
  return (
    <div>
      <p style={{ margin: 0 }}>Đang tải…</p>
      <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
        <div style={{ height: 14, background: "#eee", borderRadius: 6 }} />
        <div
          style={{
            height: 14,
            background: "#eee",
            borderRadius: 6,
            width: "70%",
          }}
        />
        <div style={{ height: 120, background: "#eee", borderRadius: 12 }} />
      </div>
    </div>
  );
}
