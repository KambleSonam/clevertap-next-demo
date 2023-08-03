import { useState, useEffect } from 'react'
import CleverTap from 'clevertap-web-sdk/clevertap'

const profileApiUrl = '/profile';
export default function Home() {
  const [clevertapModule, setClevertapModule] = useState<CleverTap | null>(null)

  useEffect(() => {
    clevertapInit()
  }, []);

  const clevertapInit = async () => {
    let clevertap = clevertapModule
    if (!clevertap) {
      clevertap = await initializeClevertap()
    }

    if (clevertap) {
      clevertap.event.push('Amee')            // Popup Campaign
      clevertap.event.push('webpopup test')   // Banner Campaign
      clevertap.event.push('InternalTest2')   // Inbox Campaign
    }
  }

  const profileData = {
    "d": [
      {
        "identity": "345543",
        "type": "profile",
        "profileData": {
            "Name": "John Doe",
            "Email": "john03aug@abc.com"
        }
      }
    ]
  }

  fetch('/clevertap/upload', {
    method: 'POST',
    headers: {
      'X-CleverTap-Account-Id': 'W9R-486-4W5Z',
      'X-CleverTap-Passcode': '96921fadbf3445a7b416039d0e9d046d',
      'Content-Type': 'application/json',
      // Add any other required headers here
    },
    body: JSON.stringify(profileData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Handle the API response data here
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the API call
      console.error('Error:', error);
    });

  return (
    <div>
    {/* Navigation Bar */}
    <nav style={{ backgroundColor: '#333', padding: '10px', color: '#fff' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', maxWidth: '300px' }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li id='inbox'>Inbox</li>
      </ul>
    </nav>

    {/* Hero Section */}
    <section style={{ backgroundColor: '#f2f2f2', padding: '140px 0', textAlign: 'center' }}>
      <div>
        <h1 style={{ fontSize: '36px' }}>Welcome to Our Website</h1>
        <p style={{ fontSize: '20px', color: '#666' }}>We provide amazing services for you.</p>
        <button style={{ padding: '10px 20px', fontSize: '16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Get Started
        </button>
      </div>
    </section>

    {/* Clevertap Banner / carousel */}
    <div id='heroDiv'></div>
    
    {/* Call-to-action Section */}
    <section style={{ backgroundColor: '#007bff', padding: '60px 0', textAlign: 'center', color: '#fff' }}>
      <h2 style={{ fontSize: '30px' }}>Sign Up Now</h2>
      <p style={{ fontSize: '18px' }}>Join us and experience the best services.</p>
      <button style={{ padding: '10px 20px', fontSize: '16px', background: '#fff', color: '#007bff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Sign Up
      </button>
    </section>
  </div>
  )
}

async function initializeClevertap(): Promise<CleverTap> {
  const clevertapModule = await import('clevertap-web-sdk')

  clevertapModule.default.init("ZWW-WWW-WWRZ")
  clevertapModule.default.privacy.push({ optOut: false })
  clevertapModule.default.privacy.push({ useIP: false })
  clevertapModule.default.setLogLevel(3)

  return clevertapModule.default
}
