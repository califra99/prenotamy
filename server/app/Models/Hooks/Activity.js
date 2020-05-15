'use strict'

const Hash = use('Hash')

const UserHook = module.exports = {}

/**
 * Hash using password as a hook.
 *
 * @method
 *
 * @param  {Object} activityInstance
 *
 * @return {void}
 */
UserHook.hashPassword = async (activityInstance) => {
  if (activityInstance.password) {
    activityInstance.password = await Hash.make(activityInstance.password)
  }
}