const Hapi = require('@hapi/hapi')
const Path = require('path')
const routes = require('./routes')
const users = require('./data/user')

const validate = async (request, username, password) => {
  const user = users[username]

  if (!user) {
    return { credentials: null, isValid: false }
  }
  const isValid = (password === user.password)
  const credentials = { id: user.id, name: user.name }

  return { isValid, credentials }
}

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*']
      },
      files: {
        relativeTo: Path.join(__dirname, '../view')
      }
    }
  })

  await server.register([
    {
      plugin: require('@hapi/inert')
    },
    {
      plugin: require('@hapi/basic')
    }
  ])

  server.auth.strategy('login', 'basic', { validate })

  server.route(routes)

  await server.start()
  console.log(`Server berjalan pada ${server.info.uri}`)
}

init()
