import HeroSub from "@/components/shared/HeroSub";
import LuxuryVillas from "@/components/Properties/LuxuryVilla";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Secondary Program | El Nour School",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Secondary Program."
                description="Advanced curriculum and comprehensive education for secondary students preparing for higher education."
                badge="Programs"
            />
            <LuxuryVillas />
        </>
    );
};

export default page;