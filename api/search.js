export default function handler(req, res) {
  const { type, value } = req.query;

  if (!type || !value) {
    return res.status(400).json({
      success: false,
      error: "type aur value required hai"
    });
  }

  res.status(200).json({
    success: true,
    type,
    value,
    message: "API successfully running on Vercel"
  });
}
