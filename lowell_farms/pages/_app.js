import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import shuffle from 'shuffle-array';
import Page from '../components/Page';
import withData from '../lib/withData';
import { getPageApi, getPageByType } from '../api';

class LowellApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    // Google maps geocoding key: AIzaSyBVMMoWP5CQj2ZSgPETg7oc2b_SG1uM2tQ
    // Distance Matrix: AIzaSyAIKrq8zMrPu16frIY4s7plIQg4FMJ8xkQ
    // git subtree push--prefix lowell_store heroku - frontend master

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // This exposes the query to the user
    pageProps.query = ctx.query;
    pageProps.pathname = ctx.asPath;

    // we get the pageId of the post so that we can
    // query the API with it
    const newsletterId = 'XeslrREAAJpcW2bS';
    const newsletterResponse = await getPageApi(newsletterId);

    pageProps.newsletter = newsletterResponse.data;

    const quotesId = 'XesiMBEAAF9dW1dK';
    const quotesResponse = await getPageApi(quotesId);
    pageProps.quotes = shuffle(quotesResponse.data.quotes);

    const sitewideId = 'XevxghEAAJNmXuuW';
    const sitewideResponse = await getPageApi(sitewideId);
    pageProps.sitewideData = sitewideResponse;

    const zipCodesId = 'Xesh4hEAAF9dW1Xw';
    const zipCodesResponse = await getPageApi(zipCodesId);
    pageProps.zipCodes = zipCodesResponse.data;

    const productsResponse = await getPageByType('product');

    return { pageProps, sitewideResponse, productsResponse };
  }

  render() {
    const {
      Component,
      apollo,
      pageProps,
      sitewideResponse,
      router,
      productsResponse,
    } = this.props;

    pageProps.router = router;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page
            sitewideData={sitewideResponse}
            router={router}
            zipCodes={pageProps.zipCodes}
            products={productsResponse}
          >
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(LowellApp);
