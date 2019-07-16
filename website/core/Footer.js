/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap" style={{ textAlign: "center" }}>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("introduction.html", this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl("how-to-start.html", this.props.language)}>
              Guides
            </a>
            <a href={this.docUrl("farm.html", this.props.language)}>
              API Reference
            </a>
          </div>

          <div style={{ textAlign: "center" }}>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a
              href="https://twitter.com/thriveagric"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
            <a href="https://github.com/Prodigy00/farm-api">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/Prodigy00/farm-api"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
          </div>
        </section>

        <section className="copyright" style={{ textAlign: "center" }}>
          <span>
            <a href={this.props.config.baseUrl} className="nav-home">
              {this.props.config.footerIcon && (
                <img
                  src={this.props.config.baseUrl + this.props.config.footerIcon}
                  alt={this.props.config.title}
                  width="66"
                  height="58"
                />
              )}
            </a>
          </span>
          <div>{this.props.config.copyright}</div>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
