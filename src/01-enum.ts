enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  username: string;
  role: ROLES;
}

const cinloUser: User = {
  username: 'cinlo02',
  role: ROLES.SELLER
}
