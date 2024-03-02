import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center items-center bg-white pt-3 pb-3"
    >
      <div className=" w-3/4 p-4 text-center bg-teal-50 border border-gray-200 rounded-lg shadow sm:p-8">
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading1: ({ children }) => {
              return (
                <h1 className="mb-2 text-3xl font-bold text-gray-900">
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
          className="inline-flex items-center p-5 py-2 text-sm font-medium text-center text-white bg-teal-800 rounded-full hover:bg-teal-700 focus:outline-none"
        >
          {slice.primary.buttonlabel}
        </PrismicNextLink>
      </div>
    </section>
  );
};

export default CallToAction;
