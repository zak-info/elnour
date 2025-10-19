import HeroSub from "@/components/shared/HeroSub";
import Appartment from "@/components/Properties/Appartment";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "STEM Program | El Nour School",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="STEM Program."
                description="Science, Technology, Engineering, and Mathematics excellence for future innovators."
                badge="Programs"
            />
            <Appartment />
        </>
    );
};

export default page;