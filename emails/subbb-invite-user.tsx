import {
	Body,
	Container,
	Column,
	Head,
	Heading,
	Html,
	Img,
	Link,
	Row,
	Section,
	Text,
	Tailwind,
	Preview,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.BASE_URL ? `https://${process.env.BASE_URL}` : "";

const buttonStyle = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: "8px",
	padding: "10px",
	height: "25px",
	width: "200px",
	margin: "5px auto",
};

interface SubbbInviteUserEmailProps {
	userImage?: string;
	SubbbClub?: string;
	discordLink?: string;
	slackLink?: string;
	whatsappLink?: string;
	telegramLink?: string;
}

export const SubbbInviteUserEmail = ({
	userImage,
	SubbbClub,
	discordLink,
	slackLink,
	whatsappLink,
	telegramLink,
}: SubbbInviteUserEmailProps) => {
	const previewText = `Welcome to ${SubbbClub} on Subbb!`;

	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>
			<Tailwind>
				<Body className="bg-white my-auto mx-auto font-sans px-2">
					<Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
						<Section>
							<Row>
								<Column align="right">
									<Img
										className="rounded-full"
										src={`${baseUrl}/static/subbb-logo.png`}
										width="64"
										height="64"
									/>
								</Column>
								<Column align="center">
									<Img
										src={`${baseUrl}/static/vercel-arrow.png`}
										width="12"
										height="9"
										alt="invited you to"
									/>
								</Column>
								<Column align="left">
									<Img
										className="rounded-full"
										src={userImage}
										width="64"
										height="64"
									/>
								</Column>
							</Row>
						</Section>
						<Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
							Welcome to <strong>{SubbbClub}</strong> on{" "}
							<Link
								href={`https://www.subbb.me/`}
								target="_blank"
								className="text-blue-600 no-underline"
							>
								<strong>Subbb.me</strong>
							</Link>{" "}
							👋
						</Heading>
						<Text className="text-black text-[14px] leading-[24px] text-center">
							Click on the links below to join the party! 🎉
						</Text>
						<Section className="text-center">
							<a
								style={{
									backgroundColor: "#5865F2",
									...buttonStyle,
									display: discordLink !== undefined ? "flex" : "none",
								}}
								href={discordLink}
								target="_blank"
							>
								<Img
									src={`${baseUrl}/static/discord-logo-white.png`}
									alt="Whatsapp"
									className="h-6"
								/>
							</a>

							<a
								style={{
									backgroundColor: "#611F69",
									...buttonStyle,
									display: slackLink !== undefined ? "flex" : "none",
								}}
								href={slackLink}
								target="_blank"
							>
								<Img
									src={`${baseUrl}/static/slack-logo-white.png`}
									alt="Whatsapp"
									className="h-6"
								/>
							</a>
							<a
								style={{
									backgroundColor: "#25D366",
									...buttonStyle,
									display: whatsappLink !== undefined ? "flex" : "none",
								}}
								href={whatsappLink}
								target="_blank"
							>
								<Img
									src={`${baseUrl}/static/whatsapp-logo-white.png`}
									alt="Whatsapp"
									className="h-6"
								/>
							</a>
							<a
								style={{
									backgroundColor: "#25a3e1",
									...buttonStyle,
									display: telegramLink !== undefined ? "flex" : "none",
								}}
								href={telegramLink}
								target="_blank"
							>
								<Img
									src={`${baseUrl}/static/telegram-logo-white.png`}
									alt="Telegram"
									className="h-5"
								/>
							</a>
						</Section>
						<Text className="text-black text-center text-[14px] leading-[24px]">
							Thanks for becoming part of the Subbb community!
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

SubbbInviteUserEmail.PreviewProps = {
	userImage: `${baseUrl}/static/jacob-subbb.jpeg`,
	SubbbClub: "Jacob's Dev Club",
	discordLink: "https://discord.com/invite/foo",
	telegramLink: "https://t.me/foo",
	whatsappLink: "https://wa.me/foo",
	slackLink: "https://slack.com/foo",
} as SubbbInviteUserEmailProps;

export default SubbbInviteUserEmail;
