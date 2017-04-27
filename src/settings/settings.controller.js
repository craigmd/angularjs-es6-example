class SettingsCtrl {
  constructor(User, $state) {
    'ngInject';

    this._User = User;
    this._$state = $state;

    this.formData = {
      image: User.current.image,
      username: User.current.username,
      bio: User.current.bio,
      email: User.current.email
    };

    this.logout = User.logout.bind(User);
  }

  submitForm() {
    this.isSubmitting = true;

    this._User.update(this.formData).then(user => {
      this._$state.go('app.profile', { username: user.username });
    }, err => {
      this.isSubmitting = false;
      this.errors = err.data.errors;
    });
  }

}

export default SettingsCtrl
