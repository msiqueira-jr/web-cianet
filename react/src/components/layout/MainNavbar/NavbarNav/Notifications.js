import React from "react";
import { NavItem, Collapse, DropdownItem } from "shards-react";

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleNotifications = this.toggleNotifications.bind(this);
  }

  toggleNotifications() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <NavItem className="border-right dropdown notifications">

        <Collapse
          open={false}
          className="dropdown-menu dropdown-menu-small"
        >
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="material-icons">&#xE6E1;</i>
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category">Desempenho</span>
              <p>
                Seu numero de chamados com bom atendimento aumentou{" "}
                <span className="text-success text-semibold">28%</span> na ultima semana
                . Parabéns!
              </p>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="material-icons">&#xE8D1;</i>
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category">Vendas</span>
              <p>
                As vendas de sua equipe aumentaram{" "}
                <span className="text-danger text-semibold">5.52%</span>. Parabéns
                a todos.
              </p>
            </div>
          </DropdownItem>
          <DropdownItem className="notification__all text-center">
            Ver todas notificações
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
