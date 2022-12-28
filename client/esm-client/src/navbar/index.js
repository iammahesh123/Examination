import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import { Drawer, Button , Space} from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Navbar.css";



class Navbar extends Component {

  constructor() {
    super();
    this.state = {
        showDrawer: false,
    };
    this.handleClick = this.handleClick.bind(this)
}
handleClick() {
    this.setState({
        showDrawer: !this.state.showDrawer
    });
}
  state = {
    current: "mail",
    visible: false,
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log(this.props.userInfo);

    return (
      <nav className="menuBar">
        <div className="logo">
          <Link >🎓 TALENTBUZZ</Link>
        </div>
        <div className="menuCon">
          <div className="leftMenu">
            <LeftMenu />
          </div>
          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn"></span>
          </Button>

          <Drawer
            title="Menu"
            placement="left"
            closable={true}
            onClose={this.onClose}
            visible={this.state.visible}
            extra={
              <Space>
                <Button onClick={this.onClose}>Cancel</Button>
                <Button type="primary" onClick={this.onClose}>
                  OK
                </Button>
              </Space>
            }
          >
            <LeftMenu role={this.props} />
          </Drawer>

         
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userInfo: state.auth.user,
  };
};
export default connect(mapStateToProps, null)(Navbar);
