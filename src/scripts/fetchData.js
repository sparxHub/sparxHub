import { client as sanityClient } from '../../../sanity/lib/client'
import fs from 'fs'
import path from 'path'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const hero = await sanityClient.fetch('*[_type == "hero"][0]')
    const about = await sanityClient.fetch('*[_type == "about"][0]')
    const now = await sanityClient.fetch('*[_type == "now"][0]')

    const data = { hero, about, now }

    // Write data to static JSON file
    const outputPath = path.resolve('./public/staticData.json')
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2))

    res.status(200).json({ success: true, message: 'Static data fetched successfully.' })
  } catch (error) {
    console.error('Error fetching data from Sanity:', error)
    res.status(500).json({ success: false, error: error.message })
  }
}
