import * as passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import User from './modules/User/service';
const config = require('./config/env/config')();

class Auth {

    config() {
        const UserService = new User();
        let opts = {
            secretOrKey: config.secret,
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        };

        passport.use(new Strategy(opts, (jwtPayload, done) => {
            UserService.getById(jwtPayload.id)
                .then(user => {
                    if (user) {
                        return done(null, {
                            id: user.id,
                            email: user.email,
                        });
                    } else {
                        return done(null, false);
                    }
                })
                .catch(error => {
                    done(error, null);
                });
        }));

        return {
            initialize: () => passport.initialize(),
            authenticate: () => passport.authenticate('jwt', { session: false })
        }
    }

}

export default new Auth();