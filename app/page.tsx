export default function Page() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial", background: "#f5f7fa" }}>
      <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", padding: "20px", borderRadius: "10px" }}>
        
        <h2>Customer Account Portal</h2>
        <p style={{ color: "#666" }}>Connected to Sage 200 · Live preview</p>

        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <Metric label="Outstanding balance" value="£2,464" />
          <Metric label="Credit limit" value="£4,000" />
          <Metric label="Status" value="Active" />
        </div>

        <div style={{ marginTop: "30px" }}>
          <button style={{ padding: "10px 20px", background: "#185FA5", color: "#fff", border: "none", borderRadius: "5px" }}>
            Pay outstanding balance (£2,464)
          </button>
        </div>

      </div>
    </div>
  )
}

function Metric({ label, value }: any) {
  return (
    <div style={{ background: "#f3f3f3", padding: "10px", borderRadius: "6px" }}>
      <p style={{ fontSize: "12px", color: "#777" }}>{label}</p>
      <p style={{ fontSize: "18px" }}>{value}</p>
    </div>
  )
}
