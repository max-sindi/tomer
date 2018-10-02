import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, {Component } from 'react';
import { connect } from 'react-redux';

import Error from './components/containers/Error';

import { Sidebar, Header } from './components/containers';
import { LoginPage, DashBoardPage } from './components/pages';
import MainContainer from './components/partials/MainContainer/MainContainer';
import * as Properties from './components/pages/properties';
import * as Agents from './components/pages/Agents';
import * as Landlords from './components/pages/Landlords';
import * as LandlordListing from './components/pages/LandlordListing';
import * as ViewingRequests from './components/pages/ViewingRequests';
import * as Offers from './components/pages/Offers';
import * as ViewingTimes from './components/pages/ViewingTimes';
import * as FacetOptions from './components/pages/FacetOptions';
import * as TagOptions from './components/pages/TagOptions';
import * as PropertyTags from './components/pages/PropertyTags';
import * as PropertyRating from './components/pages/PropertyRating';
import * as Users from './components/pages/Users';
import * as UserTags from './components/pages/UserTags';
import UserFlagsViewAll from './components/pages/UserFlags/UserFlagsViewAll';
import SlotsParamsViewAll from './components/pages/SlotsParams/SlotsParamsViewAll';
import SettingsViewAll from './components/pages/Settings/SettingsViewAll';

class Routes extends Component {

  render() {
    // if user not logged, each path will redirect to login page


    /* CURRENTLY NOT WORKING ON BACKEND */
    // if (!this.props.isLogged) {
    //   return (
    //     <Router>
    //       <Route path='/' component={LoginPage}/>
    //     </Router>
    //   )
    // }

    return (
      <Router>
        <React.Fragment>
          <Header/>
          <Sidebar/>
          <MainContainer isSidebarVisible={this.props.isSidebarVisible}>
            <Error />
            <Switch>
              <Route exact path='/admin' component={DashBoardPage}/>
              <Route exact path='/admin/properties/' component={Properties.PropsViewAll}/>
              <Route exact path='/admin/properties/:id/edit' component={Properties.PropsEdit}/>
              <Route exact path='/admin/properties/new' component={Properties.PropsNew}/>

              <Route exact path='/admin/properties/liveByDate' component={Properties.PropsLiveDate}/>
              <Route exact path='/admin/properties/liveImages' component={Properties.PropsLiveImages}/>
              <Route exact path='/admin/properties/notLiveDate' component={Properties.PropsNotLiveDate}/>
              <Route exact path='/admin/properties/notLiveImages' component={Properties.PropsNotLiveImages}/>
              {/* <Route exact path='/admin/properties/notLiveLast3Days' component={Properties.PropsNotLiveLast3Days}/> */}
              <Route exact path='/admin/properties/errorDate' component={Properties.PropsErrorsDate}/>

              <Route exact path='/admin/agents/' component={Agents.AgentsViewAll}/>
              <Route exact path='/admin/agents/new' component={Agents.AgentsNew}/>
              <Route exact path='/admin/agents/:id/edit' component={Agents.AgentsEdit}/>

              <Route exact path='/admin/landlords/' component={Landlords.LandlordsViewAll}/>
              <Route exact path='/admin/landlords/new' component={Landlords.LandlordsNew}/>
              <Route exact path='/admin/landlords/:id/edit' component={Landlords.LandlordsEdit}/>

              <Route exact path='/admin/landlordListing/' component={LandlordListing.ViewAll}/>

              <Route exact path='/admin/viewingRequests/' component={ViewingRequests.ViewingRequestsViewAll}/>
              <Route exact path='/admin/viewingRequests/new' component={ViewingRequests.ViewingRequestsNew}/>
              <Route exact path='/admin/viewingRequests/:id/edit' component={ViewingRequests.ViewingRequestsEdit}/>

              <Route exact path='/admin/offers/' component={Offers.ViewAll} />

              <Route exact path='/admin/viewingTimes/' component={ViewingTimes.ViewingTimesViewAll}/>
              <Route exact path='/admin/viewingTimes/new' component={ViewingTimes.ViewingTimesNew}/>
              <Route exact path='/admin/viewingTimes/:id/edit' component={ViewingTimes.ViewingTimesEdit}/>

              <Route exact path='/admin/facetOptions/' component={FacetOptions.FacetOptionsViewAll}/>
              <Route exact path='/admin/facetOptions/new' component={FacetOptions.FacetOptionsNew}/>
              <Route exact path='/admin/facetOptions/:id/edit' component={FacetOptions.FacetOptionsEdit}/>

              <Route exact path='/admin/tagOptions/' component={TagOptions.TagOptionsViewAll}/>
              <Route exact path='/admin/tagOptions/new' component={TagOptions.TagOptionsNew}/>
              <Route exact path='/admin/tagOptions/:id/edit' component={TagOptions.TagOptionsEdit}/>

              <Route exact path='/admin/propertyTags/' component={PropertyTags.PropertyTagsViewAll} />
              <Route exact path='/admin/propertyTags/new' component={PropertyTags.PropertyTagsNew} />
              <Route exact path='/admin/propertyTags/:id/edit' component={PropertyTags.PropertyTagsEdit} />

              <Route exact path='/admin/propertyRating/' component={PropertyRating.PropertyRatingViewAll} />
              <Route exact path='/admin/propertyRating/new' component={PropertyRating.PropertyRatingNew} />
              <Route exact path='/admin/propertyRating/:id/edit' component={PropertyRating.PropertyRatingEdit} />

              <Route exact path='/admin/users/' component={Users.UsersViewAll} />
              <Route exact path='/admin/users/new' component={Users.UsersNew} />
              <Route exact path='/admin/users/:id/edit' component={Users.UsersEdit} />

              <Route exact path='/admin/userEvents/' component={UserTags.UserTagsViewAll}/>
              <Route exact path='/admin/userEvents/new' component={UserTags.UserTagsNew}/>
              <Route exact path='/admin/userEvents/:id/edit' component={UserTags.UserTagsEdit}/>

              <Route exact path='/admin/filters/flags' component={UserFlagsViewAll} />
              <Route exact path='/admin/timeSlots/params' component={SlotsParamsViewAll} />

              <Route exact path='/admin/settings' component={SettingsViewAll} />

              <Route component={DashBoardPage}/>
            </Switch>
          </MainContainer>
        </React.Fragment>
      </Router>
    );
  }

}

export default connect(
  state => ({
    isLogged: state.login.isLogged,
    isSidebarVisible: state.ui.sidebar.isVisible,
  })
)(Routes);
