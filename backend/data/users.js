import bcrypt from "bcryptjs";

const users = [
  {
    name: "pawan",
    email: "pawan@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "yogi",
    email: "yogi@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "kumar",
    email: "kumar@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
