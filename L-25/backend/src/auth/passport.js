import passport from "passport";
import bcrypt from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStraegy } from "passport-google-oauth20";
import User from "../models/Users.models.js";

// Local Strategy

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) return done(null, false, { message: "invalid email" });
        if (!user.password) return done(null, false, { message: "no password set" });
        const match = await bcrypt.compare(password, user.password);
        if(!match) return done(null , false , {message:"invalid password"})
        return done(null , user)
      } catch (err) {
        return done(err)
      }
    }
  )
);


// Goole Strategy

passport.use(new GoogleStraegy({
  clientID:process.env.GOOGLE_CLIENT_ID,
  clientSecret:process.env.GOOGLE_SECRENT_KEY,
  callbackURL:"auth/google/callback"
} , async (accessToken , refreshToken , profile , done) => {
  try{
    let user = await User.findOne({googleId:profile.id})
    if(user) return done(null , user) 
    user = await User.findOne({email:profile.emails[0].value})
  if(user){
    user.googleId = profile.id
    await user.save()
    return done(null , user)
  }

  const newUser = new User({
    googleId:profile.id,
    email:profile.emails[0].value,
    name:profile.displayName
  })

  await newUser.save()
  return done(null , newUser)

  }catch(err){
    return done(err)
  }
}))
