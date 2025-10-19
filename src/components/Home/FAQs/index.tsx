import { Icon } from '@iconify/react';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ: React.FC = () => {
    return (
        <section id='faqs'>
            <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
                <div className="grid lg:grid-cols-2 gap-10 ">
                    <div className='lg:mx-0 mx-auto'>
                        <Image
                            src="/images/faqs/faq-image.png"
                            alt='image'
                            width={680}
                            height={644}
                            className='lg:w-full'
                            unoptimized={true}
                        />
                    </div>
                    <div className='lg:px-12'>
                        <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
                            <Icon icon="ph:house-simple-fill" className="text-2xl text-primary " />
                            FAQs
                        </p>
                        <h2 className='lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white'>
                            Everything about El Nour School
                        </h2>
                        <p className='text-dark/50 dark:text-white/50 pr-20'>
                            We know that choosing the right school for your child can be overwhelming. Here are some frequently asked questions to help guide you through the enrollment process
                        </p>
                        <div className="my-8">
                            <Accordion type="single" defaultValue="item-1" collapsible className="w-full flex flex-col gap-6">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>1. What programs does El Nour School offer?</AccordionTrigger>
                                    <AccordionContent>
                                        Discover a diverse range of academic programs, from elementary to advanced courses in STEM, Arts, Humanities, and more, tailored to your child&apos;s educational needs.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>2. How can I enroll my child at El Nour School?</AccordionTrigger>
                                    <AccordionContent>
                                        Visit our admissions office or contact us through our dashboard to begin the enrollment process. Our team will guide you through all necessary steps.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>3. What are the class sizes at El Nour School?</AccordionTrigger>
                                    <AccordionContent>
                                        We maintain small class sizes to ensure personalized attention for each student, with an average ratio of 20 students per teacher.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
