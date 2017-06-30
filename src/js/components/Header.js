import React from 'react';


export default class Header extends React.Component {
  render() {
    return (
      <header>
          <div className="layout-container">
              <a href="#" className="ui-btn ui-btn-inline logo" title="Avantrip - La guita la mejor invertida">
                  <h1><img src="./../../images/logo.svg" alt="Avantrip - La guita la mejor invertida" /></h1>
              </a>
          </div>
      </header>
    )
  }
}
