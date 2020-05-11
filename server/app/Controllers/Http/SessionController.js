'use strict'

const User = use('App/Models/User');

class SessionController {
  async login ({ auth, request, response, session }) {
    const email = request.input("email");
    const password = request.input("password")

    try {
      await auth.attempt(email, password)

      let user = await User.findBy("email", email);
      let accessToken = await auth.generate(user);

      return response.json({
        "user": user,
        "access_token": accessToken,
      });
    } catch (e) {
      return response
        .status(401)
        .json({
          "message": "unauthorized"
        });
    }
  }

  async logout ({ auth, response }) {
    await auth.logout()

    return response.json({"message": "ok"});
  }
}

module.exports = SessionController
