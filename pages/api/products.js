import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db("birdeye")

  switch (req.method) {
    case "GET":
      const products = await db.collection("products").find({}).toArray()
      res.json(products)
      break
    default:
      res.status(405).end() //Method Not Allowed
  }
}