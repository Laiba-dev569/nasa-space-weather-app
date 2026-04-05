// Use Node's built-in http to fetch the page
import http from 'http';

http.get('http://localhost:5173/quiz', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log("HTML response length:", data.length);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
