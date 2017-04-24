import angular from 'angular';
import UserService from './user.service'
import JwtService from './jwt.service'

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

servicesModule.service('User', UserService);
servicesModule.service('JWT', JwtService);

export default servicesModule;
