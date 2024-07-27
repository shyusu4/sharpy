import React from 'react';
import {
  audreaManessis,
  dennisBargerstock,
  guadalupeDesimon,
  juleeRossignol,
  lareeMinton,
} from '@/assets/index';
import { TestimonialCard } from '@/components/index';

const Testimonials = () => {
  return (
    <section className="flex flex-col gap-10 items-center pb-32">
      <h2 className="text-4xl md:text-5xl font-semibold text-center w-96 md:w-1/4 lg:w-2/6">
        Our beloved clients share their Sharp experience
      </h2>
      <div className="flex gap-5 w-max">
        <TestimonialCard
          intent="pink"
          icon={<img src={audreaManessis.src} alt="Audrea Manessis" />}
          author="Audrea Manessis"
          review="“My POS was saying the disk space was almost full. Called tech support (hardly any wait time!) and she was able to fix the problem really quickly then proceeded to check the other two. Awesome service!”"
        />
        <TestimonialCard
          intent="lightPink"
          icon={<img src={dennisBargerstock.src} alt="Dennis Bargenstock" />}
          author="Dennis Bargerstock"
          review="“It was extremely helpful with getting my system connected and working. I don't know much about computer systems so he had his hands full. He was patient with me & explained everything very well.“"
        />
        <TestimonialCard
          intent="lightGreen"
          icon={<img src={guadalupeDesimon.src} alt="Guadalupe Desimon" />}
          author="Guadalupe Desimon"
          review="“My POS was saying the disk space was almost full. Called tech support (hardly any wait time!) and she was able to fix the problem really quickly then proceeded to check the other two. Awesome service!”"
        />
        <TestimonialCard
          intent="yellow"
          icon={<img src={juleeRossignol.src} alt="Julee Rossignol" />}
          author="Julee Rossignol"
          review="“One of the Best customer service & always available when needed. Amazing follow up and great team work.Sharp really has transformed the way we look at taking, track, & managing transactions.”"
        />
        <TestimonialCard
          intent="blue"
          icon={<img src={lareeMinton.src} alt="Laree Minton" />}
          author="Laree Minton"
          review="“My POS was saying the disk space was almost full. Called tech support (hardly any wait time!) and she was able to fix the problem really quickly then proceeded to check the other two. Awesome service!”"
        />
      </div>
    </section>
  );
};

export default Testimonials;
