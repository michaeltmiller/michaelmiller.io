import React, { Component } from "react";
import Link from "gatsby-link";
import "react-github-button/assets/style.css";

import GitHubButton from "react-github-button";
import Hamburger from "../hamburger";
import Menu from "../menu";
import Wrapper from "../wrapper";

import styles from "./styles.module.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    // @TODO: Remove this event listener when menu isn't open.
    document.addEventListener("keydown", this.handleKeyPress);
  }

  toggleMenu(isVisible) {
    this.setState({
      menuActive:
        typeof isVisible === "undefined" ? !this.state.menuActive : isVisible
    });
  }

  handleKeyPress(event) {
    if (event.keyCode === 27) {
      this.toggleMenu(false);
    }
  }
  render() {
    const { menuActive } = this.state;

    return (
      <header className={styles.header}>
        <Wrapper>
          <div className={styles.inner}>
            <h1 className={styles.title}>
              <Link to="/">Michael Miller</Link>
            </h1>
            <nav className={styles.sidenav}>
              <ul>
                <li className={styles.item}>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link to="/about">
                    About
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link to="/work">
                    Work
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <GitHubButton
              type="stargazers"
              namespace="michaeltmiller"
              repo="michaelmiller.io"
              className={styles.github}
            />
            <Hamburger
              onClick={() => this.toggleMenu()}
              active={menuActive}
              className={styles.hamburger}
            />
          </div>
        </Wrapper>
        <Menu onNavClick={() => this.toggleMenu(false)} active={menuActive} />
      </header>
    );
  }
}
