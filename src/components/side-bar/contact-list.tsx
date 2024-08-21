import { HiOutlineMail } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbPhoneCalling } from "react-icons/tb";
import IconBox from "../icon-box";

import "@/styles/side-bar/contact-list.css";


const ContactsList: React.FC = () => {
	return (
		<ul className="contacts-list">
			<li className="contact-item">
				<IconBox icon={HiOutlineMail} />
				<div className="contact-info">
					<p className="contact-title">Email</p>
					<a
						href="mailto:hugo970217@gmail.com"
						className="contact-link"
					>
						hugo970217@gmail.com
					</a>
				</div>
			</li>

			<li className="contact-item">
				<IconBox icon={TbPhoneCalling} />
				<div className="contact-info">
					<p className="contact-title">Phone</p>
					<p className="contact-link">404 Not Found 📲</p>
				</div>
			</li>

			<li className="contact-item">
				<IconBox icon={IoCalendarOutline} />
				<div className="contact-info">
					<p className="contact-title">Birthday</p>
					<time dateTime="2002-01-27">Jan. 27, 2002 🐻</time>
				</div>
			</li>

			<li className="contact-item">
				<IconBox icon={MdOutlineLocationOn} />
				<div className="contact-info">
					<p className="contact-title">Location</p>
					<address>Taipei, Taiwan 🇹🇼</address>
				</div>
			</li>
		</ul>
	);
}

export default ContactsList;