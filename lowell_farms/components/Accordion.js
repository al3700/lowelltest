import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../lib/helpers';

class Accordion extends Component {
  constructor(props) {
      super(props);
      this.toggleClass= this.toggleClass.bind(this);

      this.state = {
          active: false,
      };
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  render() {
    const { faqItem } = this.props;
    return (
      <li className={`accordion-panel ${this.state.active ? 'expanded': null}`}  >
        <h2 id="faq" className="accordion-toggle" onClick={this.toggleClass}>
          {RichText.render(faqItem.heading, linkResolver)}
          <span></span>
        </h2>
        <div className="accordion-text">
          <div className="inner">
            {RichText.render(faqItem.faq_answer, linkResolver)}
          </div>
        </div>
      </li>
    );
  }
}


export default Accordion;
