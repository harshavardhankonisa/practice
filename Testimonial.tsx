import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Testimonial`.
 */
export type TestimonialProps = SliceComponentProps<Content.TestimonialSlice>;

/**
 * Component for "Testimonial" Slices.
 */
const Testimonial = ({ slice }: TestimonialProps): JSX.Element => {
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
        <div className="w-3/4 grid mb-8 md:mb-12 md:grid-cols-3 bg-white">
          {slice.items.map((testimonial, index) => (
            <div key={index}>
              <figure className="m-3 rounded-lg shadow-md flex flex-col p-8 bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                  <h3 className="text-lg font-semibold text-gray-900">
                    <PrismicRichText field={testimonial.heading} />
                  </h3>
                  <p className="my-4">
                    <PrismicRichText field={testimonial.paragraph} />
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-normal ">
                  <PrismicNextImage
                    field={testimonial.userpicture}
                    className="rounded-full w-9 h-9"
                  />
                  <div className="space-y-0.5 font-medium ms-3">
                    <div>{testimonial.username}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.useraffiliation}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
