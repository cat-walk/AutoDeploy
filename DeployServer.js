const http = require('http')
const shell = require('shelljs')

const PORT = 9988
// const PATH = '../html'

const deployServer = http.createServer((request, response) => {
  if (request.url.search(/deploy\/?$/i) > 0) {
    const commands = [
      // `cd ${PATH}`,
      'git pull',
      'rm -rf node_modules',
      'sudo yarn install',
      'sudo yarn build'
    ].join(' && ')

    shell.exec(commands, (err, out, code) => {
      if (err instanceof Error) {
        response.writeHead(500)
        response.end('Server Internal Error.')
        throw err
      }
      // process.stderr.write(err)
      // process.stdout.write(out)
      response.writeHead(200)
      response.end('Deploy Done.')
    })
  } else {
    response.writeHead(404)
    response.end('Not Found.')
  }
})

deployServer.listen(PORT, () => {
  console.log('Listening to port:9988/deploy')
})
