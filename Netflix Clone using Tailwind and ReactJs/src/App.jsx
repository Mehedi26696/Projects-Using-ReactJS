import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import start from "./components/start.svg";
import { getImages } from "./components/product";
import { getImageURL } from "./components/utils";
import { getIcons } from "./components/icon";
import { getIconURL } from "./components/new";
import Cards from "./components/cards";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
	const [count, setCount] = useState(0);

	const products = getImages();
	const icons = getIcons();

	return (
		<>
			<div className="background p-[40px]">
				<Navbar />
				<div className="flex flex-col items-center p-[280px] text-white w-full">
					<h1 className="text-[40px] font-extrabold w-1/2 m-1">
						Unlimited movies,TV shows,and more
					</h1>
					<h2 className="font-bold text-2xl m-1">
						Starts at USD 2.99.Cancel anytime.
					</h2>
					<h3 className="text-xl m-1">
						Ready to watch? Enter your email to create or restart your
						membership
					</h3>
					<div className="flex w-[75%] m-3 h-16 gap-2">
						<input
							className="w-full border-[0.1px] border-gray-300 rounded-md bg-[#111010] opacity-80 px-5"
							type="text"
							placeholder="Email address"
						/>
						<div className="w-[30%] hover:bg-[#c11119] bg-[#e50914] text-white flex justify-center items-center rounded-md">
							<button className="flex ">
								<div>Get Started</div>
								<img
									src={start}
									alt=""
								/>
							</button>
						</div>
					</div>
            
				</div>
        <div class="absolute top-[100%] left-0 w-full h-[2px] bg-pink-500 rounded-[100%] rounded-bl-3xl rounded-br-3xl text-white"></div>
				<div className="p-0 m-0 text-white  ">
					<div className="font-bold text-3xl ml-24 ">Trending Now</div>
					<div className="scrollbar">
					<ul className="flex gap-10  py-8 ml-9 cursor-pointer">
						{products.map((product) => (
							<li key={product.id}>
								<img
									src={getImageURL(product.cover)}
									alt=""
								/>
								<div className=" top-[100%] ml-10 text-gray-300 text-[100px] translate-x-[-50%] translate-y-[-50%] ">
									{product.id}
								</div>
							</li>
						))}
					</ul>
					</div>
				</div>
				<div>
					<h1 className="text-white font-bold text-2xl ml-24">
						More Reasons to Join
					</h1>
					<div className="flex justify-center">
						<div className="flex  w-full ml-20">
							<Cards
								heading="Enjoy on your TV"
								desc="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
							/>
							<Cards
								heading="Download your shows to watch offline"
								desc="Save your favorites easily and always have something to watch."
							/>
							<Cards
								heading="Watch everywhere"
								desc="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
							/>
							<Cards
								heading="Create profiles for kids"
								desc="Send kids on adventures with their favorite characters in a space made just for them — free with your membership."
							/>
						</div>
						<div>
							<ul className="text-white flex  absolute top-[200%] left-[10%] justify-between w-[80%]">
								{icons.map((icon) => (
									<li key={icon.id}>
										<img
											className="w-1/5 flex ml-48"
											src={getIconURL(icon.lays)}
											alt=""
										/>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="text-white text-3xl font-bold ml-24">
						Frequently Asked Question
					</div>
					<div className="my-5 flex flex-col gap-3 ml-24 w-5/6">
						<Faq
							ques="What is Netflix?"
							hide1="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
							hide2="You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
						/>
						<Faq
							ques="How much does Netflix cost?"
							hide1="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts."
							hide2=""
						/>
						<Faq
							ques="Where I can watch?"
							hide1="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
							hide2="You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
						/>
						<Faq
							ques="How do I cancel?"
							hide1="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
							hide2=""
						/>
						<Faq
							ques="What can I watch on Netflix?"
							hide1="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
							hide2=""
						/>
						<Faq
							ques="Is Netflix good for kids?"
							hide1="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
							hide2="Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
						/>
					</div>

					<div className="flex flex-col justify-center items-center my-14">
						<h3 className="text-xl m-1 text-white ">
							Ready to watch? Enter your email to create or restart your
							membership
						</h3>
						<div className="flex w-1/2 m-3 h-16 gap-2 ">
							<input
								className="w-full border-[0.1px] border-gray-300 rounded-md bg-[#111010] opacity-80 px-5"
								type="text"
								placeholder="Email address"
							/>
							<div className="w-[30%] hover:bg-[#c11119] bg-[#e50914] text-white flex justify-center items-center rounded-md">
								<button className="flex ">
									<div>Get Started</div>
									<img
										src={start}
										alt=""
									/>
								</button>
							</div>
						</div>
						
					</div>
				<Footer/>
				 <button className="text-white ml-24 my-4 font-bold border border-gray-500 py-2 px-6 rounded-md">English</button>
				 <h1 className="text-gray-300 ml-24 m-4">Netflix Bangladesh</h1>
				  <h1><br /></h1>
				  <h1><br /></h1>
				</div>
			</div>
		</>
	);
}

export default App;
