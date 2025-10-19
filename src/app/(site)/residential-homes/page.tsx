import HeroSub from "@/components/shared/HeroSub";
import ResidentialList from "@/components/Properties/Residential";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Elementary Program | El Nour School",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Elementary Program."
                description="Building strong foundations with comprehensive elementary education designed for young learners."
                badge="Programs"
            />
            <ResidentialList />
        </>
    );
};

export default page;