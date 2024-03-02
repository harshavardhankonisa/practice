import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  return (
    <>
      {slice.variation === "default" && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="flex justify-center items-center bg-white pt-3 pb-3"
        >
          <div className="w-3/4 flex justify-center items-center flex-col sm:flex-row">
            <PrismicNextImage
              field={slice.primary.image}
              className="mt-6 border-gray-200 rounded-lg shadow sm:mt-10"
            />
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
            </div>
          </div>
        </section>
      )}
      {slice.variation === "textWithImageVariation" && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="flex justify-center items-center bg-white pt-3 pb-3"
        >
          <div className="w-3/4 flex justify-center items-center flex-col-reverse sm:flex-row">
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
            </div>
            <PrismicNextImage
              field={slice.primary.image}
              className="mt-6 border-gray-200 rounded-lg shadow sm:mt-10"
            />
          </div>
        </section>
      )}
    </>
  );
};

export default TextWithImage;
