// import styled from "styled-components";
// import { useRef, useState, useEffect } from "react";
// import { FaRegCalendarAlt } from "react-icons/fa";
// import useDectOutsideClick from "@/hooks/useDectOutsideClick";
// import months from "@/utlis/months";
// const Main = styled.div``;
// const DateSelector = styled.div`
// 	position: relative;
// 	box-shadow: 4px 3px 3px rgba(0, 0, 0, 0.1);
// 	display: inline-block;
// 	min-width: 12rem;
// 	background-color: white;
// 	border-radius: 8px;
// `;
// const Header = styled.div`
// 	padding: 0.7rem;
// 	color: rgba(0, 0, 0, 0.4);
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// `;

// const Selector = styled.div`
// 	position: relative;
// `;
// const SelectorOptCointainer = styled.div`
// 	display: flex;
// 	color: rgba(0, 0, 0, 0.4);
// `;
// const SelectorOpt = styled.div`
// 	width: 50%;
// 	text-align: center;
// 	&:hover {
// 		background-color: rgba(0, 0, 0, 0.2);
// 		cursor: pointer;
// 	}
// 	&:first-child {
// 		position: relative;
// 		&::after {
// 			content: "";
// 			position: absolute;
// 			width: 1px;
// 			height: 1.2rem;
// 			left: 100%;
// 			background-color: rgba(0, 0, 0, 0.4);
// 		}
// 	}
// `;
// const SelectorIndicator = styled.div`
// 	position: absolute;
// 	width: 40%;
// 	margin-left: 0.5rem;
// 	margin-right: 0.5rem;
// 	height: 2px;
// 	background-color: #c6e7f2;
// 	margin-top: 2px;
// 	border-radius: 10px;
// 	left: ${(props) => (props.isYearActive ? "0" : "50%")};
// 	transition: left 200ms ease;
// `;

// const Date = styled.div``;

// const Icon = styled.div`
// 	:hover {
// 		cursor: pointer;
// 	}
// `;
// const Body = styled.div`
// 	overflow-y: hidden;
// 	position: absolute;
// 	z-index: 22;
// 	max-height: ${(props) => (props.active ? "8.8rem" : "0rem")};
// 	background-color: white;
// 	border-radius: 5px;
// 	top: 3.5rem;
// 	display: flex;
// 	flex-direction: column;
// `;
// const DateSelector_year = styled.div`
// 	display: inline-block;
// 	min-width: 12rem;
// 	text-align: center;
// 	&::-webkit-scrollbar {
// 		display: none;
// 	}
// 	overflow-y: scroll;
// 	height: inherit;
// `;
// const DateSelector_month = styled(DateSelector_year)``;
// const Ul = styled.ul``;
// const Li = styled.li`
// 	list-style: none;
// 	padding-top: 0.7rem;
// 	padding-bottom: 0.7rem;
// 	:hover {
// 		background-color: #6cc4bc;
// 		cursor: pointer;
// 	}
// `;

// const DatePickerHoc = ({ Component, pageProps }) => {
// 	const [isActive, setIsActive] = useState({
// 		selector: false,
// 		year: true,
// 		month: false,
// 	});

// 	const [date, setDate] = useState({ year: "yy", month: "mm" });
// 	const datePicker = useRef(null);

// 	useDectOutsideClick(datePicker, setIsActive, {
// 		...isActive,
// 		selector: false,
// 	});

// 	const clickHandlerYear = (e) => {
// 		setDate({ ...date, year: e.target.innerHTML });
// 	};
// 	const clickHandlerMonth = (e) => {
// 		if (e.target.innerHTML === "Reset") {
// 			setDate({ ...date, month: "mm" });
// 			return;
// 		}

// 		setDate({ ...date, month: e.target.innerHTML });
// 	};

// 	return (
// 		<>
// 			<Main>
// 				<DateSelector ref={datePicker}>
// 					<Header>
// 						<Date>{`${date.year} > ${date.month}`}</Date>
// 						<Icon
// 							onClick={() =>
// 								setIsActive({ ...isActive, selector: !isActive.selector })
// 							}
// 						>
// 							<FaRegCalendarAlt style={{ width: "1.5rem", height: "1.5rem" }} />
// 						</Icon>
// 					</Header>

// 					<Body active={isActive.selector}>
// 						<Selector>
// 							<SelectorOptCointainer>
// 								<SelectorOpt
// 									onClick={() =>
// 										setIsActive({ ...isActive, year: true, month: false })
// 									}
// 								>
// 									Year
// 								</SelectorOpt>
// 								<SelectorOpt
// 									onClick={() =>
// 										setIsActive({ ...isActive, month: true, year: false })
// 									}
// 								>
// 									Month
// 								</SelectorOpt>
// 							</SelectorOptCointainer>
// 							<SelectorIndicator
// 								isYearActive={isActive.year}
// 								isMonthActive={isActive.month}
// 							/>
// 						</Selector>
// 						{isActive.year && (
// 							<DateSelector_year>
// 								<Ul>
// 									<Li onClick={clickHandlerYear}>2018</Li>
// 									<Li onClick={clickHandlerYear}>2019</Li>
// 									<Li onClick={clickHandlerYear}>2020</Li>
// 								</Ul>
// 							</DateSelector_year>
// 						)}
// 						{isActive.month && (
// 							<DateSelector_month>
// 								<Ul>
// 									{months.map((month) => {
// 										return (
// 											<Li key={month} onClick={clickHandlerMonth}>
// 												{month}
// 											</Li>
// 										);
// 									})}
// 								</Ul>
// 							</DateSelector_month>
// 						)}
// 					</Body>
// 				</DateSelector>
// 			</Main>
// 			<Component {...pageProps} date={date} />
// 		</>
// 	);
// };

// export default DatePickerHoc;
