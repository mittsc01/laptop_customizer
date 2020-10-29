import React from 'react';
import Feature from '../Feature/Feature'

class FeatureList extends React.Component{
    render(){
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            
      
            return (
              <Feature name={feature} key={featureHash} handleUpdate={this.props.handleUpdate} feature={this.props.features[feature]} selected={this.props.selected[feature]} />
              
            );
          });
          return (
            features
          )

    }
}
export default FeatureList