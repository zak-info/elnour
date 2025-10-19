import HeroSub from "@/components/shared/HeroSub";
import OfficeSpace from "@/components/Properties/OfficeSpaces";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Arts & Culture Program | El Nour School",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Arts & Culture Program."
                description="Creative programs fostering artistic expression and cultural appreciation."
                badge="Programs"
            />
            <OfficeSpace />
        </>
    );
};

export default page;