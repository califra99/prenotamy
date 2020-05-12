'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use("App/Models/User");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserSeeder {
  async run () {
    const superAdminData = {
      name: "Super",
      surname: "User",
      email: "admin@prenotamy.local",
      phone: "3458227412",
      password: "password",
      username: "superadmin",
    };

    const superAdmin = await User.create(superAdminData);

    console.log(superAdmin);
  }
}

module.exports = UserSeeder
