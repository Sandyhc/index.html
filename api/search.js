export default function handler(req, res) {
  const { type, value } = req.query;

  if (!type || !value) {
    return res.status(400).json({
      success: false,
      error: "Missing type or value"
    });
  }

  res.status(200).json({
    success: true,
    type,
    owner: "Sandeep",
    result: [
      {
        value: value,
        name: "Demo User",
        address: "India"
      }
    ]
  });
}
