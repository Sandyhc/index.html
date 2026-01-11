export default function handler(req, res) {
  const { type, value } = req.query;

  // -------- BASIC VALIDATION --------
  if (!type || !value) {
    return res.status(400).json({
      success: false,
      error: "Missing type or value"
    });
  }

  // -------- MOBILE SEARCH --------
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
          mobile: value,
          name: "Demo User",
          fname: "Demo Father",
          alt: "8888888888",
          email: "demo@osint.com",
          address: "India",
          circle: "VIP-NETWORK",
          id: "ID123456"
        }
      ]
    });
  }

  // -------- AADHAAR SEARCH --------
  if (type === "aadhaar") {
    if (!/^\d{12}$/.test(value)) {
      return res.status(400).json({
        success: false,
        error: "Invalid Aadhaar number"
      });
    }

    return res.status(200).json({
      success: true,
      type: "aadhaar",
      owner: "Sandeep",
      result: {
        data: [
          {
            id: value,
            mobile: "9999999999",
            name: "Demo User",
            fname: "Demo Father",
            email: "demo@osint.com",
            alt: "8888888888",
            address: "India",
            circle: "VIP-NETWORK"
          }
        ]
      }
    });
  }

  // -------- INVALID TYPE --------
  return res.status(400).json({
    success: false,
    error: "Invalid search type"
  });
}
