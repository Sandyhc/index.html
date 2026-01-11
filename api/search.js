// -------- DEMO DATA GENERATOR --------
function generateDemoRecords(count = 1000) {
  const records = [];

  for (let i = 1; i <= count; i++) {
    const mobile = "9" + String(100000000 + i).slice(0, 9);
    const altMobile = "8" + String(200000000 + i).slice(0, 9);
    const idNumber = String(100000000000 + i);

    records.push({
      id: i,
      mobile: mobile,
      name: `DEMO USER ${i}`,
      father_name: `DEMO FATHER ${i}`,
      address: `Demo Address Line ${i}, Demo Area, Demo City, Demo State, 000000`,
      alt_mobile: altMobile,
      circle: "DEMO NETWORK",
      id_number: idNumber,
      email: `demo${i}@example.com`
    });
  }

  return records;
}

// generate once
const DEMO_DB = generateDemoRecords(1000);

// -------- API HANDLER --------
export default function handler(req, res) {
  const { type, value } = req.query;

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

    const result = DEMO_DB.filter(r => r.mobile === value);

    return res.status(200).json(
      result.length ? result : []
    );
  }

  // -------- ID / AADHAAR SEARCH --------
  if (type === "aadhaar") {
    if (!/^\d{12}$/.test(value)) {
      return res.status(400).json({
        success: false,
        error: "Invalid ID number"
      });
    }

    const result = DEMO_DB.filter(r => r.id_number === value);

    return res.status(200).json(
      result.length ? result : []
    );
  }

  return res.status(400).json({
    success: false,
    error: "Invalid search type"
  });
}
