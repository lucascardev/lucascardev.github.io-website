import React, { useEffect, useState } from 'react'

// import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, MeshBasicMaterial, BoxGeometry } from 'three';

import {
	FaWineBottle,
	FaWineGlass,
	FaGithub,
	FaInstagram,
	FaHome,
	FaLinkedin,
	FaTooth,
	FaHtml5,
	FaCss3,
	FaReact,
	FaNodeJs,
	FaDocker,
	FaJsSquare,
	FaGit,
} from 'react-icons/fa'

import { SiTypescript } from 'react-icons/si'

import {
	Container,
	Header,
	Avatar,
	Username,
	Main,
	Contact,
	Footer,
	PageHolder,
	Gitinfo,
} from './style/global.style'

import API from './services/api'


  

// const scene = new Scene();
// const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const geometry = new BoxGeometry();
// const material = new MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new Mesh( geometry, material );


// //create a smiling face with 3D library
// const faceGeometry = new BoxGeometry(0.5, 0.5, 0.5);
// const faceMaterial = new MeshBasicMaterial({ color: 0xffff00 });
// const face = new Mesh(faceGeometry, faceMaterial);

// //create a head with 3D library
// const headGeometry = new BoxGeometry(1, 1, 1);
// const headMaterial = new MeshBasicMaterial({ color: 0xffff00 });
// const head = new Mesh(headGeometry, headMaterial);

// //create a body with 3D library
// const bodyGeometry = new BoxGeometry(1, 1, 1);
// const bodyMaterial = new MeshBasicMaterial({ color: 0xffff00 });
// const body = new Mesh(bodyGeometry, bodyMaterial);

// //create a left arm with 3D library
// const leftArmGeometry = new BoxGeometry(1, 1, 1);
// const leftArmMaterial = new MeshBasicMaterial({ color: 0xffff00 });
// const leftArm = new Mesh(leftArmGeometry, leftArmMaterial);

// //create a right arm with 3D library
// const rightArmGeometry = new BoxGeometry(1, 1, 1);
// const rightArmMaterial = new MeshBasicMaterial({ color: 0xffff00 });
// const rightArm = new Mesh(rightArmGeometry, rightArmMaterial);

// //create a left leg with 3D library
// const leftLegGeometry = new BoxGeometry(1, 1, 1);
// const leftLegMaterial = new MeshBasicMaterial({ color: 0xffff00 });
// const leftLeg = new Mesh(leftLegGeometry, leftLegMaterial);

// //create a right leg with 3D library
// const rightLegGeometry = new BoxGeometry(1, 1, 1);
// const rightLegMaterial = new MeshBasicMaterial({ color: 0xffff00 });
// const rightLeg = new Mesh(rightLegGeometry, rightLegMaterial);

// scene.add( face, body, head, leftArm, rightArm, leftLeg, rightLeg );

// //set position of objects
// face.position.set(40, 0, 0);
// head.position.set(40, 0, 0);
// body.position.set(30, 0, 0);
// leftArm.position.set(30, 30, 0);
// rightArm.position.set(30, -30, 0);

// camera.position.z = 5;

// function animate() {
// 	requestAnimationFrame( animate );
// 	renderer.render( scene, camera );
//   //show the face

  
// }
// animate();


function App() {
	const [avatarimg, setAvatarimg] = useState('')
	const [username, setUsername] = useState('')
	const [repos, setRepos] = useState([])

	useEffect(() => {
		async function getmyprofile() {
			const response = await API.get('users/lucascardev')
			// console.log(response);
			const repos_response = await API.get('users/lucascardev/repos')
			setRepos(repos_response.data)
			setAvatarimg(response.data.avatar_url)
			setUsername(response.data.login)
		}
		getmyprofile()

	}, [])

	return (
		<Container>
			<Header>
				<Gitinfo>
					<Avatar src={avatarimg} />
					<Username>
						@
						<a
							href='https://github.com/lucascardev'
							alt='Github profile'
						>
							{username}
						</a>
					</Username>
				</Gitinfo>
				<Contact>
					<p>
						<b>Phonenumber:</b> &nbsp;{' '}
						<a href='tel:+5571992931330'>+55(71)99293-1330</a>
					</p>
					<p>
						<b>Email: </b> &nbsp;{' '}
						<a href='mailto:lucasmatheussc97@gmail.com'>
							lucasmatheussc97@gmail.com
						</a>
					</p>
				</Contact>

				<div className='techs'>
					<SiTypescript />
					<FaCss3 />
					<FaDocker />
					<FaHtml5 />
					<FaReact />
					<FaNodeJs />
					<FaJsSquare />
					<FaGit />
				</div>
			</Header>
			<PageHolder>
				<Main>
					<h1>Hello there. I'm lucascardev. </h1>
					<p>
						I'm a lover of coding, and try to always follows the
						best pratices for web development. Actualy i have other
						projects on my github, but i'm not showing them here.
						One of my work is an Dentistry scheduling application
						that will try to turn in a business. My story in
						progamming is pretty new, i have about 2 years of
						experience. I'm also will start my software engineering
						degree soon. My main goal is to be a full stack developer.
					</p>
					<hr />
					<p> Keep contact with me on my social media. </p>
					<div className='linkholder'>
						<a href='https://www.instagram.com/lucas_mtheus/'>
							<FaInstagram />
						</a>
						<a href='https://github.com/lucascardev'>
							<FaGithub />
						</a>
						<a href='https://lightupweb.mailchimpsites.com/'>
							<FaHome />
						</a>
						<a href='https://www.linkedin.com/in/lucas-matheus-s-cardoso-266884169/'>
							<FaLinkedin />
						</a>
					</div>

					<p> Im also a dentistry student, at last period... </p>
					<div className='linkholder'>
						<a href='https://www.instagram.com/odontosemcomplicacao/'>
							<FaTooth />
						</a>
					</div>
					{repos.map((repo) => (
						<div>
							<h3>Repo - {repo.description}</h3>
							<p key={repo.id}>
								<a href={repo.html_url}>{repo.full_name}</a>
							</p>
						</div>
					))}
				</Main>
			</PageHolder>

			<Footer>
				<p>
					This page was build using the{' '}
					<a href='https://pages.github.com/'>
						<b>GitHub Pages</b>
					</a>{' '}
					an excelent frontend server.
				</p>
			</Footer>
		</Container>
	)
}

export default App
