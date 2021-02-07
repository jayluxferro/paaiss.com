import React,{Fragment, Suspense,lazy} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {PulseLoader} from 'react-spinners'

const HomeComponent = lazy(()=>import ('./pages/home'))
const ConferenceOfficersComponent = lazy(()=>import ('./pages/conference-officers'))
const ProgramCommitteeComponent = lazy(()=>import ('./pages/program-comittee'))
const KeynotesComponent = lazy(()=>import ('./pages/keynotes'))
const WorkshopsComponent = lazy(()=>import ('./pages/workshops'))
const PapersComponent = lazy(()=>import ('./pages/papers'))

const LoadingComponet = () => {
  return (
    <Fragment>
      <div style={{height:'100vh',width:'100vw'}} className={"flex justify-center items-center h-full w-full"}>
        <PulseLoader size={10} color={"#5950EB"} />
        </div> 
    </Fragment>
  )
}

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
      <Suspense fallback={LoadingComponet()}>
      <Switch>
    <Route path={"/conference-officers"} exact={true} component={ConferenceOfficersComponent} />
    <Route path={"/program-committees"} exact={true} component={ProgramCommitteeComponent} />
    <Route path={"/papers"} exact={true} component={PapersComponent} />
    <Route path={"/keynotes-and-tutorials"} exact={true} component={KeynotesComponent} />
    <Route path={"/workshops"} exact={true} component={WorkshopsComponent} />

    <Route path={"/"} exact={true} component={HomeComponent} />
      </Switch>
      </Suspense>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
