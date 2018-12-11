import React from 'react';
import { ClipLoader } from 'react-spinners';

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  render() {
    return (
      <div className='sweet-loading' style={{textAlign:'center',marginBottom:'400px'}}>
        <ClipLoader
          sizeUnit={"px"}
          size={70}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}
export default Loader;