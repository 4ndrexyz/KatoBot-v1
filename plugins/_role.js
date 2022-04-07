const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Copper IV': 5,
  'Copper III': 10,
  'Copper II': 15,
  'Copper I': 20,
  'Silver V': 25,
  'Silver IV': 30,
  'Silver III': 35,
  'Silver II': 40,
  'Silver I': 45,
  'Gold V': 50,
  'Gold IV': 55,
  'Gold III': 60,
  'Gold II': 65,
  'Gold I': 70,
  'Platinum V': 75,
  'Platinum IV': 80,
  'Platinum III': 85,
  'Platinum II': 90,
  'Platinum I': 95,
  'Exterminator': 100
}

module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}
