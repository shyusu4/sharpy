import { cva, VariantProps } from 'class-variance-authority';

const accordionStyles = cva('collapse p-0', {
  variants: {
    intent: {
      primary:
        'collapse-arrow join-item border-b last:border-b-0 border-primary rounded-none',
      secondary:
        'collapse-plus border border-primary mb-4 shadow-solid bg-white',
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

interface AccordionProps extends VariantProps<typeof accordionStyles> {
  intent: 'primary' | 'secondary';
  items: {
    title: string;
    content: string;
  }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items, intent }) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className={`collapse ${accordionStyles({ intent })}`}>
          <input
            type="radio"
            name={`accordion-${intent}`}
            defaultChecked={index === 0}
          />
          <div className="collapse-title">
            <h3 className="text-xl font-bold py-5">{item.title}</h3>
          </div>
          <div className="collapse-content">
            <p className="text-base text-neutral-500 font-semibold">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
