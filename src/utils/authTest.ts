// src/utils/authTest.ts
// Test utility to verify auth flow - run this in browser console

export async function testAuthFlow() {
  console.log('=== Testing Auth Flow ===\n');
  
  const API_URL = 'https://blog.nosyradigital.com.ng/blog/blog/routes/auth.php';
  const TEST_USERNAME = 'testuser'; // Replace with your username
  const TEST_PASSWORD = 'testpass'; // Replace with your password
  
  // Test 1: OPTIONS Preflight
  console.log('1. Testing CORS Preflight (OPTIONS)...');
  try {
    const preflightResponse = await fetch(`${API_URL}?action=login`, {
      method: 'OPTIONS',
      headers: {
        'Origin': window.location.origin,
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type, Authorization'
      }
    });
    
    console.log('   Status:', preflightResponse.status);
    console.log('   CORS Headers:', {
      'Allow-Origin': preflightResponse.headers.get('Access-Control-Allow-Origin'),
      'Allow-Methods': preflightResponse.headers.get('Access-Control-Allow-Methods'),
      'Allow-Headers': preflightResponse.headers.get('Access-Control-Allow-Headers')
    });
    
    if (preflightResponse.status === 200) {
      console.log('   ✓ Preflight OK\n');
    } else {
      console.error('   ✗ Preflight Failed\n');
      return;
    }
  } catch (error) {
    console.error('   ✗ Preflight Error:', error, '\n');
    return;
  }
  
  // Test 2: Login Request
  console.log('2. Testing Login Request...');
  try {
    const loginResponse = await fetch(`${API_URL}?action=login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': window.location.origin
      },
      credentials: 'include',
      body: JSON.stringify({
        username: TEST_USERNAME,
        password: TEST_PASSWORD
      })
    });
    
    console.log('   Status:', loginResponse.status);
    console.log('   Content-Type:', loginResponse.headers.get('Content-Type'));
    
    const responseText = await loginResponse.text();
    console.log('   Raw Response:', responseText);
    
    try {
      const data = JSON.parse(responseText);
      console.log('   Parsed Data:', data);
      
      if (data.success && data.data?.token) {
        console.log('   ✓ Login Successful!');
        console.log('   Token:', data.data.token.substring(0, 20) + '...');
        console.log('   User:', data.data.user);
        
        // Test 3: Authenticated Request
        console.log('\n3. Testing Authenticated Request...');
        const authResponse = await fetch(`${API_URL}?action=createPost`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.data.token}`,
            'Origin': window.location.origin
          },
          credentials: 'include',
          body: JSON.stringify({
            title: 'Test Post ' + Date.now(),
            content: 'This is a test post created by the auth test utility.'
          })
        });
        
        const authResponseText = await authResponse.text();
        const authData = JSON.parse(authResponseText);
        
        console.log('   Status:', authResponse.status);
        console.log('   Response:', authData);
        
        if (authData.success) {
          console.log('   ✓ Authenticated request successful!');
          console.log('   Created Post ID:', authData.data?.id);
        } else {
          console.error('   ✗ Authenticated request failed:', authData.message);
        }
        
      } else {
        console.error('   ✗ Login Failed:', data.message || 'Unknown error');
      }
    } catch (parseError) {
      console.error('   ✗ JSON Parse Error:', parseError);
      console.error('   Response was not valid JSON');
    }
    
  } catch (error) {
    console.error('   ✗ Login Error:', error);
  }
  
  console.log('\n=== Test Complete ===');
}

// Auto-run if in browser console
if (typeof window !== 'undefined') {
  (window as any).testAuthFlow = testAuthFlow;
  console.log('Auth test loaded. Run testAuthFlow() to start testing.');
}
