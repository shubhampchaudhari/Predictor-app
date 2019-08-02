import { PredictorAppPage } from './app.po';

describe('predictor-app App', () => {
  let page: PredictorAppPage;

  beforeEach(() => {
    page = new PredictorAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
