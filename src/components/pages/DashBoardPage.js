import React, { Component } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PageHeading from '../partials/MainContainer/PageHeading';
import { getCounts } from '../../redux/actions/UI';
import UserFlags from '../containers/UserFlags';
import SlotsParams from '../containers/SlotsParams';
import DashItem from '../partials/DashBoardPage/DashItem';
import '../partials/DashBoardPage/Dashboard.css';

class DashBoardPage extends Component {

  componentWillMount = () => {
    this.props.getCounts();
  }

  render() {
    const {
      itemsArray,
      dashes,
      counts
    } = this.props.ui;

    let dashContent;

    if(!counts) {
      dashContent = <Loader active />
    } else {
      dashContent = (
        <React.Fragment>
          <Grid className='dash__container'>
            {itemsArray.map( item => (
              <Grid.Column computer="4" tablet='8' mobile="16" key={item}>
                <DashItem item={dashes[item]} counts={counts}/>
              </Grid.Column>
            ))}
          </Grid>
          {/* <Grid>
            <Grid.Column computer="8" tablet='8' mobile="16">
              <UserFlags />
            </Grid.Column>
            <Grid.Column computer="4" tablet='8' mobile="16">
              <SlotsParams />
            </Grid.Column>
          </Grid> */}
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        <PageHeading title='Dashboard' descr="" />
        {dashContent}
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    ui: state.ui,
  }), { getCounts }
)(DashBoardPage);
