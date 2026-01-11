// ---------- FAST DEMO DATABASE ----------
const DEMO_DB = [];
const TOTAL = 1000;

for (let i = 1; i <= TOTAL; i++) {
  DEMO_DB.push({
    mobile: "9" + String(100000000 + i).slice(0, 9),
    name: `DEMO USER ${i}`,
    fname: `DEMO FATHER ${i}`,
    alt: "8888888888",
    email: `demo${i}@example.com`,
    address: `Demo Address ${i}, Demo City, India`,
    circle: "DEMO NETWORK",
    id: `ID${1000 + i}`
  });
}

// ---------- RANDOM PICK ----------
function randomRecord() {
  const index = Math.floor(Math.random() * DEMO_DB.length);
  return DEMO_DB[index];
}

// ---------- API HANDLER ----------
export default function handler(req, res) {
  const { type, value } = req.query;

  if (!type || !value) {
    return res.status(400).json({
      success: false,
      error: "Missing type or value"
    });
  }

  // ---------- MOBILE SEARCH ----------
  if (type === "number") {
    if (!/^\d{10}$/.test(value)) {
      return res.status(400).json({
        success: false,
        error: "Invalid mobile number"
      });
    }

    return res.status(200).json({
      success: true,
      type: "number",
      owner: "Sandeep",
      result: [
        {
          ...randomRecord(),
          mobile: value
        }
      ]
    });
  }

  // ---------- AADHAAR / ID SEARCH ----------
  if (type === "aadhaar") {
    if (!/^\d{12}$/.test(value)) {
      return res.status(400).json({
        success: false,
        error: "Invalid Aadhaar/ID number"
      });
    }

    return res.status(200).json({
      success: true,
      type: "aadhaar",
      owner: "Sandeep",
      result: {
        data: [
          {
            ...randomRecord(),
            id: value
          }
        ]
      }
    });
  }

  return res.status(400).json({
    success: false,
    error: "Invalid search type"
  });
}
