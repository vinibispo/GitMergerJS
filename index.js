const {spawn, exec} = require('child_process')
const gc = exec('git', ['checkout', 'master'])
const gm = spawn('git', ['merge', process.argv[2]])
gm.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
})

gm.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`)
})

gm.on('close', (code) => {
  console.log(`child process exited with code ${code}`)
})