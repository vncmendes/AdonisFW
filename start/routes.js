'use strict'

const Route = use('Route')
// User
// Route.get('users', 'UserController.index')
Route.post('users', 'UserController.store')
// Route.get('users/:id', 'UserController.show')
// Route.delete('users/:id', 'UserController.destroy')
// Route.put('users/:id', 'UserController.update')
// Sessions
Route.post('sessions', 'SessionController.store')
// Fg pw
Route.post('forgotpw', 'ForgotPasswordController.store')
Route.put('forgotpw', 'ForgotPasswordController.update')
