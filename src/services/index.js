import angular from 'angular';
import UserService from './user.service'

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

servicesModule.service('User', UserService);


export default servicesModule;
