"use client";
import React from "react";
import style from "./page.module.scss";
import Button from "../component/atom/button/Button";

const Login = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<h2 className={`text-center mt-5`}>Login Form</h2>
					<div className="card my-5">
						<form className={`card-body ${style["cardbody-color"]} p-lg-5`}>
							<div className="text-center">
								<img
									src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
									className={`img-fluid ${style["profile-image-pic"]} img-thumbnail rounded-circle my-3`}
									width="200px"
									alt="profile"
								/>
							</div>

							<div className="mb-3">
								<input
									type="text"
									className="form-control"
									id="Username"
									aria-describedby="emailHelp"
									placeholder="User Name"
								/>
							</div>
							<div className="mb-3">
								<input
									type="password"
									className="form-control"
									id="password"
									placeholder="password"
								/>
							</div>
							<div className="text-center">
								<Button classNames={style.btn} onClick={() => {}}>
									Login
								</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
