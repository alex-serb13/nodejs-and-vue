import { config } from "dotenv";
import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import User from "./models/user";

config();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.TOKEN_SECRET,
};

passport.use(
  new JwtStrategy(options, (payload, done) => {
    User.findOne({ _id: payload.id }, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);
