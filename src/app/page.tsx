import {
	HeroSection,
	PartnersSection,
	WhyChooseUsSection,
	HowItWorksSection,
	RoadmapSection,
	FaqSection,
} from "@/components/04-templates";

export default function Home() {
	return (
		<main className="flex h-full w-full flex-col items-center justify-center">
			<HeroSection />
			<PartnersSection />
			<WhyChooseUsSection />
			<HowItWorksSection />
			<RoadmapSection />
			<FaqSection />
		</main>
	);
}
