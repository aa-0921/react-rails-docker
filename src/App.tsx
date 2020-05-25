// import * as React from "react";
// import { Home } from './components/pages/Home';
// import { Profile } from './components/pages/Profile';
// import { ZeitSample } from './components/pages/zeit-sample';

// import { BrowserRouter, Route, Link } from 'react-router-dom'

// export const App = () => (
//     <BrowserRouter>
//         <div>
//             <ul>
//             <li><Link to='/'>Home</Link></li>
//             <li><Link to='/profile'>Profile</Link></li>
//             <li><Link to='/zeit-sample'>zeit-sample</Link></li>
//             </ul>

//             <hr />

//             <Route exact path='/' component={Home} />
//             <Route path='/profile' component={Profile} />
//             <Route path='/zeit-sample' component={ZeitSample} />
//         </div>
//     </BrowserRouter>
// )

import * as React from "react";
import { HomePage } from './components/HomePage';

// import './App.scss'
import { ZeitProvider, CssBaseline } from '@zeit-ui/react'

export function App() {
	return(
		<ZeitProvider>
				<CssBaseline />
				<HomePage />
		</ZeitProvider>
	)	
}

