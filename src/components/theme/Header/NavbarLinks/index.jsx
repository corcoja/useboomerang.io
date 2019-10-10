import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import social from './social.json'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		{social.map(({ id, name, link, icon }) => (
			<a
				key={id}
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={`follow me on ${name}`}
			>
				<img width="24" src={icon} alt={name} />
			</a>
		))}

		{
			// <AnchorLink href="#about">About</AnchorLink>
			/* <AnchorLink href="#projects">Projects</AnchorLink>
		<AnchorLink href="#contact">Contact</AnchorLink> */
		}
	</Wrapper>
)

export default NavbarLinks