import React from 'react';
import Option from '../Option/Option'
import slugify from 'slugify'

class Feature extends React.Component{
    render(){


        return (
            <fieldset className="feature">
                <legend className="feature__name">
                  <h3>{this.props.name}</h3>
                </legend>
                {this.props.feature.map(option=>{
                    const itemHash = slugify(JSON.stringify(option));
                    return(
                        <Option featureName={this.props.name} key={itemHash} id={itemHash} handleUpdate={this.props.handleUpdate} option={option} selected={this.props.selected.name===option.name}/>
                    )
                
                })
                }
              </fieldset>
        )

    }
}
export default Feature