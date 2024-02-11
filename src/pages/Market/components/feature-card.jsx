import RatingStars from "@/components/ui/rating-stars";
import { cn } from "@/lib/utils";
import React from "react";

const FeatureCard = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col cursor-pointer", className)}
        {...props}
    />
))
FeatureCard.displayName = "FeatureCard"

const FeatureCardHeader = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("relative", className)}
        {...props}
    />
))
FeatureCardHeader.displayName = "FeatureCardHeader"

const FeatureCardImage = React.forwardRef(({ className, src, ...props }, ref) => (
    <img
        ref={ref}
        src={src}
        className={cn("aspect-[4/2.8] object-cover rounded-lg shadow-md h-64", className)}
        {...props}
    />
))
FeatureCardImage.displayName = "FeatureCardImage"

const FeatureCardRating = React.forwardRef(({ className, rating, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("absolute top-2 left-2 p-1 flex justify-center items-center bg-white rounded-full w-fit px-2 shadow-md", className)}
    {...props}>
    <RatingStars rating={rating} />
  </div>
));
FeatureCardRating.displayName = "FeatureCardRating";

const FeatureCardReviews = React.forwardRef(({ className, reviews ,...props }, ref) => (
    <div
        ref={ref}
        className={cn("absolute bottom-2 left-2 flex justify-center items-center bg-white rounded-full w-fit shadow-md",className)}
        {...props} >
        <span className="text-xs font-semibold bg-brand-secondary text-brand-primary rounded-full px-2 py-1">
            {reviews} Reviews
        </span>
    </div>
))

FeatureCardReviews.displayName = "FeatureCardReviews"

const FeatureCardFooter = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("pt-4",className)}
        {...props} />
))
FeatureCardFooter.displayName = "FeatureCardFooter"

const FeatureCardTitle = React.forwardRef(({ className, children ,...props }, ref) => (
    <div
        ref={ref}
        className={cn("",className)}
        {...props} >
        {children}
    </div>
))

FeatureCardTitle.displayName = "FeatureCardTitle"

const FeatureCardDescription = React.forwardRef(({ className, children ,...props }, ref) => (
    <div
        ref={ref}
        className={cn("",className)}
        {...props} >
        {children}
    </div>
))

FeatureCardDescription.displayName = "FeatureCardDescription"

export {
    FeatureCard,
    FeatureCardHeader,
    FeatureCardImage,
    FeatureCardRating,
    FeatureCardReviews,
    FeatureCardFooter,
    FeatureCardTitle,
    FeatureCardDescription
}