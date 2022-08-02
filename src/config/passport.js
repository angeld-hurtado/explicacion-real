const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'pass'
}, (email, pass, done) => {
	if (email == 'mhurtado2009@hotmail.com') {
		if (pass == 'Chocolate')
			return done(null, {email: email})
		else
			return done(null, false, {message: 'Contraseña incorrecta'})
	} else
		return done(null, false, {message: 'Usuario incorrecto'})
}))

passport.serializeUser((user, done) => {
	done(null, user.email)
})

passport.deserializeUser((email, done) => {
	done(null, {email: email})
})