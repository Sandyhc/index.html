export default function handler(req, res) {
  const { type, value } = req.query;

  if (!type || !value) {
    return res.status(400).json({
      success: false,
      error: "type aur value required hai"
    });
  }

  if (type === "number") {
    return res.status(200).json({
      success: true,
      type,
      value,
      message: "Mobile number API working"
    });
  }

  if (type === "aadhaar") {
    return res.status(200).json({
      success: true,
      type,
      value,
      message: "Aadhaar API working (demo)"
    });
  }

  return res.status(400).json({
    success: false,
    error: "Invalid type"
  });
}
