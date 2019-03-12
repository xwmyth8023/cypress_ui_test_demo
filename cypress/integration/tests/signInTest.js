import HomePage from '../elements/pages/HomePage';

describe('Sign In', () => {
  it('should show an error message on empty input', () => {
    const home = new HomePage();
    home.visit();

    const signIn = home.goToSignIn();

    signIn.submit();

    signIn.getEmailError()
      .should('exist')
      .contains('Email is required');

    signIn
      .getPasswordError()
      .should('exist')
      .contains('Password is required');
  });
  
  it('should sign in with correct credentials', () => {
    const home = new HomePage();
    home.visit();

    const signIn = home.goToSignIn();

    signIn
      .fillEmail('email')
      .fillPassword('password')
      .submit();

    home.getUserAvatar().should('exist');
  });
});