import {
	HeroSection,
	PartnersSection,
	WhyChooseUsSection,
} from "@/components/04-templates";

export default function Home() {
	return (
		<main className="flex h-full w-full flex-col items-center justify-center">
			<HeroSection />
			<PartnersSection />
			<WhyChooseUsSection />
		</main>
	);
}
