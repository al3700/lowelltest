import React, { Component } from 'react';
import QuoteSection from './styles/Quotes';

export default class Quote extends Component {
  render() {
    const { quotesData, index, styleClass } = this.props;
    return (
      <QuoteSection className={styleClass != '' ? styleClass : ''}>
        <a
          href={quotesData[index].link != '' && quotesData[index].link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="quote">
            &ldquo;{quotesData[index].quote[0].text}&rdquo;
          </h4>
          <p className="publication">
            &mdash; {quotesData[index].publication[0].text}
          </p>
        </a>
      </QuoteSection>
    );
  }
}
