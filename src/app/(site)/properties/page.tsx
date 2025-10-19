import HeroSub from "@/components/shared/HeroSub";
import PropertiesListing from "@/components/Properties/PropertyList";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Courses & Programs | El Nour School",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Discover inspiring learning programs."
                description="Experience excellence in education with our comprehensive courses and programs, designed for academic success."
                badge="Courses & Programs"
            />
            <PropertiesListing />
        </>
    );
};

export default page;
