export interface Class {
  name: string;
  roles: Array<Role>;
}

interface Role {
  name: string;
}

export const CLASSES = [{
  name: 'Warrior',
  roles: [{
    name: "Tank"
  }, {
    name: "Damage"
  }]
}, {
  name: 'Paladin',
  roles: [{
    name: "Tank"
  }, {
    name: "Damage"
  }, { 
    name: "Healer"
  }]
}, {
  name: 'Hunter',
  roles: [{
    name: "Damage"
  }]
}, {
  name: 'Rouge',
  roles: [{
    name: "Damage"
  }]
}, {
  name: 'Priest',
  roles: [{
    name: "Healer"
  }, {
    name: "Damage"
  }]
}, {
  name: 'Shaman',
  roles: [{
    name: "Healer"
  }, {
    name: "Damage"
  }]
}, {
  name: 'Mage',
  roles: [{
    name: "Damage"
  }]
}, {
  name: 'Warlock',
  roles: [{
    name: "Damage"
  }]
}, {
  name: 'Monk',
  roles: [{
    name: "Tank"
  }, {
    name: "Damage"
  }, {
    name: "Healer"
  }]
}, {
  name: 'Druid',
  roles: [{
    name: "Tank"
  }, {
    name: "Damage"
  }, {
    name: "Healer"
  }]
}, {
  name: 'Demon Hunter',
  roles: [{
    name: "Tank"
  }, {
    name: "Damage"
  }]
}, {
  name: 'Death Knight',
  roles: [{
    name: "Tank"
  }, {
    name: "Damage"
  }]
}]