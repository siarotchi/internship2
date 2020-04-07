import React from "react";
import { Header } from "./components/.";
import { connect } from "react-redux";
import Routes from "./routes";

class App extends React.Component {
  render() {
    const { appColor } = this.props;

    return (
      <div className="app-wrapper" style={{ backgroundColor: appColor }}>
        <Header />
        <Routes />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appColor: state.app.appTheme
});

export default connect(mapStateToProps)(App);
