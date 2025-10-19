import BlogList from "@/components/Blog";
import HeroSub from "@/components/shared/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "Educational Insights | El Nour School",
};

const Blog = () => {
    return (
        <>
            <HeroSub
                title="Educational insights."
                description="Stay ahead in education with expert advice, teaching tips, and academic updates."
                badge="Blog"
            />
            <BlogList />
        </>
    );
};

export default Blog;
