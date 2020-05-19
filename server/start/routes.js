'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.group(() => {
  Route.post('login', 'SessionController.login')
  Route.post('login/resetpassword', 'UserController.resetpassword')

  Route.post('registerUser', 'UserController.register');
  Route.post('registerActivity', 'ActivityController.register');
  Route.get('findActivity', 'ActivityController.search');

})
  .prefix("/api/");

  
// Those routes should be only accessible
// when you are logged in
Route.group(() => {
  Route.post('logout', 'SessionController.logout')
})
  .middleware(['auth'])
  .prefix("/api/");

