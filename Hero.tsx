import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <>
      {slice.variation === "default" && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="flex justify-center items-center bg-white pt-3 pb-3"
        >
          <div className=" w-3/4 p-4 flex flex-col justify-center items-center text-center bg-white sm:p-8">
            <PrismicRichText
              field={slice.primary.heading}
              components={{
                heading1: ({ children }) => {
                  return (
                    <h1 className="mb-6 text-6xl font-semibold text-gray-900">
                      {children}
                    </h1>
                  );
                },
              }}
            />
            <PrismicRichText
              field={slice.primary.paragraph}
              components={{
                paragraph: ({ children }) => {
                  return (
                    <p className="mb-5 text-base text-gray-500 sm:text-lg">
                      {children}
                    </p>
                  );
                },
              }}
            />
            <PrismicNextLink
              field={slice.primary.buttonlink}
              className="inline-flex items-center p-5 py-2 mb-2 text-sm font-medium text-center text-white bg-teal-800 rounded-full hover:bg-teal-700 focus:outline-none"
            >
              {slice.primary.buttonlabel}
            </PrismicNextLink>
            <PrismicNextImage
              field={slice.primary.picture}
              className="mt-6 mb-6 border-gray-200 rounded-lg shadow sm:mt-10"
            />
          </div>
        </section>
      )}
      {slice.variation === "heroSmart" && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="flex justify-center items-center bg-white pt-3 pb-3"
        >
          <div className="w-4/5 flex justify-center items-center flex-col-reverse sm:flex-row">
            <div className="p-4 items-left text-left bg-white sm:p-8">
              <PrismicRichText
                field={slice.primary.heading}
                components={{
                  heading1: ({ children }) => {
                    return (
                      <h1 className="mb-6 text-6xl font-semibold text-gray-900">
                        {children}
                      </h1>
                    );
                  },
                }}
              />
              <PrismicRichText
                field={slice.primary.paragraph}
                components={{
                  paragraph: ({ children }) => {
                    return (
                      <p className="mb-5 text-base text-gray-500 sm:text-lg">
                        {children}
                      </p>
                    );
                  },
                }}
              />
              <PrismicNextLink
                field={slice.primary.buttonlink}
                className="items-left p-5 py-2 mb-2 text-sm font-medium text-white bg-teal-800 rounded-full hover:bg-teal-700 focus:outline-none"
              >
                {slice.primary.buttonlabel}
              </PrismicNextLink>
            </div>
            <PrismicNextImage
              field={slice.primary.picture}
              className="mt-6 mb-6 border-gray-200 rounded-lg shadow sm:mt-10"
            />
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
