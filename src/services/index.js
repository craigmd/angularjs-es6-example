import angular from 'angular';
import UserService from './user.service'
import JwtService from './jwt.service'
import ProfileService from './profile.service'

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

servicesModule.service('User', UserService);
servicesModule.service('JWT', JwtService);
servicesModule.service('Profile', ProfileService);

export default servicesModule;
