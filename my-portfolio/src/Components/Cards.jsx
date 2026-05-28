import React from "react";

export const Cards = ({ title, description, features }) => {
  return (
    <div
      className="
        w-full
        min-h-[420px]

        border border-accent/15
        rounded-2xl

        p-5
        sm:p-6
        lg:p-7

        bg-white/5
        backdrop-blur-2xl

        hover:border-accent/40
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all duration-300

        flex flex-col justify-between
      "
    >
      {/* Content */}
      <div>
        <h4
          className="
            text-white/90
            font-poppins
            font-semibold

            text-xl
            sm:text-2xl

            leading-snug
          "
        >
          {title}
        </h4>

        <p
          className="
            text-accent/80
            leading-7

            text-sm
            sm:text-base

            font-poppins
            mt-4

            text-justify
          "
        >
          {description}
        </p>
      </div>

      {/* Features */}
      <div className="mt-8">
        <p
          className="
            text-white
            text-lg
            font-medium
            tracking-wide
            mb-4
          "
        >
          Features
        </p>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className="
                text-white/70

                text-sm
                sm:text-base

                flex items-start
                gap-3

                leading-6
              "
            >
              <span className="text-accent mt-1 text-lg">•</span>

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
