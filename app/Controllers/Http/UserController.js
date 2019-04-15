'use strict'

const User = use('App/Models/User')

class UserController {
  async index ({ request }) {
    const users = await User.all()

    return users
  }
  async show ({ request }) {
    const { id } = request.params
    const user = await User.find(id)

    return user
  }
  async store ({ request }) {
    const data = request.only(['name', 'email', 'password'])

    const user = await User.create(data)

    return user
  }
  async destroy ({ request }) {
    const { id } = request.params
    const user = await User.find(id)

    await user.delete(user)
  }
  async update ({ request }) {
    const { id } = request.params
    const user = await User.find(id)

    await user.save(user)
  }
}

module.exports = UserController
