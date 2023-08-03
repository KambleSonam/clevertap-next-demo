import { NextApiRequest, NextApiResponse } from 'next';

// This function handles the incoming POST request to /api/profile
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Assuming you want to process the data and save it to a database or perform other actions
      const profileData = req.body;
      // Implement your logic to handle the profileData as needed, e.g., save to database, etc.
      
      // Respond with a success message or any other response data if required
      res.status(200).json({ message: 'Profile data successfully received & processed.' });
    } catch (error) {
      console.error('Error while processing profile data:', error);
      res.status(500).json({ error: 'An error occurred while processing the profile data.' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
