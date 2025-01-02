require('dotenv').config({ path: '.env.local' });
const { exec } = require('child_process');

exec('npx prisma db push', { env: process.env }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  if (stderr) console.error(`stderr: ${stderr}`);
});
