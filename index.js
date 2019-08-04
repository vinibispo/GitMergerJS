const {spawn} = require('child_process')
const gc = spawn('git', ['checkout', 'master'])
const gm = spawn('git', ['merge', process.argv[2]])
gc.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
  gm.stdout.on('data', (data) => {
  	console.log(`stdout: ${data}`)
  
	})
})

gc.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`)
  gm.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`)
  
})
})

gc.on('close', (code) => {
  console.log(`child process exited with code ${code}`)
  gc.on('close', (code) => {
  console.log(`child process exited with code: ${code}`)
  
})
})