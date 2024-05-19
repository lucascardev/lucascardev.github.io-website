import React, { useEffect, useState } from 'react'

// import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, MeshBasicMaterial, BoxGeometry } from 'three';

import {
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTooth,
	FaHtml5,
	FaCss3,
	FaReact,
	FaNodeJs,
	FaDocker,
	FaJsSquare,
	FaGit,
	FaEye,
	FaHandPointUp,
} from 'react-icons/fa'

import { SiTypescript, SiTrailforks } from 'react-icons/si'

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
	Info,
	Repo,
	Count,
	Repos,
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
	const [language, setLanguage] = useState('en')

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

	useEffect(() => {
		// Função para verificar e definir o idioma com base na localização do navegador
		const detectLanguage = () => {
			const userLanguage = navigator.language || navigator.userLanguage
			if (userLanguage.startsWith('pt')) {
				setLanguage('pt') // Define o idioma como português se a localização do navegador for 'pt' ou 'pt-BR'
			} else {
				setLanguage('en') // Caso contrário, define o idioma como inglês
			}
		}

		detectLanguage() // Chamada da função ao montar o componente

		// Adiciona um event listener para detectar mudanças na localização do navegador
		window.addEventListener('languagechange', detectLanguage)

		// Remove o event listener ao desmontar o componente para evitar vazamento de memória
		return () => {
			window.removeEventListener('languagechange', detectLanguage)
		}
	}, []) // A função é chamada apenas uma vez após a montagem do componente

	return (
		<Container>
			<Header>
				<Gitinfo>
					<Avatar src={avatarimg} />
					<div
						style={{
							color: 'whitesmoke',
							display: 'flex',
							justifyItems: 'center',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Username>
							<a
								href='https://github.com/lucascardev'
								alt='Github profile'
								target='_blank'
								rel='noreferrer'
							>
								@{username}
							</a>
						</Username>
						<p>
							<FaHandPointUp /> Veja meu github acima{' '}
							<FaHandPointUp />
						</p>
					</div>
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
				{language === 'en' && (
					<Main>
						<h1>Hello there. I'm lucascardev.</h1>
						<p>
							Certainly! Here’s the rephrased version of your text
							in English: "I’m a programming enthusiast dedicated
							to following best practices for web development.
							With a passion for creating innovative solutions, I
							maintain several projects on my GitHub. One of them
							is a dental appointment scheduling application that
							I hope will become a standout product. I’m
							constantly seeking improvement and remain committed
							to my journey of continuous learning. I actively
							look for opportunities to broaden my horizons and
							deepen my understanding of programming complexities.
							With an unwavering commitment to personal and
							professional growth, I’m determined to reach new
							levels of excellence.
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

							<a href='https://www.linkedin.com/in/lucascardev'>
								<FaLinkedin />
							</a>
						</div>

						<p> Im also a dentistry</p>
						<div
							className='linkholder'
							style={{ marginBottom: 30 }}
						>
							<a href='https://www.instagram.com/dr.lucasmscardoso/'>
								<FaTooth />
							</a>
						</div>
						<Repos>
							{repos.map((repo) => (
								<Repo>
									<h3>Repo - {repo.description}</h3>
									<p key={repo.id}>
										<a href={repo.html_url}>
											{repo.full_name}
										</a>
									</p>
									<p>{repo.language}</p>
									<Info>
										<Count>
											<SiTrailforks />
											{repo.forks}
										</Count>{' '}
										<Count>
											<FaEye />
											{repo.watchers}
										</Count>
									</Info>
								</Repo>
							))}
						</Repos>
					</Main>
				)}
				{language === 'pt' && (
					<Main>
						<h1>Olá! Eu sou o lucascardev.</h1>
						<p>
							Sou um entusiasta da programação que adora seguir as
							melhores práticas para o desenvolvimento web. Tenho
							uma paixão por criar soluções inovadoras e mantenho
							vários projetos no meu GitHub. Um deles é um
							aplicativo de agendamento odontológico que espero
							que se torne um produto de destaque. Estou sempre em
							busca de aprimoramento e continuo minha jornada de
							aprendizado. Busco constantemente oportunidades para
							expandir meus horizontes e aprofundar minha
							compreensão das complexidades da programação. Com um
							compromisso inabalável com o crescimento pessoal e
							profissional, estou determinado a alcançar novos
							patamares de excelência.
						</p>
						<hr />
						<p> Me siga nas redes sociais </p>
						<div className='linkholder'>
							<a href='https://www.instagram.com/lightup.marketingdigital/'>
								<FaInstagram />
							</a>
							<a href='https://github.com/lucascardev'>
								<FaGithub />
							</a>

							<a href='https://www.linkedin.com/in/lucascardev'>
								<FaLinkedin />
							</a>
						</div>
						<hr />
						{/* <p> Também sou dentista</p>
						<div
							className='linkholder'
							style={{ marginBottom: 30 }}
						>
							<a href='https://www.instagram.com/dr.lucasmscardoso/'>
								<FaTooth />
							</a>
						</div> */}
						<Repos>
							{repos.map((repo) => (
								<Repo>
									<h3>Repo - {repo.description}</h3>
									<p key={repo.id}>
										<a href={repo.html_url}>
											{repo.full_name}
										</a>
									</p>
									<p>{repo.language}</p>
									<Info>
										<Count>
											<SiTrailforks />
											{repo.forks}
										</Count>{' '}
										<Count>
											<FaEye />
											{repo.watchers}
										</Count>
									</Info>
								</Repo>
							))}
						</Repos>
					</Main>
				)}
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
