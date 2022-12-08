import { users } from "../models";
import { sequelize } from "../services/db";

export const User = sequelize.define("users", users, {
  timestamps: false,
});

User.sync();
