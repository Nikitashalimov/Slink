import React from 'react';
import cn from 'classnames'
import s from './Header.module.css';
import logo from "../../../assets/logo.png";


const Header = () => {

	return (
		<>
			<div className={s.blockAboutService}>
				<img src={logo} className={s.logo} />
				<p className={cn(s.header_logo, s.header_logo_name)}>hink</p>
				<p className={cn(s.header_logo, s.header_logo_about)}>- сервис получения коротких ссылок</p>
			</div>
			<div className={s.auth}>
				<div className={s.auth_button}>Log in</div>
				<div className={cn(s.auth_button, s.join)}>Join</div>
			</div>
		</>
	);
}

export default Header;