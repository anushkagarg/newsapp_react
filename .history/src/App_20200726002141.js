import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';  
import Header from './Header';

export class App extends Component {
  render(){
  return(
    <div className="App">
    <header>
		<div class="top-head left">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-lg-4">
            <h1>Triveous News<small>Get the latest News</small></h1>
            <Header />
					</div>
				</div>
			</div>
		</div>
	</header>
    </div>
  );
}
}
export default App; 



