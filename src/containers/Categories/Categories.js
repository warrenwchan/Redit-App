import React, { Component } from 'react';
import { connect } from 'react-redux';
import Week from './../../components/Week';

import { data } from './../../mock-data';

class Categories extends Component {

  render() {
    return (
      <div>
        {data.weeks.map((week ,i) => {
          return <Week
            week={week}
            key={i}
          />
        })};
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  weeks: state.weeks
})

export default connect(mapStateToProps)(Categories)
