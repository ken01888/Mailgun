import e from 'express';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { createNoSubstitutionTemplateLiteral } from 'typescript';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	const [from,setFrom] = useState('from');
	const [subject,setSubject] = useState('subject');
	const [message,setMessage] = useState('message');
	// const [email, setEmail] = useState({
	// 	from:null,
	// 	subject:null,
	// 	message:null

	// });

	const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>)=>{
		
e.preventDefault()
		let result = await fetch('/api/contact',{
				method:'POST',
				headers:{'Content-Type':'application/json'},
				body:JSON.stringify({from,subject,message})
			})
			let res = await result.json();
			console.log(res)

		

	}



	return (
		<main className="container my-5">
					<section className="row justify-content-center">
			<div className="col-md-6">
				<form className="form-group p-3 border border-shadow">
					<input value={from} onChange={e=>{setFrom(e.target.value)}} type="text" className="form-control"/>
					<input value={subject} onChange={e=>{setSubject(e.target.value)}} type="text" className="form-control"/>
					<input value={message} onChange={e=>{setMessage(e.target.value)}} type="text" className="form-control"/>
					<button onClick = {handleSubmit} className="btn btn-success">
					Contact Me!
					</button>
				</form>
			</div>
</section>
		</main>
	);
};

interface AppProps {}

/* CLASS REACT EXAMPLE */
// class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			name: null
// 		};
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/hello');
// 			let name = await r.json();
// 			this.setState({ name });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	render() {
// 		return (
// 			<main className="container my-5">
// 				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
// 			</main>
// 		);
// 	}
// }

// export interface IAppProps {}

// export interface IAppState {
// 	name: string;
// }

export default App;
