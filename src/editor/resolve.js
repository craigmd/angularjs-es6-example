export const auth = function(User) {
  return User.ensureAuthIs(true);
};

export const article = function(Articles, User, $state, $stateParams) {
  if($stateParams.slug) {
    return Articles.get($stateParams.slug).then(article => {
      if(User.current.username === article.author.username) {
        return article;
      } else {
        $state.go('app.home');
      }
    }, err => $state.go('app.home'));
  } else {
    return null;
  }
};
