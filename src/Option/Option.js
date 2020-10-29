import React from 'react';
import slugify from 'slugify';
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Option extends React.Component{
    render(){
        return(
            <div key={this.props.id} className="feature__item">
            <input
              type="radio"
              id={this.props.id}
              className="feature__option"
              name={slugify(this.props.featureName)}
              checked={this.props.selected}
              onChange={e => this.props.handleUpdate(this.props.featureName, this.props.option)}
            />
            <label htmlFor={this.props.id} className="feature__label">
              {this.props.option.name} ({USCurrencyFormat.format(this.props.option.cost)})
            </label>
          </div>
        )
        
    }
}
export default Option