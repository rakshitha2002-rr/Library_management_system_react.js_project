import Blog from "@/components/blog/Blog";
import Features from "@/components/features/Features";
import Hero from "@/components/hero/Hero";
import HomeBooks from "@/components/homeBooks/HomeBooks";
import States from "@/components/states/States";
import CountUpComponents from '@/components/states/CountUpComponents';
import BookCategories from '@/pages/BookCategories';
import Contactsection from '@/components/blog/Contactsection';

export const Home = () => {
    return (
        <div className="">
            <Hero />
            <Features />
            <BookCategories />
            <HomeBooks />
            <States />
            <CountUpComponents />
            <Blog />
            <Contactsection />
        </div>
    );
};

