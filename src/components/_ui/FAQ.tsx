import { cva, VariantProps } from 'class-variance-authority';

const faqStyles = cva('collapse max-w-xl', {
  variants: {
    intent: {
      primary: 'collapse-arrow join-item border-b border-primary rounded-none',
      secondary:
        'collapse-plus border border-primary mb-4 shadow-solid bg-white',
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

interface FAQProps extends VariantProps<typeof faqStyles> {
  intent: 'primary' | 'secondary';
  items: {
    title: string;
    content: string;
  }[];
}

export const FAQ: React.FC<FAQProps> = ({ items, intent }) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className={`collapse ${faqStyles({ intent })}`}>
          <input
            type="radio"
            name={`faq-${intent}`}
            defaultChecked={index === 0}
          />
          <div className="collapse-title">
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </div>
          <div className="collapse-content max-w-sm md:max-w-lg">
            <p className="text-base text-neutral-500">{item.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};
