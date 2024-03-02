import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="items-center bg-white pt-3 pb-3"
    >
      <div className="flex items-center justify-center pt-4 pb-4">
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading1: ({ children }) => {
              return (
                <h1 className="mb-2 text-3xl font-semibold text-gray-900">
                  {children}
                </h1>
              );
            },
          }}
        />
      </div>
      <div className="flex items-center justify-center bg-white pt-4 pb-4">
        <div className="w-3/4 grid mb-8 md:mb-12 md:grid-cols-4 bg-white">
          {slice.items.map((testimonial, index) => (
            <div key={index}>
              <figure className="m-3 flex flex-col p-8 bg-white">
                <PrismicNextImage
                  field={testimonial.icon}
                  className="rounded-lg w-24 h-24"
                />
                <blockquote className="max-w-2xl my-2 mx-auto mb-4 text-gray-500 lg:mb-8">
                  <h3 className="text-lg font-semibold text-gray-900">
                    <PrismicRichText field={testimonial.heading} />
                  </h3>
                  <p className="my-1">
                    <PrismicRichText field={testimonial.paragraph} />
                  </p>
                </blockquote>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
